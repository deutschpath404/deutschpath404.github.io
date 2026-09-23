(function () {
  function tx(key, fallback) {
    return (window.DeutschPathI18n && window.DeutschPathI18n.t(key)) || fallback;
  }

  var LOCAL_NOTE =
    "This form is working, but it is not connected to the DeutschPath inbox yet, so your request has not been sent. Your answers are saved only in this browser.";

  document.querySelectorAll("[data-form]").forEach(function (form) {
    var dateInput = form.querySelector('input[type="date"]');
    if (dateInput) dateInput.min = localToday();

    var params = new URLSearchParams(window.location.search);
    var level = params.get("level");
    if (level === "bachelors" || level === "masters") {
      var radio = form.querySelector('input[name="level"][value="' + (level === "bachelors" ? "Bachelor's" : "Master's") + '"]');
      if (radio) radio.checked = true;
    }
    var topicNote = document.getElementById("topic-note");
    if (topicNote && params.get("topic") === "universities") {
      topicNote.hidden = false;
    }

    form.addEventListener("input", function (event) {
      var field = event.target.closest(".field");
      if (!field) return;
      field.classList.remove("is-invalid");
      var error = field.querySelector(".field-error");
      if (error) error.textContent = "";
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm(form);
    });
  });

  async function submitForm(form) {
    var summary = form.querySelector("[data-form-summary]");
    var button = form.querySelector('[type="submit"]');
    var label = button ? button.querySelector(".btn-label") : null;
    if (summary) summary.textContent = "";

    if (form.dataset.submitting === "true") return;

    var honeypot = form.querySelector('[name="company_website"]');
    if (honeypot && honeypot.value.trim()) {
      showSuccess(form, true);
      showToast(tx("form.sent", "Thank you. Your request has been received."), "success");
      return;
    }

    var errors = validate(form);
    if (errors.length) {
      errors.forEach(function (item) {
        var field = item.input.closest(".field");
        if (!field) return;
        field.classList.add("is-invalid");
        var slot = field.querySelector(".field-error");
        if (slot) slot.textContent = item.message;
        item.input.setAttribute("aria-invalid", "true");
      });
      if (summary) summary.textContent = tx("form.required", "Please check the highlighted fields.");
      showToast(tx("form.required", "Please check the highlighted fields."), "error");
      errors[0].input.focus();
      return;
    }

    form.querySelectorAll("[aria-invalid]").forEach(function (input) {
      input.removeAttribute("aria-invalid");
    });

    var fields = collect(form);
    form.dataset.submitting = "true";
    if (button) {
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
    }
    if (label) label.textContent = tx("form.sending", "Sending…");

    try {
      var result = await window.DeutschPathAPI.submit(form.getAttribute("data-form"), fields);
      showSuccess(form, result.delivered);
      if (result.delivered) {
        showToast(tx("form.sent", "Thank you. Your request has been received."), "success");
      } else {
        showToast(LOCAL_NOTE, "error");
      }
    } catch (error) {
      var failMsg = tx("form.error", "We couldn’t send your request. Check your connection and try again.");
      if (summary) summary.textContent = failMsg;
      showToast(failMsg, "error");
      if (button) {
        button.disabled = false;
        button.removeAttribute("aria-busy");
      }
      if (label) label.textContent = tx("form.submit", form.getAttribute("data-label") || "Submit");
      form.dataset.submitting = "false";
    }
  }

  function showSuccess(form, delivered) {
    var success = document.getElementById(form.getAttribute("data-success-target"));
    if (!success) return;
    var text = success.querySelector("[data-success-text]");
    var note = success.querySelector("[data-success-note]");
    var official = form.getAttribute("data-success") || tx("form.sent", "Thank you. Your request has been received.");
    if (delivered) {
      if (text) text.textContent = official;
      if (note) note.hidden = true;
    } else {
      if (text) text.textContent = LOCAL_NOTE;
      if (note) {
        note.hidden = false;
        note.textContent = "When the inbox is connected, this page will confirm delivery with: “" + official + "”";
      }
    }
    form.hidden = true;
    success.hidden = false;
    var heading = success.querySelector("h2");
    if (heading) heading.focus();
  }

  function showToast(message, type) {
    var host = document.querySelector(".dp-toasts");
    if (!host) {
      host = document.createElement("div");
      host.className = "dp-toasts";
      host.setAttribute("aria-live", "polite");
      host.setAttribute("aria-relevant", "additions");
      document.body.appendChild(host);
    }

    var toast = document.createElement("div");
    toast.className = "dp-toast dp-toast--" + (type === "error" ? "error" : "success");
    toast.setAttribute("role", type === "error" ? "alert" : "status");

    var text = document.createElement("p");
    text.className = "dp-toast-text";
    text.textContent = message;

    var close = document.createElement("button");
    close.type = "button";
    close.className = "dp-toast-close";
    close.setAttribute("aria-label", "Dismiss");
    close.innerHTML = "&times;";

    toast.appendChild(text);
    toast.appendChild(close);
    host.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add("is-in");
    });

    var hideTimer = window.setTimeout(function () { dismiss(); }, 5200);

    function dismiss() {
      window.clearTimeout(hideTimer);
      toast.classList.remove("is-in");
      toast.classList.add("is-out");
      window.setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
        if (host && !host.children.length && host.parentNode) host.parentNode.removeChild(host);
      }, 220);
    }

    close.addEventListener("click", dismiss);
  }

  function collect(form) {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (element) {
      if (!element.name || element.type === "submit" || element.name === "company_website") return;
      if ((element.type === "radio" || element.type === "checkbox") && !element.checked) return;
      data[element.name] = element.value.trim();
    });
    return data;
  }

  function validate(form) {
    var errors = [];
    Array.prototype.forEach.call(form.elements, function (element) {
      if (!element.name || element.type === "submit" || element.name === "company_website") return;
      if (element.type === "radio") {
        if (!element.required || element.dataset.groupChecked) return;
        var group = form.querySelectorAll('input[name="' + element.name + '"]');
        var checked = Array.prototype.some.call(group, function (item) { return item.checked; });
        Array.prototype.forEach.call(group, function (item) { item.dataset.groupChecked = "yes"; });
        if (!checked) errors.push({ input: element, message: tx("form.required", "Select one option.") });
        return;
      }
      var value = element.value.trim();
      if (element.required && !value) {
        errors.push({ input: element, message: tx("form.required", "This field is required.") });
        return;
      }
      if (!value) return;
      if (element.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.push({ input: element, message: tx("form.required", "Enter a valid email address.") });
      }
      if (element.type === "tel" && value.replace(/\D/g, "").length < 8) {
        errors.push({ input: element, message: tx("form.required", "Enter a phone number with at least 8 digits.") });
      }
      if (element.type === "date" && value < localToday()) {
        errors.push({ input: element, message: tx("form.required", "Choose today or a later date.") });
      }
      if (element.maxLength > 0 && value.length > element.maxLength) {
        errors.push({ input: element, message: tx("form.required", "Please shorten this answer.") });
      }
    });
    form.querySelectorAll("input[data-group-checked]").forEach(function (input) {
      input.removeAttribute("data-group-checked");
    });
    return errors;
  }

  function localToday() {
    var now = new Date();
    var local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }
})();
