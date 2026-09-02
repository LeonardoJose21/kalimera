// Single source of truth for contact details and repeated copy.
// Keeping this centralized means every CTA on the site stays word-for-word
// consistent, and the phone number only has to be corrected in one place.

export const PHONE_DISPLAY = "311 245 0226";
export const PHONE_E164 = "+573112450226";
export const PHONE_TEL_HREF = `tel:${PHONE_E164}`;

const WHATSAPP_MESSAGE =
  "Hola Kamaly, quiero reservar un plan de aventura 🏞️";

export const WHATSAPP_HREF = `https://wa.me/573112450226?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// TODO(cliente): reemplazar por el usuario real de Instagram cuando lo confirmen.
export const INSTAGRAM_HREF = null;

export const LOCATION_NAME = "Melgar, Tolima";
export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Kamaly+Aventuras+Melgar+Tolima";

export const CTA_PRIMARY = "Reservar por WhatsApp";
export const CTA_SECONDARY = "Ver aventuras";

export const NAV_LINKS = [
  { href: "#aventuras", label: "Aventuras" },
  { href: "#galeria", label: "Galería" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#ubicacion", label: "Ubicación" },
];
