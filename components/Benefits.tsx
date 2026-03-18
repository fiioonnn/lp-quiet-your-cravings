"use client";

const benefits = [
  {
    title: 'Endlich nicht mehr den ganzen Tag snacken',
    text: 'Plötzlich hat der Körper ein natürliches Verlangen nach gesunden, ausgewogenen Lebensmitteln, die Energie spenden, Fett schmelzen lassen und satt machen. Kein Kuchen mehr zum Kaffee… keine Nachmittagssnacks mehr… kein nächtliches Plündern des Kühlschranks mehr.',
  },
  {
    title: 'Jedes Outfit wird plötzlich umwerfend an Ihnen aussehen',
    text: 'Probieren Sie ruhig die alten Jeans aus der Schulzeit oder das zierliche schwarze Kleid ganz hinten im Schrank an – Ihr Selbstvertrauen wird in die Höhe schießen, wenn die neue, schlanke Figur mühelos in jedes einzelne Outfit passt',
  },
  {
    title: 'Erleben Sie, wie die Kinnladen herunterfallen, wenn das jahrelange Übergewicht mühelos verschwindet.',
    text: 'Wundern Sie sich nicht, wenn Ihre Lieben – oder auch völlig Fremde – Sie mit Komplimenten überhäufen, wenn der ganze Körper fit, gesund und straff wird.',
  },
  {
    title: 'Hören Sie auf, sich über jeden Bissen Gedanken zu machen – genießen Sie Ihre Mahlzeiten wieder!',
    text: 'Keine restriktiven Diäten mehr, kein Kalorienzählen und keine zwanghafte Überwachung der Schritte… beobachten Sie einfach, wie Ihre Taille schrumpft, während Ihr Körper auf natürliche Weise Heißhungerattacken blockiert und Fett abbaut.',
  },
  {
    title: 'Fühlen Sie sich energiegeladener, jugendlicher und ruhiger',
    text: 'Genießen Sie die Vorteile eines gesunden Blutzuckerspiegels von Kopf bis Fuß – weniger Müdigkeit, schlechte Laune und Heißhungerattacken',
  },
];

const badges = [
  { icon: '🌿', text: 'Geeignet für Keto-, Paleo- und vegane Ernährung' },
  { icon: '☕', text: 'GMO- & Koffeinfrei' },
  { icon: '🏭', text: 'Hergestellt in einer von der Europäischen Union GMP-zertifizierten Einrichtung' },
  { icon: '📋', text: 'Basierend auf tausenden klinischen Studien' },
  { icon: '🔬', text: 'Dreifach getestet auf Reinheit, Qualität & exakte Dosierung' },
];

export default function Benefits() {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '70px 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '38px', color: '#1a1a1a', marginBottom: '8px', lineHeight: '1.25' }}>
          Geeignet für Frauen jeden Alters und Körperbaus:
        </h2>
        <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: '38px', color: '#e63946', fontStyle: 'italic', marginBottom: '50px', lineHeight: '1.25' }}>
          Egal, an wie vielen Jo-Jo-Diäten oder Trainingsroutinen sie in der Vergangenheit gescheitert sind
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Benefits list */}
          <div>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '30px', alignItems: 'flex-start' }}>
                <div style={{
                  backgroundColor: '#4caf50',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0,
                  fontSize: '14px',
                  fontWeight: '700',
                }}>✓</div>
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a1a', marginBottom: '8px' }}>{b.title}</h4>
                  <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', margin: 0 }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div>
            <img
              src="https://ucarecdn.com/f2e1c3f1-9b99-4b3e-854a-f8da936b37c9/-/format/auto/-/preview/3000x3000/-/quality/lighter/image.png"
              alt="Selbstbewusste Frau"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>
        </div>

        {/* Diet badges */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h3 style={{ fontWeight: '700', fontSize: '34px', color: '#1a1a1a', marginBottom: '40px' }}>
            Testen Sie unser diätfreundliches Nahrungsergänzungsmittel noch heute!
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {badges.map((badge, i) => (
              <div key={i} style={{ textAlign: 'center', maxWidth: '150px' }}>
                <div style={{
                  backgroundColor: '#fde8e8',
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  margin: '0 auto 12px',
                  border: '2px solid #f0b0b0',
                }}>
                  {badge.icon}
                </div>
                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: '1.4' }}>{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
