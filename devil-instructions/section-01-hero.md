# Devil Instructions: Hero Section Rebuild

## Ziel
Die Hero-Section 1:1 an das Original von https://de.happymammoth.com/pages/quiet-your-cravings anpassen.

## Screenshots
- Original: `screenshots/original-hero-desktop.png`
- Nachbau aktuell: `screenshots/nachbau-hero-desktop.png`

---

## KRITISCHE UNTERSCHIEDE

### 1. FEHLENDE ELEMENTE (müssen hinzugefügt werden)

#### A) Announcement Bar (ganz oben)
- Dunkler Teal/Petrol Hintergrund: `#2B4C4C`
- Text weiß, zentriert
- Enthält Quiz-CTA oder Promotion
- Höhe: ca. 40px
- **Muss als separate Komponente vor Hero hinzugefügt werden**

#### B) Trust Bar (unter Announcement)
- Hintergrund: Warmes Rosé/Kupfer `#C4967A` bis `#B8876A`
- Text weiß
- Inhalt: "★★★★★ 3,3 Mio. Kunden vertrauen uns | Kostenloser Versand"
- Höhe: ca. 44px

#### C) Navigation Header
- Weißer Hintergrund `#FFFFFF`
- Logo links
- Navigation Mitte
- Warenkorb rechts
- Höhe: ca. 70-80px

#### D) Hero-Bild (KRITISCH - FEHLT KOMPLETT)
- Position: Rechte Seite, ca. 50% der Breite
- Motiv: 4 diverse, lächelnde Frauen
- Bild überlappt leicht den Text-Bereich
- Aktuell: Placeholder verwenden `https://placehold.co/700x600/F5F0EB/333333?text=Hero+Image`

### 2. LAYOUT-ÄNDERUNGEN

#### Aktuell (FALSCH):
- 1-Spalten Layout, zentriert
- Keine Bilder
- Viel zu viel vertikaler Platz

#### Soll (RICHTIG):
- 2-Spalten Layout (50/50)
- Links: Text-Content
- Rechts: Hero-Bild
- Flexbox oder Grid mit `lg:grid-cols-2`

### 3. FARBEN KORRIGIEREN

| Element | AKTUELL (falsch) | SOLL (Original) |
|---------|------------------|-----------------|
| Hintergrund | `#faf8f5` (zu kalt) | `#F5F0EB` (wärmer) |
| CTA Button | `#4a5d23` (oliv) | `#5FBFA8` (mint/teal) |
| Headline | `#3a4a1c` (oliv-braun) | `#333333` (dunkelgrau) |
| Akzentfarbe/Highlight | `#c9a962` (oliv-gold) | `#C47A3A` (kupfer/orange) |
| Sterne | `#c9a962` | `#FFD700` (gold) |

**CSS Variablen in globals.css anpassen:**
```css
:root {
  --color-cream: #F5F0EB;
  --color-primary: #5FBFA8;  /* Teal/Mint - CTA */
  --color-accent: #C47A3A;   /* Kupfer/Orange - Highlights */
  --color-dark: #333333;     /* Dunkelgrau - Text */
  --color-trust-bar: #C4967A; /* Rosé/Kupfer */
  --color-announcement: #2B4C4C; /* Dunkel-Teal */
}
```

### 4. TYPOGRAFIE KORRIGIEREN

#### Headline:
- **Aktuell:** Serif, italic, 56-68px
- **Soll:** Sans-Serif (Poppins/Montserrat-ähnlich), Bold 700-800, 36-42px
- **Font-Family:** System Sans oder `font-sans` statt `font-serif`
- Text-Align: left (nicht center)

#### Anführungszeichen in Headline:
- Original hat deutsche Anführungszeichen im Text: „..."
- Diese sind Teil der Headline, nicht separates Element

#### Highlight-Text (7 Kilo):
- Aktuell: Separate Zeile, italic, mit "—" davor
- Soll: Inline im Headline-Text, gleiche Font, nur Farbe anders (`#C47A3A`)

### 5. CONTENT-ANPASSUNGEN

#### Headline-Text (ORIGINAL):
```
„Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte – Jetzt sind 7 Kilo endgültig runter"
```
- "7 Kilo endgültig runter" in Akzentfarbe `#C47A3A`

#### Body-Text (FEHLT - muss hinzugefügt werden):
```
Probieren Sie das NEU Ultimate Glucose Support aus: Schalten Sie Heißhungerattacken dauerhaft aus und regulieren Sie Ihren Blutzucker auf natürliche Weise.
```
- "NEU" und "dauerhaft" in bold

#### CTA-Button:
- **Aktuell:** "Jetzt Ultimate Glucose Support testen →"
- **Soll:** "PROBIEREN SIE ULTIMATE GLUCOSE SUPPORT" (uppercase, kein Pfeil)
- Farbe: `#5FBFA8` (Mint/Teal)
- Hover: `#4DAA96`
- Text: weiß, uppercase, letter-spacing: 1-2px

