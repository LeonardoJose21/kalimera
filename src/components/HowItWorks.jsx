import { useReveal } from "../lib/useReveal";

const STEPS = [
  {
    title: "Escribes por WhatsApp",
    body: "Nos cuentas cuántos son, la fecha y si alguien del grupo no sabe nadar o tiene alguna condición médica. Te confirmamos cupo y precio ahí mismo.",
  },
  {
    title: "Llegas al punto de encuentro",
    body: "Nos vemos en Melgar. Te entregamos casco, arnés y el resto del equipo, y lo ajustamos a tu talla antes de caminar hacia el cañón.",
  },
  {
    title: "Briefing de seguridad",
    body: "El guía explica las señales de mano, cómo funciona el freno del rappel y por dónde va el recorrido, antes de que nadie toque el agua.",
  },
  {
    title: "Bajas el cañón",
    body: "El descenso, con el guía contigo en cada cascada y en cada tramo de roca. Aquí es donde pasa lo que viniste a buscar.",
  },
  {
    title: "Sales y te cambias",
    body: "Terminas la ruta, te cambias de ropa y compartimos entre todos el registro fotográfico y de video del día.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="experiencia"
      className="bg-[var(--night)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 className="font-display text-4xl text-[var(--mist)] sm:text-5xl">
          Cómo es el día
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-[var(--mist-soft)]">
          Cinco momentos, del primer mensaje al último tramo del cañón.
        </p>

        <ol ref={ref} className="mt-12 flex flex-col">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`relative flex gap-6 pb-10 last:pb-0 ${
                visible ? "reveal" : "opacity-0"
              }`}
              style={{ animationDelay: visible ? `${i * 80}ms` : undefined }}
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[19px] top-11 h-[calc(100%-1.5rem)] w-px bg-[var(--night-line)]"
                />
              )}
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg"
                style={{
                  background: "var(--brand)",
                  color: "var(--night)",
                }}
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-[var(--mist)]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[54ch] text-[15px] leading-relaxed text-[var(--mist-soft)]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
