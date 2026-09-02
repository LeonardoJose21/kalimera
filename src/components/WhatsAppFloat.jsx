import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_HREF, CTA_PRIMARY } from "../lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={CTA_PRIMARY}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-lg shadow-black/30 transition-transform duration-150 ease-out hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={26} weight="fill" />
    </a>
  );
}
