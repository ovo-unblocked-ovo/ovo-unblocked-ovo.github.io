// Optimized Google Analytics - Load after page is interactive
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadGA);
} else {
  setTimeout(loadGA, 2000);
}

function loadGA() {
  var ga_id = 'G-P4EX4ZRLS2';
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga_id;
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ga_id, {
    'page_path': window.location.pathname,
    'transport_type': 'beacon'
  });
}