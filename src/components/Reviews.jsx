import { useEffect, useState } from "react";
import { useItemsPerView } from "../utils/UseItemsPerView";

const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/iMLBiynLksu4m1tt8";
const GOOGLE_RATING = 4.9;

const REVIEWS = [
  {
    id: "roberto",
    author: "Roberto Carlos De La Torre",
    url: "https://maps.app.goo.gl/9NQutHys1xb12tmL6",
    es: "El apartamento es excelente para vacacionar, descansar y disfrutar en familia, pareja o con amigos. La ubicación es perfecta para ir a todos los puntos de interés de la ciudad, incluyendo las playas. Y la piscina que tiene el apartamento es un plus increíble. En conclusión, un lugar predilecto para disfrutar Santa Marta.",
    en: "The apartment is excellent for a vacation, to rest and enjoy with family, a partner, or friends. The location is perfect for reaching every point of interest in the city, including the beaches. And the pool is an incredible bonus. In short, a favorite spot to enjoy Santa Marta.",
  },
  {
    id: "saira",
    author: "Saira Elena Alarcon Soto",
    url: "https://maps.app.goo.gl/bcb2S7idu6tdTZx8A",
    es: "Es un bello apartamento totalmente amoblado, muy limpio y bien ubicado, con una piscina espectacular, un área social muy cómoda. Disponible de conexión WiFi y una computadora de escritorio, camas confortables y el precio excelente, lo recomiendo.",
    en: "It's a beautiful, fully furnished apartment, very clean and well located, with a spectacular pool and a comfortable social area. It has WiFi and a desktop computer, comfortable beds, and an excellent price. I recommend it.",
  },
  {
    id: "juan",
    author: "Juan De La Torre",
    url: "https://maps.app.goo.gl/7ZtNLTBuVJH74XGw6",
    es: "Excelente sitio turístico en la ciudad de Santa Marta para compartir en familia, excelente ubicación, está cerca de cualquier lugar que desees visitar, acogedor e independiente. Te aseguro lo pasarás muy feliz.",
    en: "An excellent place to stay in Santa Marta for a family trip, great location, close to anywhere you'd want to visit, cozy and private. I promise you'll have a wonderful time.",
  },
  {
    id: "jhojan",
    author: "Jhojan Vargas",
    url: "https://maps.app.goo.gl/3sAJh2k6rnebHyTA6",
    es: "Me parece un hotel ideal para un viaje de negocios, unas vacaciones en familia o solo, por el hecho de que me brindaron los servicios necesarios para estar cómodo en mi estadía. Por otro lado, cumplen al pie de la letra las reglas de bioseguridad que exige esta contingencia. También quiero destacar un excelente cuidado de la piscina y su área, de fácil acceso.",
    en: "I think it's an ideal place for a business trip, a family vacation, or traveling solo, they provided everything I needed to feel comfortable during my stay. They also followed biosecurity rules closely, and I want to highlight how well they keep the pool and surrounding area, with easy access.",
  },
];

function IconStar({ className, filled = true }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="m12 3.5 2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z" />
    </svg>
  );
}

const iconBase = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };


function IconQuote({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M9.5 6C6.2 7.6 4.5 9.9 4.5 13c0 2.3 1.5 3.9 3.5 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.4-1.7 1.8-3.1 3.6-3.9L9.5 6Zm9 0c-3.3 1.6-5 3.9-5 7 0 2.3 1.5 3.9 3.5 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.4-1.7 1.8-3.1 3.6-3.9L18.5 6Z" />
    </svg>
  );
}


function IconChevron({ className, dir = "left" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase}>
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}
export default function Reviews({lang, t}) {
  const perView = useItemsPerView();
  const maxIndex = Math.max(0, REVIEWS.length - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i) => setIndex(((i % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 6000);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display max-w-md text-3xl leading-tight text-[#16231f] sm:text-4xl">
              {t.reviews.heading}
            </h2>
            <p className="mt-3 max-w-md text-sm text-[#16231f]/80">{t.reviews.sub}</p>
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[#16231f]/12 px-5 py-3"
          >
            <span className="font-display text-3xl text-[#16231f]">{GOOGLE_RATING}</span>
            <span className="flex flex-col text-[13px] text-[#16231f]/80">
              <span className="flex items-center gap-0.5 text-[#d9a441]">
                {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className="h-3 w-3" />)}
              </span>
              <span className="underline-offset-2 hover:underline">{t.reviews.viewProfile}</span>
            </span>
          </a>
        </div>

        <div
        className="relative mx-auto mt-10 w-full max-w-xl px-9 sm:max-w-2xl sm:px-0 lg:max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex -mx-2 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {REVIEWS.map((r, i) => (
                <div key={r.id} className="flex-shrink-0 px-2" style={{ flex: `0 0 ${100 / perView}%` }}>
                  <article
                    className={`h-full rounded-2xl bg-[#f1e7d3] p-8 ${
                      i % 2 === 0 ? "border-t-4 border-[#0e5c55]" : "border-t-4 border-[#c05a2c]"
                    }`}
                  >
                    <IconQuote className="h-6 w-6 text-[#16231f]/20" />
                    <p className="font-display mt-4 text-[16px] italic leading-relaxed text-[#16231f]/90">
                      {lang === "es" ? r.es : r.en}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#16231f]">{r.author}</span>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-medium text-[#0e5c55] underline-offset-2 hover:underline"
                      >
                        {t.reviews.readOnGoogle}
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#16231f]/60 p-2 text-[#fbf5ea] transition-colors hover:bg-[#16231f]/85 sm:-left-4"
          >
            <IconChevron dir="left" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#16231f]/60 p-2 text-[#fbf5ea] transition-colors hover:bg-[#16231f]/85 sm:-right-4"
          >
            <IconChevron dir="right" className="h-4 w-4" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#0e5c55]" : "w-1.5 bg-[#16231f]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}