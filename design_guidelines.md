# Linee Guida UI & Design System (Stile Piatto & Editoriale)

Standard obbligatorio per ogni nuova schermata, modale o componente di **Unique Photography**. 

---

## 1. 🎯 Principio Fondamentale: No AI Slop

L'interfaccia rifiuta i cliché grafici da template generico ("AI slop"): box dentro box, ogni elemento chiuso in una card con bordo arrotondato, badge-icona in quadratini colorati, etichette MAIUSCOLE spaziate, ombre artificiali e doppie CTA piene.

Lo standard è **piatto, pulito ed editoriale**:
- La gerarchia visiva nasce da **spazio bianco**, **dimensione/peso del testo** e **lievi cambi di superficie**, non da bordi o box-shadow.
- Le liste sono **righe separate da divisori hairline** (`colors.divider`), non card impilate.
- **Una sola superficie** (`colors.card`) per gruppo logico: mai una card dentro un'altra card.
- **Niente emoji** nei titoli, nei sottotitoli o nei bottoni (es. no 📷, 🤙, 🏆, 🥰). Il tono è calmo, elegante e professionale.
- L'accento colora ciò che è interattivo o importante, non elementi decorativi casuali.

---

## 2. 🎨 Token e Palette

Sempre dal tema centralizzato (`theme.colors`). Mai valori hex arbitrari nei componenti.

| Token | Valore | Uso |
| --- | --- | --- |
| `colors.background` | `#FAF8F5` | Sfondo generale della pagina (caldo lino naturale) |
| `colors.card` | `#FFFFFF` | L'unica superficie del gruppo logico (liste raggruppate, form, modali) |
| `colors.cardSecondary` | `#F2EFEB` | Elemento annidato dentro `card` (input pieni, selettore attivo, blocchi neutri) |
| `colors.divider` | `rgba(0, 0, 0, 0.08)` | Divisori hairline orizzontali tra righe |
| `colors.dividerDark` | `rgba(255, 255, 255, 0.12)` | Divisori hairline su sfondi scuri |
| `colors.darkBackground` | `#121212` | Sfondo sezioni scure (footer, recensioni) |
| `colors.darkCard` | `#1A1A1A` | Superficie scura per gruppi di contenuto |
| `colors.text` | `#161616` | Titoli, testo primario ad alto contrasto |
| `colors.textSecondary` | `#555555` | Descrizioni, paragrafi, testi secondari |
| `colors.textMuted` | `#888888` | Meta informazioni, date, etichette secondarie |
| `colors.accent` | `#8C7355` | Ottone/bronzo caldo per link attivi, elementi interattivi e hover |
| `colors.accentLight` | `#EFE9E1` | Sfondo tonale leggero per selezioni e dettagli |

---

## 3. 📐 Superfici, Raggi di Curvatura & Spaziature

- **Massimo 1 livello di superficie**: dentro `colors.card` si usano solo righe con divisori o al massimo `cardSecondary` funzionale (es. input del form).
- **Raggi di curvatura (`theme.radius`)**:
  - `sm` (`8px`): thumbnail foto, segmenti attivi del selettore.
  - `md` (`14px`): pulsanti primari (CTA), input pieni, dropdown menu.
  - `lg` (`20px`): superfici di gruppo (superficie servizi, form contatti, lista recensioni).
  - `xl` (`24px`): grandi hero banner fotografici.

| Spaziatura | Valore |
| --- | --- |
| Gutter orizzontale container | `padding: 0 1.5rem` (desktop), `0 1.25rem` (mobile) |
| Distanza tra sezioni | `padding: 5rem 1.5rem` (desktop), `3.5rem 1.25rem` (mobile) |
| Etichetta di sezione → titolo | `margin-bottom: 0.5rem` |
| Riga di lista | `padding: 1.5rem 0` a `1.75rem 0` |
| Divisore tra righe | `1px solid colors.divider` |

