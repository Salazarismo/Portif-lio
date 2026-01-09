import { e as createComponent, f as createAstro, h as addAttribute, o as renderHead, n as renderSlot, k as renderComponent, r as renderTemplate } from './astro/server_DnANCFlh.mjs';
/* empty css                           */
import { useEffect } from 'preact/hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function initGsapReveal() {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add({
    reduce: "(prefers-reduced-motion: reduce)"
  }, (ctx) => {
    if (ctx.conditions.reduce) {
      const targets = Array.from(document.querySelectorAll("[data-cell]"));
      for (const el of targets) {
        if (el instanceof HTMLElement) el.setAttribute("data-sr", "show");
      }
      return () => {
      };
    }
    const cells = Array.from(document.querySelectorAll("[data-cell]")).filter((el) => el instanceof HTMLElement);
    for (const el of cells) {
      gsap.set(el, {
        opacity: 0,
        y: 24
      });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out"
        })
      });
    }
    const hero = document.querySelector('[data-anim="hero"]');
    if (hero instanceof HTMLElement) {
      const title = hero.querySelector("#hero-title");
      const subtitle = hero.querySelector('p[data-text="body-muted"]');
      const cta = hero.querySelector("[data-cta]");
      const img = hero.querySelector("img");
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out"
        }
      });
      if (title) tl.from(title, {
        y: 20,
        opacity: 0
      });
      if (subtitle) tl.from(subtitle, {
        y: 10,
        opacity: 0
      }, "-=0.3");
      if (cta) tl.from(cta, {
        y: 8,
        opacity: 0
      }, "-=0.25");
      if (img) tl.from(img, {
        opacity: 0,
        scale: 1.02
      }, "-=0.3");
    }
    return () => {
    };
  });
}

function GsapInit() {
  useEffect(() => {
    initGsapReveal();
  }, []);
  return null;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function NavTransitions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSameOrigin = (url) => url.origin === window.location.origin;
    const getDirectionClass = (currentPath, nextPath) => {
      if (currentPath === nextPath) return "";
      const depth = (p) => p.split("/").filter(Boolean).length;
      return depth(nextPath) > depth(currentPath) ? "nav-forward" : "nav-back";
    };
    const supportsVT = !!document.startViewTransition;
    window.addEventListener("popstate", () => {
      if (reduce) return;
      if (!supportsVT) return;
      document.documentElement.classList.add("nav-back");
      document.startViewTransition(() => {
      }).finished.finally(() => {
        document.documentElement.classList.remove("nav-back");
      });
    });
    const onClick = (e) => {
      const target = e.target;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http")) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;
      if (href.startsWith("#")) {
        e.preventDefault();
        document.documentElement.classList.add("hash-scroll");
        setTimeout(() => document.documentElement.classList.remove("hash-scroll"), 350);
        if (reduce) {
          document.getElementById(href.slice(1))?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          return;
        }
        const el = document.getElementById(href.slice(1));
        if (!el) return;
        const start = window.scrollY;
        const targetTop = el.getBoundingClientRect().top + window.scrollY - 50;
        const distance = Math.abs(targetTop - start);
        const duration = distance > 500 ? 500 : 300;
        let startTs = null;
        const step = (ts) => {
          if (startTs === null) startTs = ts;
          const t = Math.min((ts - startTs) / duration, 1);
          const eased = easeInOutCubic(t);
          const y = start + (targetTop - start) * eased;
          window.scrollTo(0, y);
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        return;
      }
      try {
        const nextUrl = new URL(href, window.location.href);
        if (!isSameOrigin(nextUrl)) return;
        e.preventDefault();
        const dirClass = getDirectionClass(window.location.pathname, nextUrl.pathname);
        if (reduce || !document.startViewTransition) {
          document.documentElement.classList.add("page-transition-leave");
          document.documentElement.classList.add(dirClass);
          document.documentElement.classList.add("page-transition-leave-active");
          setTimeout(() => {
            window.location.href = nextUrl.toString();
          }, 300);
          return;
        }
        document.documentElement.classList.add(dirClass);
        document.startViewTransition(() => {
          window.location.href = nextUrl.toString();
        }).finished.finally(() => {
          document.documentElement.classList.remove("nav-forward", "nav-back");
        });
      } catch {
      }
    };
    document.addEventListener("click", onClick, {
      capture: true
    });
    return () => document.removeEventListener("click", onClick, {
      capture: true
    });
  }, []);
  return null;
}

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Astro", description = "", lang = "pt-BR" } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://images.unsplash.com" crossorigin><link rel="preload" as="image" href="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fm=jpg&w=1200&q=80">${renderHead()}</head> <body> <nav aria-label="Principal">${renderSlot($$result, $$slots["nav"])}</nav> <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> <footer role="contentinfo">${renderSlot($$result, $$slots["footer"])}</footer> ${renderComponent($$result, "GsapInit", GsapInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/GsapInit.island", "client:component-export": "default" })} ${renderComponent($$result, "NavTransitions", NavTransitions, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/islands/NavTransitions.island", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/ADMIN/Documents/Portif-lio/adorable-azimuth/src/components/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
