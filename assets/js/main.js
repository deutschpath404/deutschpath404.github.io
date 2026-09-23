(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("animateMotion").forEach(function (node) { node.remove(); });
  }

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    if (!toggle || !nav) return;
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var label = toggle.querySelector(".sr-only");
    if (label) {
      var i18n = window.DeutschPathI18n;
      if (i18n) label.textContent = i18n.t(open ? "ui.closeMenu" : "ui.openMenu");
      else label.textContent = open ? "Close menu" : "Open menu";
    }
    if (open) {
      var first = nav.querySelector("a");
      if (first) first.focus();
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("nav-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (!document.body.classList.contains("nav-open")) return;
      if (event.key === "Escape") {
        setMenu(false);
        toggle.focus();
        return;
      }
      if (event.key !== "Tab") return;
      var nodes = [toggle].concat(Array.prototype.slice.call(nav.querySelectorAll("a")));
      var first = nodes[0];
      var last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1280) setMenu(false);
    });
  }

  var contact = (window.DEUTSCHPATH && window.DEUTSCHPATH.contact) || {};

  function fillContact() {
    var i18n = window.DeutschPathI18n;
    var pending = i18n ? i18n.t("contact.pending") : "To be published";
    document.querySelectorAll("[data-contact]").forEach(function (el) {
      var key = el.getAttribute("data-contact");
      var value = contact[key];
      if (!value) {
        el.textContent = pending;
        el.classList.add("is-pending");
        return;
      }
      el.classList.remove("is-pending");
      if (key === "email") {
        el.replaceChildren(link("mailto:" + value, value));
        return;
      }
      if (key === "phone") {
        el.replaceChildren(link("tel:" + value.replace(/\s/g, ""), value));
        return;
      }
      if (key === "whatsapp") {
        var digits = value.replace(/\D/g, "");
        if (digits.length === 11 && digits.charAt(0) === "0") digits = "88" + digits;
        var anchor = link("https://wa.me/" + digits, value);
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        el.replaceChildren(anchor);
        return;
      }
      el.textContent = value;
    });
  }

  fillContact();
  document.addEventListener("deutschpath:lang", fillContact);

  document.querySelectorAll("[data-social]").forEach(function (el) {
    var key = el.getAttribute("data-social");
    var url = contact.social && contact.social[key];
    if (!url) {
      el.classList.add("is-pending");
      el.title = "Link to be published";
      return;
    }
    var anchor = link(url, el.textContent);
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    el.replaceWith(anchor);
  });

  function waHref(raw) {
    var digits = String(raw || "").replace(/\D/g, "");
    if (digits.length === 11 && digits.charAt(0) === "0") digits = "88" + digits;
    return digits ? "https://wa.me/" + digits : "";
  }

  function waLabel() {
    return (window.DeutschPathI18n && window.DeutschPathI18n.t("ui.whatsapp")) || "WhatsApp";
  }

  function tUi(key, fallback) {
    return (window.DeutschPathI18n && window.DeutschPathI18n.t(key)) || fallback;
  }

  var leaveModal = null;
  var leaveContinue = null;
  var leavePendingUrl = "";

  function ensureLeaveModal() {
    if (leaveModal) return leaveModal;

    leaveModal = document.createElement("div");
    leaveModal.className = "leave-modal";
    leaveModal.hidden = true;
    leaveModal.setAttribute("role", "dialog");
    leaveModal.setAttribute("aria-modal", "true");
    leaveModal.setAttribute("aria-labelledby", "leave-modal-title");
    leaveModal.innerHTML =
      '<div class="leave-modal-backdrop" data-leave-dismiss></div>' +
      '<div class="leave-modal-panel">' +
      '<p class="leave-modal-kicker" data-leave-kicker>WhatsApp</p>' +
      '<h2 id="leave-modal-title" data-leave-title>Leaving this site?</h2>' +
      '<p class="leave-modal-body" data-leave-body>You are about to leave DeutschPath and open WhatsApp. Do you want to continue?</p>' +
      '<div class="leave-modal-actions">' +
      '<button type="button" class="btn btn-secondary" data-leave-dismiss data-leave-stay>Stay here</button>' +
      '<a class="btn btn-primary" data-leave-continue href="#" target="_blank" rel="noopener noreferrer">Continue to WhatsApp</a>' +
      "</div></div>";

    document.body.appendChild(leaveModal);
    leaveContinue = leaveModal.querySelector("[data-leave-continue]");

    leaveModal.addEventListener("click", function (event) {
      if (event.target.closest("[data-leave-dismiss]")) closeLeaveModal();
    });

    leaveContinue.addEventListener("click", function () {
      closeLeaveModal();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && leaveModal && !leaveModal.hidden) {
        closeLeaveModal();
      }
    });

    document.addEventListener("deutschpath:lang", syncLeaveModalCopy);
    syncLeaveModalCopy();
    return leaveModal;
  }

  function syncLeaveModalCopy() {
    if (!leaveModal) return;
    var kicker = leaveModal.querySelector("[data-leave-kicker]");
    var title = leaveModal.querySelector("[data-leave-title]");
    var body = leaveModal.querySelector("[data-leave-body]");
    var stay = leaveModal.querySelector("[data-leave-stay]");
    if (kicker) kicker.textContent = tUi("ui.whatsapp", "WhatsApp");
    if (title) title.textContent = tUi("ui.leaveTitle", "Leaving this site?");
    if (body) {
      body.textContent = tUi(
        "ui.leaveBody",
        "You are about to leave DeutschPath and open WhatsApp. Do you want to continue?"
      );
    }
    if (stay) stay.textContent = tUi("ui.leaveStay", "Stay here");
    if (leaveContinue) {
      leaveContinue.textContent = tUi("ui.leaveContinue", "Continue to WhatsApp");
    }
  }

  function openLeaveModal(url) {
    if (!url) return;
    ensureLeaveModal();
    leavePendingUrl = url;
    leaveContinue.href = url;
    syncLeaveModalCopy();
    leaveModal.hidden = false;
    document.body.classList.add("leave-modal-open");
    var stay = leaveModal.querySelector("[data-leave-stay]");
    if (stay) stay.focus();
  }

  function closeLeaveModal() {
    if (!leaveModal) return;
    leaveModal.hidden = true;
    document.body.classList.remove("leave-modal-open");
    leavePendingUrl = "";
  }

  function bindLeaveConfirm(el) {
    if (!el || el.dataset.leaveBound === "true") return;
    el.dataset.leaveBound = "true";
    el.addEventListener("click", function (event) {
      var href = el.getAttribute("href") || "";
      if (!href || href === "#" || href.indexOf("wa.me") === -1) return;
      event.preventDefault();
      openLeaveModal(href);
    });
  }

  document.querySelectorAll("[data-whatsapp-link]").forEach(function (el) {
    if (!contact.whatsapp) return;
    el.href = waHref(contact.whatsapp);
    if (!el.classList.contains("wa-float")) el.textContent = waLabel();
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    bindLeaveConfirm(el);
  });

  if (contact.whatsapp && !document.querySelector(".wa-float")) {
    var float = document.createElement("a");
    float.className = "wa-float";
    float.href = waHref(contact.whatsapp);
    float.target = "_blank";
    float.rel = "noopener noreferrer";
    float.setAttribute("aria-label", waLabel());
    float.innerHTML =
      '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M16.04 3C9.38 3 4 8.3 4 14.86c0 2.1.56 4.14 1.63 5.95L4 29l8.4-2.2a12.1 12.1 0 0 0 3.64.55h.01C22.7 27.35 28 22.05 28 15.49 28 8.93 22.7 3 16.04 3zm7.08 17.4c-.3.84-1.74 1.55-2.42 1.65-.62.09-1.4.13-2.26-.14-.52-.16-1.19-.39-2.05-.76-3.61-1.56-5.96-5.2-6.14-5.44-.18-.24-1.47-1.95-1.47-3.72s.93-2.64 1.26-3c.33-.36.72-.45.96-.45h.7c.22 0 .52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.4.03.64-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.36.37-.15.72.21.36.93 1.53 2 2.48 1.37 1.22 2.53 1.6 2.89 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z"/>' +
      "</svg>";
    document.body.appendChild(float);
    bindLeaveConfirm(float);

    document.addEventListener("deutschpath:lang", function () {
      float.setAttribute("aria-label", waLabel());
    });
  }

  document.addEventListener("deutschpath:lang", function () {
    if (!document.body.classList.contains("nav-open")) {
      var label = toggle && toggle.querySelector(".sr-only");
      if (label && window.DeutschPathI18n) label.textContent = window.DeutschPathI18n.t("ui.openMenu");
    }
  });

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var button = item.querySelector("button");
    var panel = item.querySelector(".faq-panel");
    if (!button || !panel) return;
    if (!item.classList.contains("is-open")) panel.setAttribute("inert", "");
    button.addEventListener("click", function () {
      var open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) panel.removeAttribute("inert");
      else panel.setAttribute("inert", "");
    });
  });

  initServicesJump();

  function initServicesJump() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".services-jump a[href^='#']"));
    if (!links.length) return;

    var groups = links
      .map(function (link) {
        var id = link.getAttribute("href").slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    function setActive(id) {
      links.forEach(function (link) {
        var match = link.getAttribute("href") === "#" + id;
        link.classList.toggle("is-active", match);
        if (match) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    var hashLocked = false;
    if (location.hash) {
      var hashEl = document.getElementById(location.hash.slice(1));
      if (hashEl) {
        var group = hashEl.closest(".services-group");
        setActive(group ? group.id : hashEl.id);
        hashLocked = true;
        window.setTimeout(function () { hashLocked = false; }, 900);
      }
    } else if (groups[0]) {
      setActive(groups[0].id);
    }

    if (!("IntersectionObserver" in window) || !groups.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        if (hashLocked) return;
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    groups.forEach(function (group) { observer.observe(group); });
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  initParallax();

  function initParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var layers = [];
    var heroImg = document.querySelector(".hero-media img");
    var heroVeil = document.querySelector(".hero-veil");
    var heroCopy = document.querySelector(".hero-copy");
    var heroBleed = document.querySelector(".hero-bleed");

    if (heroImg && heroBleed) {
      layers.push({ el: heroImg, root: heroBleed, speed: 0.28, scale: 1.08, type: "hero" });
    }
    if (heroVeil && heroBleed) {
      layers.push({ el: heroVeil, root: heroBleed, speed: 0.12, scale: 1, type: "veil" });
    }
    if (heroCopy && heroBleed) {
      layers.push({ el: heroCopy, root: heroBleed, speed: -0.08, scale: 1, type: "copy" });
    }

    document.querySelectorAll(".media-band").forEach(function (band) {
      var img = band.querySelector("img");
      if (img) layers.push({ el: img, root: band, speed: 0.22, scale: 1, type: "band" });
    });

    document.querySelectorAll(".page-hero-media").forEach(function (hero) {
      var bg = hero.querySelector(".page-hero-bg");
      if (bg) layers.push({ el: bg, root: hero, speed: 0.2, scale: 1, type: "page" });
    });

    if (!layers.length) return;

    var ticking = false;

    function update() {
      ticking = false;
      var viewH = window.innerHeight || 1;

      layers.forEach(function (layer) {
        var rect = layer.root.getBoundingClientRect();
        var visible = rect.bottom > 0 && rect.top < viewH;
        if (!visible) return;

        var progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
        var y = progress * layer.speed * Math.min(rect.height, viewH) * 0.9;

        if (layer.type === "hero") {
          layer.el.style.transform = "translate3d(0, " + y.toFixed(2) + "px, 0) scale(" + layer.scale + ")";
        } else if (layer.type === "copy") {
          layer.el.style.transform = "translate3d(0, " + y.toFixed(2) + "px, 0)";
        } else {
          layer.el.style.transform = "translate3d(0, " + y.toFixed(2) + "px, 0)";
        }
      });
    }

    function onFrame() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onFrame, { passive: true });
    window.addEventListener("resize", onFrame);
  }

  function link(href, text) {
    var anchor = document.createElement("a");
    anchor.href = href;
    anchor.textContent = text;
    return anchor;
  }
})();
