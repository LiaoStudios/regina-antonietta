# Piano di implementazione — Sito Pizzeria Regina Antonietta

Sito vetrina per la **pizzeria d'asporto Regina Antonietta** (Castel Maggiore, BO),
adattando come base il design Superdesign **"Le Volpi | Contemporary Italian Dining"**
(draft `67eb0432-eebe-47d4-a69c-90eabac17e41`), rifatto in stile più professionale con
palette **bianco/nero + rosso + beige** e le foto reali fornite.

Copia di riferimento del design originale: `reference/levolpi-superdesign.html`.

---

## 1. Dati reali dell'attività (verificati)

| Campo | Valore |
|---|---|
| Nome | Regina Antonietta |
| Tipo | Pizzeria d'asporto (take-away) |
| Indirizzo | Via Gramsci 46, 40013 Castel Maggiore (BO) |
| Telefono | 051 2801714 — `tel:+390512801714` |
| Email | pizzeriacastelmaggiore@gmail.com |
| Orari | Lun 11:00–14:30 / 18:00–22:30 · Mar–Dom 11:30–14:30 / 18:30–22:30 |
| Promo attiva | **Pranzo**: pizza classica (max 2 gusti) + bibita + patate fritte = **€9,90** |

**Social & mappa (da inserire):**
- Facebook: https://www.facebook.com/p/Regina-Antonietta-100064087413711/
- Instagram: https://www.instagram.com/reginaantonietta46/
- Google Maps: embed + link "Indicazioni" su Via Gramsci 46, Castel Maggiore.

> ⚠️ Da confermare con il cliente prima del go-live: menù completo con prezzi,
> giorno di chiusura, disponibilità consegna a domicilio, P.IVA per il footer.

---

## 2. Identità visiva (revisione dello stile → più professionale)

Il design base "Le Volpi" è dark, arancio/rosso con mascotte **volpe**. Lo trasformiamo
nel mondo **"Regina Antonietta"**: elegante, regale, luminoso.

**Palette (richiesta utente):**
```
--bianco:  #FBF8F3   (sfondo caldo, base)
--beige:   #E9DFCE   (sezioni/box)
--nero:    #1A1613   (testo e sezioni scure)
--rosso:   #C1272D   (accento primario — brand)
--rosso-scuro: #8E1B20 (hover/gradienti)
--oro:     #B08D4C   (dettaglio “regale” opzionale, corona)
```
- Sostituire ovunque `--accent-orange`, `--bg-dark`, `--bg-nav` con i token sopra.
  Invertire il tema: da fondo scuro dominante → **fondo chiaro dominante**, con una o
  due sezioni scure (nero) per contrasto.
- **Logo/mascotte:** rimuovere `ph:fox-*`. Sostituire con motivo **corona** (`ph:crown-fill`)
  coerente con il brand “Regina”. Wordmark: "REGINA ANTONIETTA".
- **Font:** mantenere impianto ma più sobrio — display serif regale (es. *Playfair Display*
  o *Cormorant*) per i titoli al posto di *Bebas Neue*; *Plus Jakarta Sans* per il testo.
- Ammorbidire gli elementi troppo “aggressivi” del base: ridurre gli skew/clip-path
  estremi, angoli, glow arancioni; look pulito da locale di qualità.
- Rimuovere l'intro animata a forme rotanti (o sostituirla con un fade sobrio del logo).

---

## 3. Stack tecnico (raccomandato)

**Sito statico single-page**, nessun build step — coerente col design base ed è
sufficiente per una vetrina d'asporto.
- `index.html` + Tailwind via CDN (come nel base) + un piccolo `assets/css/styles.css`
  per i token e gli override di brand.
- `assets/js/main.js` per scroll-reveal, header, menu mobile (estratti dal base).
- Iconify via CDN per le icone.
- Immagini locali ottimizzate in `assets/img/`.

*(Alternativa se in futuro serve un gestionale menù: migrare ad Astro. Non necessario ora.)*

### Struttura cartelle
```
regina antonietta/
├─ index.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  └─ img/            ← foto ottimizzate (hero, menu, gallery)
├─ reference/levolpi-superdesign.html
└─ PLAN.md
```

---

## 4. Pipeline immagini

