"use client";

const mediaLogos = [
  { name: 'cosmopolitan', src: '/original-assets/cosmopolitan.svg', quote: '„Ich war plötzlich richtig ausgeglichen. Mein Mann hat\'s sofort gemerkt."' },
  { name: "Women's Health", src: '/original-assets/women-health.svg', quote: '„Mein Selbstvertrauen ist zurück. Ich fühle mich wieder wie ich!"' },
  { name: 'USA Today', src: '/original-assets/usa-today-logo.svg', quote: '„Wieder mehr Lebensfreude und Kraft – und das schneller als gedacht."' },
  { name: 'Who What Wear', src: '/original-assets/who-what-ever.svg', quote: '„Das ist ein Ergänzungsmittel, das man wirklich gerne nimmt. Es schmeckt so lecker - wie ein Vanille-Milchshake."' },
  { name: 'Athlisure', src: '/original-assets/athlisure.svg', quote: '„Die 9 List: Complete Gut Repair"' },
  { name: 'Body+Soul', src: '/original-assets/bodysoul.svg', quote: '„Meinem Bauch geht es definitiv besser als vorher, was ein wahres Wunder ist."' },
];

export default function SocialProof() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '32px', color: '#2d2d2d', marginBottom: '40px' }}>
          Durch Forschung in der Wirksamkeit bestätigte Inhaltsstoffe. Erwähnt in:
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
          {mediaLogos.map((media, i) => (
            <div key={i} style={{
              border: '1px solid #eee',
              borderRadius: '10px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
            }}>
              <img src={media.src} alt={media.name} style={{ height: '30px', objectFit: 'contain', filter: 'grayscale(1)' }} />
              <p style={{ fontSize: '13px', color: '#555', textAlign: 'center', margin: 0, lineHeight: '1.5', fontStyle: 'italic' }}>{media.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
