"use client";
export default function AnnouncementBar() {
  return (
    <>
      {/* Quiz Banner */}
      <div style={{ backgroundColor: '#3a5a5a', padding: '10px 20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <p style={{ color: '#fff', fontSize: '14px', margin: 0 }}>
          Nehmen Sie an diesem kostenlosen 2-Minuten-Quiz teil, um die ultimative Antwort auf Ihre hartnäckigen hormonellen Symptome zu finden
        </p>
        <a href="https://de.happymammoth.com/pages/quiz" style={{
          backgroundColor: '#d94f43',
          color: '#fff',
          padding: '8px 20px',
          borderRadius: '25px',
          fontSize: '14px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          fontWeight: '600',
        }}>
          Zum Starten klicken
        </a>
      </div>

      {/* Trust Bar */}
      <div style={{ backgroundColor: '#4a6b6b', padding: '8px 20px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '13px', margin: 0 }}>
          ⭐⭐⭐⭐⭐ Über 3.3 Millionen zufriedene Kunden vertrauen uns. 📦 KOSTENLOSER VERSAND für Bestellungen innerhalb der EU über 99 €.
        </p>
      </div>

      {/* Navigation */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', gap: '30px', fontSize: '15px' }}>
          {['Shop', 'Unsere Geschichte', 'Meine Prämien', 'Bewertungen', 'VIP Club'].map(item => (
            <a key={item} href="#" style={{ color: '#2d2d2d', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="https://de.happymammoth.com">
            <img src="/original-assets/Capa_1.png" alt="Happy Mammoth" style={{ height: '70px', objectFit: 'contain' }} />
          </a>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '15px' }}>
          <a href="#" style={{ color: '#2d2d2d', textDecoration: 'none' }}>Support</a>
          <a href="#" style={{ color: '#2d2d2d', textDecoration: 'none' }}>Mein Konto</a>
          <a href="#" style={{ color: '#2d2d2d', textDecoration: 'none' }}>DE | EUR 🌐</a>
          <a href="#" style={{ color: '#2d2d2d', textDecoration: 'none' }}>🔍</a>
          <a href="#" style={{ position: 'relative', color: '#2d2d2d', textDecoration: 'none' }}>
            🛒
            <span style={{
              position: 'absolute', top: '-8px', right: '-8px',
              backgroundColor: '#d94f43', color: '#fff',
              borderRadius: '50%', width: '16px', height: '16px',
              fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>0</span>
          </a>
        </div>
      </nav>
    </>
  );
}
