# Kamaly Aventuras — sitio web

## Cómo verlo en tu computador (2 minutos)

Necesitas [Node.js](https://nodejs.org) instalado (versión 18 o más reciente).

```bash
npm install
npm run dev
```

Abre el link que aparece en la terminal (normalmente `http://localhost:5173`).

## Cómo publicarlo

```bash
npm run build
```

Esto genera la carpeta `dist/`. Súbela a Netlify, Vercel, o cualquier hosting
estático (arrastra la carpeta a netlify.com/drop para la forma más rápida).

## Antes de publicar de verdad

- Busca `INSTAGRAM_HREF` en `src/lib/constants.js` y pon el link real de tu Instagram.
- El número de WhatsApp/llamadas está en el mismo archivo (`PHONE_E164`).
- Cambia `https://www.kamalyaventuras.com` en `index.html` por tu dominio real cuando lo tengas.
