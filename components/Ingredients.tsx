"use client";

export default function Ingredients() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '70px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#e63946', fontWeight: '700', fontSize: '36px', marginBottom: '8px' }}>
          Was ist in Ultimate Glucose Support enthalten?
        </h2>
        <h3 style={{ textAlign: 'center', fontWeight: '700', fontSize: '40px', color: '#1a1a1a', marginBottom: '50px', lineHeight: '1.25' }}>
          Nichts als natürliche, wissenschaftlich fundierte Inhaltsstoffe.
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Ingredients Table */}
          <div style={{ border: '2px solid #1a1a1a', borderRadius: '4px', overflow: 'hidden', fontSize: '13px' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '12px 16px' }}>
              <p style={{ color: '#fff', fontWeight: '700', fontSize: '16px', margin: 0 }}>Ingredients Facts</p>
            </div>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #ddd' }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#333' }}>24 Servings per Container</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '700' }}>Serving size: 3 capsules</span>
              </div>
            </div>
            <div style={{ padding: '8px 16px', borderBottom: '2px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span></span>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontWeight: '700' }}>Amount Per Serving</span><span> | </span><span>*NRV%</span>
              </div>
            </div>
            {[
              ['Bulking Agent: Microcrystalline Cellulose', '-', '-'],
              ['Capsule: Hydroxypropylmethylcellulose', '-', '-'],
              ['Reducose® – White Mulberry Leaf Extract 5% Deoxynojirimycin (Morus alba)', '250 mg', '-'],
              ['Black Mulberry Leaf Extract 10:1, 1% deoxynojirimicin (Morus nigra)', '150 mg', '-'],
              ['Momordica Charantia Extract 25:1 (Bitter Gourd)', '100 mg', '-'],
              ['Cinnamon Cassia Extract 40:1 (Cinnamomum aromaticum cassia)', '75 mg', '-'],
              ['Chromax® – Chromium Picolinate (50mcg of elemental Chromium)', '416 mcg', '-'],
            ].map(([name, amount, nrv], i) => (
              <div key={i} style={{ padding: '8px 16px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#333', flex: 1, lineHeight: '1.4' }}>{name}</span>
                <span style={{ color: '#333', whiteSpace: 'nowrap' }}>{amount}</span>
                <span style={{ color: '#333', width: '30px', textAlign: 'right' }}>{nrv}</span>
              </div>
            ))}
            <div style={{ padding: '12px 16px', fontSize: '11px', color: '#666' }}>
              *NRV% – Nutrition Reference Value &nbsp;&nbsp; **NRV% – not established
            </div>
            <div style={{ padding: '12px 16px', borderTop: '1px solid #ddd', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: '700', fontSize: '14px' }}>Reducose®</span>
              <span style={{ fontWeight: '700', fontSize: '14px' }}>Chromax®</span>
              <span style={{ fontSize: '11px', color: '#666' }}>Reducose® is a trademark of Phynova</span>
              <span style={{ fontSize: '11px', color: '#666' }}>Chromax® is a registered trademark of Nutrition21, LLC</span>
            </div>
          </div>

          {/* Product photo */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/original-assets/Bottle_001%2013.png"
              alt="Ultimate Glucose Support Flasche"
              style={{ maxWidth: '380px', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
