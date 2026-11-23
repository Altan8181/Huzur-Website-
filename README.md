# Huzur & Co – Landingpage

Statische Landingpage für **Huzur & Co** (Astro). Schnell, ohne Cookies und ohne Tracker. Die Schriften werden lokal ausgeliefert, deshalb gibt es keine Verbindung zu Google Fonts (DSGVO).

## Lokal starten

Voraussetzung: [Node.js](https://nodejs.org) ab Version 22.

```bash
npm install        # einmalig
npm run dev        # Vorschau unter http://localhost:4321 (lädt bei Änderungen neu)
npm run build      # fertige Website in den Ordner dist/ bauen
npm run preview    # gebaute Version ansehen
```

Um die Seite auf dem Handy zu testen: `npm run dev -- --host` und die angezeigte Netzwerk-Adresse im Handy-Browser öffnen (gleiches WLAN).

## Wo ändere ich was?

| Was | Datei |
| --- | --- |
| E-Mail, Instagram/TikTok, Seitentitel, Beschreibung | `src/config.ts` |
| Newsletter-/Shop-Anbindung des Launch-Formulars | `src/config.ts` → `launchForm` |
| Kerzen N°1–N°3: Bedeutung, Duftnoten, Glas, Topping | `src/data/kollektion.ts` |
| Texte (Hero, Wörterbuch, Geschichte, Ritual) | `src/pages/index.astro` |
| Farben & Schriften | `src/styles/global.css` (oben, `:root`) |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Logo, Favicon, Vorschaubild für WhatsApp/Instagram | `public/logo.svg`, `public/favicon.svg`, `public/og-image.jpg` |

**Duftnoten:** Wenn du in `src/data/kollektion.ts` das Feld `duftnoten: ''` leer lässt, erscheint auf der Seite automatisch „Duftnoten folgen“.

**Eigene Fotos:** Bilder (JPG/PNG, gern groß) in `src/assets/images/` ablegen und den Import oben in `src/pages/index.astro` (Hero, Geschichte) bzw. in `src/data/kollektion.ts` anpassen. Astro erzeugt beim Build automatisch WebP/AVIF in passenden Größen mit Lazy Loading. Für die Bogen-Rahmen eignen sich Hochformat-Bilder (ca. 2:3) am besten.

## Launch-Formular anbinden

Ohne Einstellung läuft das Formular im Vorschau-Modus: Es zeigt die Danke-Meldung, sendet aber nichts. Zum Anbinden trägst du in `src/config.ts` Folgendes ein:

- **Formspree / Brevo / Getform** (Senden im Hintergrund):
  `action: 'https://formspree.io/f/DEIN-ID'`, `mode: 'fetch'`
- **Mailchimp** (Embedded-Form-URL aus Mailchimp):
  `action: 'https://….list-manage.com/subscribe/post?u=…&id=…'`, `mode: 'native'`, `emailField: 'EMAIL'`
- **Shopify** (Kundenliste, sobald der Shop live ist):
  `action: 'https://DEIN-SHOP.myshopify.com/contact#contact_form'`, `mode: 'native'`, `emailField: 'contact[email]'`,
  `hiddenFields: { form_type: 'customer', utf8: '✓', 'contact[tags]': 'launch' }`

Danach die Datenschutzerklärung um den gewählten Dienst ergänzen.

## Veröffentlichen

### Netlify
1. Code auf GitHub pushen (ist bereits ein Repo).
2. Auf [netlify.com](https://www.netlify.com) „Add new site → Import from Git“ wählen und dieses Repo auswählen.
3. Die Einstellungen kommen automatisch aus `netlify.toml` (Build `npm run build`, Ordner `dist`). Mit „Deploy“ ist die Seite online.

### Vercel
1. Auf [vercel.com](https://vercel.com) „Add New → Project“ wählen und das Repo importieren.
2. Vercel erkennt Astro automatisch. Mit „Deploy“ ist die Seite online.

Jeder Push auf den Haupt-Branch veröffentlicht danach automatisch neu.

## Domain huzurandco.de verbinden

**Netlify:** Site → *Domain management* → *Add a domain* → `huzurandco.de` eingeben. Dann beim Domain-Anbieter (z. B. IONOS, Strato, All-Inkl):
- `A`-Record für `@` → `75.2.60.5`
- `CNAME` für `www` → `DEIN-PROJEKT.netlify.app`

**Vercel:** Project → *Settings* → *Domains* → `huzurandco.de` hinzufügen. Beim Domain-Anbieter:
- `A`-Record für `@` → `76.76.21.21`
- `CNAME` für `www` → `cname.vercel-dns.com`

Die genauen Werte zeigen Netlify bzw. Vercel nach dem Hinzufügen der Domain noch einmal an. Bitte diese verwenden, falls sie abweichen. Das HTTPS-Zertifikat wird automatisch erstellt. Bis alles greift, kann es einige Minuten bis 24 Stunden dauern.

## Vor dem Livegang

- [ ] Impressum und Datenschutzerklärung mit echten Angaben füllen
- [ ] Launch-Formular mit Newsletter-Dienst verbinden (siehe oben)
- [ ] Original-Logo in `public/logo.svg` und `src/components/Logo.astro` einsetzen (derzeit ein nachgezeichnetes Bogen-Logo)
- [ ] Texte der Geschichte anpassen, Duftnoten prüfen
- [ ] Eigene Fotos einsetzen und danach `public/og-image.jpg` (1200 × 630 px) erneuern
