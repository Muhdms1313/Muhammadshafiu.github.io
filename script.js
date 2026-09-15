document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 1. FOOTER YEAR
  // ==========================================
  var yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // ==========================================
  // 2. MOBILE MENU
  // ==========================================
  var menuButton = document.getElementById("menu");
  var navigation = document.getElementById("nav");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

      navigation.classList.toggle("open");

      var menuIsOpen = navigation.classList.contains("open");

      menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen ? "true" : "false"
      );

      menuButton.setAttribute(
        "aria-label",
        menuIsOpen ? "Close menu" : "Open menu"
      );

    });


    // Close menu after clicking a link
    var navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

      });

    });

  }


  // ==========================================
  // 3. SCROLL PROGRESS BAR
  // ==========================================
  var progressBar = document.getElementById("progress");

  function updateProgress() {

    if (!progressBar) {
      return;
    }

    var scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;

    var documentHeight =
      document.documentElement.scrollHeight;

    var windowHeight =
      window.innerHeight;

    var scrollHeight =
      documentHeight - windowHeight;

    if (scrollHeight <= 0) {

      progressBar.style.width = "0%";

      return;
    }

    var scrollPercentage =
      (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
      scrollPercentage + "%";

  }


  window.addEventListener(
    "scroll",
    updateProgress,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    updateProgress
  );

  updateProgress();


  // ==========================================
  // 4. ACTIVE NAVIGATION LINK
  // ==========================================
  var sections =
    document.querySelectorAll(
      "main section[id]"
    );

  var navLinks =
    document.querySelectorAll(
      "nav a"
    );


  function updateActiveNavigation() {

    var currentSection = "home";

    var scrollPosition =
      (window.scrollY || 0) + 180;


    sections.forEach(function (section) {

      if (
        scrollPosition >=
        section.offsetTop
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navLinks.forEach(function (link) {

      var linkTarget =
        link.getAttribute("href");

      if (
        linkTarget ===
        "#" + currentSection
      ) {

        link.classList.add("active");

      } else {

        link.classList.remove("active");

      }

    });

  }


  window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    updateActiveNavigation
  );

  updateActiveNavigation();


  // ==========================================
  // 5. CLOSE MOBILE MENU WHEN RESIZING
  // ==========================================
  window.addEventListener(
    "resize",
    function () {

      if (
        window.innerWidth > 850 &&
        navigation &&
        menuButton
      ) {

        navigation.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

      }

    }
  );

});
