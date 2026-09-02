import { ArrowRight } from "@phosphor-icons/react";
import tile3 from "../assets/tile3_hd.webp";
import tile4 from "../assets/tile4_hd.webp";
import tile7 from "../assets/tile7_hd.webp";
import { useReveal } from "../lib/useReveal";
import { CTA_PRIMARY, WHATSAPP_HREF } from "../lib/constants";

const OFFERINGS = [
  {
    title: "Torrentismo",
    body: "Descenso en rappel por cascadas activas, con doble línea de seguridad y un guía que va contigo en cada tramo del cañón. Es la actividad insignia de Kamaly y la razón por la que la gente vuelve.",
    image: tile3,
    alt: "Guía de Kamaly Aventuras haciendo torrentismo, descendiendo una cascada con casco verde",
    reverse: false,
  },
  {
    title: "Rappel y descenso en roca",
    body: "Bajadas técnicas por paredes de roca dentro del cañón, para quienes quieren la parte de escalada y descenso sin necesitar experiencia previa. Todo el equipo se ajusta a tu talla antes de salir.",
    image: tile4,
    alt: "Persona con casco verde descendiendo entre rocas en un cañón cerca de Melgar",
    reverse: true,
  },
  {
    title: "Planes y logística para grupos",
    body: "Organizamos la salida completa para grupos de amigos y colegas: equipo, guías y el orden del día, para que solo tengas que llegar y meterte al agua.",
    image: tile7,
    alt: "Dos guías de Kamaly Aventuras con uniforme de la marca al final de una jornada de aventura",
    reverse: false,
  },
];

function Offering({ title, body, image, alt, reverse, index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-center gap-8 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
        index > 0 ? "border-t border-[var(--stone-line)]" : ""
      }`}
    >
      <div
        className={`${reverse ? "lg:order-2" : ""} ${
          visible ? "reveal" : "opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full max-h-[420px] object-cover"
          />
        </div>
      </div>
      <div
        className={`${reverse ? "lg:order-1" : ""} ${
          visible ? "reveal" : "opacity-0"
        }`}
        style={{ animationDelay: visible ? "90ms" : undefined }}
      >
        <h3 className="font-display text-3xl text-[var(--ink)] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">
          {body}
        </p>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[var(--brand-deep)] transition-colors hover:text-[var(--ink)]"
        >
          {CTA_PRIMARY}
          <ArrowRight size={16} weight="bold" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="aventuras" className="bg-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl pt-16 sm:pt-24">
          <h2 className="font-display text-4xl text-[var(--ink)] sm:text-5xl">
            Lo que se vive en Kamaly
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">
            Tres formas de meterte al cañón, todas con el mismo estándar de
            equipo y guía, pensadas para quienes suben desde Bogotá el fin
            de semana y para quienes viven aquí en el Tolima.
          </p>
        </div>

        <div>
          {OFFERINGS.map((offering, i) => (
            <Offering key={offering.title} index={i} {...offering} />
          ))}
        </div>
      </div>
    </section>
  );
}
