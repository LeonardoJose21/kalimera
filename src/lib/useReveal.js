import { useEffect, useRef, useState } from "react";

// Small IntersectionObserver hook for one-time entrance reveals.
// Deliberately not a scroll listener (banned) and not a heavy scroll
// library: this page only needs "has this section entered the viewport
// yet", once, which IO handles natively and cheaply.
export function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);

    // Safety net: if for any reason the element is never observed as
    // intersecting (fast programmatic scroll, a browser quirk, a headless
    // capture tool that resizes instead of scrolling), never leave content
    // permanently invisible. Reveal unconditionally after a short delay.
    const fallback = setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, visible };
}
