import Head from 'next/head';
import { useState, useEffect } from 'react';

const forest = '#1F3A2E';
const sage = '#ABB69A';
const cream = '#E7E2D6';
const greige = '#C9C1B3';
const dark = '#333333';

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: 500,
    color: dark,
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 4px',
    letterSpacing: '0.05em',
  } as const;

  const btnPrimary = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: 600,
    color: cream,
    background: forest,
    border: 'none',
    borderRadius: '50px',
    padding: '16px 36px',
    cursor: 'pointer',
    letterSpacing: '0.05em',
    transition: 'all 0.3s',
  } as const;

  const btnOutline = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    color: forest,
    background: 'transparent',
    border: `2px solid ${forest}`,
    borderRadius: '50px',
    padding: '14px 30px',
    cursor: 'pointer',
    letterSpacing: '0.05em',
    transition: 'all 0.3s',
  } as const;

  const LogoSVG = ({ size = 44, color1 = forest, color2 = cream }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill={color2} stroke={color1} strokeWidth="2" />
      <circle cx="50" cy="28" r="14" fill={color1} />
      <path d="M34 48C34 48, 24 70, 50 86C76 70, 66 48, 66 48C66 48, 58 60, 50 60C42 60, 34 48, 34 48Z" fill={color1} />
      <path d="M42 78C42 78, 38 90, 50 94C62 90, 58 78, 58 78" stroke={color1} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );

  const IconSearch = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  const IconUser = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const IconHeart = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );

  return (
    <>
      <Head>
        <title>Aureva — Marketplace de Lifestyle para a Melhor Idade</title>
        <meta name="description" content="Aureva: a melhor idade, vivida com elegância." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* HEADER */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(231,226,214,0.97)',
        borderBottom: `1px solid ${forest}20`,
        padding: mobile ? '10px 16px' : '14px 40px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LogoSVG size={44} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: forest, lineHeight: 1 }}>Aureva</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 600, color: forest, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>Marketplace de Lifestyle</div>
            </div>
          </div>

          {/* Nav + Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 12 : 32 }}>
            {!mobile && (
              <>
                {['Membros', 'Produtos', 'Serviços'].map(item => (
                  <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={navStyle}
                    onMouseOver={(e) => { e.currentTarget.style.color = forest; e.currentTarget.style.opacity = '1'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = dark; e.currentTarget.style.opacity = '0.8'; }}
                  >{item}</button>
                ))}
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><IconSearch /></button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><IconUser /></button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><IconHeart /></button>
                <button onClick={() => scrollTo('contato')} style={btnOutline}
                  onMouseOver={(e) => { e.currentTarget.style.background = forest; e.currentTarget.style.color = cream; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = forest; }}
                >FALE CONOSCO</button>
              </>
            )}
            {mobile && (
              <button style={{ background: 'none', border: `2px solid ${forest}`, borderRadius: 8, padding: '8px 12px', cursor: 'pointer' }}>
                <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
                <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
                <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
              </button>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section style={{
          maxWidth: 1280, margin: '0 auto', padding: mobile ? '40px 16px' : '80px 40px',
          display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 40, alignItems: 'center',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '38px' : '56px', fontWeight: 700, color: forest, lineHeight: 1.15, marginBottom: 20 }}>
              A melhor idade,<br />vivida com elegância
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', lineHeight: 1.7, color: dark, marginBottom: 32, maxWidth: 500 }}>
              Um marketplace premium onde produtos, serviços e experiências são escolhidos com atenção real às necessidades de quem vive com mais sabedoria.
            </p>
            <button onClick={() => scrollTo('membros')} style={btnPrimary}
              onMouseOver={(e) => { e.currentTarget.style.background = '#152D20'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = forest; e.currentTarget.style.transform = 'translateY(0)'; }}
            >DESCUBRA MAIS</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 32 }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', fontWeight: 600, color: forest }}>4.8</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: dark }}>+2.000 membros</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div style={{
            flex: 1, width: '100%', minHeight: mobile ? 300 : 500, borderRadius: 24,
            backgroundImage: `linear-gradient(135deg, ${sage}, ${forest})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 20px 60px ${forest}30`,
          }}>
            <div style={{ textAlign: 'center', opacity: 0.6 }}>
              <LogoSVG size={80} color1={cream} color2={sage} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: cream, marginTop: 12 }}>Insira a foto aqui</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: cream }}>hero-banner.jpg</p>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section style={{ background: forest, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '40px', fontWeight: 600, color: cream, textAlign: 'center', marginBottom: 48 }}>
              Nossos Valores
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
              {[
                { t: 'Vitalidade', d: 'Bem-estar físico e mental para aproveitar cada momento com disposição.' },
                { t: 'Autonomia', d: 'Independência e liberdade para escolher como viver o próprio estilo de vida.' },
                { t: 'Elegância', d: 'Refinamento em cada detalhe, do visual às experiências cotidianas.' },
              ].map(c => (
                <div key={c.t} style={{ background: cream, borderRadius: 20, padding: 32, textAlign: 'center', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = greige; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = cream; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 600, color: forest, marginBottom: 16 }}>{c.t}</h3>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, lineHeight: 1.7, margin: 0 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PALETA DE CORES */}
        <section style={{ background: cream, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '40px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: 48 }}>
              Paleta de Cores
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(5, 1fr)', gap: 16 }}>
              {[
                { n: 'Forest', h: '#1F3A2E' },
                { n: 'Sage', h: '#ABB69A' },
                { n: 'Cream', h: '#E7E2D6' },
                { n: 'Greige', h: '#C9C1B3' },
                { n: 'Dark', h: '#333333' },
              ].map(c => (
                <div key={c.h} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: `1px solid ${greige}` }}>
                  <div style={{ height: 120, background: c.h }} />
                  <div style={{ padding: 16, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: dark }}>{c.n}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: greige }}>{c.h}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section style={{ background: forest, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '40px', fontWeight: 600, color: cream, textAlign: 'center', marginBottom: 48 }}>
              A Experiência Aureva
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
              {[
                { t: 'Curadoria', d: 'Ofertas selecionadas por especialistas para atender às suas necessidades reais.' },
                { t: 'Comunidade', d: 'Faça parte de uma rede de pessoas que compartilham interesses e experiências.' },
                { t: 'Benefícios', d: 'Acesso a vantagens exclusivas, descontos e conteúdos pensados para você.' },
              ].map(c => (
                <div key={c.t} style={{ background: `${cream}15`, borderRadius: 20, padding: 32, backdropFilter: 'blur(8px)', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = `${cream}25`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = `${cream}15`; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 600, color: sage, marginBottom: 16 }}>{c.t}</h3>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: cream, lineHeight: 1.7, margin: 0 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="membros" style={{ background: cream, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '40px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: 48 }}>
              O que dizem nossos membros
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
              {[
                { q: 'A Aureva mudou a forma como descubro produtos. Tudo é pensado com cuidado e elegância.', a: 'Marta Ribeiro, 72' },
                { q: 'Finalmente um marketplace que entende o que eu valorizo: qualidade, autonomia e bom gosto.', a: 'Carlos Eduardo, 68' },
                { q: 'A comunidade é acolhedora e os benefícios realmente fazem diferença no meu dia a dia.', a: 'Helena Souza, 75' },
              ].map(t => (
                <div key={t.a} style={{ background: 'white', borderRadius: 20, padding: 32, border: `1px solid ${greige}`, transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = forest; e.currentTarget.style.boxShadow = `0 12px 30px ${forest}20`; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = greige; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', color: sage, lineHeight: 1, marginBottom: 8 }}>"</div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, lineHeight: 1.7, marginBottom: 20 }}>{t.q}</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600, color: forest, margin: 0 }}>{t.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" style={{ background: sage, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '40px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: 8 }}>
              Fale Conosco
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, textAlign: 'center', marginBottom: 40 }}>
              Envie uma mensagem. Em breve retornamos.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); }} style={{ background: cream, borderRadius: 24, padding: mobile ? 24 : 40 }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>Nome</label>
                <input required placeholder="Seu nome" style={{ width: '100%', padding: '16px 18px', fontSize: '18px', fontFamily: "'Poppins', sans-serif", border: `2px solid ${greige}`, borderRadius: 12, outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>E-mail</label>
                <input required type="email" placeholder="seu@email.com" style={{ width: '100%', padding: '16px 18px', fontSize: '18px', fontFamily: "'Poppins', sans-serif", border: `2px solid ${greige}`, borderRadius: 12, outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>Mensagem</label>
                <textarea required rows={4} placeholder="Como podemos ajudar?" style={{ width: '100%', padding: '16px 18px', fontSize: '18px', fontFamily: "'Poppins', sans-serif", border: `2px solid ${greige}`, borderRadius: 12, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={btnPrimary}
                onMouseOver={(e) => { e.currentTarget.style.background = '#152D20'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = forest; }}
              >ENVIAR MENSAGEM</button>
            </form>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: forest, textAlign: 'center', marginTop: 32, fontWeight: 500 }}>
              Andre Cunha — contato@aureva.app.br
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: forest, padding: mobile ? '40px 16px' : '60px 40px', color: cream }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <LogoSVG size={36} color1={cream} color2={forest} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 600 }}>Aureva</span>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: `${cream}80`, lineHeight: 1.7, margin: 0 }}>
                Marketplace de lifestyle premium para a melhor idade.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: sage, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Navegação</div>
              {['Membros', 'Produtos', 'Serviços', 'Contato'].map(item => (
                <button key={item} onClick={() => scrollTo(item === 'Contato' ? 'contato' : item.toLowerCase())}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: `${cream}80`, background: 'none', border: 'none', cursor: 'pointer', display: 'block', padding: '6px 0', textAlign: 'left' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = cream; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = `${cream}80`; }}
                >{item}</button>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: sage, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Contato</div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: `${cream}80`, lineHeight: 1.8, margin: 0 }}>
                Andre Cunha<br />
                contato@aureva.app.br
              </p>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${cream}20`, paddingTop: 24, textAlign: 'center' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: `${cream}60`, margin: 0 }}>
              © 2026 Aureva. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
