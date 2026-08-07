# Portfolio

Persönliche Portfolio-Website zur Präsentation meiner Projekte – für Bewerbungen
auf Junior-Stellen als Programmierer.

**Live:** https://cesarangel777.github.io/Portfolio/ *(nach Aktivierung von GitHub Pages, siehe unten)*

## Aufbau

Mehrseitige Website mit eigener Detailseite pro Projekt:

```
Portfolio/
├── index.html              ← Willkommensseite (Vollbild-Einstieg)
├── ueber-mich.html         ← Quereinstieg, Motivation, Stärken, Studium
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
├── assets/img/             ← Projekt-Screenshots
└── projects/               ← Beispiel-Code der Lernprojekte
```

## Vorgestellte Projekte

| Projekt | Beschreibung | Technik |
| --- | --- | --- |
| **CIS – C IT Support** | Website für meinen eigenen IT-Support-Service | HTML, CSS, JavaScript, Canvas |
| **ParkApp KSTA** | Prototyp für die Parkplatz-Buchung (Steueramt Zürich) | React 18, Vite |
| **LS Studio** | Kundenprojekt: Luxury Nail Studio in Aarau | HTML, CSS, JavaScript |
| **C Visionary Studio** | Business-Website für KI-generierte Videos & Bilder | HTML, CSS, JavaScript |
| **Helvetic Narcos** | Landingpage für ein Streetwear-Label | HTML, CSS, JavaScript |
| **Programmier-Grundlagen** | Python-Mini-Projekte mit GPT-Mentor | Python |

## Seitenkonzept

Die Startseite ist eine reduzierte **Willkommensseite**: grosse Aussage
(«IT-Quereinsteiger mit Biss»), kurze Einordnung und drei grosse Wege zu den
Unterseiten. Von dort geht es zur persönlichen Seite (Motivation, Quereinstieg,
Stärken, Studium) oder zu den Projekten.

## Interaktive Elemente

- **Willkommensseite** mit gestaffelter Einblend-Animation und Hover-Zeilen
- **Filter** auf der Projektübersicht (nach Kategorie, mit Trefferanzeige)
- **Lightbox** für Screenshots auf den Detailseiten (`<dialog>`-Element)
- **Scroll-Reveal** über `IntersectionObserver`
- **Mobile-Navigation** als aufklappbares Menü

## Technik

- Reines HTML, CSS und JavaScript – kein Build-Schritt nötig
- Responsives Design (Desktop & Mobile)
- Schweizer Rechtschreibung, `prefers-reduced-motion` wird respektiert

## Lokal ansehen

Einfach `index.html` im Browser öffnen – oder mit einem kleinen Server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Auf GitHub Pages veröffentlichen

1. Auf GitHub: **Settings → Pages**
2. Unter *Build and deployment*: Source **Deploy from a branch**, Branch **main**, Ordner **/ (root)**
3. Speichern – nach 1–2 Minuten ist die Seite unter
   `https://cesarangel777.github.io/Portfolio/` erreichbar.

## Inhalte anpassen

- **Name / Texte:** in den jeweiligen HTML-Dateien
- **Neues Projekt:** Karte in `projekte.html` ergänzen (mit `data-kategorie`) und
  eine neue Datei in `projekte/` anlegen
- **Farben:** CSS-Variablen am Anfang von `css/style.css` (`--accent`, `--bg`, …)
