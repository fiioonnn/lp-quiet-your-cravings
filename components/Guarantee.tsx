"use client";

export default function Guarantee() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '70px 80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontWeight: '700', fontSize: '38px', color: '#1a1a1a', marginBottom: '8px', lineHeight: '1.3' }}>
          Ihr Kauf ist abgesichert durch unsere
        </h2>
        <h3 style={{ textAlign: 'center', fontWeight: '700', fontSize: '38px', color: '#ffc338', marginBottom: '20px' }}>
          60-Tage-Geld-zurück-Garantie
        </h3>
        <p style={{ textAlign: 'center', fontSize: '17px', color: '#555', lineHeight: '1.7', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
          Hier bei Happy Mammoth stellen wir sicher, dass unsere Kunden ihr Produkt lieben oder wir erstatten ihnen 100 % ihrer Investition. Wir sind so zuversichtlich, dass Sie Ultimate Glucose Support genießen werden, dass wir das gesamte Risiko tragen.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', backgroundColor: '#f5f3f0', padding: '40px', borderRadius: '12px' }}>
          {[
            {
              icon: '/original-assets/Layer_1.png',
              title: 'Kostenloser Versand für alle Bestellungen über 99 €',
              text: 'Niemand zahlt gerne für den Versand. Deshalb übernehmen wir beim Kauf von zwei oder mehr Dosen die Versandkosten für Sie. Sie sparen mehr, wenn Sie mehr kaufen!',
            },
            {
              icon: '/original-assets/Layer_1%20_1_.png',
              title: '60-Tage-Geld-zurück-Garantie',
              text: 'Die meisten Frauen beginnen innerhalb von 7 Tagen mit der Gewichtsabnahme und bemerken einen flacheren Bauch. Manche spüren es schneller. Bei manchen dauert es etwas länger, denn jeder Mensch ist anders. Das Beste, was Sie tun können, ist, es auszuprobieren. Wenn Sie nicht feststellen, dass Sie mehr Energie haben und Ihre Kleidung lockerer sitzt, haben Sie 60 Tage Zeit, Ihr Geld zurückzufordern.',
            },
            {
              icon: '/original-assets/Layer_1%20_2_.png',
              title: 'Sofort-Erstattung',
              text: 'Wir möchten, dass Sie unglaubliche Effekte spüren und sichtbare Ergebnisse durch die Verwendung von Ultimate Glucose Support erzielen. Wenn Sie mit der Wirkung nicht zufrieden sind, erhalten Sie eine problemlose Rückerstattung, ohne dass Sie Fragen beantworten müssen.',
            },
          ].map((col, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={col.icon} alt={col.title} style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '16px' }} />
              <h4 style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a1a', marginBottom: '12px', lineHeight: '1.3' }}>{col.title}</h4>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', margin: 0 }}>{col.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
