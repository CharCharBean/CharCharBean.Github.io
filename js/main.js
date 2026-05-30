// Mobile navigation toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!open));
    toggle.setAttribute("aria-expanded", String(!open));
  });

  // Close menu when a link is tapped (mobile)
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a") && window.matchMedia("(max-width: 860px)").matches) {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
