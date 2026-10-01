# Regole di Progetto e Linee Guida di Sviluppo

## 1. ⚙️ Stack Tecnologico & Architettura
- **Framework & Runtime**: **Next.js** (App Router) con **React**, **TypeScript** e **Static Site Generation (SSG)** (`output: 'export'`).
- **UI & Styling**:
  - **Styled Components (v6)**: approccio Desktop-first, CSS-in-JS con `ThemeProvider`, compiler Next.js integrato per SSR/SSG senza FOUC.
  - Nessun framework CSS utility esterno per valorizzare le competenze CSS-in-JS.
  - Stile editoriale fotografico moderno, pulito, intuitivo e non AI slop.
- **Content Layer**:
  - Dati statici tipizzati e strutturati in locale (`src/data/`), nessun CMS esterno richiesto.
  - Copy, servizi, team, recensioni e selezioni derivati dal sito originale Unique Photography.
- **SEO & Performance**:
  - Prerendering statico 100% per Netlify.
  - Meta tag OpenGraph, Twitter Card, `sitemap.xml`, `robots.txt` e JSON-LD (`Photographer` / `LocalBusiness`).
- **Deploy**:
  - **Netlify**: configurazione tramite `netlify.toml` con output statico.

---

## 2. 🤖 Regole di Collaborazione con l'AI
- **Prima il Plan, poi il codice**: stilare sempre prima la pianificazione dettagliata e la TODO list.
- **Zero codice senza approvazione**: non scrivere o modificare file senza l'esplicito ok dell'utente.
- **Zero commit/push senza approvazione**: non eseguire alcun `git commit` o `git push` senza l'esplicita autorizzazione dell'utente. Prima di ogni commit/push, spiegare chiaramente cosa è stato fatto.
- **Approccio a piccoli passi (Step-by-Step)**: un task alla volta, verificabile e testabile.

---

## 3. 🌿 Git Flow, Commit & Release Standards
- **Git User Config**:
  - Email: `bonfi.alessio98@gmail.com`
- **Branch Strategy**:
  - `main`: protetto, unicamente per versioni stabili e deploy di produzione.
  - `develop`: branch di integrazione principale per lo sviluppo continuo.
  - Feature branch dedicati (`feat/...`, `fix/...`, `chore/...`, `refactor/...`).
- **Conventional Commits**:
  - Messaggi tassativamente in **inglese** (`feat: ...`, `chore: ...`, `style: ...`, `fix: ...`, `refactor: ...`).
  - **Singola riga** (nessun body o descrizione multiriga).
  - **Nessun footer `Co-authored-by`**.
  - Commit atomici e granulari per singola modifica/funzionalità.
- **Release Template (Changelog)**:
  ```markdown
  ## Release vX.Y.Z

  ### Features
  * **Nome Componente / Feature**: descrizione sintetica...

  ### Bug Fixes
  * **Nome Componente / Bug**: descrizione della correzione...
  ```

---

## 4. 🛠️ Code Quality & DevOps
- **Linter & Formatter**: ESLint + Prettier.
- **Package Manager**: **Yarn** (`yarn.lock`).
- **Comandi Principali**:
  - Sviluppo in locale: `yarn dev`
  - Build di produzione: `yarn build`
  - Linting: `yarn lint`
