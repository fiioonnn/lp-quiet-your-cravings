"use client";

const plans = [
  {
    label: 'STARTER-ANGEBOT',
    labelBg: '#f0f0f0',
    labelColor: '#555',
    borderColor: '#ddd',
    bottles: 1,
    price: '€59,99',
    perBottle: 'Pro Dose',
    total: '59,99 €',
    totalOld: null,
    discount: null,
    klarna: '14,99',
    freeShipping: false,
    img: '/original-assets/Bottle_001%2013.png',
  },
  {
    label: 'AM BELIEBTESTEN',
    labelBg: '#e63946',
    labelColor: '#fff',
    borderColor: '#e63946',
    bottles: 4,
    price: '€52,49',
    perBottle: 'Pro Dose',
    total: '209,99 €',
    totalOld: '239,99 €',
    discount: '13% RABATT',
    discountBg: '#e63946',
    klarna: '52,49',
    freeShipping: true,
    img: '/original-assets/Bottle_001%2014.png',
  },
  {
    label: 'BESTER DEAL',
    labelBg: '#fde8e8',
    labelColor: '#e63946',
    borderColor: '#f0c0c0',
    bottles: 2,
    price: '€54,99',
    perBottle: 'Pro Dose',
    total: '109,99 €',
    totalOld: '119,99 €',
    discount: '8% RABATT',
    discountBg: '#f0a0a0',
    klarna: '27,49',
    freeShipping: true,
    img: '/original-assets/Bottle_001%2013.png',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ backgroundColor: '#fff', padding: '0 0 60px' }}>
      {/* Red shipping banner */}
      <div style={{ backgroundColor: '#e63946', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontWeight: '700', fontSize: '28px', margin: 0 }}>
          Kostenloser Versand bei Bestellungen von 2 und 4 Dosen
        </p>
      </div>

      {/* Stepper */}
      <div style={{ maxWidth: '600px', margin: '40px auto 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0' }}>
        {['Wählen Sie Ihr Angebot', 'Zahlungsmethoden', 'Vielen Dank!'].map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '32px', height: '32px',
                borderRadius: '50%',
                backgroundColor: i === 0 ? '#555' : '#ccc',
                color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', fontWeight: '700',
              }}>{i + 1}</div>
              <span style={{ fontSize: '13px', color: i === 0 ? '#333' : '#aaa', whiteSpace: 'nowrap' }}>{step}</span>
            </div>
            {i < 2 && <div style={{ width: '80px', height: '2px', backgroundColor: '#ccc', margin: '0 8px 20px' }} />}
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', fontWeight: '700', fontSize: '34px', color: '#333', marginBottom: '30px' }}>Wählen Sie Ihr Angebot</h2>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            border: `2px solid ${plan.borderColor}`,
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Header */}
            <div style={{ backgroundColor: plan.labelBg, padding: '12px', textAlign: 'center', position: 'relative' }}>
              <span style={{ color: plan.labelColor, fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{plan.label}</span>
              {plan.discount && (
                <div style={{
                  position: 'absolute', top: '50%', right: '12px', transform: 'translateY(-50%)',
                  backgroundColor: plan.discountBg,
                  color: plan.labelBg === '#e63946' ? '#fff' : '#e63946',
                  borderRadius: '50%',
                  width: '55px', height: '55px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: '700', textAlign: 'center', lineHeight: '1.2',
                }}>
                  {plan.discount}
                </div>
              )}
            </div>

            <div style={{ padding: '24px', textAlign: 'center' }}>
              <img src={plan.img} alt={`${plan.bottles} Flasche(n)`} style={{ height: '160px', objectFit: 'contain', marginBottom: '16px' }} />

              <div style={{ fontSize: '36px', fontWeight: '800', color: i === 0 ? '#555' : '#e63946', marginBottom: '4px' }}>{plan.price}</div>
              <div style={{ fontSize: '14px', color: '#777', textDecoration: 'underline', marginBottom: '12px' }}>{plan.perBottle}</div>
              <div style={{ fontSize: '15px', color: '#555', marginBottom: '8px' }}>
                Gesamt: {plan.totalOld && <s style={{ color: '#999', marginRight: '6px' }}>{plan.totalOld}</s>}{plan.total}
              </div>
              <div style={{ fontSize: '13px', color: '#777', marginBottom: '20px' }}>
                oder 4 Raten von {plan.klarna} € mit <strong>Klarna.</strong>
              </div>

              <a href="#" style={{
                display: 'block',
                backgroundColor: '#48c9b0',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                🛒 JETZT KAUFEN
              </a>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '11px', color: '#777', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  🛡️ 60-TAGE-GELD-ZURÜCK-GARANTIE
                </div>
                {plan.freeShipping && (
                  <div style={{ fontSize: '11px', color: '#777', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    🚚 GRATIS VERSAND
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div style={{ maxWidth: '1100px', margin: '30px auto 0', padding: '0 40px' }}>
        <div style={{ backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px 30px', display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '0 0 auto' }}>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 10px', fontWeight: '600' }}>Unsere vertrauenswürdigen Zahlungsdienstleister:</p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', backgroundColor: '#003087', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>PayPal</span>
              <span style={{ fontSize: '12px', backgroundColor: '#1a1f71', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>VISA</span>
              <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}>MC</span>
              <span style={{ fontSize: '12px', backgroundColor: '#f4b9da', padding: '4px 8px', borderRadius: '4px', fontWeight: '700', color: '#000' }}>Klarna</span>
              <span style={{ fontSize: '12px', backgroundColor: '#00a651', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>🔒 SSL</span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', margin: 0 }}>
            Wir verwenden einen 256-Bit-gesicherten Warenkorb, in dem Ihre Daten zu 100 % verschlüsselt, sicher und geschützt sind. Dies ist derselbe Datensicherheitsstandard, der von den meisten Banken, Regierungen und militärischen Organisationen verwendet wird.
          </p>
        </div>
      </div>
    </section>
  );
}
