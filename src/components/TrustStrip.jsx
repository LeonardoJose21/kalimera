import { FirstAidKit, Users, MapTrifold, Backpack } from "@phosphor-icons/react";
import { useReveal } from "../lib/useReveal";

const FACTS = [
  {
    icon: FirstAidKit,
    text: "Guías con formación en primeros auxilios y rescate",
  },
  {
    icon: Backpack,
    text: "Arnés, casco y cuerdas dinámicas para cada persona",
  },
  {
    icon: Users,
    text: "Grupos pequeños, ritmo pensado para principiantes",
  },
  {
    icon: MapTrifold,
    text: "Operador directo en Melgar, sin intermediarios",
  },
];

export default function TrustStrip() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="border-b border-[var(--stone-line)] bg-[var(--paper-elevated)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-none sm:grid-cols-4 sm:divide-x sm:divide-[var(--stone-line)]">
        {FACTS.map((fact, i) => {
          const Icon = fact.icon;
          return (
            <div
              key={fact.text}
              className={`flex flex-col items-start gap-3 border-b border-[var(--stone-line)] px-5 py-8 sm:border-b-0 sm:px-6 ${
                visible ? "reveal" : "opacity-0"
              }`}
              style={{ animationDelay: visible ? `${i * 70}ms` : undefined }}
            >
              <Icon size={26} weight="duotone" className="text-[var(--brand-deep)]" />
              <p className="text-[15px] font-semibold leading-snug text-[var(--ink)]">
                {fact.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
