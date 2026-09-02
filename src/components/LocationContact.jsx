import { WhatsappLogo, Phone, MapPin, ArrowUpRight } from "@phosphor-icons/react";
import { useReveal } from "../lib/useReveal";
import {
  CTA_PRIMARY,
  WHATSAPP_HREF,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  LOCATION_NAME,
  MAPS_HREF,
} from "../lib/constants";

export default function LocationContact() {
  const { ref, visible } = useReveal();

  return (
    <section id="ubicacion" className="bg-[var(--night)] py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-5 text-center sm:px-8 ${
          visible ? "reveal" : "opacity-0"
        }`}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--night-line)] bg-white/5 px-4 py-1.5 text-sm font-semibold text-[var(--mist)]">
          <MapPin size={16} weight="fill" className="text-[var(--brand-bright)]" />
          {LOCATION_NAME}
        </div>

        <h2 className="font-display text-4xl text-[var(--mist)] sm:text-5xl">
          Escríbenos y coordinamos tu bajada
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-lg leading-relaxed text-[var(--mist-soft)]">
          Contamos fecha, número de personas y nivel de experiencia. En
          minutos tienes confirmado el plan y el punto de encuentro.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-base font-bold text-white shadow-[0_3px_0_var(--brand-deep)] transition-all duration-150 hover:brightness-105 active:translate-y-[2px] active:shadow-none sm:w-auto"
          >
            <WhatsappLogo size={20} weight="fill" />
            {CTA_PRIMARY}
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-[var(--mist)] transition-colors duration-150 hover:bg-white/5 sm:w-auto"
          >
            <Phone size={20} weight="fill" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <a
          href={MAPS_HREF}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mist-soft)] transition-colors hover:text-[var(--brand-bright)]"
        >
          Ver punto de encuentro en el mapa
          <ArrowUpRight size={16} weight="bold" />
        </a>
      </div>
    </section>
  );
}
