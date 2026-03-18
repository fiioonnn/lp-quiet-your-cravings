"use client";

const reviews = [
  { name: 'Juliette K.', product: 'Advanced Glucose Support', rating: 5, time: '4 months ago', title: 'Believe the hype!', text: 'After seeing so many positive reviews I took the plunge and placed an order. I found that within days after starting the daily dose that the "food noise" in my head had gone and therefore I was snacking less and not always feeling the need to finish everything on my plate/sharing table whereas previously I\'d eat until it was all gone. Completely recommend this product', age: '46-60', gender: 'Female' },
  { name: 'Wanita K.', product: 'Ultimate Glucose Support', rating: 5, time: '4 months ago', title: 'A product that works', text: 'Brilliant product really works!', age: null, gender: null },
  { name: 'Marilyn H.', product: 'Ultimate Glucose Support', rating: 5, time: '4 months ago', title: 'Happy', text: "I've noticed that my cravings are less and I've only been taking the Ultimate Cravings Control for a few weeks.", age: null, gender: null },
  { name: 'Lisikatt C.', product: 'Advanced Glucose Support', rating: 4, time: '4 months ago', title: 'Very good product', text: "I've been taking this product for the last 2 months, I'm full of energy and my sugar levels are stable, I'm very happy with this product.", age: '46-60', gender: 'Female' },
  { name: 'Susie T.', product: 'Ultimate Glucose Support', rating: 5, time: '4 months ago', title: 'Ultimate Cravings Control', text: 'I am on my second bottle and I think I am finally now see the effect. Not as hungry as normal.', age: null, gender: null },
  { name: 'Carol J.', product: 'Ultimate Glucose Support', rating: 5, time: '5 months ago', title: 'Well titled!', text: "It's WORKING! (I'm 77)", age: null, gender: null },
  { name: 'Crystal H.', product: 'Ultimate Glucose Support', rating: 5, time: '6 months ago', title: 'Helps', text: 'Helps me soo much with my monthly circle every Month and it\'s regular . Don\'t feel bloated either and able to do things', age: '31-45', gender: 'Female' },
  { name: 'Tina R.', product: 'Ultimate Glucose Support', rating: 5, time: '6 months ago', title: 'Cravings No More', text: 'Within a week of starting Ultimate Cravings Control my extreme cravings for junk food especially chocolate are controllable. I usually crave sweets after every meal but that isn\'t the case anymore.', age: null, gender: null },
  { name: 'Sandra C.', product: 'Ultimate Glucose Support', rating: 5, time: '6 months ago', title: 'Energy balancing', text: 'Amazing product. Suporta energy levels, no more cravings or tiredness after lunch.', age: '46-60', gender: 'Female' },
  { name: 'Stephanie P.', product: 'Ultimate Glucose Support', rating: 5, time: '6 months ago', title: 'Moins accro au sucre', text: 'Je ne pouvais pas finir mon repas sans un dessert et là, il m\'arrive parfois de ne pas en prendre du tout. Je n\'ai plus d\'envies impérieuses. Je le sens beaucoup plus sereine vis à vis du sucre. Génial !!!', age: '46-60', gender: 'Female' },
];

function Stars({ count }: { count: number }) {
  return (
    <span>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#f5a623' : '#ddd', fontSize: '16px' }}>★</span>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section style={{ backgroundColor: '#fdf5f3' }}>
      {/* Reviews Header */}
      <div style={{ backgroundColor: '#2d6b5a', padding: '60px 80px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '34px', margin: '0 0 8px', fontWeight: '400' }}>Echte, geprüfte Ergebnisse:</p>
        <h2 style={{ color: '#fff', fontWeight: '700', fontSize: '42px', margin: '0 0 16px' }}>
          Aus gutem Grund vertrauen Frauen weltweit auf Ultimate Glucose Support
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', margin: 0 }}>
          Hinweis: Alle folgenden Bewertungen stammen von Kunden, die das Produkt selbst bezahlt haben.<br />
          Sie wurden verifiziert und geprüft.
        </p>
      </div>

      {/* Review Summary */}
      <div style={{ backgroundColor: '#fff', padding: '24px 80px', display: 'flex', gap: '40px', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#4ecba9', borderRadius: '8px', padding: '8px 16px', color: '#fff', fontWeight: '700', fontSize: '20px' }}>4.8</div>
          <div>
            <Stars count={5} />
            <p style={{ fontSize: '13px', color: '#888', margin: '4px 0 0' }}>Based on 246 reviews</p>
          </div>
        </div>
        <div style={{ width: '1px', height: '50px', backgroundColor: '#eee' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#4ecba9', borderRadius: '8px', padding: '8px 16px', color: '#fff', fontWeight: '700', fontSize: '20px' }}>99%</div>
          <p style={{ fontSize: '15px', color: '#444', margin: 0 }}>of reviewers would recommend this product to a friend</p>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: '14px', color: '#555' }}>
          246 Reviews <span style={{ cursor: 'pointer' }}>Most Recent ▼</span>
        </div>
      </div>

      {/* Reviews List */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 80px 60px' }}>
        {reviews.map((review, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            borderBottom: '1px solid #e8d8d5',
            padding: '30px 0',
          }}>
            {/* Left */}
            <div style={{ paddingRight: '24px', borderRight: '1px solid #e8d8d5' }}>
              <p style={{ fontWeight: '600', fontSize: '15px', color: '#333', margin: '0 0 4px' }}>{review.name}</p>
              <p style={{ color: '#4ecba9', fontSize: '13px', margin: '0 0 8px' }}>✓ Verified Buyer</p>
              <p style={{ fontSize: '12px', color: '#888', margin: '0 0 2px' }}>Reviewing</p>
              <p style={{ fontSize: '13px', color: '#333', fontWeight: '600', margin: '0 0 8px' }}>{review.product}</p>
              <p style={{ color: '#4ecba9', fontSize: '13px', margin: '0 0 12px' }}>👍 I recommend this product</p>
              {review.age && (
                <>
                  <p style={{ fontSize: '13px', fontWeight: '700', color: '#333', margin: '0 0 2px' }}>We want to know more about you 🤗</p>
                  <p style={{ fontSize: '13px', color: '#777', margin: '0 0 8px' }}>{review.age}</p>
                  <p style={{ fontSize: '13px', fontWeight: '700', color: '#333', margin: '0 0 2px' }}>One last question!</p>
                  <p style={{ fontSize: '13px', color: '#777', margin: 0 }}>{review.gender}</p>
                </>
              )}
            </div>

            {/* Right */}
            <div style={{ paddingLeft: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <Stars count={review.rating} />
                <span style={{ fontSize: '13px', color: '#999' }}>{review.time}</span>
              </div>
              <h4 style={{ fontWeight: '700', fontSize: '18px', color: '#1a1a1a', marginBottom: '10px' }}>{review.title}</h4>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', margin: 0 }}>{review.text}</p>
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button style={{
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            padding: '12px 30px',
            borderRadius: '6px',
            fontSize: '15px',
            cursor: 'pointer',
            color: '#333',
            marginBottom: '30px',
          }}>
            Show more ▼
          </button>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="#pricing" style={{
            display: 'inline-block',
            backgroundColor: '#4ecdc4',
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
          <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>✅ 60-Tage-Geld-zurück-Garantie</p>
        </div>
      </div>
    </section>
  );
}
