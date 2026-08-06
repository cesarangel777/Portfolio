# Portfolio

Persönliche Portfolio-Website zur Präsentation meiner Projekte – für Bewerbungen
auf Junior-Stellen als Programmierer.

**Live:** https://cesarangel777.github.io/Portfolio/ *(nach Aktivierung von GitHub Pages, siehe unten)*

## Vorgestellte Projekte

| Projekt | Beschreibung | Technik |
| --- | --- | --- |
| **ParkApp KSTA** | Mobile-first Prototyp für die Parkplatz-Buchung (Steueramt Zürich) | React 18, Vite |
| **LS Studio** | Kundenprojekt: Website für ein Luxury Nail Studio in Aarau | HTML, CSS, JavaScript |
| **C Visionary Studio** | Business-Website für KI-generierte Videos & Bilder | HTML, CSS, JavaScript |
| **Helvetic Narcos** | Landingpage für ein Streetwear-Label mit Scroll-Intro | HTML, CSS, JavaScript |
| **Python-Grundlagen** | Mini-Projekte mit GPT-Mentor (z. B. CIS Ticket-System) | Python |

## Technik

- Reines HTML, CSS und JavaScript – kein Build-Schritt nötig
- Responsives Design (Desktop & Mobile), Scroll-Animationen via `IntersectionObserver`
- Dunkles Design, Schweizer Rechtschreibung, `prefers-reduced-motion` wird respektiert

## Struktur

```
Portfolio/
├── index.html          ← Einstiegsseite (alle Inhalte)
├── css/style.css       ← Design
├── js/main.js          ← Navigation, Scroll-Reveal
├── assets/img/         ← Projekt-Screenshots
└── projects/           ← Beispiel-Code der Lernprojekte
```

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

- **Name / Texte:** direkt in `index.html` (Hero, «Über mich», Kontakt)
- **Projekt-Screenshots:** Bilder in `assets/img/` austauschen
- **Farben:** CSS-Variablen am Anfang von `css/style.css` (`--accent`, `--bg`, …)
