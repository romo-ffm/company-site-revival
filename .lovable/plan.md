## Footer-Redesign nach Screenshot

Der Footer wird auf das Layout aus dem Screenshot umgebaut — gleicher Aufbau, gleiche Inhalte, nur visuell näher am Vorbild.

### Änderungen in `src/components/layout/Footer.tsx`

**Spalte 1 – Marke**
- Statt SVG-Platzhalter + Text das echte GIMA-Logo (`gima-herz-logo.jpg`) groß einbinden (~h-20)
- Tagline darunter: „Immobilien sozialverträglich verkaufen" (fett, kein Fließtext mehr)
- Der bisherige Beschreibungstext entfällt

**Spalte 2 – Angebote** (unverändert)
Für Eigentümer:innen · Für Hausgemeinschaften · Für Wohnungsunternehmen · Wege des Verkaufs

**Spalte 3 – Wissen & Info** (unverändert)
Über die GIMA · Blog & Neuigkeiten · FAQ · Ressourcen & Links · Partner & Netzwerke

**Spalte 4 – Kontakt**
- Adresszeile (MapPin „Frankfurt am Main") entfernt
- Mail- und Telefon-Icons größer in türkis ausgefüllten Kreisen wie im Screenshot
- E-Mail aktualisiert: `info@gima-frankfurt.de`
- Telefon aktualisiert: `+49 69 9592 8082`

**Trennlinie + Bottom-Bar**
- Dünne Linie über die mittleren Spalten (wie im Screenshot)
- Links: `© 2026 GIMA Frankfurt eG. Alle Rechte vorbehalten.`
- Rechts: Impressum · Datenschutz · AGB

### Offene Frage – Social-Media-Buttons

Im Screenshot sind die zuvor gewünschten Social-Buttons (Mastodon, BlueSky, LinkedIn, Instagram, Facebook, RSS) **nicht** sichtbar. Ich würde sie standardmäßig **behalten** und dezent oberhalb der Bottom-Bar platzieren, damit sie nicht verloren gehen. Falls du sie aus dem Footer ganz entfernen willst, sag kurz Bescheid — dann fliegen sie raus (z. B. um sie später nur im Header oder auf einer Kontaktseite zu zeigen).

### Was nicht geändert wird
- Keine Logik, keine Routen, keine anderen Komponenten
- Farben/Tokens aus dem bestehenden Design-System
