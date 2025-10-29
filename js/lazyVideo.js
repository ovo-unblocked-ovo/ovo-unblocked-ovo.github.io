// Lazy load YouTube video when it comes into view - Optimized
(function() {
  'use strict';
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        if (iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          iframe.removeAttribute('data-src');
          observer.unobserve(iframe);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });

  // Wait for page to be interactive
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const iframe = document.getElementById('youtubeIframe');
    if (iframe) {
      observer.observe(iframe);
    }
  }
})();
