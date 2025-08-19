# Miguel & Lili — Invitación de boda (SPA)

Aplicación web (SPA) hecha con React + Vite + TypeScript y Tailwind CSS para compartir la invitación de boda de Miguel & Lili, mostrar información clave del evento, galería, ubicaciones y permitir confirmar asistencia vía un formulario por pasos con envío de correo usando EmailJS.

## Índice

- Descripción y características
- Stack técnico
- Requisitos previos
- Instalación y scripts disponibles
- Variables de entorno (EmailJS)
- Estructura del proyecto
- Arquitectura y flujo de la app
- Personalización rápida (fecha, lugares, imágenes, música, estilos, textos)
- Rutas y navegación
- Despliegue (Vercel/Netlify/Static)
- Accesibilidad y SEO
- Resolución de problemas (FAQ)
- Roadmap / mejoras sugeridas
- Licencia y autoría

---

## Descripción y características

SPA responsiva que incluye:

- Pantalla de bienvenida con sello clicable que lleva a la app principal.
- Reproductor de música de fondo con botón de Play/Pause.
- Hero con nombres y fecha del evento.
- Versículo bíblico animado.
- Sección “Separa la fecha” con contador regresivo en tiempo real y enlace para agendar en Google Calendar.
- Sección de ubicaciones (ceremonia y recepción) con tarjeta visual y enlace a Google Maps.
- Carrusel de fotos y mensaje de código de vestimenta.
- Formulario de confirmación de asistencia por pasos (código de invitado → quiénes asisten → confirmación/envío).
- Envío de correo mediante EmailJS confirmando asistencia o no asistencia (alertas con SweetAlert2).
- Botón para volver al inicio (scroll to top).

## Stack técnico

- Vite 6 + React 19 + TypeScript 5.
- Tailwind CSS v4 (con plugin oficial para Vite) + variables de tema en CSS.
- Ant Design (componentes: Carousel, Radio) con tema personalizado vía `ConfigProvider`.
- Motion (Framer Motion v6 API) para animaciones declarativas.
- React Router (2 rutas: `/` y `/main`).
- Zustand para estado ligero (pasos del formulario y detección móvil).
- EmailJS (cliente navegador) para envío de correos.
- SweetAlert2 para toasts/alertas de confirmación.
- Eslint + typescript-eslint para linting.

## Requisitos previos

- Node.js 18.18+ o 20+ (recomendado LTS). Vite 6 requiere Node >= 18.
- npm 9+ (o tu gestor preferido). Este repo usa npm por defecto.

## Instalación y scripts disponibles

1) Instala dependencias.

```bash
npm install
```

2) Crea el archivo `.env` con las variables de EmailJS (sección siguiente).

3) Ejecuta el entorno de desarrollo.

```bash
npm run dev
```

Scripts principales (package.json):

- Desarrollo: `npm run dev`
- Build producción: `npm run build`
- Previsualización del build: `npm run preview`
- Linter: `npm run lint`

Ejemplos:

```bash
# Compilar para producción
npm run build

# Servir el build para probar en local
npm run preview
```

Puertos: Vite suele usar `http://localhost:5173` por defecto.

## Variables de entorno (EmailJS)

El formulario envía un correo con EmailJS. Configura un servicio y una plantilla en https://www.emailjs.com y crea un archivo `.env` en la raíz con:

```
VITE_REACT_APP_SERVICE_ID_EMAILJS=tu_service_id
VITE_REACT_APP_TEMPLATE_ID_EMAILJS=tu_template_id
VITE_REACT_APP_PUBLIC_KEY_EMAILJS=tu_public_key
```

Datos que se envían a la plantilla (depende de si hay asistencia o no):

- Si SÍ asisten: `adults` (texto con nombres separados por salto de línea), `kids` (texto similar; puede ser vacío), `id` (familia), `nonAttendance` (false).
- Si NO asisten: `message` (motivo opcional), `id` (familia), `nonAttendance` (true).

Archivo relevante: `src/services/send-mail.ts`.

## Estructura del proyecto

Alta nivel (carpetas principales):

