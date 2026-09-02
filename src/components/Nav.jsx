import { useState } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import logo from "../assets/logo_full_transparent.webp";
import { NAV_LINKS, CTA_PRIMARY, WHATSAPP_HREF } from "../lib/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--stone-line)] bg-[var(--paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Kamaly Aventuras"
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-[var(--ink-soft)] transition-colors duration-150 hover:text-[var(--brand-deep)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_2px_0_var(--brand-deep)] transition-all duration-150 hover:brightness-105 active:translate-y-[1px] active:shadow-none"
          >
            <WhatsappLogo size={18} weight="fill" />
            {CTA_PRIMARY}
          </a>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:bg-black/5"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--stone-line)] bg-[var(--paper)] px-5 py-4">
          <nav
            className="flex flex-col gap-1"
            aria-label="Navegación móvil"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-semibold text-[var(--ink)] transition-colors hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white"
            >
              <WhatsappLogo size={18} weight="fill" />
              {CTA_PRIMARY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
