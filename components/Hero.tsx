"use client";
export default function Hero() {
  return (
    <section style={{ backgroundColor: '#f5f5f5', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'stretch', minHeight: '600px' }}>
        {/* Left: Text Content */}
        <div style={{ flex: '1', padding: '60px 60px 60px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '38px', lineHeight: '1.25', color: '#0a0a0a', marginBottom: '24px', maxWidth: '520px' }}>
            „Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte –{' '}
            <span style={{ color: '#e05a4e' }}>Jetzt sind 7 Kilo endgültig runter</span>"
          </h1>
          <p style={{ fontSize: '17px', color: '#333', marginBottom: '30px', maxWidth: '520px', lineHeight: '1.6' }}>
            Probieren Sie das NEU <strong>Ultimate Glucose Support</strong> aus: Schalten Sie Heißhungerattacken <strong>dauerhaft</strong> aus, um hartnäckiges Fett auf Autopilot zu schmelzen – Keine „Willenskraft", „Disziplin" oder „Motivation" erforderlich
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
          <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>✅ 60-Tage-Geld-zurück-Garantie</p>

          {/* Testimonial overlay box */}
          <div style={{
            marginTop: '30px',
            border: '2px solid #e05a4e',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#fff',
            maxWidth: '420px',
            textAlign: 'left',
          }}>
            <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.6' }}>
              „4 Kilo abgenommen. Ich fühle mich viel weniger <strong>aufgebläht</strong> und meine Lust auf Leckereien ist <strong>eingedämmt</strong>." ⭐⭐⭐⭐⭐<br />
              <strong>– Cassandra C.</strong>
            </p>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div style={{ width: '45%', position: 'relative', minHeight: '600px', overflow: 'hidden' }}>
          <img
            src="/original-assets/image.png"
            alt="Drei glückliche Frauen"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
      </div>

      {/* Benefits Bar */}
      <div style={{ backgroundColor: '#fff', padding: '30px 80px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px' }}>
          {[
            { icon: '🔥', text: '**Heißhunger** in nur 2 Stunden **ausschalten**' },
            { icon: '⚖️', text: 'Auf natürliche Weise **47,5 % weniger Kalorien** pro Tag essen' },
            { icon: '📊', text: '**Starten Sie mit dem Ausgleich des Blutzuckerspiegels** in 30 Min. oder weniger' },
            { icon: '🌿', text: '**40 % weniger Blutzucker**spitzen nach Mahlzeiten' },
          ].map((benefit, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                backgroundColor: '#fde8e8',
                borderRadius: '50%',
                width: '54px',
                height: '54px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}>
                {benefit.icon}
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.5' }}
                dangerouslySetInnerHTML={{
                  __html: benefit.text
                    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#e05a4e">$1</strong>')
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
