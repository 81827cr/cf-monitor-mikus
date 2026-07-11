(function() {
  'use strict';

  if (window.__mikusThemeEntryLoaded) return;
  window.__mikusThemeEntryLoaded = true;

  var CORE_URL = 'https://cdn.jsdelivr.net/gh/aloneowo0/cf-monitor-mikus@9134078d892b267edd6e4a6a82fbf6802fec124a/theme-mikus-new/custom_script.js';
  var coreRequested = false;

  function isPerformanceRoute() {
    var hash = (window.location.hash || '').toLowerCase();
    return hash.indexOf('admin') !== -1 || hash.indexOf('server') !== -1;
  }

  function injectPerformanceStyles() {
    var style = document.getElementById('mikus-route-performance-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'mikus-route-performance-style';
      document.head.appendChild(style);
    }

    style.textContent =
      'html.mikus-performance-mode{scroll-behavior:auto!important;}' +
      'html.mikus-performance-mode body::after{display:none!important;}' +
      'html.mikus-performance-mode #mikus-mascot{display:none!important;}' +
      'html.mikus-performance-mode .server-card,' +
      'html.mikus-performance-mode .chart-card,' +
      'html.mikus-performance-mode .host-card,' +
      'html.mikus-performance-mode .settings-section,' +
      'html.mikus-performance-mode .table-container,' +
      'html.mikus-performance-mode .table-wrapper,' +
      'html.mikus-performance-mode .footer,' +
      'html.mikus-performance-mode .modal-dialog,' +
      'html.mikus-performance-mode .terminal-header,' +
      'html.mikus-performance-mode .nav-area,' +
      'html.mikus-performance-mode .main-panel,' +
      'html.mikus-performance-mode .login-container,' +
      'html.mikus-performance-mode .panel-header,' +
      'html.mikus-performance-mode .tab-content,' +
      'html.mikus-performance-mode .admin-loading-overlay,' +
      'html.mikus-performance-mode .quota-section,' +
      'html.mikus-performance-mode .disabled-container,' +
      'html.mikus-performance-mode .user-menu-dropdown,' +
      'html.mikus-performance-mode .map-wrapper,' +
      'html.mikus-performance-mode .status-bar,' +
      'html.mikus-performance-mode .global-stats,' +
      'html.mikus-performance-mode .stats-grid,' +
      'html.mikus-performance-mode .view-toggle,' +
      'html.mikus-performance-mode .modal-overlay,' +
      'html.mikus-performance-mode .settings-grid,' +
      'html.mikus-performance-mode .ping-panel,' +
      'html.mikus-performance-mode .time-selector,' +
      'html.mikus-performance-mode .tabs{' +
        'backdrop-filter:none!important;' +
        '-webkit-backdrop-filter:none!important;' +
      '}' +
      'html.mikus-performance-mode .settings-section,' +
      'html.mikus-performance-mode .table-container,' +
      'html.mikus-performance-mode .table-wrapper,' +
      'html.mikus-performance-mode .main-panel,' +
      'html.mikus-performance-mode .panel-header,' +
      'html.mikus-performance-mode .tab-content,' +
      'html.mikus-performance-mode .quota-section,' +
      'html.mikus-performance-mode .disabled-container{' +
        'box-shadow:none!important;' +
      '}';
  }

  function injectBannerCorrection() {
    var style = document.getElementById('mikus-banner-position-correction');
    if (!style) {
      style = document.createElement('style');
      style.id = 'mikus-banner-position-correction';
      document.head.appendChild(style);
    }

    style.textContent =
      '.nav-area .header-row{margin-bottom:10px!important;}' +
      '.nav-area .filter-bar{margin-top:16px!important;}' +
      '#mikus-banner.mikus-welcome{margin:8px 0 0!important;padding:2px 0 4px!important;overflow:visible!important;}' +
      '#mikus-banner .mikus-welcome-flex{min-height:0!important;align-items:center!important;}' +
      '#mikus-banner .mikus-welcome-greet{position:relative!important;min-height:0!important;padding-left:0!important;gap:6px!important;overflow:visible!important;}' +
      '#mikus-banner .mikus-greet-icon{position:relative!important;width:140px!important;height:140px!important;left:auto!important;top:auto!important;margin:-18px -8px -16px -26px!important;flex:0 0 140px!important;z-index:3!important;pointer-events:none;}' +
      '#mikus-banner .mikus-greet-info{gap:3px!important;}' +
      '#mikus-banner .mikus-greet-text{font-size:1.5rem!important;line-height:1.16!important;}' +
      '#mikus-banner .mikus-greet-sub{font-size:.91rem!important;line-height:1.4!important;}' +
      '#mikus-banner .mikus-welcome-time{gap:2px!important;}' +
      '#mikus-banner .mikus-time-date{font-size:.91rem!important;line-height:1.3!important;}' +
      '#mikus-banner .mikus-time-val{font-size:1.58rem!important;line-height:1.12!important;}' +
      '@media(max-width:768px){' +
        '.nav-area .filter-bar{margin-top:12px!important;}' +
        '#mikus-banner.mikus-welcome{margin-top:5px!important;padding-bottom:3px!important;}' +
        '#mikus-banner .mikus-welcome-greet{padding-left:0!important;gap:4px!important;}' +
        '#mikus-banner .mikus-greet-icon{width:96px!important;height:96px!important;left:auto!important;top:auto!important;margin:-10px -5px -8px -18px!important;flex-basis:96px!important;}' +
        '#mikus-banner .mikus-greet-text{font-size:1.2rem!important;}' +
        '#mikus-banner .mikus-greet-sub{font-size:.82rem!important;}' +
        '#mikus-banner .mikus-time-date{font-size:.82rem!important;}' +
        '#mikus-banner .mikus-time-val{font-size:1.18rem!important;}' +
      '}' +
      '@media(max-width:520px){' +
        '#mikus-banner .mikus-greet-icon{width:88px!important;height:88px!important;margin:-8px -5px -6px -16px!important;flex-basis:88px!important;}' +
      '}';
  }

  function loadCore() {
    var script;
    if (isPerformanceRoute() || coreRequested) return;
    if (window.__mikusThemeCoreLoading) {
      injectBannerCorrection();
      return;
    }

    coreRequested = true;
    window.__mikusThemeCoreLoading = true;
    script = document.createElement('script');
    script.src = CORE_URL;
    script.async = false;
    script.onload = function() {
      injectBannerCorrection();
      requestAnimationFrame(injectBannerCorrection);
      setTimeout(injectBannerCorrection, 200);
    };
    script.onerror = function() {
      coreRequested = false;
      window.__mikusThemeCoreLoading = false;
    };
    document.head.appendChild(script);
  }

  function updateRouteMode() {
    var performanceMode = isPerformanceRoute();
    document.documentElement.classList.toggle('mikus-performance-mode', performanceMode);
    if (!performanceMode) loadCore();
  }

  injectPerformanceStyles();
  updateRouteMode();
  window.addEventListener('hashchange', updateRouteMode);
  window.addEventListener('popstate', updateRouteMode);
})();
