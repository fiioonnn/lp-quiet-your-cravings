"use client";
import { useState } from "react";

const faqs = [
  { q: 'Wie nehme ich Ultimate Glucose Support ein?', a: 'Nehmen Sie täglich 2 Kapseln mit einem Glas Wasser, vorzugsweise morgens zu einer Mahlzeit.' },
  { q: 'Wann werde ich Ergebnisse sehen?', a: 'Viele Kunden berichten von weniger Heißhunger innerhalb von 2 Stunden nach der ersten Einnahme. Für optimale Ergebnisse empfehlen wir eine Einnahme von mindestens 30 Tagen.' },
  { q: 'Ist Ultimate Glucose Support für Veganer geeignet?', a: 'Ja! Ultimate Glucose Support ist 100% vegan und enthält keine tierischen Inhaltsstoffe.' },
  { q: 'Kann ich Ultimate Glucose Support mit anderen Medikamenten einnehmen?', a: 'Wir empfehlen Ihnen, vor der Einnahme mit Ihrem Arzt zu sprechen, besonders wenn Sie Medikamente einnehmen.' },
  { q: 'Wie ist Ihre Rückgabegarantie?', a: 'Wir bieten eine 60-Tage-Geld-zurück-Garantie. Wenn Sie nicht zufrieden sind, erhalten Sie eine vollständige Rückerstattung – ohne Fragen zu stellen.' },
  { q: 'Wie lange dauert die Lieferung?', a: 'Innerhalb der EU dauert die Lieferung in der Regel 3-7 Werktage. Bei Bestellungen über 99 € ist der Versand kostenlos.' },
  { q: 'Gibt es Nebenwirkungen?', a: 'Ultimate Glucose Support besteht aus 100% natürlichen Pflanzenextrakten und ist für die meisten Menschen gut verträglich. Konsultieren Sie bei Bedenken Ihren Arzt.' },
  { q: 'Ist dies für Männer und Frauen geeignet?', a: 'Ja, Ultimate Glucose Support ist sowohl für Männer als auch für Frauen geeignet.' },
  { q: 'Wie viele Kapseln sind in einer Dose?', a: 'Jede Dose enthält 48 vegane Kapseln, was einem 24-Tage-Vorrat bei 2 Kapseln pro Tag entspricht.' },
  { q: 'Was unterscheidet Ultimate Glucose Support von anderen Produkten?', a: 'Ultimate Glucose Support ist die weltweit erste 100% pflanzliche Formulierung, die 5 wissenschaftlich nachgewiesene Pflanzenextrakte kombiniert, die den Blutzucker stabilisieren und Heißhunger reduzieren.' },
  { q: 'Muss ich meine Ernährung ändern?', a: 'Nein! Das ist das Schöne an Ultimate Glucose Support – Sie müssen keine strenge Diät einhalten. Das Produkt hilft Ihrem Körper, den Blutzucker von innen heraus auszugleichen.' },
  { q: 'Kann ich Ultimate Glucose Support während der Schwangerschaft einnehmen?', a: 'Wir empfehlen, Ultimate Glucose Support während der Schwangerschaft oder Stillzeit nicht einzunehmen, ohne vorher einen Arzt zu konsultieren.' },
  { q: 'Ist das Produkt in Deutschland hergestellt?', a: 'Das Produkt wird in einer GMP-zertifizierten Einrichtung in der Europäischen Union hergestellt.' },
  { q: 'Kann ich das Produkt abonnieren?', a: 'Ja, wir bieten ein Abonnement-Modell an, mit dem Sie regelmäßige Lieferungen planen und zusätzlich sparen können.' },
  { q: 'Wie erhalte ich meine Bestellung?', a: 'Sie erhalten eine Bestellbestätigung per E-Mail mit einem Tracking-Link, sobald Ihr Paket versandt wurde.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: '#fff', padding: '70px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontWeight: '700', fontSize: '38px', color: '#1a1a1a', marginBottom: '8px', lineHeight: '1.3' }}>
          Noch unentschieden?
        </h2>
        <h3 style={{ textAlign: 'center', fontWeight: '700', fontSize: '36px', color: '#1a1a1a', marginBottom: '8px' }}>
          Hier sind die 15 häufigsten Fragen, die wir über
        </h3>
        <h3 style={{ textAlign: 'center', fontWeight: '700', fontSize: '36px', marginBottom: '50px' }}>
          <span style={{ color: '#e63946' }}>Ultimate Glucose Support</span> erhalten
        </h3>

        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid #eee' }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '20px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '17px',
                fontWeight: '600',
                color: '#1a1a1a',
              }}
            >
              {faq.q}
              <span style={{ fontSize: '20px', color: '#e63946', marginLeft: '16px' }}>{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && (
              <div style={{ padding: '0 0 20px', fontSize: '16px', color: '#555', lineHeight: '1.7' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}

        {/* Final CTA */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
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
      </div>
    </section>
  );
}