- `src/` — código fuente React/TSX.
  - `components/` — componentes reutilizables (botones, carrusel, tarjetas, formulario por pasos, etc.).
  - `sections/` — secciones de página que componen las vistas.
  - `constants/` — constantes de app (animaciones, invitados, URL de Google Calendar).
  - `interfaces/` — tipos TypeScript (FormState, Guest, Timer).
  - `services/` — integraciones (EmailJS).
  - `store/` — estado global (Zustand).
  - `utils/` — utilidades (alertas, capitalización, cálculo de countdown).
  - `assets/css/` — estilos base y tema Tailwind.
- `public/` — archivos estáticos servidos tal cual (imágenes, audio, íconos).

Entradas clave:

- `index.html` — HTML base, meta OG/Twitter.
- `src/main.tsx` — arranque React.
- `src/App.tsx` — enruta `/` (banner) y `/main` (app principal) y define tema de AntD.
- `vite.config.ts` — configuración Vite + plugins React y Tailwind.

## Arquitectura y flujo de la app

Rutas:

- `/` — `HomeBanner`: pantalla de portada. El sello central (imagen `sello.webp`) navega a `/main`.
- `/main` — Layout con:
  - Elementos fijos: `MusicButton`, `BackgroundImage`, `ButtonToTop`.
  - Secciones: `Hero` → `BibleVerse` → `Countdown` → `Locations` → `CarouselSection` → `AttendConfirm` → `Footer`.

Estado global:

- `useFormSteps` (Zustand) — máquina de 3 pasos para el formulario (first/second/third).
- `useIsMobileStore` — booleana calculada (viewport < 640px) para escoger animaciones.

Formulario de asistencia (`src/components/AttendForm.tsx`):

1) Paso 1: Validación de código de invitado contra `src/constants/guests.ts`.
2) Paso 2: Selección de asistencia por persona (adultos/niños) con `Radio.Group` (AntD).
3) Paso 3: Resumen. Si nadie asiste, se pide mensaje opcional (no asistencia). Envío por EmailJS y `SweetAlert2` para feedback.

Animaciones:

- Declaradas en `src/constants/animations.ts` y aplicadas con `motion`.

Temas y estilos:

- Tailwind v4 con `@tailwindcss/vite` y tema en `src/assets/css/index.css` (paleta oliva/nyanza y fuentes Great Vibes/Montserrat).
- AntD `ConfigProvider` personaliza Carousel y Radio con la paleta del tema.

## Personalización rápida

Fecha del evento y countdown:

- Fecha real del cómputo: `src/utils/get-coutdown-timer.ts` (modifica `new Date("2025-11-02T19:30:00")`).
- Texto mostrado bajo el título: `src/sections/Countdown.tsx` → etiqueta con “2 de Noviembre de 2025 - 2:30PM”.

Enlace de Google Calendar:

- `src/constants/google-calendar-url.ts`: ajusta `eventTitle`, `dates` (rango en formato `YYYYMMDDTHHmmssZ/YYYYMMDDTHHmmssZ`) y `location` (URL-encoded).

Ubicaciones (tarjetas):

- `src/sections/Locations.tsx`: edita el array `cardsInfo` (título, lugar, hora, dirección, link a Maps e imagen).

Imágenes del carrusel:

- `src/sections/CarouselSection.tsx`: actualiza las rutas de las imágenes. Nota: se referencia `horizontal1.jpeg` que no existe en `public/pictures/`. Añádela o reemplázala por una imagen existente.

Imagen de fondo:

- `src/sections/BackgroundImage.tsx`: cambia `src="/pictures/portada.avif"` por la deseada.

Música de fondo:

- Archivo en `public/audio/dos-palomas.mp3`. Cambia el nombre/ubicación y actualiza `src/components/MusicButton.tsx`.

Colores y fuentes (tema):

- `src/assets/css/index.css`: variables `@theme` controlan paleta y tipografías. Puedes añadir utilidades con `@apply`.

Textos clave:

- `Hero.tsx`, `BibleVerse.tsx`, `CarouselSection.tsx` (código de vestimenta), `Footer.tsx` (créditos) y `HomeBanner.tsx` (copy de bienvenida).

Listado de invitados y códigos:

