(function () {
  var grid = document.getElementById("directory-grid");
  if (!grid) return;

  var form = document.getElementById("directory-filters");
  var empty = document.getElementById("directory-empty");
  var count = document.getElementById("directory-count");
  var dialog = document.getElementById("program-dialog");
  var dialogBody = document.getElementById("program-dialog-content");
  var records = (window.DPData && window.DPData.universities) || null;

  if (!records) {
    grid.innerHTML = '<p class="state-message">The directory could not be loaded.</p>';
    grid.setAttribute("aria-busy", "false");
    return;
  }

  var filters = [
    ["level", "Study level"],
    ["field", "Field"],
    ["type", "University type"],
    ["language", "Language"],
    ["location", "Location"],
    ["route", "Application route"],
    ["vpd", "VPD"],
    ["deadlineKey", "Deadline"]
  ];

  if (form) {
    filters.forEach(function (pair) {
      var select = form.querySelector('[data-filter="' + pair[0] + '"]');
      if (!select) return;
      unique(records, pair[0]).forEach(function (value) {
        var option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
    });
    form.addEventListener("change", render);
    form.addEventListener("reset", function () {
      window.setTimeout(render, 0);
    });
  }

  if (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.querySelectorAll("[data-close-dialog]").forEach(function (button) {
      button.addEventListener("click", function () {
        dialog.close();
      });
    });
  }

  render();

  function render() {
    var active = currentFilters();
    var visible = records.filter(function (record) {
      return active.every(function (pair) {
        return !pair[1] || record[pair[0]] === pair[1];
      });
    });

    grid.setAttribute("aria-busy", "false");
    grid.innerHTML = visible.map(card).join("");
    if (empty) empty.hidden = visible.length !== 0;
    if (count) {
      var noun = visible.length === 1 ? "sample program" : "sample programs";
      count.textContent = visible.length
        ? "Showing " + visible.length + " " + noun + ". These are not real listings."
        : "No sample programs match these filters.";
    }

    grid.querySelectorAll("[data-program]").forEach(function (button) {
      button.addEventListener("click", function () {
        var record = records.find(function (item) { return item.id === button.getAttribute("data-program"); });
        if (record) openProgram(record);
      });
    });
  }

  function openProgram(record) {
    if (!dialog || !dialogBody) return;
    var requirements = (record.requirements || []).map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");
    dialogBody.innerHTML =
      '<p class="mock-tag">Mock data</p>' +
      '<h2 id="program-dialog-title">' + escapeHtml(record.program) + "</h2>" +
      '<p class="dialog-uni">' + escapeHtml(record.name) + " · " + escapeHtml(record.city) + "</p>" +
      "<p>" + escapeHtml(record.summary) + "</p>" +
      '<dl class="meta-list">' +
      row("Degree", record.degree) +
      row("Study level", record.level) +
      row("Field", record.field) +
      row("University type", record.type) +
      row("Language", record.language) +
      row("Application route", record.route) +
      row("VPD", record.vpd) +
      row("Deadline", record.deadline) +
      row("Location", record.location) +
      "</dl>" +
      "<h3>What to verify</h3>" +
      "<ul>" + requirements + "</ul>" +
      '<p class="fine-print">Sample record for the directory interface. It is not a DeutschPath listing, a partnership, or an official university page.</p>';
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function card(record) {
    return (
      '<article class="uni-card">' +
      '<p class="mock-tag">Mock data</p>' +
      "<h3>" + escapeHtml(record.name) + "</h3>" +
      '<p class="uni-city">' + escapeHtml(record.city) + "</p>" +
      '<p class="uni-program">' + escapeHtml(record.program) + "</p>" +
      '<dl class="meta-list">' +
      row("Degree", record.degree) +
      row("Language", record.language) +
      row("Application route", record.route) +
      row("Deadline", record.deadline) +
      "</dl>" +
      '<button class="btn btn-secondary" type="button" data-program="' + escapeHtml(record.id) + '">View Program</button>' +
      "</article>"
    );
  }

  function row(label, value) {
    return "<div><dt>" + escapeHtml(label) + "</dt><dd>" + escapeHtml(value || "Not specified") + "</dd></div>";
  }

  function currentFilters() {
    if (!form) return [];
    return filters.map(function (pair) {
      var select = form.querySelector('[data-filter="' + pair[0] + '"]');
      return [pair[0], select ? select.value : ""];
    });
  }

  function unique(list, key) {
    var values = [];
    list.forEach(function (item) {
      if (item[key] && values.indexOf(item[key]) === -1) values.push(item[key]);
    });
    return values.sort();
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }
})();
