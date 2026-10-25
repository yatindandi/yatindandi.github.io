(function () {
  'use strict';

  var videos = document.querySelectorAll('.research-video');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Native controls remain available when autoplay is disabled or unsupported.
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.35) return;

      // Start only once, so scrolling never overrides a visitor's pause.
      observer.unobserve(entry.target);
      if (reducedMotion.matches || (navigator.connection && navigator.connection.saveData)) return;

      var playback = entry.target.play();
      if (playback) playback.catch(function () { /* Use the native play button. */ });
    });
  }, { threshold: 0.35 });

  videos.forEach(function (video) {
    observer.observe(video);
    video.addEventListener('play', function () { observer.unobserve(video); });
  });

  reducedMotion.addEventListener('change', function (event) {
    if (event.matches) videos.forEach(function (video) { video.pause(); });
  });
}());
