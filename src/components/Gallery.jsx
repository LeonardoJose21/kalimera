import tile1 from "../assets/tile1_hd.webp";
import tile2 from "../assets/tile2_hd.webp";
import tile3 from "../assets/tile3_hd.webp";
import tile4 from "../assets/tile4_hd.webp";
import tile5 from "../assets/tile5_hd.webp";
import tile6 from "../assets/tile6_hd.webp";
import tile7 from "../assets/tile7_hd.webp";
import { useReveal } from "../lib/useReveal";

const PHOTOS = [
  {
    src: tile5,
    alt: "Guías subiendo entre las paredes de un cañón angosto cerca de Melgar, Tolima",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: tile7,
    alt: "Dos guías de Kamaly Aventuras con uniforme verde de la marca al aire libre",
    span: "sm:col-span-2",
  },
  { src: tile1, alt: "Descenso en rappel por una cascada en Melgar, Tolima" },
  {
    src: tile2,
    alt: "Guía de Kamaly Aventuras sonriendo con casco blanco antes del descenso",
  },
  {
    src: tile3,
    alt: "Torrentismo en cascada con casco verde y arnés de seguridad",
  },
  {
    src: tile4,
    alt: "Descenso técnico entre rocas dentro de un cañón del Tolima",
  },
  {
    src: tile6,
    alt: "Revisión del equipo de cuerdas y arnés antes de bajar al cañón",
  },
];

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="galeria" className="bg-[var(--paper)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-[var(--ink)] sm:text-5xl">
            Así se ve un domingo en Kamaly
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">
            Fotos reales de nuestras salidas, sin producción de estudio.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4"
        >
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`group overflow-hidden rounded-2xl ${
                photo.span ?? ""
              } ${visible ? "reveal" : "opacity-0"}`}
              style={{ animationDelay: visible ? `${i * 55}ms` : undefined }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
                  i === 0
                    ? "aspect-[4/5] sm:aspect-auto"
                    : "aspect-square sm:aspect-auto"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
