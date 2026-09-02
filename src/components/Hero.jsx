import { WhatsappLogo, ShieldCheck, MapPin } from "@phosphor-icons/react";
import heroMain from "../assets/tile1_hd.webp";
import heroSecondary from "../assets/tile3_hd.webp";
import { CTA_PRIMARY, CTA_SECONDARY, WHATSAPP_HREF } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--night)] pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      {/* subtle radial wash, brand green, kept to one accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "var(--brand)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Text column */}
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--night-line)] bg-white/5 px-4 py-1.5 text-sm font-semibold text-[var(--mist)]">
            <MapPin size={16} weight="fill" className="text-[var(--brand-bright)]" />
            Melgar, Tolima
          </div>

          <h1 className="font-display text-5xl leading-[0.95] text-[var(--mist)] sm:text-6xl lg:text-[4.6rem]">
            El cañón no espera.
            <br />
            <span style={{ color: "var(--brand-bright)" }}>Tú tampoco deberías.</span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--mist-soft)]">
            Torrentismo y turismo extremo con operador directo en Melgar.
            Guías locales, equipo certificado y una bajada de cascada que se
            queda contigo mucho después del domingo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-4 text-base font-bold text-white shadow-[0_3px_0_var(--brand-deep)] transition-all duration-150 hover:brightness-105 active:translate-y-[2px] active:shadow-none"
            >
              <WhatsappLogo size={20} weight="fill" />
              {CTA_PRIMARY}
            </a>
            <a
              href="#aventuras"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-bold text-[var(--mist)] transition-colors duration-150 hover:bg-white/5"
            >
              {CTA_SECONDARY}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--mist-soft)]">
            <ShieldCheck size={18} className="text-[var(--brand-bright)]" />
            Guías con formación en primeros auxilios y rescate en cañón
          </div>
        </div>

        {/* Photo column: two real, native-resolution shots, deliberately
            offset rather than stretched full-bleed, per DESIGN_VARIANCE. */}
        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[28px] shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:w-[72%]">
              <img
                src={heroMain}
                alt="Guía de Kamaly Aventuras descendiendo en rappel por una cascada en Melgar, Tolima"
                className="h-full w-full object-cover"
                width={854}
                height={900}
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 aspect-[4/5] w-[52%] overflow-hidden rounded-[22px] shadow-2xl shadow-black/50 ring-4 ring-[var(--night)] sm:-right-4 sm:w-[46%]">
              <img
                src={heroSecondary}
                alt="Torrentismo en cascada: descenso con casco y arnés en un cañón cerca de Melgar"
                className="h-full w-full object-cover"
                width={856}
                height={900}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
