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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-soft-green p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-olive">40%</div>
            <div className="text-sm text-olive-light">weniger Blutzuckerspitzen</div>
          </div>
          <div className="bg-soft-green p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-olive">47.5%</div>
            <div className="text-sm text-olive-light">weniger Kalorien</div>
          </div>
          <div className="bg-soft-green p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-olive">5</div>
            <div className="text-sm text-olive-light">kraftvolle Inhaltsstoffe</div>
          </div>
          <div className="bg-soft-green p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-olive">60</div>
            <div className="text-sm text-olive-light">Tage Geld-zurück</div>
          </div>
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
