"use client";

const testimonials = [
  {
    name: "Cassandra C.",
    text: "Nach nur einer Woche bemerkte ich, dass meine Heißhungerattacken nachließen. Jetzt, nach 2 Monaten, habe ich 6 kg abgenommen ohne Diät!",
    rating: 5,
  },
  {
    name: "Nicole L.",
    text: "Ich war skeptisch, aber dieses Produkt hat mein Leben verändert. Meine Energielevel sind den ganzen Tag stabil und ich greife nicht mehr ständig zu Snacks.",
    rating: 5,
  },
  {
    name: "Faye M.",
    text: "Endlich ein Produkt, das hält was es verspricht! Meine Blutzuckerwerte sind so stabil wie nie zuvor.",
    rating: 5,
  },
  {
    name: "Maricel L.",
    text: "Die beste Entscheidung für meine Gesundheit. Ich fühle mich energiegeladen und die Gelüste nach Süßem sind praktisch verschwunden.",
    rating: 5,
  },
  {
    name: "Lisa G.",
    text: "Ich nehme es jetzt seit 6 Wochen und die Ergebnisse sprechen für sich. 5 kg weniger und ich fühle mich großartig!",
    rating: 5,
  },
  {
    name: "Tania S.",
    text: "Perfekt für alle, die mit Essensgelüsten kämpfen. Es funktioniert wirklich und die Qualität ist erstklassig.",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-olive-dark text-center mb-4">
          Was unsere Kunden sagen
        </h2>
        <p className="text-center text-warm-brown mb-12">
          Über 50.000 zufriedene Kunden haben bereits ihre Essensgelüste besiegt
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-warm-brown italic mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="text-olive font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
