"use client";

export default function ProductIntro() {
  return (
    <section style={{ backgroundColor: '#f9e8e4', padding: '70px 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Arrows headline */}
        <p style={{ color: '#e63946', fontSize: '20px', marginBottom: '16px' }}>
          ↓ Endlich ist es möglich, Heißhunger für immer auszuschalten ↓
        </p>

        {/* Main headline */}
        <h2 style={{ fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '40px', color: '#1a1a1a', lineHeight: '1.25', marginBottom: '20px', maxWidth: '900px', margin: '0 auto 20px' }}>
          Gleichen Sie den Blutzuckerspiegel aus, unterdrücken Sie Heißhungerattacken und beobachten Sie, wie überschüssiges Fett auf Autopilot schmilzt – mit <span style={{ color: '#e63946' }}>Ultimate Glucose Support</span>
        </h2>

        <p style={{ fontSize: '17px', color: '#555', marginBottom: '50px' }}>
          Keine Medikamente, Insulinspritzen, strenge Diäten oder verrückte Trainingsroutinen erforderlich
        </p>

        {/* Product section 2-col */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', textAlign: 'left' }}>
          {/* Left: Product bottle */}
          <div style={{ flex: '0 0 40%', textAlign: 'center' }}>
            <img
              src="https://ucarecdn.com/ca190acc-e516-459e-9041-b59f7496e80e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Bottle_001%2013.png"
              alt="Ultimate Glucose Support"
              style={{ maxWidth: '400px', width: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Right: Text */}
          <div style={{ flex: '1', lineHeight: '1.8', fontSize: '17px', color: '#333' }}>
            <p><strong>Ultimate Glucose Support</strong> ist die weltweit erste und einzige 100 % pflanzliche Formulierung, die endlich den Albtraum der Jo-Jo-Diät beendet...</p>
            <p><strong>Befreit Tausende von Frauen und Männern</strong> vom lebenslangen Abnehmkampf...</p>
            <p>Indem es den Blutzuckerspiegel ausgleicht und <strong>Heißhungerattacken in nur 2 Stunden unterdrückt...</strong></p>
            <p>Um es einfach auszudrücken...</p>
            <p style={{ color: '#d4648a', textDecoration: 'underline', fontWeight: '700', fontSize: '18px' }}>Blutzucker ausgleichen = Heißhunger abschalten</p>
            <p>Und das Beste daran?</p>
            <p>Es dauert nur ein paar Sekunden jeden Morgen...</p>

            <a href="#pricing" style={{
              display: 'inline-block',
              backgroundColor: '#5ecbab',
              color: '#fff',
              padding: '20px 50px',
              borderRadius: '50px',
              fontSize: '17px',
              fontWeight: '700',
              textDecoration: 'none',
              textTransform: 'uppercase',
              marginTop: '20px',
              marginBottom: '14px',
            }}>
              PROBIEREN SIE ULTIMATE GLUCOSE SUPPORT
            </a>
            <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>✅ 60-Tage-Geld-zurück-Garantie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