Sorgente: `/Users/feng/Desktop/immagini sito/pizzeria regina antonietta/`
(14 Facebook, 18 Google, 4 Instagram — prevalentemente pizze in scatola d'asporto,
+ una grafica promo "PRANZO €9,90").

Passi:
1. Selezionare le migliori (verticali nitide per hero/gallery; scartare grafiche a bassa
   risoluzione come `facebook_02/10/14`).
2. Ridimensionare/comprimere in `assets/img/` (max ~1600px lato lungo, qualità ~80,
   preferire `.webp` con fallback `.jpg`) — via `sips`/`cwebp` o ImageMagick.
3. Nominare per ruolo: `hero.jpg`, `pizza-diavola.jpg`, `pizza-burrata.jpg`,
   `pizza-tartufo.jpg`, `gallery-01..n.jpg`, `promo-pranzo.jpg`.
4. `alt` descrittivi in italiano per ogni immagine (SEO + accessibilità).

---

## 5. Adattamento sezioni (Le Volpi → Regina Antonietta d'asporto)

| Base "Le Volpi" | Nuovo | Contenuto |
|---|---|---|
| Header + "Prenota Tavolo" | Header | Nav: Home · Le Pizze · Menù · Promo · Contatti. CTA → **"Ordina · 051 2801714"** (`tel:`), non prenotazione tavolo |
| Hero "La Pizza Contemporanea" | Hero | Titolo brand + claim asporto (es. "La vera pizza napoletana, da asportare"). Foto pizza reale. Bottoni: "Vedi il Menù" + "Chiama e ordina" |
| Specialty grid (3 card) | Le nostre specialità | 3 card con foto reali: Pizze Classiche · Pizze Speciali · Fritti & Bibite |
| Bold Menu (4 voci) | Menù | Voci reali con prezzi (Margherita, Diavola, Burrata, ecc. — *da confermare*). Tab per categoria |
| Newsletter CTA | **Promo Pranzo** | Riquadro promo "€9,90 pizza + bibita + patate" con CTA telefono |
| — (nuova) | Asporto / Come ordinare | 3 step: Chiama → Ordina → Ritira. Orari ben visibili |
| — (nuova) | Contatti + Mappa | Indirizzo, telefono, email, orari, **embed Google Maps**, pulsanti Facebook/Instagram |
| Footer (fox, link finti) | Footer | Logo corona, contatti, orari, social reali, © Regina Antonietta + P.IVA |

Rimuovere/riadattare: riferimenti a "vini & cantina", "DJ set", "brace", "prenotazione
tavolo" → non pertinenti a un asporto. Mantenere il tono ma centrato su qualità e asporto.

---

## 6. SEO, accessibilità, performance
- `<title>` e meta description locali (es. "Pizzeria Regina Antonietta — Pizza d'asporto a Castel Maggiore").
- Open Graph (immagine pizza + nome + indirizzo) per condivisione social.
- Dati strutturati JSON-LD `Restaurant`/`FoodEstablishment` (indirizzo, telefono, orari, geo, menu).
- `tel:` cliccabile, contrasto AA con la nuova palette, `alt` su tutte le immagini,
  focus states, `prefers-reduced-motion` per le animazioni.
- Lazy-loading immagini, favicon con corona.

---

## 7. Passi di implementazione (ordine)
1. **Scaffold**: creare struttura cartelle + `index.html` partendo dal base, `styles.css` con i token palette.
2. **Rebrand**: sostituire volpe→corona, wordmark, font, invertire tema chiaro, togliere intro.
3. **Immagini**: eseguire pipeline (§4) e inserirle nelle sezioni.
4. **Contenuti**: inserire testi/menu/orari reali (§1); marcare i placeholder da confermare.
5. **Contatti**: embed Google Maps + link Facebook/Instagram + blocco orari + CTA telefono.
6. **SEO/A11y** (§6) e pulizia JS.
7. **Verifica**: anteprima nel browser (desktop + mobile), controllo link/telefono/mappa.

---

## 8. Punti da confermare con il cliente
1. **Menù e prezzi** definitivi (ora solo parziali dalle foto/promo).
2. Consegna a **domicilio** oltre all'asporto? (eventuale piattaforma: Glovo/JustEat?)
3. **Giorno di chiusura** e conferma orari.
4. **P.IVA** e testi legali (Privacy/Cookie) per il footer.
5. Ok su **palette e stile regale** proposti prima di procedere allo sviluppo.
