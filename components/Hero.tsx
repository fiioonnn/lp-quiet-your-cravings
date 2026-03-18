"use client";
export default function Hero() {
  return (
    <section style={{ backgroundColor: '#f5f0eb', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'stretch', minHeight: '620px' }}>
        {/* Left: Text Content */}
        <div style={{ flex: '0 0 55%', padding: '50px 50px 50px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '44px', lineHeight: '1.2', color: '#0a0a0a', marginBottom: '24px', maxWidth: '560px' }}>
            „Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte –{' '}
            <span style={{ color: '#e05a4e' }}>Jetzt sind 7 Kilo endgültig runter</span>"
          </h1>
          <p style={{ fontSize: '17px', color: '#333', marginBottom: '30px', maxWidth: '520px', lineHeight: '1.6' }}>
            Probieren Sie das NEU <strong>Ultimate Glucose Support</strong> aus: Schalten Sie Heißhungerattacken <strong>dauerhaft</strong> aus, um hartnäckiges Fett auf Autopilot zu schmelzen (dauerhaft) – Keine „Willenskraft", „Disziplin" oder „Motivation" erforderlich
          </p>
          <a href="#pricing" style={{
            backgroundColor: '#5cc8a4',
            color: '#fff',
            padding: '20px 50px',
            borderRadius: '8px',
            fontSize: '17px',
            fontWeight: '700',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'inline-block',
            marginBottom: '14px',
          }}>
            PROBIEREN SIE ULTIMATE GLUCOSE SUPPORT
          </a>
          <p style={{ fontSize: '14px', color: '#555', margin: '0 0 24px' }}>✅ 60-Tage-Geld-zurück-Garantie</p>

          {/* Testimonial box */}
          <div style={{
            border: '2px solid #e05a4e',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#fff',
            maxWidth: '440px',
            textAlign: 'left',
          }}>
            <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.6' }}>
              „4 Kilo <strong>abgenommen</strong>. Ich fühle mich viel weniger <strong>aufgebläht</strong> und meine Lust auf Leckereien ist <strong>eingedämmt</strong>." ⭐⭐⭐⭐⭐<br />
              <strong>– Cassandra C.</strong>
            </p>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div style={{ flex: '0 0 45%', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/original-assets/hero-women.png"
            alt="Glückliche Frauen"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      </div>

      {/* Benefits Bar */}
      <div style={{ backgroundColor: '#fff', padding: '30px 80px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px' }}>
          {[
            { icon: 'https://ucarecdn.com/cb30552d-8570-46a1-a500-3a38ad4b5ffb/-/format/auto/-/preview/500x500/-/quality/lighter/Group%201000002801.png', text: '<strong style="color:#e05a4e">Heißhunger</strong> in nur 2 Stunden <strong style="color:#e05a4e">ausschalten</strong>' },
            { icon: 'https://ucarecdn.com/5f3de428-6d81-4176-84d0-623c930240d1/-/format/auto/-/preview/500x500/-/quality/lighter/Group%201000003011.png', text: 'Auf natürliche Weise <strong style="color:#e05a4e">47,5 % weniger Kalorien</strong> pro Tag essen' },
            { icon: 'https://ucarecdn.com/971191f9-14aa-4c10-b1c8-c71d4663a6c3/-/format/auto/-/preview/500x500/-/quality/lighter/Group%201000003001.png', text: '<strong style="color:#e05a4e">Starten Sie mit dem Ausgleich des Blutzuckerspiegels</strong> in 30 Min. oder weniger' },
            { icon: 'https://ucarecdn.com/9778f364-29fb-4238-a28b-18cf198d364c/-/format/auto/-/preview/500x500/-/quality/lighter/Group%201000003002.png', text: '<strong style="color:#e05a4e">40 % weniger Blutzucker</strong>spitzen nach Mahlzeiten' },
          ].map((benefit, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                backgroundColor: '#fde8e8',
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img src={benefit.icon} alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.5' }}
                dangerouslySetInnerHTML={{ __html: benefit.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