- `src/constants/guests.ts`: arreglo `allGuests` con `code`, `id`, `adults`, `kids`. Los códigos se comparan en minúsculas y con trim.

## Rutas y navegación

- `HomeBanner` (`/`): CTA central que navega a `/main`.
- `App.tsx` define el Router. Si personalizas rutas, actualiza también enlaces/CTA.

## Despliegue

Es una SPA estática; el resultado de `npm run build` puede alojarse en cualquier CDN/hosting estático.

- Vercel: importa el repo, framework “Vite”, build `npm run build`, output `dist/`.
- Netlify: build `npm run build`, publish `dist/`.
- GitHub Pages: sirve el contenido del directorio `dist/` (recuerda configurar `base` en Vite si usas subruta).

Variables de entorno: define las de EmailJS en el panel de tu proveedor (Vercel/Netlify) con el prefijo `VITE_`.

## Accesibilidad y SEO

- Metadatos OG/Twitter en `index.html`. Nota: `twitter:image` actualmente apunta a `/logo-widding-white.png` (posible typo). Debe ser `/logo-wedding-white.png`.
- Contraste suficiente de colores del tema oliva/nyanza y tipografía legible.
- Botón de música: los navegadores pueden bloquear autoplay; se controla al montar, pero puede requerir interacción del usuario en dispositivos/ajustes estrictos.
- Navegación simple, secciones con jerarquía de encabezados.

## Resolución de problemas (FAQ)

1) No se envían correos.
	- Verifica las 3 variables de EmailJS y que el servicio/plantilla existen.
	- Revisa en la plantilla que los campos esperados existan (`adults`, `kids`, `id`, `message`, `nonAttendance`).
	- En local, revisa la consola del navegador por mensajes/errores (el servicio retorna `status !== 200` en caso de fallo).

2) El reproductor no suena al entrar.
	- Políticas de autoplay pueden bloquear reproducción automática. Usa el botón para iniciar la música.

3) El carrusel muestra una imagen rota.
	- Sustituye `horizontal1.jpeg` o súbela a `public/pictures/`.

4) Tailwind no aplica estilos.
	- Este proyecto usa Tailwind v4 con el plugin `@tailwindcss/vite` y variables en `index.css`. Asegúrate de no eliminar el import `@import "tailwindcss";` y que `vite` cargue el plugin (ver `vite.config.ts`).

5) El botón “volver arriba” aparece siempre u ocasiona escuchas duplicadas.
	- El componente añade un `scroll` listener global; si lo reutilizas/extiendes, considera limpiar el listener en `useEffect` para evitar fugas.

## Roadmap / mejoras sugeridas

- Panel de administración para gestionar invitados/códigos (en vez de constantes locales).
- Persistencia de respuestas (por ejemplo, en Firestore o Supabase) además del correo de confirmación.
- Plantilla de EmailJS con formato más rico (HTML, condicionales).
- i18n para soportar múltiples idiomas.
- Pruebas unitarias de componentes clave (formulario, countdown) y CI simple (lint + build).
- Accesibilidad: mejorar focus styles y navegación por teclado en el formulario por pasos.

## Licencia y autoría

- © 2025. Proyecto personal de invitación de boda.
- Autor: Miguel Ángel Fernández — Portafolio: https://miguelangeldev.vercel.app
- Licencia: no especificada (uso personal). Si deseas reutilizar, por favor consulta con el autor.

---

### Referencias rápidas de archivos

- Rutas y layout: `src/App.tsx`, `src/main.tsx`
- Tema y estilos: `src/assets/css/index.css`, `vite.config.ts`, `tailwind.config.js`
- Animaciones: `src/constants/animations.ts`
- Countdown: `src/utils/get-coutdown-timer.ts`, `src/components/CoutdownTimer.tsx`
- Google Calendar: `src/constants/google-calendar-url.ts`
- Ubicaciones: `src/sections/Locations.tsx`, `src/components/LocationCard.tsx`
- Galería y vestimenta: `src/sections/CarouselSection.tsx`
- Formulario: `src/components/AttendForm.tsx` y `src/components/form-steps/*`
- Invitados: `src/constants/guests.ts`
- Email: `src/services/send-mail.ts`
- Tienda (estado): `src/store/*`

