import iconMark from "../assets/icon_mark.webp";
import {
  NAV_LINKS,
  WHATSAPP_HREF,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  LOCATION_NAME,
} from "../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--night-line)] bg-[var(--night)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2">
              <img src={iconMark} alt="Kamaly Aventuras" className="h-full w-full object-contain" />
            </div>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-[var(--mist-soft)]">
              Operador directo de ecoturismo y turismo de aventura en
              Melgar, Tolima.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-[var(--mist)]">Explorar</p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--mist-soft)] transition-colors hover:text-[var(--brand-bright)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-[var(--mist)]">Contacto</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--mist-soft)]">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-[var(--brand-bright)]"
                >
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL_HREF}
                  className="transition-colors hover:text-[var(--brand-bright)]"
                >
                  Llamadas: {PHONE_DISPLAY}
                </a>
              </li>
              <li>{LOCATION_NAME}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--night-line)] pt-6 text-xs text-[var(--mist-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kamaly Aventuras. Todos los derechos reservados.</p>
          <p>Melgar, Tolima, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