---

## 4. 🚫 Bordi e Ombre

**Vietati di default.** Nessun `borderWidth` decorativo marcato, nessun `box-shadow` / elevation pesante su card, righe o pulsanti.

**Eccezioni ammesse**:
- Divisori hairline sottili (`1px solid colors.divider` o `colors.dividerDark`).
- Micro-bordo hairline perimetrale di contrasto sulle superfici `card` (`1px solid colors.divider`).

---

## 5. ✍️ Tipografia & Tono di Voce

- **Font Principali**:
  - Serif (`Spectral`): titoli editoriali, citazioni, titoli di sezione.
  - Sans (`Plus Jakarta Sans`): testi di lettura, UI, etichette, bottoni.
- **Sentence Case Obbligatorio**:
  - Titoli ed etichette sempre in sentence case ("Come lavoriamo", "Premi e credenziali", "Nome e cognome").
  - **Niente `text-transform: uppercase` con `letter-spacing` esagerato** per le etichette ordinarie.
  - Etichetta di sezione standard: `0.9375rem` (15px), `font-weight: 600`, colore `accent`.
- **Tono dei Testi**:
  - Calmo, autentico, sobrio, empatico.
  - Nessuna parola da motivatore ("spettacolare!", "il top del top!", punti esclamativi a catena).

---

## 6. 🧩 Pattern di Riferimento

### A. Lista a righe con divisore hairline su superficie unica (Home / Matrimoni)
```tsx
<ServicesListSurface>
  {services.map((service, index) => (
    <ServiceRow key={service.id}>
      <div className="thumb"><img src={service.image} alt={service.title} /></div>
      <div className="info">
        <span className="tag">{service.subtitle}</span>
        <h3>{service.title}</h3>
        <p>{service.shortDesc}</p>
      </div>
      <div className="action">
        <TextAction href="...">Dettagli <FiArrowRight /></TextAction>
      </div>
    </ServiceRow>
  ))}
</ServicesListSurface>
```

### B. Form piatto con input pieni (Contatti)
- Contenitore: `colors.card` (radius 20, padding 2.5rem).
- Input e textarea: `background: colors.cardSecondary`, `border: none`, `border-radius: 14px`, `font-size: 16px` (obbligatorio per prevenire l'auto-zoom su iPhone).
- Pulsante: una sola CTA piena per form (`background: colors.text`, `color: #fff`, radius 14).

### C. Azioni: Primaria Piena vs Secondaria Solo Testo
- **Azione Primaria**: bottone pieno (`background: colors.text` o `accent`, `border-radius: 14px`, `font-weight: 600`).
- **Azione Secondaria**: solo testo colorato in `accent` con freccia discreta `<FiArrowRight />`, nessuno sfondo o bordo.
- **Mai due bottoni pieni affiancati.**

### D. Icone Nude
- Icone vettoriali (`react-icons`) nude affiancate al testo o centrate, mai inscatolate dentro quadratini o cerchietti decorativi colorati.

### E. Segmented Control Piatto (Gallery)
- Contenitore unico `colors.card` (radius 14px, padding 4px).
- Tasti opzione: stato attivo su `colors.cardSecondary` (radius 8px), stato inattivo trasparente.

---

## 7. 📱 Regole Mobile UX/UI

- **Altezza Minima Tap Target**: tutti i controlli interattivi (pulsanti, toggle, sottomenu) hanno altezza minima di `44px`.
- **Niente Auto-Zoom su iOS**: tutti gli input, textarea e select hanno `font-size: 16px !important`.
- **Floating Quick Bar**: su schermi `<= 992px`, è presente una barra fissa con WhatsApp diretto e Richiedi Data; il `body` ha `padding-bottom: 72px` per evitare sovrapposizioni.
- **Mobile Drawer Navigazione**: a schermo intero con sottomenu ad accordion a espansione fluida e blocco dello scroll del `body`.
