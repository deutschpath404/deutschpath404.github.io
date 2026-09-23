/**
 * Lead delivery adapter.
 * Pages should call DeutschPathAPI.submit() and never embed vendor SDKs.
 */
(function () {
  var STORAGE_KEY = "deutschpath.leads";

  function endpointFor(type) {
    var api = (window.DEUTSCHPATH && window.DEUTSCHPATH.api) || {};
    if (type === "contact") return api.contactEndpoint || api.consultationEndpoint || "";
    return api.consultationEndpoint || "";
  }

  function googleFormFor(type) {
    var forms = (window.DEUTSCHPATH && window.DEUTSCHPATH.googleForms) || {};
    return forms[type] || null;
  }

  function readLocal() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveLocal(record) {
    var leads = readLocal();
    leads.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  }

  function createId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return "lead-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function setEntry(params, entryId, value) {
    if (!entryId || value == null) return;
    var text = String(value).trim();
    if (!text) return;
    params.set("entry." + entryId, text);
  }

  function buildGoogleBody(config, fields) {
    var entries = config.entries || {};
    var params = new URLSearchParams();

    setEntry(params, entries.fullName, fields.fullName);
    setEntry(params, entries.email, fields.email);
    setEntry(params, entries.phone, fields.phone);
    setEntry(params, entries.country, fields.country);
    setEntry(params, entries.level, fields.level);
    setEntry(params, entries.intendedField, fields.intendedField);
    setEntry(params, entries.qualification, fields.qualification);
    setEntry(params, entries.cgpa, fields.cgpa);
    setEntry(params, entries.intake, fields.intake);
    setEntry(params, entries.message, fields.message);

    var english = fields.englishTest || "";
    var englishChoices = config.englishChoices || [];
    if (english && entries.englishTest) {
      if (englishChoices.indexOf(english) !== -1) {
        params.set("entry." + entries.englishTest, english);
      } else {
        params.set("entry." + entries.englishTest, "__other_option__");
        params.set("entry." + entries.englishTest + ".other_option_response", english);
      }
    }

    if (fields.preferredDate && entries.preferredDate) {
      var parts = String(fields.preferredDate).split("-");
      if (parts.length === 3) {
        params.set("entry." + entries.preferredDate + "_year", parts[0]);
        params.set("entry." + entries.preferredDate + "_month", String(Number(parts[1])));
        params.set("entry." + entries.preferredDate + "_day", String(Number(parts[2])));
      }
    }

    if (fields.preferredTime && entries.preferredTime) {
      var clock = String(fields.preferredTime).split(":");
      if (clock.length >= 2) {
        params.set("entry." + entries.preferredTime + "_hour", String(Number(clock[0])));
        params.set("entry." + entries.preferredTime + "_minute", String(Number(clock[1])));
      }
    }

    return params;
  }

  function submitGoogleForm(config, fields) {
    if (!config || !config.action) return Promise.resolve(false);
    var body = buildGoogleBody(config, fields);

    return new Promise(function (resolve) {
      var frameName = "dp-gform-" + Date.now();
      var iframe = document.createElement("iframe");
      iframe.name = frameName;
      iframe.title = "Form submission";
      iframe.setAttribute("aria-hidden", "true");
      iframe.style.cssText = "position:absolute;width:0;height:0;border:0;visibility:hidden";

      var form = document.createElement("form");
      form.method = "POST";
      form.action = config.action;
      form.target = frameName;
      form.acceptCharset = "UTF-8";
      form.style.display = "none";

      body.forEach(function (value, key) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(iframe);
      document.body.appendChild(form);

      var done = false;
      function finish(ok) {
        if (done) return;
        done = true;
        window.clearTimeout(timer);
        if (form.parentNode) form.parentNode.removeChild(form);
        if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        resolve(ok);
      }

      var timer = window.setTimeout(function () { finish(true); }, 1800);
      iframe.addEventListener("load", function () { finish(true); });

      try {
        form.submit();
      } catch (error) {
        finish(false);
      }
    });
  }

  async function submitJson(endpoint, record) {
    var response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(record)
    });
    if (!response.ok) {
      var httpError = new Error("http");
      httpError.status = response.status;
      throw httpError;
    }
    return true;
  }

  async function submit(type, fields) {
    var record = {
      id: createId(),
      type: type,
      submittedAt: new Date().toISOString(),
      source: "deutschpath-web",
      fields: fields
    };
    var endpoint = endpointFor(type);
    var google = googleFormFor(type);
    var delivered = false;

    try {
      if (google && google.action) {
        delivered = await submitGoogleForm(google, fields) || delivered;
      }
      if (endpoint) {
        delivered = (await submitJson(endpoint, record)) || delivered;
      }
    } catch (error) {
      if (!delivered) {
        var networkError = new Error("network");
        networkError.cause = error;
        throw networkError;
      }
    }

    if (!delivered) {
      saveLocal(record);
      return { ok: true, delivered: false, id: record.id };
    }

    saveLocal(record);
    return { ok: true, delivered: true, id: record.id };
  }

  window.DeutschPathAPI = {
    submit: submit,
    readLocal: readLocal
  };
})();
