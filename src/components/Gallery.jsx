import galleryPool from "../assets/gallery-pool.jpg";
import galleryLiving from "../assets/gallery-living.jpg";
import galleryBedroom from "../assets/gallery-bedroom.jpg";
import galleryKitchen from "../assets/gallery-kitchen.jpg";
import galleryCowork from "../assets/gallery-cowork.jpg";
import galleryDinning from "../assets/gallery-eat.jpg";
import galleryDishing from "../assets/gallery-dishing.jpg"
import { useEffect, useState } from "react";
import { useItemsPerView } from "../utils/UseItemsPerView";

const GALLERY = [
  { id: "pool", img: galleryPool, es: "La piscina", en: "The pool", tall: true },
  { id: "living", img: galleryLiving, es: "Sala y área social", en: "Living & social area", tall: false },
  { id: "bedroom", img: galleryBedroom, es: "Habitación", en: "Bedroom", tall: false },
  { id: "kitchen", img: galleryKitchen, es: "Cocina", en: "Kitchen", tall: true },
  { id: "terrace", img: galleryCowork, es: "Zona de trabajo", en: "workspace", tall: false },
  { id: "exterior", img: galleryDinning, es: "Comedor", en: "dining room", tall: false },
  { id: "dishing", img: galleryDishing, es: "Lavandería", en: "laundry", tall: false}
];

function IconChevron({ className, dir = "left" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

const iconBase = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };

export default function Gallery({lang, t}) {
  
  const perView = useItemsPerView();
  const maxIndex = Math.max(0, GALLERY.length - perView);
  const [index, setIndex] = useState(0);
  const [openId, setOpenId] = useState(null);
  const [paused, setPaused] = useState(false);

  const openIndex = GALLERY.findIndex((g) => g.id === openId);
  const goTo = (i) => setIndex(((i % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || openId !== null) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 4500);
    return () => clearInterval(id);
  }, [paused, openId, maxIndex]);

  const close = () => setOpenId(null);
  const step = (delta) => {
    if (openIndex === -1) return;
    const nextI = (openIndex + delta + GALLERY.length) % GALLERY.length;
    setOpenId(GALLERY[nextI].id);
  };

  useEffect(() => {
    if (openId === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  return (
    <section id="gallery" className="bg-[#f1e7d3] py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl leading-tight text-[#16231f] sm:text-4xl">{t.gallery.heading}</h2>
          <p className="max-w-xs text-sm text-[#16231f]/75">{t.gallery.sub}</p>
        </div>

        <div
          className="relative mx-auto mt-10 w-full max-w-sm sm:max-w-2xl lg:max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex -mx-2 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
              style={{ transform: `translateX(-${index * (100 / perView)}%)`, touchAction: "pan-y" }}
            >
              {GALLERY.map((item) => (
                <div key={item.id} className="flex-shrink-0 px-2" style={{ flex: `0 0 ${100 / perView}%` }}>
                  <button
                    type="button"
                    onClick={() => setOpenId(item.id)}
                    className="group relative block w-full overflow-hidden rounded-3xl"
                    aria-label={lang === "en" ? item.en : item.es}
                  >
                    <img
                      src={item.img}
                      alt={lang === "en" ? item.en : item.es}
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#16231f]/70 to-transparent px-4 pb-3 pt-8 text-left text-sm font-medium text-white">
                      {lang === "en" ? item.en : item.es}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-[#fbf5ea]/90 p-2 text-[#16231f] shadow-md backdrop-blur transition-colors hover:bg-[#fbf5ea] sm:-left-4"
          >
            <IconChevron dir="left" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#fbf5ea]/90 p-2 text-[#16231f] shadow-md backdrop-blur transition-colors hover:bg-[#fbf5ea] sm:-right-4"
          >
            <IconChevron dir="right" className="h-4 w-4" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#0e5c55]" : "w-1.5 bg-[#16231f]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {openId !== null && openIndex !== -1 && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#16231f]/90 px-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-[#fbf5ea]/10 p-2 text-[#fbf5ea] hover:bg-[#fbf5ea]/20"
          >
            <IconClose className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-3 rounded-full bg-[#fbf5ea]/10 p-2 text-[#fbf5ea] hover:bg-[#fbf5ea]/20 sm:left-6"
          >
            <IconChevron dir="left" className="h-6 w-6" />
          </button>
          <figure className="lightbox-figure max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[openIndex].img} alt="" className="max-h-[75vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-[#fbf5ea]/90">
              {lang === "en" ? GALLERY[openIndex].en : GALLERY[openIndex].es}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-3 rounded-full bg-[#fbf5ea]/10 p-2 text-[#fbf5ea] hover:bg-[#fbf5ea]/20 sm:right-6"
          >
            <IconChevron dir="right" className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}