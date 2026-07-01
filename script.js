// PASOCORDER — recording pen head follows the trace path
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const path = document.getElementById('traceLine');
  const pen = document.getElementById('penHead');
  if (!path || !pen) return;

  const total = path.getTotalLength();
  const duration = 3200; // ms, matches CSS draw animation
  let start = null;

  function frame(ts){
    if (!start) start = ts;
    const elapsed = ts - start;
    const t = Math.min(elapsed / duration, 1);
    const point = path.getPointAtLength(t * total);
    pen.setAttribute('cx', point.x);
    pen.setAttribute('cy', point.y);
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      // gentle idle loop once recording finishes
      idleLoop(ts);
    }
  }

  function idleLoop(baseTs){
    let loopStart = null;
    const loopDuration = 6000;
    function loop(ts){
      if (!loopStart) loopStart = ts;
      const t = ((ts - loopStart) % loopDuration) / loopDuration;
      const point = path.getPointAtLength(t * total);
      pen.setAttribute('cx', point.x);
      pen.setAttribute('cy', point.y);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    requestAnimationFrame(frame);
  } else {
    const end = path.getPointAtLength(total);
    pen.setAttribute('cx', end.x);
    pen.setAttribute('cy', end.y);
  }

  // smooth active-link highlight on scroll (nice-to-have, non-essential)
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--amber)' : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => observer.observe(s));
  }
});
