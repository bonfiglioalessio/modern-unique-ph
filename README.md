# Simone Bonfiglio — Unique Photography

Sito web e portfolio contemporaneo per **Simone Bonfiglio** (Sanremo, Liguria), fotografo di matrimoni documentari, ritratti e destination wedding in Riviera dei Fiori e Costa Azzurra.

---

## ⚡ Stack Tecnologico

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router) con esportazione statica al 100% (**SSG** / `output: 'export'`).
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/) per una solida tipizzazione del layer dati.
- **Styling**: [Styled Components v6](https://styled-components.com/) con configurazione compiler Next.js SSR/SSG nativa (zero FOUC, zero CSS utility esterne).
- **Design Philosophy**: Stile **Flat Editorial Contemporaneo** senza "AI-slop":
  - Superfici uniche (`colors.card`) senza scatole dentro scatole;
  - Divisori hairline discreti (`colors.divider`);
  - Tipografia editoriale curata (Playfair Display + Plus Jakarta Sans) in sentence case;
  - Componenti interattivi fluidi: **Hero Slider** dinamico con progress bar, **Carosello Storie & Reportage** con scroll orizzontale nativo e **Slider Recensioni** 5.0 verificate;
  - Lightbox fotografico a tutto schermo con supporto da tastiera (Esc, Frecce).
- **SEO & Hosting**: Meta tag OpenGraph, Twitter Cards, `robots.txt`, `sitemap.xml` dinamica e configurazione pronta per il deploy su **Netlify** (`netlify.toml`).

---

## 🚀 Comandi Principali

Assicurarsi di avere [Yarn](https://yarnpkg.com/) installato:

```bash
# Installazione delle dipendenze
yarn install

# Avvio del server di sviluppo locale (http://localhost:3000)
yarn dev

# Build di produzione e generazione SSG (output in /out)
yarn build

# Controllo qualità del codice e linter
yarn lint
```

---

## 📂 Struttura del Progetto

```text
├── public/                 # Asset statici (loghi, favicon)
├── src/
│   ├── app/                # Next.js App Router (Pagine: /, /chi-sono, /matrimoni, /servizi, /gallery, /recensioni, /contatti)
│   ├── components/         # Componenti UI (HeroSlider, StoriesCarousel, ReviewsSlider, Navbar, Footer, Lightbox, ecc.)
│   ├── data/               # Layer dati tipizzato in locale (site, gallery, services, about, reviews, awards)
│   ├── lib/                # Registry Styled Components per SSR e Theme Provider
│   └── styles/             # Token del design system, tema e GlobalStyles
├── AGENTS.md               # Regole di progetto, Git Flow e linee guida di sviluppo
├── design_guidelines.md    # Standard obbligatorio UI flat (anti AI-slop)
├── netlify.toml            # Configurazione di deploy statico per Netlify
└── next.config.js          # Configurazione Next.js (SSG export, styled-components)
```

---

## 🌿 Git Flow & Regole di Contribuzione

- Branch `main`: branch protetto per release stabili e deploy di produzione.
- Branch `develop`: branch di integrazione principale per lo sviluppo continuo.
- Feature branches: `feat/...`, `fix/...`, `chore/...` uniti tramite PR o merge granulari.
- Commit convention: [Conventional Commits](https://www.conventionalcommits.org/) in inglese su singola riga.
