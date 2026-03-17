"use client";

const stats = [
  {
    value: "40%",
    label: "weniger Blutzuckerspitzen",
    description: "Klinisch nachgewiesen durch Reducose®",
  },
  {
    value: "47.5%",
    label: "weniger Kalorienaufnahme",
    description: "Durch reduzierte Heißhungerattacken",
  },
  {
    value: "3x",
    label: "bessere Insulinsensitivität",
    description: "Mit Chromax® Chrom-Picolinat",
  },
  {
    value: "89%",
    label: "der Kunden empfehlen uns weiter",
    description: "Basierend auf Kundenumfragen",
  },
];

export default function Results() {
  return (
    <section className="bg-olive py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4">
          Wissenschaftlich belegte Ergebnisse
        </h2>
        <p className="text-center text-soft-green mb-12">
          Diese Zahlen basieren auf klinischen Studien und Kundenfeedback
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-soft-green text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur rounded-2xl p-8">
          <h3 className="font-serif text-2xl text-white text-center mb-6">
            Was Sie in den ersten Wochen erwarten können:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-gold text-xl font-bold mb-2">Woche 1-2</div>
              <p className="text-soft-green">
                Erste Reduzierung der Heißhungerattacken, stabilere Energielevel
              </p>
            </div>
            <div>
              <div className="text-gold text-xl font-bold mb-2">Woche 3-4</div>
              <p className="text-soft-green">
                Deutlich weniger Gelüste, besserer Schlaf, mehr Wohlbefinden
              </p>
            </div>
            <div>
              <div className="text-gold text-xl font-bold mb-2">Woche 5+</div>
              <p className="text-soft-green">
                Sichtbare Ergebnisse auf der Waage, dauerhafte Kontrolle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
