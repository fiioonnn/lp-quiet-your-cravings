"use client";

export default function CTA() {
  return (
    <section id="order" className="bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-olive-dark mb-6">
          Bereit, Ihre Essensgelüste zu besiegen?
        </h2>

        {/* Guarantee Badge */}
        <div className="bg-soft-green rounded-2xl p-8 mb-8">
          <div className="text-6xl mb-4">🛡️</div>
          <h3 className="font-serif text-2xl text-olive-dark mb-4">
            60-Tage-Geld-zurück-Garantie
          </h3>
          <p className="text-warm-brown mb-4">
            Wir sind so überzeugt von Ultimate Glucose Support, dass wir Ihnen eine volle 60-Tage-Garantie geben. 
            Wenn Sie nicht 100% zufrieden sind, erhalten Sie Ihr Geld zurück — keine Fragen gestellt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-olive text-sm">
            <span>✓ Kein Risiko</span>
            <span>✓ Volle Erstattung</span>
            <span>✓ Kein Kleingedrucktes</span>
          </div>
        </div>

        {/* Product Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="font-serif text-2xl text-olive-dark mb-6">
            Ultimate Glucose Support
          </h3>
          
          <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-warm-brown">5 kraftvolle, natürliche Inhaltsstoffe</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-warm-brown">Klinisch getestete Formel</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-warm-brown">Reduziert Heißhungerattacken</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-warm-brown">Stabilisiert Blutzuckerspiegel</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-warm-brown">Unterstützt gesundes Gewichtsmanagement</span>
            </li>
          </ul>

          <a
            href="#"
            className="inline-block bg-olive hover:bg-olive-dark text-white font-semibold text-xl px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
          >
            Jetzt bestellen →
          </a>

          <p className="text-warm-brown text-sm mt-4">
            ✓ Kostenloser Versand · ✓ Sichere Zahlung · ✓ 60 Tage Garantie
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 text-warm-brown text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Sichere SSL-Verschlüsselung</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📦</span>
            <span>Schneller Versand</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💳</span>
            <span>Alle Zahlungsarten</span>
          </div>
        </div>
      </div>
    </section>
  );
}
