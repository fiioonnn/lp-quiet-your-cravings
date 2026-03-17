"use client";

const ingredients = [
  {
    name: "Reducose® Weißes Maulbeerblatt",
    description: "Klinisch getestet, um die Aufnahme von Kohlenhydraten um bis zu 40% zu reduzieren. Hilft, Blutzuckerspitzen nach dem Essen zu vermeiden.",
    icon: "🍃",
  },
  {
    name: "Schwarzes Maulbeerblatt",
    description: "Unterstützt einen gesunden Glukosestoffwechsel und hilft, den Blutzuckerspiegel im Gleichgewicht zu halten.",
    icon: "🌿",
  },
  {
    name: "Momordica Charantia (Bittermelone)",
    description: "Traditionell verwendet zur Unterstützung eines gesunden Blutzuckerspiegels. Reich an natürlichen Verbindungen, die den Glukosestoffwechsel fördern.",
    icon: "🥒",
  },
  {
    name: "Zimtkassie",
    description: "Verbessert die Insulinsensitivität und hilft dem Körper, Glukose effizienter zu verarbeiten.",
    icon: "🌰",
  },
  {
    name: "Chromax® Chrom-Picolinat",
    description: "Die am besten erforschte Form von Chrom. Unterstützt einen gesunden Blutzuckerspiegel und reduziert Heißhunger auf Kohlenhydrate.",
    icon: "⚡",
  },
];

export default function Science() {
  return (
    <section className="bg-cream py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-olive-dark text-center mb-4">
          5 wissenschaftliche Durchbrüche in einer Kapsel
        </h2>
        <p className="text-center text-warm-brown mb-12 max-w-2xl mx-auto">
          Ultimate Glucose Support kombiniert die wirksamsten natürlichen Inhaltsstoffe für optimale Blutzuckerkontrolle
        </p>

        <div className="space-y-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="text-5xl">{ingredient.icon}</div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-olive-dark mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-warm-brown">{ingredient.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-olive">
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span> 100% natürlich
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Vegan
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Glutenfrei
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Ohne Zusatzstoffe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
