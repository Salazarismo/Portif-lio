import { useEffect, useRef, useState } from "preact/hooks";
import { SegmentedButton } from "./SegmentedButton";

const ITEMS = [
  { id: "projects", label: "Projetos" },
  { id: "about", label: "Sobre" },
  { id: "contact", label: "Contato" }
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const root = getComputedStyle(document.documentElement);
  const headerH = Number.parseFloat(root.getPropertyValue("--header-h")) || 80;
  const top = window.scrollY + el.getBoundingClientRect().top - headerH - 16;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function HeaderNavSegmented() {
  const [active, setActive] = useState<string>(ITEMS[0].id);
  const [lockSpy, setLockSpy] = useState(false);
  const lockSpyRef = useRef(lockSpy);
  const unlockTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    lockSpyRef.current = lockSpy;
  }, [lockSpy]);

  useEffect(() => {
    const setFromHash = () => {
      const raw = window.location.hash.replace("#", "");
      const found = ITEMS.find((i) => i.id === raw);
      if (found) setActive(found.id);
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash, { passive: true });
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  useEffect(() => {
    const els = ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const computeActive = () => {
      const root = getComputedStyle(document.documentElement);
      const headerH = Number.parseFloat(root.getPropertyValue("--header-h")) || 80;
      const anchorOffset =
        Number.parseFloat(root.getPropertyValue("--anchor-offset")) || headerH + 16;

      let bestId = els[0].id;
      let bestTop = Number.NEGATIVE_INFINITY;

      for (const el of els) {
        const top = el.getBoundingClientRect().top - anchorOffset;
        if (top <= 0 && top > bestTop) {
          bestTop = top;
          bestId = el.id;
        }
      }

      setActive(bestId);
    };

    const tick = () => {
      rafRef.current = null;
      if (lockSpyRef.current) return;
      computeActive();
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return (
    <div className="nl-seg-nav">
      <SegmentedButton
        buttons={ITEMS as any}
        activeId={active}
        onChange={(id) => {
          setLockSpy(true);
          setActive(id);
          if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
          unlockTimerRef.current = window.setTimeout(() => setLockSpy(false), 800);
          history.replaceState(null, "", `/#${id}`);
          scrollToId(id);
        }}
        className="bg-white/5 ring-1 ring-white/10"
      />
    </div>
  );
}
