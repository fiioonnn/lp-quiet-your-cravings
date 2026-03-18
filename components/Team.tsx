"use client";

const team = [
  {
    img: '/original-assets/Group%201000002981.png',
    name: 'Tobie Kokot, MA',
    title: 'Chef-Ernährungs-wissenschaftler',
    bio: 'Tobie kommt aus Deutschland, wo er einen Master-Abschluss in Ernährungswissenschaften gemacht hat. Tobie entwickelt unsere natürlichen Formulierungen mit der „deutschen Präzision", die uns von anderen Marken abhebt.',
  },
  {
    img: '/original-assets/Group%201000002985%20_1_.png',
    name: 'Matt Murphy, BBus',
    title: 'CEO, Gründer und BioHacker',
    bio: 'Matt hat Happy Mammoth im Jahr 2017 gegründet. Angetrieben von Neugier, Wissensdurst, einer Begeisterung für qualitativ hochwertige Produktformulierungen und einer Leidenschaft für Naturheilkunde, führt ihn seine Suche nach wirksamen pflanzlichen Inhaltsstoffen rund um die Welt.',
  },
  {
    img: '/original-assets/Group%201000002986%20_1_.png',
    name: 'Aimée Gould Shunney, N.D',
    title: 'Ärztin für Naturheilverfahren und Hormonstörungen bei Frauen',
    bio: 'Dr. Aimée ist seit 2001 in eigener Praxis tätig und arbeitet derzeit am Santa Cruz Integrative Medicine Center. Sie ist auf Frauengesundheit spezialisiert, insbesondere die Wechseljahres-Begleitung, die individuelle Einstellung bioidentischer Hormone und die Behandlung funkt. Verdauungsbeschwerden.',
  },
  {
    img: '/original-assets/Group%201000002999.png',
    name: 'Annie Savage, ND',
    title: 'Ärztin für Naturheilverfahren und Hormone, PMS und Menopause',
    bio: 'Dr. Savage ist eine zugelassene Ärztin für Naturheilkunde aus Kanada. Sie verfügt über ein umfangreiches Fachwissen in Bereich Frauengesundheit, Naturheilkunde und hat in diesem Bereich ein Coaching-Programm „The Symptom-Free Period System" entwickelt.',
  },
];

export default function Team() {
  return (
    <>
      {/* Mission Banner */}
      <section style={{ backgroundColor: '#e8868a', padding: '60px 80px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '28px', margin: '0 0 8px' }}>Wir haben es uns zur Aufgabe gemacht</p>
        <p style={{ color: '#fff', fontWeight: '800', fontSize: '44px', margin: '0 0 8px' }}>100.000.000 Frauen</p>
        <p style={{ color: '#fff', fontSize: '28px', margin: '0 0 8px' }}>zu helfen, bis 2025</p>
        <p style={{ color: '#fff', fontSize: '28px', fontStyle: 'italic', fontWeight: '700', margin: '0 0 8px' }}>auf natürliche und sichere Weise Gewicht zu verlieren</p>
        <p style={{ color: '#fff', fontSize: '28px', margin: 0 }}>... und sich wieder wie sie selbst zu fühlen</p>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: '#f0f0f0', padding: '60px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {team.map((member, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <img src={member.img} alt={member.name} style={{ width: '100%', height: '240px', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ padding: '24px' }}>
                <h4 style={{ color: '#e63946', fontWeight: '700', fontSize: '20px', marginBottom: '4px' }}>{member.name}</h4>
                <p style={{ color: '#e63946', fontSize: '16px', marginBottom: '12px' }}>{member.title}</p>
                <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.6', margin: 0 }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
