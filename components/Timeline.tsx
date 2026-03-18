"use client";

export default function Timeline() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '70px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '38px', color: '#e63946', fontStyle: 'italic', marginBottom: '16px', lineHeight: '1.25' }}>
          Hören Sie JETZT auf, Kalorien, Kohlenhydrate und Makros zu zählen!
        </h2>
        <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: '32px', color: '#1a1a1a', marginBottom: '30px', lineHeight: '1.3' }}>
          Nehmen Sie Ultimate Glucose Support, um Fett zu verbrennen, während Sie sich entspannen, Ihrem Tagesablauf nachgehen … und sogar schlafen!
        </h3>
        <p style={{ textAlign: 'center', fontSize: '17px', color: '#333', marginBottom: '50px' }}>
          Ultimate Glucose Support zielt auf die Hauptursache Nr. 1 für Heißhungerattacken und den ständigen Abnehmkampf.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left: Image */}
          <div>
            <img
              src="/original-assets/Rectangle%202682.png"
              alt="Frau mit Ergebnissen"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>

          {/* Right: Timeline */}
          <div>
            <p style={{ fontSize: '17px', color: '#333', lineHeight: '1.7', marginBottom: '30px' }}>
              Können Sie sich zurücklehnen, entspannen und <strong>ganz einfach eine fitte, gesunde Sanduhrfigur beibehalten – unabhängig von Ihrem Alter, Ihrem Körpertyp oder davon, wie viele Jo-Jo-Diäten Sie in der Vergangenheit durchgemacht haben.</strong>
            </p>

            {[
              { time: '24 Stunden…', text: 'Sie merken, dass der Bauch flacher aussieht als in den letzten Jahren, auch ohne Ernährungsumstellung' },
              { time: 'Tag 7…', text: 'Die Kleidung beginnt lockerer zu sitzen, da sich die Fettzellen in der Taille, den Hüften, den Oberschenkeln und den Armen langsam abbauen und verschwinden' },
              { time: 'Tag 14…', text: 'Sie bemerken eine neue Muskeldefinition an den Unterarmen und Beinen, auch wenn Sie keinen Sport treiben' },
              { time: 'Tag 30…', text: 'Der Heißhunger auf Kohlenhydrate und Süßigkeiten verschwindet… und Frauen greifen ganz natürlich zu gesunden, ausgewogenen Lebensmitteln, ohne zu überlegen.' },
              { time: 'In ein paar kurzen Wochen…', text: 'seien Sie nicht schockiert, wenn Ihre Freunde und Familie Sie ungläubig anstarren… denn Ihre Verwandlung wird unübersehbar sein…' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <div style={{ color: '#e63946', fontWeight: '700', fontStyle: 'italic', fontSize: '18px', marginBottom: '6px' }}>{item.time}</div>
                <div style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="#pricing" style={{
            display: 'inline-block',
            backgroundColor: '#5ecbab',
            color: '#fff',
            padding: '20px 60px',
            borderRadius: '8px',
            fontSize: '17px',
            fontWeight: '700',
            textDecoration: 'none',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            PROBIEREN SIE ULTIMATE GLUCOSE SUPPORT
          </a>
          <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>✅ 60-Tage-Geld-zurück-Garantie</p>
        </div>
      </div>
    </section>
  );
}
