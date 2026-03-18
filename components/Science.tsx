"use client";

const breakthroughs = [
  {
    num: '1',
    headline: '„Wunderpflanze", die Blutzuckerspitzen um 40 % reduziert',
    text: 'In einer placebokontrollierten klinischen Studie hatten Frauen, die nur 1 Dosis dieses Extrakts einnahmen <strong><em>40 % weniger Blutzuckerspitzen nach den Mahlzeiten.</em></strong>',
  },
  {
    num: '2',
    headline: '"Schockierende Studie zeigt, wie man 47 % WENIGER Kalorien essen kann, ohne Entbehrungen"',
    text: 'Eine in der National Library of Medicine veröffentlichte Studie ergab, dass Menschen, die diesen Nährstoff in ihren Speiseplan aufnehmen <strong><em><u>auf natürliche Weise 47,5 % weniger Kalorien pro Tag zu sich nehmen</u></em></strong> - ohne überhaupt darüber nachzudenken!',
  },
  {
    num: '3',
    headline: '"Ein natürliches Blutzucker-Optimierungsmittel, das genauso wirksam ist wie ein beliebtes verschreibungspflichtiges Medikament"',
    text: 'In einer bahnbrechenden Studie fanden Forscher heraus, dass Menschen, die diesen Pflanzenextrakt einnehmen <strong><em><u>den Blutzuckerspiegel auf natürliche Weise um bis zu 30 mg/dL senken</u></em></strong> - die gleichen Ergebnisse wie die gängigen Blutzuckermedikamente (ohne die unangenehmen Nebenwirkungen).',
  },
  {
    num: '4',
    headline: '"Ein sofortiger Heißhunger-Blocker, der in nur 30 Minuten zu wirken beginnt"',
    text: 'Führende koreanische Forscher fanden heraus, dass bereits 1 Teelöffel dieses Extrakts <strong><em><u>den Blutzuckerspiegel innerhalb von 30 Minuten ausgleicht</u></em></strong> - selbst bei Menschen, die seit langem unter Blutzuckerschwankungen leiden.',
  },
  {
    num: '5',
    headline: 'Der „natürliche Torwächter", der Sie automatisch in die „Heißhungerfreie Zone" bringt',
    text: 'Dieser Extrakt hilft, die körpereigene Insulinausschüttung zu kontrollieren – was den Blutzuckerspiegel auf natürliche Weise <strong><em><u>in der „Heißhungerfreien Zone" hält.</u></em></strong> Keine Zuckerspitzen mehr, keine Leistungseinbrüche und kein unkontrollierbarer Heißhunger.',
  },
];

export default function Science() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '70px 80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '40px', color: '#e8779a', lineHeight: '1.25', marginBottom: '8px' }}>
          Die 5 größten wissenschaftlichen Durchbrüche der letzten 30 Jahre, die den Heißhunger stoppen...
        </h2>
        <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: '34px', color: '#1a1a1a', marginBottom: '40px' }}>
          in einer einzigen Kapsel vereint
        </h3>

        <div style={{ textAlign: 'center', fontSize: '18px', color: '#333', lineHeight: '1.8', marginBottom: '50px' }}>
          <p>Diese <strong><em>5 bahnbrechenden Pflanzenextrakte</em></strong> sind eine der größten Blutzucker-optimierenden Entdeckungen...</p>
          <p>die zusammenarbeiten, um Heißhunger auf Autopilot zu schalten...</p>
          <p>und ermöglichen einen natürlichen und schnellen Gewichtsverlust ohne Kalorienzählen... Hardcore-Diäten... Nahrungseinschränkungen... oder das Gefühl von Entbehrungen.</p>
        </div>

        {/* Breakthroughs */}
        {breakthroughs.map((bt, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            backgroundColor: i % 2 === 0 ? '#fde8e8' : '#fff',
            marginBottom: '2px',
            borderRadius: i === 0 ? '12px 12px 0 0' : i === 4 ? '0 0 12px 12px' : '0',
            overflow: 'hidden',
          }}>
            <div style={{ padding: '30px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.3', marginBottom: '8px' }}>
                Cravings-Stopping<br />Breakthrough
              </div>
              <div style={{ fontSize: '100px', fontWeight: '800', color: '#f0b8c8', lineHeight: '1' }}>{bt.num}</div>
            </div>
            <div style={{ padding: '30px 40px 30px 30px', borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontWeight: '700', fontSize: '22px', color: '#1a1a1a', marginBottom: '14px', lineHeight: '1.3' }}>{bt.headline}</h4>
              <p style={{ fontSize: '17px', color: '#333', lineHeight: '1.7', margin: 0 }}
                dangerouslySetInnerHTML={{ __html: bt.text }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
