# Renvia — Eco-friendly Packaging Solutions (Singapore)

A modern, responsive, SEO-optimized website for Renvia built with React + Vite + Tailwind CSS, with a Node/Express backend for the contact form.

## Tech Stack
- Frontend: React 18, Vite, Tailwind CSS, React Router, Framer Motion, react-helmet-async
- Backend: Node.js, Express, Nodemailer, CORS, dotenv
- SEO: Meta/Og tags, robots.txt, sitemap.xml, JSON-LD schema

## Project Structure
```
renvia/
  public/
    favicon.svg
    og-image.svg
    robots.txt
    sitemap.xml
    catalogue.pdf
  src/
    components/
      Navbar.jsx, Footer.jsx, SEO.jsx, Hero.jsx, ProductCard.jsx, NewsletterForm.jsx
    pages/
      Home.jsx, About.jsx, Products.jsx, Industries.jsx, Portfolio.jsx, Pricing.jsx, Contact.jsx, FAQ.jsx, Blog.jsx
    App.jsx
    index.css
    main.jsx
  server/
    index.js
    .env.example
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.js
  README.md
```

## Prerequisites
- Install Node.js (LTS) from https://nodejs.org
- Verify npm is available in your terminal: `node -v` and `npm -v`

## Setup & Run (Development)
Open two terminals:

1) Frontend
```
cd renvia
npm install
npm run dev
```
- App runs at http://localhost:5173

2) Backend
```
cd renvia/server
npm install
cp .env.example .env  # On Windows, manually create .env from example
# Fill SMTP credentials in .env
npm run dev
```
- Server runs at http://localhost:5055

Contact form posts to `POST /api/contact` with JSON: `{ name, email, business, message }`.

## Environment Variables (server/.env)
- PORT=5055
- EMAIL_HOST=smtp.example.com
- EMAIL_PORT=587
- EMAIL_USER=your_smtp_username
- EMAIL_PASS=your_smtp_password
- EMAIL_FROM=website@renvia.sg
- CONTACT_TO=info@renvia.sg

## SEO
- Base tags in `index.html`; page-specific titles/descriptions via `SEO.jsx`.
- OG image: `public/og-image.svg`.
- robots.txt and sitemap.xml in `public/`.
- Example JSON-LD on `Products.jsx` (ItemList of Product).

## Styling & UX
- Tailwind utility classes with a custom `brand` color scale.
- Sticky navbar, responsive drawer on mobile.
- Motion: hero media entrance via Framer Motion.
- Buttons: `btn btn-primary` and `btn btn-outline`.

## Mailchimp Integration (placeholder)
- Newsletter component `NewsletterForm.jsx` simulates async subscribe.
- Replace simulated code with your Mailchimp API or form action URL.

## Production Build
```
npm run build
npm run preview
```
- Outputs to `dist/`. Deploy the `dist` folder to static hosting (Netlify, Vercel, etc.).
- Backend can be deployed separately (Render, Railway, etc.). Update `Contact.jsx` API URL accordingly.

## Notes
- Images are placeholders. Replace with optimized WebP/AVIF assets and alt text.
- `public/catalogue.pdf` is an empty placeholder; replace with a real PDF.

## License
All rights reserved © Renvia Pte. Ltd.
