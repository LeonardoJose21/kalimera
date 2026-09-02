import { Check } from "@phosphor-icons/react";
import tile6 from "../assets/tile6_hd.webp";
import { useReveal } from "../lib/useReveal";

const POINTS = [
  "Revisamos casco, arnés, cuerdas dinámicas y mosquetones antes de cada salida.",
  "El guía va contigo en el agua, no mirando desde la orilla.",
  "Grupos pequeños, para que el guía pueda ver a cada persona en todo momento.",
  "Briefing de seguridad y práctica del freno de rappel antes de tocar el agua.",
  "Chalecos disponibles para quien no sepa nadar bien.",
];

export default function Safety() {
  const { ref, visible } = useReveal();

  return (
    <section id="seguridad" className="bg-[var(--paper-elevated)] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div ref={ref} className={visible ? "reveal" : "opacity-0"}>
          <h2 className="font-display text-4xl text-[var(--ink)] sm:text-5xl">
            Adrenalina, con cabeza fría
          </h2>
          <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-[var(--ink-soft)]">
            El torrentismo es un deporte de riesgo real. Por eso el equipo y
            el guía no son un detalle, son la mitad de la experiencia.
          </p>

          <ul className="mt-8 flex flex-col divide-y divide-[var(--stone-line)]">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 py-4">
                <Check
                  size={18}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-[var(--brand-deep)]"
                />
                <span className="text-[15px] leading-relaxed text-[var(--ink)]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src={tile6}
            alt="Guía de Kamaly Aventuras revisando el equipo de cuerdas antes del descenso"
            loading="lazy"
            className="h-full max-h-[560px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
