"use client";

export default function Footer() {
  return (
    <footer className="bg-olive-dark py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl text-white mb-2">Happy Mammoth</h3>
          <p className="text-soft-green">Natürliche Lösungen für ein besseres Leben</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-soft-green text-sm">
              <li>E-Mail: support@happymammoth.com</li>
              <li>Mo-Fr: 9:00 - 17:00 Uhr</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-soft-green text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sicherheit</h4>
            <ul className="space-y-2 text-soft-green text-sm">
              <li>✓ SSL-verschlüsselt</li>
              <li>✓ Sichere Zahlung</li>
              <li>✓ Datenschutz-konform</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-light pt-8 text-center">
          <p className="text-soft-green text-sm mb-4">
            * Diese Aussagen wurden nicht von der FDA bewertet. Dieses Produkt ist nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder zu verhindern.
          </p>
          <p className="text-soft-green text-sm">
            © 2024 Happy Mammoth. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