#### Guarantee-Text:
- **Aktuell:** "✓ Kostenloser Versand · ✓ 60 Tage Geld-zurück-Garantie"
- **Soll:** "✅ 60-Tage-Geld-zurück-Garantie" (nur Garantie, grünes Emoji)

### 6. STATISTIK-GRID ENTFERNEN

Das 4er-Statistik-Grid (40%, 47.5%, 5, 60) gehört NICHT in die Hero-Section.
→ In separate "Results" Section verschieben oder entfernen aus Hero.

### 7. TESTIMONIAL-POSITION

- **Aktuell:** Zentrierte Card im Hero
- **Soll:** Kleine Testimonial-Blase rechts unten, überlagert das Hero-Bild
- Roter/Rosa Border `#E04040`
- Kleinere, kompaktere Darstellung

---

## KONKRETE TAILWIND-KLASSEN

### Container-Layout:
```jsx
<section className="bg-[#F5F0EB] py-16 px-4 lg:px-8">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
    {/* Links: Text */}
    <div className="text-left">
      ...
    </div>
    {/* Rechts: Bild */}
    <div className="relative">
      <img src="..." className="w-full h-auto" />
    </div>
  </div>
</section>
```

### Headline:
```jsx
<h1 className="font-sans font-bold text-[36px] lg:text-[42px] text-[#333333] leading-tight">
  „Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte – 
  <span className="text-[#C47A3A]">Jetzt sind 7 Kilo endgültig runter</span>"
</h1>
```

### CTA-Button:
```jsx
<a 
  href="#order" 
  className="inline-block bg-[#5FBFA8] hover:bg-[#4DAA96] text-white font-bold uppercase tracking-wider text-[15px] px-8 py-4 rounded-full transition-all shadow-lg"
>
  PROBIEREN SIE ULTIMATE GLUCOSE SUPPORT
</a>
```

---

## DATEIEN ZUM BEARBEITEN

1. `components/Hero.tsx` - Hauptänderungen
2. `app/globals.css` - Farbvariablen anpassen
3. Neue Komponente: `components/AnnouncementBar.tsx`
4. Neue Komponente: `components/TrustBar.tsx`
5. Neue Komponente: `components/Navigation.tsx`
6. `app/page.tsx` - Neue Komponenten einbinden

---

## PRIORITÄT FÜR DIESE ITERATION

1. ✅ Hero-Layout auf 2-Spalten ändern (Text links, Bild rechts)
2. ✅ Farben korrigieren (globals.css + Hero.tsx)
3. ✅ Headline-Font auf Sans-Serif ändern
4. ✅ CTA-Button Farbe + Text anpassen
5. ✅ Statistik-Grid aus Hero entfernen
6. ✅ Placeholder-Bild rechts einfügen
7. ⏳ AnnouncementBar, TrustBar, Navigation → nächste Iteration

---

## AKTUELLER COMPONENT-CODE

```tsx
// components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="bg-cream py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-soft-green text-olive px-4 py-2 rounded-full text-sm mb-6">
          <span className="text-gold">★★★★★</span>
          <span>Über 50.000 zufriedene Kunden</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-olive-dark leading-tight mb-6">
          Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte
        </h1>
        
        <p className="text-xl md:text-2xl text-olive font-serif italic mb-8">
          — Jetzt sind 7 Kilo endgültig runter
        </p>

        {/* Testimonial Quote */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8 max-w-3xl mx-auto">
          <p className="text-warm-brown text-lg md:text-xl italic mb-4">
            &quot;Ich habe endlich die Kontrolle über mein Essverhalten zurück. Keine unkontrollierten Heißhungerattacken mehr, keine Energietiefs am Nachmittag. Nach nur 3 Wochen fühlte ich mich wie ein neuer Mensch.&quot;
          </p>
          <p className="text-olive font-semibold">— Verified Customer</p>
        </div>

        {/* Stats - ENTFERNEN aus Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          ...
        </div>

        {/* CTA Button */}
        <a
          href="#order"
          className="inline-block bg-olive hover:bg-olive-dark text-white font-semibold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          Jetzt Ultimate Glucose Support testen →
        </a>

        <p className="text-warm-brown text-sm mt-4">
          ✓ Kostenloser Versand · ✓ 60 Tage Geld-zurück-Garantie
        </p>
      </div>
    </section>
  );
}
```

---

## ERWARTETES ERGEBNIS

Nach dieser Iteration sollte die Hero-Section:
- 2-spaltig sein (Text links, Bild-Placeholder rechts)
- Warme Cream-Farbe als Hintergrund haben
- Mint/Teal CTA-Button haben
- Sans-Serif Headline mit Kupfer-Highlight
- Kein Statistik-Grid mehr enthalten
- Kompakter aussehen (weniger vertikale Höhe)
