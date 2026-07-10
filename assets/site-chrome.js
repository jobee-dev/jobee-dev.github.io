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
    },
    "emergencycalloperator-privacy": {
      activeNav: "home",
      headerTheme: "neutral",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Development • <a href=\"/\" class=\"underline\">Back to Home</a>"
      ]
    },
    "lastorders-privacy": {
      activeNav: "home",
      headerTheme: "lastorders",
      footerClassName: "site-footer site-footer--code site-footer--muted",
      footerLines: [
        "© {year} Jobee Development • <a href=\"/\" class=\"underline\">Back to Home</a>"
      ]
    }
  };

  const CRITICAL_HEADER_CSS = `
    .site-header{position:fixed;top:0;right:0;left:0;z-index:50}
    .site-header__inner{max-width:72rem;margin:0 auto;padding:16px 24px}
    .site-header__row{display:flex;align-items:center;justify-content:space-between;gap:1rem;min-height:48px}
    .nav-header{--site-header-accent:#63f3ff;--site-header-accent-soft:rgba(99,243,255,0.08);--site-header-active-shadow:inset 0 0 0 1px rgba(99,243,255,0.16);--site-header-active-text:#f3f7ff;background:rgba(4,6,8,0.82);border-bottom:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(18px);box-shadow:0 10px 36px rgba(0,0,0,0.2)}
    .site-header .site-brand{display:inline-flex;align-items:center;font:700 20px/20px "IBM Plex Mono",monospace;letter-spacing:.14em;text-decoration:none;color:#f3f7ff;text-shadow:0 0 16px rgba(99,243,255,0.14)}
    .site-header__desktop{display:flex;align-items:center;gap:.5rem}
    .site-header .nav-link{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px 12px;border-radius:8px;color:#94a3b8;text-decoration:none;font:600 12px/12px "IBM Plex Mono",monospace;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;transition:color .22s ease,background .22s ease,box-shadow .22s ease}
    .site-header .nav-link:hover{color:#f3f7ff;background:rgba(255,255,255,0.04)}
    .site-header .nav-link.active{color:var(--site-header-active-text);background:var(--site-header-accent-soft);box-shadow:var(--site-header-active-shadow)}
    .site-header .site-header__toggle{display:none;align-items:center;justify-content:center;flex-shrink:0;width:44px;height:44px;padding:0;border:1px solid rgba(255,255,255,0.1);border-radius:999px;background:rgba(255,255,255,0.03);color:#f3f7ff;cursor:pointer;font-size:32px;transition:border-color .22s ease,background .22s ease}
    .site-header .site-header__toggle:hover{border-color:rgba(255,255,255,0.18);background:rgba(255,255,255,0.06)}
    .site-header .site-header__mobile-shell{display:none;margin-top:1rem;padding-bottom:1rem;border-top:1px solid rgba(255,255,255,0.1)}
    .site-header .site-header__mobile-links{display:flex;flex-direction:column;gap:.5rem;padding-top:1rem}
    .site-header .mobile-menu.active{display:block}
    @media (max-width:768px){.desktop-nav{display:none!important}.mobile-nav{display:inline-flex!important}}
    @media (min-width:769px){.desktop-nav{display:flex!important}.mobile-nav{display:none!important}.site-header .site-header__mobile-shell,.site-header .site-header__mobile-shell.active{display:none!important}}
    .site-header--dispatch{--site-header-accent:#ffb24a;--site-header-accent-soft:rgba(255,178,74,0.12);--site-header-active-shadow:0 0 18px rgba(255,178,74,0.14),inset 0 0 0 1px rgba(255,178,74,0.22)}
    .site-header--colormerge{--site-header-accent:#f093fb;--site-header-accent-soft:rgba(240,147,251,0.14);--site-header-active-shadow:0 0 18px rgba(240,147,251,0.14),inset 0 0 0 1px rgba(240,147,251,0.24);background:rgba(118,75,162,0.34);border-bottom:1px solid rgba(255,255,255,0.14);box-shadow:0 10px 36px rgba(46,38,77,0.22)}
    .site-header--colormerge .site-brand{text-shadow:0 0 16px rgba(240,147,251,0.28)}
    .site-header--colormerge .nav-link:hover{background:rgba(255,255,255,0.08)}
    .site-header--hackersim{--site-header-accent:#00e5ff;--site-header-accent-soft:rgba(0,229,255,0.12);--site-header-active-shadow:0 0 18px rgba(0,229,255,0.14),inset 0 0 0 1px rgba(255,0,229,0.24)}
    .site-header--lastorders{--site-header-accent:#f5a623;--site-header-accent-soft:rgba(245,166,35,0.12);--site-header-active-shadow:0 0 18px rgba(245,166,35,0.14),inset 0 0 0 1px rgba(245,166,35,0.22)}
  `;

  function ensureCriticalHeaderStyles() {
    if (document.querySelector("[data-site-chrome-critical]")) {
      return;
    }

    const style = document.createElement("style");
    style.setAttribute("data-site-chrome-critical", "true");
    style.textContent = CRITICAL_HEADER_CSS;
    document.head.appendChild(style);
  }

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

  ensureCriticalHeaderStyles();

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
