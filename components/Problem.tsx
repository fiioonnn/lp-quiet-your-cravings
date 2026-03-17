"use client";

export default function Problem() {
  return (
    <section className="bg-soft-green py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-olive-dark text-center mb-6">
          Kennen Sie das Problem mit instabilen Blutzuckerwerten?
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-warm-brown text-lg mb-6">
            Wenn Ihr Blutzucker Achterbahn fährt, passiert folgendes in Ihrem Körper:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <div>
                <p className="text-olive-dark font-semibold">Unkontrollierbare Heißhungerattacken</p>
                <p className="text-warm-brown">Ihr Körper schreit nach schneller Energie, meistens in Form von Zucker und Kohlenhydraten.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <div>
                <p className="text-olive-dark font-semibold">Das gefürchtete Nachmittagstief</p>
                <p className="text-warm-brown">Energielosigkeit, Müdigkeit und Konzentrationsprobleme machen den Tag zur Qual.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <div>
                <p className="text-olive-dark font-semibold">Gewichtszunahme trotz Diäten</p>
                <p className="text-warm-brown">Instabile Blutzuckerwerte sabotieren jeden Abnehmversuch von innen heraus.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">❌</span>
              <div>
                <p className="text-olive-dark font-semibold">Stimmungsschwankungen</p>
                <p className="text-warm-brown">Wenn der Blutzucker abstürzt, stürzt oft auch die Stimmung mit ab.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-soft-green rounded-xl">
            <p className="text-olive text-center font-serif text-xl">
              <strong>Die gute Nachricht:</strong> Mit den richtigen natürlichen Inhaltsstoffen können Sie Ihren Blutzucker stabilisieren und diese Probleme endgültig lösen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
