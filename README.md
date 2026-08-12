# Portfolio

Persönliche Portfolio-Website zur Präsentation meiner Projekte. Es gibt zwei
Fassungen mit identischem Design, aber unterschiedlichem Schwerpunkt:

| Fassung | Adresse | Wofür |
| --- | --- | --- |
| **Programmierung** | `https://cesarangel777.github.io/Portfolio/` | Bewerbungen auf Junior-Stellen als Programmierer: Technik, Umsetzung, Code |
| **Neutral** | `https://cesarangel777.github.io/Portfolio/allgemein/` | Allgemeine Bewerbungen: Quereinstieg, warum IT, warum Wirtschaftsinformatik, die Person und die Projekte |

Beide Fassungen teilen sich Design, Skript und Bilder (`css/`, `js/`,
`assets/`). Eine Anpassung am Design wirkt damit automatisch auf beide.

## Aufbau

```
Portfolio/
├── index.html              ← Willkommensseite (Fassung Programmierung)
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
├── allgemein/              ← Neutrale Fassung, gleiche Seitenstruktur
│   ├── index.html
│   ├── ueber-mich.html     ← Mein Weg, warum IT, warum Wirtschaftsinformatik
│   ├── projekte.html
│   ├── kontakt.html
│   └── projekte/           ← dieselben Projekte, aus Sicht von Rolle und Ergebnis
├── css/style.css           ← Design (von beiden Fassungen genutzt)
├── js/main.js              ← Navigation, Filter, Lightbox, Scroll-Reveal
├── assets/img/             ← Projektbilder und Porträt
└── projects/               ← Beispiel-Code der Lernprojekte
```

## Unterschied der beiden Fassungen

Gleich sind Design, Aufbau, Navigation, Filter, Lightbox und die sechs
Projekte. Unterschiedlich ist die Erzählweise:

- **Über mich** beantwortet in der neutralen Fassung vier Fragen nacheinander:
  Mein Weg, Warum IT, Warum Wirtschaftsinformatik, Was ich mitbringe.
- **Projektseiten** beschreiben in der neutralen Fassung Rolle, Vorgehen und
  Ergebnis statt Technik-Details, Bibliotheken und Code-Ausschnitte.
- **Kenntnisse** sind neutral nach IT-Support und Beratung, Projekte und
  Umsetzung sowie Arbeitsweise und Werkzeuge gruppiert statt nach Sprachen.
- **Ziel** ist neutral eine Einstiegsstelle in der IT statt einer Junior-Stelle
  als Programmierer.

## Vorgestellte Projekte

| Projekt | Beschreibung | Technik |
| --- | --- | --- |
| **CIS – C IT Support** | Website für meinen eigenen IT-Support-Service | HTML, CSS, JavaScript, Canvas |
| **ParkApp KSTA** | Prototyp für die Parkplatz-Buchung (Steueramt Zürich) | React 18, Vite |
| **LS Studio** | Kundenprojekt: Luxury Nail Studio in Aarau | HTML, CSS, JavaScript |
| **C Visionary Studio** | Business-Website für KI-generierte Videos & Bilder | HTML, CSS, JavaScript |
| **Helvetic Narcos** | Landingpage für eine Marke | HTML, CSS, JavaScript |
| **Programmier-Grundlagen** | Python-Mini-Projekte mit GPT-Mentor | Python |

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
# → http://localhost:8000            (Fassung Programmierung)
# → http://localhost:8000/allgemein/ (neutrale Fassung)
```

## Auf GitHub Pages veröffentlichen

1. Auf GitHub: **Settings → Pages**
2. Unter *Build and deployment*: Source **Deploy from a branch**, Branch **main**, Ordner **/ (root)**
3. Speichern – nach 1–2 Minuten sind beide Fassungen erreichbar:
   `https://cesarangel777.github.io/Portfolio/` und
   `https://cesarangel777.github.io/Portfolio/allgemein/`

## Inhalte anpassen

- **Name / Texte:** in den jeweiligen HTML-Dateien. Achtung: Texte stehen in
  beiden Fassungen getrennt, eine Änderung gilt nur für die bearbeitete.
- **Neues Projekt:** Karte in `projekte.html` ergänzen (mit `data-kategorie`) und
  eine neue Datei in `projekte/` anlegen
- **Farben:** CSS-Variablen am Anfang von `css/style.css` (`--accent`, `--bg`, …)
