# Landingpage-Redesign

Die Startseite stapelt aktuell zu viele Inhalte in einem Zwei-Spalten-Layout, das auf schmalen Bildschirmen kollabiert und die Hierarchie verliert. Ziel: ein klarer, linearer Aufbau, der News und Veranstaltungen prominent zeigt, ohne die Seite zu überladen.

## Neue Sektions-Reihenfolge

```text
1. Hero            – ruhig, klare Headline + 2 CTAs
2. Aktuelles       – Neuigkeiten & Veranstaltungen (volle Breite)
3. Unsere Angebote – 3 Zielgruppen-Karten (ohne Sidebar)
4. Unsere Werte    – kompakter Streifen
5. CTA             – „Lassen Sie uns ins Gespräch kommen"
```

## Was sich pro Sektion ändert

**Hero**
- Bleibt inhaltlich gleich, aber Padding mobil reduziert (`py-16` statt `py-20`), Button-Stack stabiler.

**Aktuelles (neu als eigene Sektion)**
- Die bisherige `NewsSidebar` wird zur vollwertigen Sektion umgebaut.
- Visueller Stil der beiden Karten (Neuigkeiten / Veranstaltungen) bleibt erhalten – wie vom User gewünscht.
- Layout: zwei nebeneinander liegende Karten auf Desktop (`md:grid-cols-2`), gestapelt auf Mobile.
- Sektion-Header darüber: kleine Headline „Aktuelles aus der GIMA" + kurzer Untertitel.

**Unsere Angebote**
- Sidebar entfällt komplett (News wandern nach oben).
- Drei Zielgruppen-Karten nehmen die volle Breite ein → mehr Luft, größere Icons, bessere Lesbarkeit auf Mobile.
- Mobile: untereinander mit ordentlichem Abstand; ab `md`: 3 Spalten.

**Unsere Werte – kompakter**
- Statt 4 großer Karten auf Bild-Background: schlanker Streifen mit 4 Stichworten (Icon + kurzer Titel, ein Satz).
- Hintergrundbild raus oder stark gedämpft, weniger visuelles Gewicht.
- Auf Mobile 2 Spalten statt einer langen Liste.

**CTA**
- Unverändert, nur Spacing-Feinschliff für Mobile.

## Mobile-Fixes (querschnittlich)

- Konsistente Sektions-Paddings: `py-12 md:py-20`.
- `container-wide` Innenabstand mobil prüfen, damit Karten nicht am Rand kleben.
- Buttons in CTA-Reihen: `w-full sm:w-auto` für saubere Stapelung.
- Headlines: `text-balance` + responsive Größen kontrollieren (kein Überlauf langer Wörter).

## Technische Hinweise

- `src/components/home/HomePage.tsx`: Reihenfolge und Layout-Grid in `TargetGroupSection` umbauen (Sidebar raus); neue `NewsSection` einfügen, die `NewsSidebar`-Inhalt voll-breit rendert.
- `src/components/home/NewsSidebar.tsx`: Karten-Inhalte bleiben, Wrapper wird flexibler (Prop `layout="full" | "sidebar"`) ODER neue Komponente `NewsSection.tsx`, die die zwei Karten in einem Grid platziert. Empfehlung: neue `NewsSection.tsx`, `NewsSidebar` bleibt als Komponente für evtl. spätere Verwendung auf Unterseiten.
- `ValuesSection`: Hintergrundbild entfernen, Karten-Markup vereinfachen, Icons aus `lucide-react` ergänzen (z.B. `HandHeart`, `ShieldCheck`, `Eye`, `Users`).
- Keine Änderungen an Routing, Daten oder anderen Seiten in diesem Schritt.

## Out of scope

- Unterseiten (Eigentümer:innen, Hausgemeinschaften etc.) – kommen in einem separaten Plan.
- Anbindung der News/Events an die Datenbank – Platzhalterdaten bleiben vorerst.
