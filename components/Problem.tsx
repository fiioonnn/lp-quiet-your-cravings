"use client";

export default function Problem() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '70px 80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        {/* Main Headline */}
        <h2 style={{ fontFamily: 'var(--font-cabin)', fontWeight: 700, fontSize: '40px', color: '#e63946', lineHeight: '1.25', marginBottom: '24px' }}>
          Instabile Blutzuckerwerte sind die Ursache Nr. 1 für unkontrollierbaren Heißhunger und den lebenslangen Abnehmkampf
        </h2>
        <p style={{ fontSize: '19px', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
          Wenn der Blutzuckerspiegel <strong>zu hoch</strong> oder <strong>zu niedrig</strong> ist, ist es unmöglich, den Heißhunger zu ignorieren – egal, wie viel „Willenskraft", „Disziplin" oder „Motivation" Sie haben.
        </p>

        {/* Blood Sugar Diagram */}
        <div style={{ backgroundColor: '#f0f0f0', borderRadius: '12px', overflow: 'hidden', marginBottom: '50px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            {[
              { emoji: '😰', label: 'Zu niedrig', bg: '#d4eeff', desc: 'Ausgeprägter Heißhunger & Schwierigkeiten, ein gesundes Gewicht zu halten' },
              { emoji: '😁', label: 'Ausgeglichene Blutzuckerwerte', bg: '#7dd87d', desc: '„Heißhungerfreie Zone" & einfache, dauerhafte Gewichtsabnahme' },
              { emoji: '😱', label: 'Zu hoch', bg: '#ffaab5', desc: 'Ausgeprägter Heißhunger & schnelle, unkontrollierbare Gewichtszunahme' },
            ].map((col, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ padding: '20px 15px 10px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>{col.emoji}</div>
                  <div style={{ fontWeight: '700', color: '#e63946', fontSize: '14px', marginBottom: '8px' }}>{col.label}</div>
                  <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.4' }}>{col.desc}</div>
                </div>
                <div style={{ backgroundColor: col.bg, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {i === 0 && <svg width="100%" height="40" viewBox="0 0 100 40"><path d="M0 35 Q25 30 50 20 Q75 10 100 5" stroke="#e63946" strokeWidth="2" strokeDasharray="5,3" fill="none"/></svg>}
                  {i === 1 && <svg width="100%" height="40" viewBox="0 0 100 40"><path d="M0 20 Q25 22 50 20 Q75 18 100 20" stroke="#e63946" strokeWidth="2" strokeDasharray="5,3" fill="none"/></svg>}
                  {i === 2 && <svg width="100%" height="40" viewBox="0 0 100 40"><path d="M0 35 Q25 30 50 20 Q75 10 100 5" stroke="#e63946" strokeWidth="2" strokeDasharray="5,3" fill="none" transform="scale(-1,1) translate(-100,0)"/></svg>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Science Text */}
        <div style={{ textAlign: 'center', lineHeight: '1.8', fontSize: '18px', color: '#444' }}>
          <p>Wenn der Blutzuckerspiegel <strong>zu hoch</strong> oder <strong>zu niedrig</strong> ist, versucht das Gehirn, dies auszugleichen, indem es nach zucker- und kohlenhydrathaltigen Lebensmitteln schreit - was es fast unmöglich macht, ein gesundes Gewicht zu halten</p>
          <p style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a' }}>Hunderten von Studien zufolge nehmen 95 % der Menschen, die mit strengen Diäten und Sport abnehmen, innerhalb von 2 Jahren wieder zu...</p>
          <p>Schlimmer noch: Viele Menschen <strong>nehmen sogar noch mehr Gewicht zu</strong>, als sie zu Beginn hatten.</p>
          <p>Jahrelang waren Wissenschaftler darüber verblüfft...</p>
          <p>Bis eine bahnbrechende Studie, die in der National Library of Medicine veröffentlicht wurde, endlich die Wahrheit ans Licht brachte:</p>
          <p style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a' }}>Die Fähigkeit, Heißhunger zu kontrollieren und einen gesunden Lebensstil beizubehalten, hat nichts mit „Willenskraft", „Disziplin" oder „Motivation" zu tun...</p>
          <p>Im Grunde genommen geht es nur um eines: den Blutzuckerspiegel.</p>
          <p>Der Körper wird durch Zucker (auch bekannt als Glukose) <strong>mit Energie versorgt</strong> ...</p>
          <p><strong>Das Gehirn ist</strong> also jede Sekunde des Tages auf <strong>der verzweifelten Suche nach Zucker...</strong></p>
        </div>

        {/* Callout Boxes */}
        <div style={{ backgroundColor: '#fff0ed', borderRadius: '8px', padding: '22px 28px', marginTop: '30px', textAlign: 'center', fontSize: '18px' }}>
          <span style={{ color: '#e63946', fontWeight: '700' }}>Wenn der Blutzucker <u>zu niedrig</u> ist,</span>
          <span style={{ color: '#e63946' }}> schreit das Gehirn: </span>
          <em style={{ color: '#e63946' }}>„Iss Zucker, sofort!"</em>
        </div>

        <div style={{ backgroundColor: '#e63946', borderRadius: '8px', padding: '22px 28px', marginTop: '16px', textAlign: 'center', fontSize: '18px' }}>
          <span style={{ color: '#fff', fontWeight: '700' }}>Wenn der Blutzuckerspiegel <u>zu hoch</u> ist</span>
          <span style={{ color: '#fff' }}>, versucht der Körper, ihn mit Insulin auszuschwemmen - was das Gehirn dazu veranlasst, zu schreien: </span>
          <em style={{ color: '#fff' }}>„Beeilung!!! Wir verlieren schnell Zucker - iss jetzt Schokolade, Kuchen und Eiscreme!"</em>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center', lineHeight: '1.8', fontSize: '18px', color: '#444' }}>
          <p>Aus diesem Grund bezeichnen Wissenschaftler einen gesunden Blutzuckerspiegel als <strong>„Heißhungerfreie Zone"</strong>...</p>
          <p>Denn solange der Blutzuckerspiegel <strong>ausgeglichen</strong> ist, verschwindet der Heißhunger!!!</p>
          <p>Mit anderen Worten...</p>
          <p style={{ fontWeight: '700', fontSize: '20px', color: '#1a1a1a' }}>Die beste Methode, um Heißhunger AUSZUSCHALTEN und ein gesundes Gewicht zu halten, besteht darin, den Blutzuckerspiegel von innen heraus auszugleichen...</p>
        </div>
      </div>
    </section>
  );
}
