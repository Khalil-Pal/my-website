# Khalil Housheya — Portfolio Website
 
My personal portfolio site — showcasing who I am, what I've built, and how to reach me.
 
**Live site:** https://khalil-pal.github.io/my-website/ *(goes live once Pages is enabled — see Deployment)*
**Contact:** Khalilayed777@gmail.com
 
## About
 
I'm an Information Systems & Technologies student at LETI (Saint Petersburg), focused on backend development, web technologies, and building practical, user-focused digital products. This site is a single-page portfolio covering my background, skills, projects, and journey — available in **English, Arabic, and Russian**.
 
## Features
 
- 🌍 **Trilingual** — English / Arabic / Russian, with a language switcher that remembers your choice and renders Arabic in proper RTL layout
- 🎨 **Custom design** — dark, colorful theme with a distinct display font, smooth scroll-reveal animations, and an infinite auto-scrolling tech-stack marquee (pauses on hover)
- 📱 **Fully responsive** — built mobile-first
- 🧩 **Sections:** Hero · About · Skills · Projects · Journey (timeline) · Contact
## Tech Stack
 
- **React** + **TypeScript**
- **Vite** — build tool & dev server
- **lucide-react** — icons
- Plain CSS (custom design system, no framework)
## Project Structure
 
```
src/
 ├─ App.tsx            → page composition
 ├─ components/        → Header, Hero, Work, About, Skills, Journey, Contact, Footer
 ├─ translations.js    → all EN/AR/RU text content
 ├─ index.css          → styling & design system
 ├─ assets/            → images (portrait, project logos — WebP)
 └─ main.tsx           → app entry point
public/
 ├─ logoprotfolio.png  → favicon / brand mark
 ├─ og-image.jpg       → social preview card
 └─ resume.pdf         → linked from the Contact section
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

**One-time setup (you have to do this in the browser — I can't):**

1. Go to **Settings → Pages** in this repo.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the Actions tab).

The site then serves from `https://khalil-pal.github.io/my-website/`. That
sub-path is why `vite.config.ts` sets `base: '/my-website/'` — if you later
point a custom domain at this, change `base` to `'/'` and update the
`og:url`, `og:image` and `canonical` URLs in `index.html`.

## Résumé

The Contact section links to `/resume.pdf`, served from `public/resume.pdf`.
To update it, replace that file — no code change needed.
 ## Featured Projects
 
- **[Sandy Squirrel Bot](https://t.me/Sandy67_Bot)** — a Telegram bot for downloading media (YouTube, Instagram, Facebook) and converting files between formats, with an async backend, PostgreSQL, and tiered subscriptions.
- **Nidaa** — a Spring Boot & PostgreSQL platform connecting people in need with volunteers, organizations, and psychologists, with automated priority scoring, geolocation-based matching, and crisis detection *(in progress)*.
- **[Émilie Atelier](https://www.instagram.com/emilie.art4)** — a creative design studio for branding, invitations, and social media design.
## Contact
 
- Email: Khalilayed777@gmail.com
- LinkedIn: [linkedin.com/in/khalil-housheya](https://www.linkedin.com/in/khalil-housheya/)
- GitHub: [github.com/Khalil-Pal](https://github.com/Khalil-Pal)
- Telegram: [t.me/khalil_ayed](https://t.me/khalil_ayed)