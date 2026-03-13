(function () {
  const NAV_ITEMS = [
    { key: "home", label: "Home", href: "/" },
    { key: "blog", label: "Blog", href: "/blog/" },
    { key: "dispatch", label: "Dispatch Commander", href: "/dispatchcommander/index.html" },
    { key: "colormerge", label: "Colour Merge", href: "/colormerge/index.html" },
    { key: "hackersim", label: "HackerSim", href: "/hackersim/index.html" },
    { key: "support", label: "Support", href: "/support.html" }
  ];

  const PAGE_CONFIG = {
    home: {
      activeNav: "home",
      headerTheme: "neutral",
      footerClassName: "site-footer site-footer--compact site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Developments Ltd"
      ]
    },
    support: {
      activeNav: "support",
      headerTheme: "neutral",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Developments Ltd"
      ]
    },
    blog: {
      activeNav: "blog",
      headerTheme: "neutral",
      footerClassName: "site-footer site-footer--muted",
      footerLines: [
        "© {year} Jobee Developments Ltd • Writing on launches, systems, and studio craft."
      ]
    },
    "blog-post": {
      activeNav: "blog",
      headerTheme: "neutral",
      footerClassName: "site-footer site-footer--muted",
      footerLines: [
        "© {year} Jobee Developments Ltd • <a href=\"/blog/\" class=\"underline\">Back to Blog</a>"
      ]
    },
    dispatch: {
      activeNav: "dispatch",
      headerTheme: "dispatch",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "Dispatch Commander is a <strong>fictional simulation game</strong>. All incidents, agencies and data within the app are simulated and should not be used for real-world emergency response.",
        "© {year} Jobee Development • <a href=\"/dispatchcommander/privacy.html\" class=\"underline\">Privacy Policy</a>"
      ]
    },
    "dispatch-privacy": {
      activeNav: "dispatch",
      headerTheme: "dispatch",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Development • <a href=\"/\" class=\"underline\">Back to Home</a> • <a href=\"/dispatchcommander/index.html\" class=\"underline\">Dispatch Commander</a>"
      ]
    },
    colormerge: {
      activeNav: "colormerge",
      headerTheme: "colormerge",
      footerClassName: "site-footer",
      footerLines: [
        "© {year} Jobee Development • <a href=\"/colormerge/privacy.html\">Privacy Policy</a>"
      ]
    },
    "colormerge-privacy": {
      activeNav: "colormerge",
      headerTheme: "colormerge",
      footerClassName: "",
      footerLines: [
        "© {year} Jobee Developments Limited. All rights reserved. • <a href=\"/colormerge/index.html\">Colour Merge</a>"
      ]
    },
    hackersim: {
      activeNav: "hackersim",
      headerTheme: "hackersim",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Development • <a href=\"/hackersim/privacy.html\" class=\"underline\">Privacy Policy</a>"
      ]
    },
    "hackersim-privacy": {
      activeNav: "hackersim",
      headerTheme: "hackersim",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Development • <a href=\"/\" class=\"underline\">Back to Home</a> • <a href=\"/hackersim/index.html\" class=\"underline\">HackerSim</a>"
      ]
    }
  };

  function renderHeader(currentPage) {
    const pageConfig = PAGE_CONFIG[currentPage] || PAGE_CONFIG.home;
    const activeNav = pageConfig.activeNav;
    const themeClass = pageConfig.headerTheme ? ` site-header--${pageConfig.headerTheme}` : "";
    const navLinks = NAV_ITEMS.map((item) => {
      const activeClass = item.key === activeNav ? " active" : "";
      return `<a href="${item.href}" class="nav-link${activeClass}">${item.label}</a>`;
    }).join("");

    return `
      <nav class="nav-header site-header${themeClass}">
        <div class="site-header__inner">
          <div class="site-header__row">
            <a href="/" class="site-brand code">JOBEE.DEV</a>
            <div class="desktop-nav site-header__desktop">
              ${navLinks}
            </div>
            <button type="button" class="mobile-nav site-header__toggle" data-site-menu-toggle aria-expanded="false" aria-controls="site-mobile-menu">
              <span class="material-icons">menu</span>
            </button>
          </div>
          <div id="site-mobile-menu" class="mobile-menu site-header__mobile-shell" data-site-mobile-menu>
            <div class="site-header__mobile-links">
              ${navLinks}
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  function renderFooter(currentPage) {
    const config = PAGE_CONFIG[currentPage] || PAGE_CONFIG.home;
    const year = new Date().getFullYear();
    const content = config.footerLines
      .map((line) => `<p class="site-footer__line">${line.replaceAll("{year}", String(year))}</p>`)
      .join("");

    const classAttribute = config.footerClassName ? ` class="${config.footerClassName}"` : "";
    return `<footer${classAttribute}>${content}</footer>`;
  }

  function setMenuOpen(isOpen) {
    const menu = document.querySelector("[data-site-mobile-menu]");
    const toggle = document.querySelector("[data-site-menu-toggle]");
    if (!menu || !toggle) {
      return;
    }

    menu.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  function toggleMobileMenu() {
    const menu = document.querySelector("[data-site-mobile-menu]");
    if (!menu) {
      return;
    }

    setMenuOpen(!menu.classList.contains("active"));
  }

  const page = document.body.dataset.sitePage || "home";
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  if (headerTarget) {
    headerTarget.innerHTML = renderHeader(page);
  }

  if (footerTarget) {
    footerTarget.innerHTML = renderFooter(page);
  }

  document.addEventListener("click", function (event) {
    const toggle = document.querySelector("[data-site-menu-toggle]");
    const menu = document.querySelector("[data-site-mobile-menu]");

    if (!toggle || !menu) {
      return;
    }

    if (toggle.contains(event.target)) {
      toggleMobileMenu();
      return;
    }

    if (!menu.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });
})();
