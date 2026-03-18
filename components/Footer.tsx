"use client";
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2d2d2d', color: '#aaa', padding: '40px 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px', marginBottom: '40px' }}>
        <div>
          <img src="/original-assets/Capa_1.png" alt="Happy Mammoth" style={{ height: '60px', objectFit: 'contain', marginBottom: '16px', filter: 'brightness(10)' }} />
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Happy Mammoth hilft Frauen und Männern dabei, Heißhunger zu bekämpfen und ein gesundes Gewicht zu halten.</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '16px', fontWeight: '700' }}>Produkte</h4>
          {['Ultimate Glucose Support', 'Complete Gut Repair', 'Hormone Harmony Plus', 'Prebiotic Collagen Protein'].map(item => (
            <p key={item} style={{ fontSize: '14px', margin: '0 0 8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{item}</a></p>
          ))}
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '16px', fontWeight: '700' }}>Unternehmen</h4>
          {['Unsere Geschichte', 'Blog', 'Bewertungen', 'VIP Club', 'Support'].map(item => (
            <p key={item} style={{ fontSize: '14px', margin: '0 0 8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{item}</a></p>
          ))}
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '16px', fontWeight: '700' }}>Rechtliches</h4>
          {['Datenschutz', 'AGB', 'Impressum', 'Widerruf'].map(item => (
            <p key={item} style={{ fontSize: '14px', margin: '0 0 8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{item}</a></p>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid #444', paddingTop: '20px', textAlign: 'center', fontSize: '13px' }}>
        <p style={{ margin: 0 }}>© 2024 Happy Mammoth. Alle Rechte vorbehalten. | Die Aussagen auf dieser Website wurden nicht von der EFSA oder FDA bewertet.</p>
      </div>
    </footer>
  );
}
