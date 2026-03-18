"use client";

export default function Results() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Unbestreitbare Ergebnisse Box */}
        <div style={{ backgroundColor: '#e8a0a0', borderRadius: '20px', padding: '50px', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px', color: '#fff', marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '90px', fontWeight: '800', lineHeight: '1' }}>95%</div>
            <div style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', marginTop: '8px', lineHeight: '1.3' }}>ABNEHMEN<br />OHNE<br />ANSTRENGUNG</div>
          </div>
          <div>
            <h3 style={{ fontWeight: '700', fontSize: '28px', textTransform: 'uppercase', marginBottom: '20px' }}>UNBESTREITBARE ERGEBNISSE</h3>
            <p style={{ lineHeight: '1.7', fontSize: '16px', marginBottom: '16px' }}>
              In mehreren doppelblinden, placebokontrollierten Studien wollten Wissenschaftler herausfinden, ob die in Ultimate Glucose Support enthaltenen Extrakte wirklich helfen, den Blutzuckerspiegel zu kontrollieren und Heißhunger zu reduzieren, um...
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '16px', marginBottom: '20px' }}>
              den Teufelskreis der kontinuierlichen Gewichtszunahme zu beenden, Heißhunger auf Süßes und Kohlenhydrate auszuschalten und dauerhaft abzunehmen.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '16px', marginBottom: '20px' }}>
              Also forderten sie die Teilnehmer auf, mit dem Kalorienzählen aufzuhören und stattdessen jeden Morgen diese Pflanzenextrakte zu sich zu nehmen... Die Ergebnisse?
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                '40 % weniger Blutzuckerspitzen nach dem Essen',
                'Reduzierung des Blutzuckerspiegels um bis zu 30 mg/dL',
                'Signifikante Verringerung von BMI und Taillenumfang',
                'Die Teilnehmer haben 47,5 % weniger gegessen als sonst, ohne es überhaupt zu merken',
                '95 % der Teilnehmer haben Gewicht verloren',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start', fontSize: '16px', fontWeight: '700' }}>
                  <span style={{ backgroundColor: '#5ecbab', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ lineHeight: '1.7', fontSize: '16px', marginTop: '20px' }}>
              Das ist erstaunlich, denn es beweist, dass es durch die einfache Einnahme dieser bahnbrechenden Extrakte in Ultimate Glucose Support zum Ausgleich des Blutzuckerspiegels jetzt möglich ist, leicht abzunehmen.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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

        {/* Ingredients intro */}
        <div style={{ backgroundColor: '#fdf6e3', padding: '60px', borderRadius: '12px', textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '38px', color: '#1a1a1a', lineHeight: '1.3', marginBottom: '30px' }}>
            Einfach aufwachen, 2 winzige Kapseln einnehmen und den Heißhunger sofort ausschalten<br />Für den Rest des Tages
          </h2>
          <div style={{ fontSize: '18px', color: '#333', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
            <p>Entdecken Sie die <strong><em>5 bahnbrechenden Pflanzenextrakte</em></strong> die den Heißhunger in 2 Stunden oder weniger ausschalten.</p>
            <p>Jeder Inhaltsstoff wurde von Ernährungswissenschaftlern und führenden Experten für Gewichtsreduktion sorgfältig ausgewählt...</p>
            <p>Basierend auf jahrzehntelanger Forschung, Tausenden von klinischen Studien und Daten von über 2,2 Millionen Happy Mammoth Kunden...</p>
            <p>Perfekt abgestimmt in ihrer exakten, wissenschaftlich nachgewiesenen Dosierung.</p>
          </div>
        </div>

        {/* 5 Ingredients */}
        <div style={{ backgroundColor: '#fdf6e3', padding: '40px 60px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            {[
              {
                img: 'https://ucarecdn.com/6d10be8a-347e-45a1-bc2e-9ad888bcd191/-/format/auto/-/preview/500x500/-/quality/lighter/Ellipse%20249%20_1_.png',
                name: 'Reducose® Weiß\nExtrakt aus Maulbeerblättern',
                text: 'Verlangsamt die Verdauung von Kohlenhydraten und verhindert so, dass der Blutzuckerspiegel in die Höhe schnellt, was den Appetit und das Verlangen nach einer Mahlzeit in weniger als 2 Stunden reduziert. In einer placebokontrollierten klinischen Studie führte nur 1 Dosis des Extrakts aus weißem Maulbeerblatt zu <strong>40 % weniger Blutzuckerspitzen nach den Mahlzeiten</strong>.',
              },
              {
                img: 'https://ucarecdn.com/e7512296-d5e8-4c3d-95de-87ca65fde677/-/format/auto/-/preview/500x500/-/quality/lighter/Ellipse%20250.png',
                name: 'Schwarzes Maulbeerblatt\nAuszug',
                text: 'Fördert das Sättigungsgefühl nach den Mahlzeiten, um auf natürliche Weise den Appetit zu zügeln und den Kreislauf des übermäßigen Essens zu beenden. Es wird in der Traditionellen Chinesischen Medizin seit Tausenden von Jahren verwendet, um den Blutzucker auszugleichen und die Gewichtsabnahme zu fördern.',
              },
              {
                img: 'https://ucarecdn.com/ab36549d-37ae-4cb7-9c9d-d558fc904f12/-/format/auto/-/preview/500x500/-/quality/lighter/Ellipse%20253.png',
                name: 'Momordica Charantia\nAuszug',
                text: 'Führende koreanische Forscher entdeckten, dass bereits 1 Teelöffel Bittermelonenextrakt <strong>den Blutzuckerspiegel innerhalb von 30 Minuten ausgleicht</strong> – selbst bei Menschen, die schon lange unter Blutzuckerschwankungen leiden.',
              },
            ].map((ing, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={ing.img} alt={ing.name} style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
                <h4 style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a1a', marginBottom: '12px', whiteSpace: 'pre-line' }}>{ing.name}</h4>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.6', margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: ing.text }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '700px', margin: '0 auto' }}>
            {[
              {
                img: 'https://ucarecdn.com/d65a7310-23eb-47c0-a437-8f730af7d5f8/-/format/auto/-/preview/500x500/-/quality/lighter/Ellipse%20251.png',
                name: 'Zimtkassie-Extrakt',
                text: 'In einer bahnbrechenden Studie fanden Forscher heraus, dass Menschen, die täglich Zimtkassie einnehmen, <strong>ihren Blutzuckerspiegel auf natürliche Weise um bis zu 30 mg/dL senken können</strong> – die gleichen Ergebnisse wie gängige Blutzuckermedikamente (ohne die unangenehmen Nebenwirkungen).',
              },
              {
                img: 'https://ucarecdn.com/8cc00e75-9bfe-4e73-8d69-294f93dd5829/-/format/auto/-/preview/500x500/-/quality/lighter/Ellipse%20253%20_1_.png',
                name: 'Chromax® Chrom-Picolinat',
                text: 'Hilft, die körpereigene Insulinausschüttung zu kontrollieren, wodurch <strong>der Blutzuckerspiegel</strong> auf natürliche Weise <strong>in der „Heißhungerfreien Zone" gehalten wird.</strong> Keine Zuckerspitzen mehr, keine Leistungseinbrüche und kein unkontrollierbarer Heißhunger.',
              },
            ].map((ing, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={ing.img} alt={ing.name} style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
                <h4 style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a1a', marginBottom: '12px' }}>{ing.name}</h4>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.6', margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: ing.text }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
