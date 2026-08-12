# Portfolio (neutrale Fassung)

Persönliche Portfolio-Website für **allgemeine Bewerbungen**: Im Vordergrund
stehen der Quereinstieg, die Beweggründe für die IT und für das Studium
Wirtschaftsinformatik, die Person dahinter und die bisherigen Projekte, nicht
einzelne Programmiersprachen oder Technik-Details.

> Diese Fassung liegt auf dem Branch `claude/portfolio-general-applications-qj8zbj`.
> Die stärker auf Programmierstellen ausgerichtete Fassung bleibt auf `main`.

**Live:** https://cesarangel777.github.io/Portfolio/ *(nach Aktivierung von GitHub Pages, siehe unten)*

## Aufbau

Mehrseitige Website mit eigener Detailseite pro Projekt:

```
Portfolio/
├── index.html              ← Willkommensseite (Vollbild-Einstieg)
├── ueber-mich.html         ← Weg, warum IT, warum Wirtschaftsinformatik, Stärken
├── projekte.html           ← Übersicht mit Filterfunktion
├── kontakt.html            ← Kontakt
├── projekte/               ← Detailseite pro Projekt
│   ├── cis-it-support.html
│   ├── parkapp-ksta.html
│   ├── ls-studio.html
│   ├── c-visionary-studio.html
│   ├── helvetic-narcos.html
│   └── python-grundlagen.html
├── css/style.css           ← Design
├── js/main.js              ← Navigation, Filter, Lightbox, Scroll-Reveal
├── assets/img/             ← Projektbilder und Porträt
└── projects/               ← Beispiel aus den Übungsprojekten
```

## Vorgestellte Projekte

| Projekt | Worum es geht | Meine Rolle |
| --- | --- | --- |
| **CIS – C IT Support** | Eigener IT-Support-Service im Aargau | Angebot, Auftritt, Kundenkontakt |
| **ParkApp KSTA** | Parkplatz-Ablauf beim Steueramt Zürich digitalisiert | Analyse, Konzept, Prototyp |
| **LS Studio** | Website für ein Nagelstudio in Aarau | Kundenprojekt, Abstimmung, Umsetzung |
| **C Visionary Studio** | Auftritt für ein Studio für Videos und Bilder | Konzept, Inhalte, Veröffentlichung |
| **Helvetic Narcos** | Auftritt zur Veröffentlichung einer Marke | Konzept, Gestaltung, Veröffentlichung |
| **Laufende Weiterbildung** | Lernen mit Plan, Mentor-Setup und Übungsprojekten | Eigenständiges Lernen |

## Seitenkonzept

Die Startseite ist eine reduzierte **Willkommensseite**: grosse Aussage
(«IT-Quereinsteiger mit Biss»), kurze Einordnung und drei Wege zu den
Unterseiten. Die Seite **Über mich** beantwortet nacheinander die vier Fragen,
die in einem Bewerbungsgespräch ohnehin kommen: Wie war mein Weg? Warum IT?
Warum Wirtschaftsinformatik? Was bringe ich mit?

## Interaktive Elemente

- **Willkommensseite** mit gestaffelter Einblend-Animation und Hover-Zeilen
- **Filter** auf der Projektübersicht (nach Kategorie, mit Trefferanzeige)
- **Lightbox** für Bilder auf den Detailseiten (`<dialog>`-Element)
- **Scroll-Reveal** über `IntersectionObserver`
- **Mobile-Navigation** als aufklappbares Menü

## Technik

- Reines HTML, CSS und JavaScript, kein Build-Schritt nötig
- Responsives Design (Desktop und Mobile)
- Schweizer Rechtschreibung, `prefers-reduced-motion` wird respektiert

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder mit einem kleinen Server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Auf GitHub Pages veröffentlichen

1. Auf GitHub: **Settings → Pages**
2. Unter *Build and deployment*: Source **Deploy from a branch**, Branch
   auswählen (für diese Fassung `claude/portfolio-general-applications-qj8zbj`),
   Ordner **/ (root)**
3. Speichern, nach 1–2 Minuten ist die Seite erreichbar.

## Inhalte anpassen

- **Name / Texte:** in den jeweiligen HTML-Dateien
- **Neues Projekt:** Karte in `projekte.html` ergänzen (mit `data-kategorie`) und
  eine neue Datei in `projekte/` anlegen
- **Farben:** CSS-Variablen am Anfang von `css/style.css` (`--accent`, `--bg`, …)
