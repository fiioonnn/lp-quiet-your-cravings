"use client";

export default function Hero() {
  return (
    <section className="bg-[#F5F0EB] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Links: Text */}
        <div className="text-left">
          <h1 className="font-sans font-bold text-[36px] lg:text-[42px] text-[#333333] leading-tight mb-6">
            „Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte –{" "}
            <span className="text-[#C47A3A]">Jetzt sind 7 Kilo endgültig runter</span>"
          </h1>
          <p className="text-[#555] text-lg mb-4">
            Probieren Sie das <strong>NEU</strong> Ultimate Glucose Support aus: Schalten Sie Heißhungerattacken <strong>dauerhaft</strong> aus und regulieren Sie Ihren Blutzucker auf natürliche Weise.
          </p>
          <p className="text-[#555] mb-6">✅ 60-Tage-Geld-zurück-Garantie</p>
          {/* Testimonial */}
          <div className="border-l-4 border-[#E04040] pl-4 mb-8">
            <p className="italic text-[#555]">"4 Kilo abgenommen. Ich fühle mich viel weniger aufgebläht und meine Lust auf Leckereien ist eingedämmt."</p>
            <p className="font-semibold text-[#333] mt-1">— Cassandra C.</p>
          </div>
          <a href="#order" className="inline-block bg-[#5FBFA8] hover:bg-[#4DAA96] text-white font-bold uppercase tracking-wider text-[15px] px-8 py-4 rounded-full transition-all shadow-lg">
            PROBIEREN SIE ULTIMATE GLUCOSE SUPPORT
          </a>
        </div>
        {/* Rechts: Bild */}
        <div className="relative">
          <img src="https://placehold.co/700x600/F5F0EB/5FBFA8?text=Ultimate+Glucose+Support" alt="Ultimate Glucose Support" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}
