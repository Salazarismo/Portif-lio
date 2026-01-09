import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function initGsapReveal() {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add({ reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => {
    if (ctx.conditions.reduce) {
      const targets = Array.from(document.querySelectorAll('[data-cell]'));
      for (const el of targets) {
        if (el instanceof HTMLElement) el.setAttribute('data-sr', 'show');
      }
      return () => {};
    }
    const cells = Array.from(document.querySelectorAll('[data-cell]')).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );
    for (const el of cells) {
      gsap.set(el, { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out'
          })
      });
    }
    const hero = document.querySelector('[data-anim="hero"]');
    if (hero instanceof HTMLElement) {
      const title = hero.querySelector('#hero-title');
      const subtitle = hero.querySelector('p[data-text="body-muted"]');
      const cta = hero.querySelector('[data-cta]');
      const img = hero.querySelector('img');
      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
      if (title) tl.from(title, { y: 20, opacity: 0 });
      if (subtitle) tl.from(subtitle, { y: 10, opacity: 0 }, '-=0.3');
      if (cta) tl.from(cta, { y: 8, opacity: 0 }, '-=0.25');
      if (img) tl.from(img, { opacity: 0, scale: 1.02 }, '-=0.3');
    }
    return () => {};
  });
}
