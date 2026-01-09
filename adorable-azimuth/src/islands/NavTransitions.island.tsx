import { useEffect } from 'preact/hooks';

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function NavTransitions() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSameOrigin = (url: URL) => url.origin === window.location.origin;
    const getDirectionClass = (currentPath: string, nextPath: string) => {
      if (currentPath === nextPath) return '';
      const depth = (p: string) => p.split('/').filter(Boolean).length;
      return depth(nextPath) > depth(currentPath) ? 'nav-forward' : 'nav-back';
    };
    const supportsVT = !!(document as any).startViewTransition;
    window.addEventListener('popstate', () => {
      if (reduce) return;
      if (!supportsVT) return;
      document.documentElement.classList.add('nav-back');
      (document as any).startViewTransition(() => {}).finished.finally(() => {
        document.documentElement.classList.remove('nav-back');
      });
    });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http')) return;
      // Allow default for downloads, new tab, or external
      if (link.target === '_blank' || link.hasAttribute('download')) return;

      // Hash-based scroll within page
      if (href.startsWith('#')) {
        e.preventDefault();
        document.documentElement.classList.add('hash-scroll');
        setTimeout(() => document.documentElement.classList.remove('hash-scroll'), 350);
        if (reduce) {
          document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        const el = document.getElementById(href.slice(1));
        if (!el) return;
        const start = window.scrollY;
        const targetTop = el.getBoundingClientRect().top + window.scrollY - 50;
        const distance = Math.abs(targetTop - start);
        const duration = distance > 500 ? 500 : 300;
        let startTs: number | null = null;
        const step = (ts: number) => {
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

      // Internal navigation transitions
      try {
        const nextUrl = new URL(href, window.location.href);
        if (!isSameOrigin(nextUrl)) return;
        e.preventDefault();
        const dirClass = getDirectionClass(window.location.pathname, nextUrl.pathname);
        if (reduce || !(document as any).startViewTransition) {
          document.documentElement.classList.add('page-transition-leave');
          document.documentElement.classList.add(dirClass);
          document.documentElement.classList.add('page-transition-leave-active');
          setTimeout(() => {
            window.location.href = nextUrl.toString();
          }, 300);
          return;
        }
        document.documentElement.classList.add(dirClass);
        (document as any).startViewTransition(() => {
          window.location.href = nextUrl.toString();
        }).finished.finally(() => {
          document.documentElement.classList.remove('nav-forward', 'nav-back');
        });
      } catch {
        // fall through
      }
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true } as any);
  }, []);

  return null;
}
