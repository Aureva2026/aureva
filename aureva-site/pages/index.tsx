import Head from 'next/head';
import { useState, useEffect } from 'react';

const forest = '#1F3A2E';
const sage = '#ABB69A';
const cream = '#E7E2D6';
const greige = '#C9C1B3';
const dark = '#333333';

const slides = [
  { title: 'Curadoria Consciente', desc: 'Produtos selecionados com propósito e qualidade por especialistas que entendem as necessidades da melhor idade.' },
  { title: 'Experiência Premium', desc: 'Jornada de compra segura, humana e acolhedora — do primeiro clique à entrega em casa.' },
  { title: 'Estilo de Vida', desc: 'Muito mais que produtos: bem-estar, cultura e momentos que realmente importam.' },
  { title: 'Escolhas que Fazem Bem', desc: 'Para você, para os outros e para o planeta. Cada escolha é um passo consciente.' },
];

const LogoAureva = ({ size = 48, color = forest, bg = cream }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill={bg} stroke={color} strokeWidth="2" />
    <circle cx="50" cy="26" r="14" fill={color} />
    <path d="M32 48C32 48 22 72 50 88C78 72 68 48 68 48C68 48 60 60 50 60C40 60 32 48 32 48Z" fill={color} />
    <path d="M42 78C42 78 38 92 50 96C62 92 58 78 58 78" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
  const check = () => {
    if (window.innerWidth <= 899) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  check();
  window.addEventListener('resize', check);
  return () => window.removeEventListener('resize', check);
}, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const nextSlide = () => setSlideIdx((slideIdx + 1) % slides.length);
  const prevSlide = () => setSlideIdx((slideIdx - 1 + slides.length) % slides.length);

  const btnStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '17px',
    fontWeight: 600,
    color: cream,
    background: forest,
    border: 'none',
    borderRadius: '50px',
    padding: '16px 36px',
    cursor: 'pointer',
    letterSpacing: '0.04em',
    transition: 'all 0.3s',
  } as const;

  return (
    &lt;>
      <Head>
        <title>Aureva — Marketplace de Lifestyle para a Melhor Idade</title>
        <meta name="description" content="Aureva: a melhor idade, vivida com elegância." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'none', cursor: 'pointer' }}>
            <LogoAureva size={48} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: forest, lineHeight: 1, textAlign: 'left' }}>Aureva</div>
              <div style={{ fontSize: '10px', fontWeight: 500, color: forest, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'left' }}>MARKETPLACE DE LIFESTYLE</div>
            </div>
          </button>

          {!mobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {['MEMBROS', 'PRODUTOS', 'SERVIÇOS'].map(item => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: '18px', fontWeight: 500,
                  color: dark, background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px 4px', letterSpacing: '0.03em',
                }}
                  onMouseOver={(e) => { e.currentTarget.style.color = forest; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = dark; }}
                >{item}</button>
              ))}
              <button onClick={() => scrollTo('contato')} style={{
                fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600,
                color: forest, background: 'transparent',
                border: `2px solid ${forest}`, borderRadius: '50px',
                padding: '10px 24px', cursor: 'pointer', letterSpacing: '0.04em',
              }}
                onMouseOver={(e) => { e.currentTarget.style.background = forest; e.currentTarget.style.color = cream; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = forest; }}
              >FALE CONOSCO</button>
            </nav>
          )}

          {mobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: `2px solid ${forest}`, borderRadius: 8, padding: '8px 12px', cursor: 'pointer' }}>
              <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
              <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
              <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
            </button>
          )}
        </div>

        {mobile && menuOpen && (
          <nav style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['MEMBROS', 'PRODUTOS', 'SERVIÇOS'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={{
                fontFamily: "'Poppins', sans-serif", fontSize: '18px', fontWeight: 500,
                color: dark, background: 'none', border: 'none', cursor: 'pointer',
                padding: '12px 8px', textAlign: 'left',
              }}>{item}</button>
            ))}
            <button onClick={() => scrollTo('contato')} style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600,
              color: cream, background: forest, border: 'none', borderRadius: '50px',
              padding: '12px 24px', cursor: 'pointer',
            }}>FALE CONOSCO</button>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section style={{
          maxWidth: 1280, margin: '0 auto', padding: mobile ? '40px 16px' : '80px 40px',
          display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 40, alignItems: 'center',
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '38px' : '52px', fontWeight: 700, color: forest, lineHeight: 1.15, margin: '0 0 20px' }}>
              A melhor idade,<br />vivida com elegância
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', lineHeight: 1.7, color: dark, margin: '0 0 32px', maxWidth: 500 }}>
              Um marketplace premium onde produtos, serviços e experiências são escolhidos com atenção real a quem vive com mais sabedoria.
            </p>
            <button onClick={() => scrollTo('membros')} style={btnStyle}
              onMouseOver={(e) => { e.currentTarget.style.background = '#152D20'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = forest; }}
            >DESCUBRA MAIS</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 32 }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '17px', fontWeight: 600, color: forest }}>4.8</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: dark }}>+2.000 membros</span>
            </div>
          </div>

          <div style={{
            flex: 1, width: '100%', minHeight: mobile ? 280 : 480, borderRadius: 24,
            backgroundImage: `url('/hero-banner.jpg'), linear-gradient(135deg, ${sage}, ${forest})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 20px 60px ${forest}25`,
          }}>
            <div style={{ textAlign: 'center', opacity: 0.15 }}>
              <LogoAureva size={100} color={cream} bg="transparent" />
            </div>
          </div>
        </section>

        {/* CARROSSEL DE EXPERIÊNCIAS */}
        <section style={{ background: forest, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '40px', fontWeight: 600, color: cream, margin: '0 0 48px' }}>
              A Experiência Aureva
            </h2>

            <div style={{ background: cream, borderRadius: 24, padding: '48px 40px', position: 'relative', minHeight: 280 }}>
              <button onClick={prevSlide} style={{
                position: 'absolute', left: -16, top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%', border: 'none', background: forest,
                color: cream, fontSize: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 12px ${forest}40`, zIndex: 2,
              }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#152D20'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = forest; }}
              >‹</button>

              <button onClick={nextSlide} style={{
                position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%', border: 'none', background: forest,
                color: cream, fontSize: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 12px ${forest}40`, zIndex: 2,
              }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#152D20'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = forest; }}
              >›</button>

              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 600, color: forest, margin: '0 0 16px' }}>
                  {slides[slideIdx].title}
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
                  {slides[slideIdx].desc}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setSlideIdx(i)} style={{
                    width: 12, height: 12, borderRadius: '50%', border: 'none', cursor: 'pointer',
                    background: i === slideIdx ? forest : `${forest}30`, transition: 'all 0.3s',
                  }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MEMBROS */}
        <section id="membros" style={{ padding: mobile ? '60px 16px' : '80px 40px', maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '38px', fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 40px' }}>Membros</h2>
          <div style={{ background: cream, borderRadius: 24, padding: 40, textAlign: 'center', border: `1px solid ${greige}`, maxWidth: 600, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, lineHeight: 1.7, margin: 0 }}>
              Conecte-se com uma comunidade exclusiva de pessoas que compartilham o amor pela vida. Acesso a benefícios, eventos e uma rede de bem-estar.
            </p>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" style={{ background: sage, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '38px', fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 40px' }}>Produtos</h2>
            <div style={{ background: cream, borderRadius: 24, padding: 40, textAlign: 'center', border: `1px solid ${greige}`, maxWidth: 600, margin: '0 auto' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, lineHeight: 1.7, margin: 0 }}>
                Seleção premium de produtos para seu bem-estar, conforto e estilo de vida. Cada item é curado por especialistas que entendem suas necessidades.
              </p>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" style={{ padding: mobile ? '60px 16px' : '80px 40px', maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '38px', fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 40px' }}>Serviços</h2>
          <div style={{ background: cream, borderRadius: 24, padding: 40, textAlign: 'center', border: `1px solid ${greige}`, maxWidth: 600, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, lineHeight: 1.7, margin: 0 }}>
              Serviços especializados pensados para cada fase da sua jornada. Concierge, consultoria e muito mais para tornar seu dia a dia mais leve.
            </p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" style={{ background: sage, padding: mobile ? '60px 16px' : '80px 40px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: mobile ? '32px' : '38px', fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 8px' }}>Fale Conosco</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '18px', color: dark, textAlign: 'center', margin: '0 0 40px' }}>Envie sua mensagem. Retornamos em breve.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada!'); }} style={{ background: cream, borderRadius: 24, padding: mobile ? 24 : 40, border: `1px solid ${greige}` }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>Nome</label>
                <input required placeholder="Seu nome" style={{ width: '100%', padding: '16px 18px', fontSize: '18px', fontFamily: "'Poppins', sans-serif", border: `2px solid ${greige}`, borderRadius: 12, outline: 'none', boxSizing: 'border-box', background: 'white' }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>E-mail</label>
                <input required type="email" placeholder="seu@email.com" style={{ width: '100%', padding: '16px 18px', fontSize: '18px', fontFamily: "'Poppins', sans-serif", border: `2px solid ${greige}`, borderRadius: 12, outline: 'none', boxSizing: 'border-box', background: 'white' }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>Mensagem</label>
                <textarea required rows={4} placeholder="Como podemos ajudar?" style={{ width: '100%', padding: '16px 18px', fontSize: '18px', fontFamily: "'Poppins', sans-serif", border: `2px solid ${greige}`, borderRadius: 12, outline: 'none', resize: 'vertical', boxSizing: 'border-box', background: 'white' }} />
              </div>
              <button type="submit" style={btnStyle}
                onMouseOver={(e) => { e.currentTarget.style.background = '#152D20'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = forest; }}
              >ENVIAR MENSAGEM</button>
            </form>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '17px', color: forest, textAlign: 'center', marginTop: 32, fontWeight: 500 }}>
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
                <LogoAureva size={36} color={cream} bg="transparent" />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 600 }}>Aureva</span>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: `${cream}80`, lineHeight: 1.7, margin: 0 }}>
                Marketplace de lifestyle premium para a melhor idade.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: sage, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Navegação</div>
              {['Membros', 'Produtos', 'Serviços', 'Contato'].map(item => (
                <button key={item} onClick={() => scrollTo(item === 'Contato' ? 'contato' : item.toLowerCase())}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: `${cream}80`, background: 'none', border: 'none', cursor: 'pointer', display: 'block', padding: '6px 0', textAlign: 'left' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = cream; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = `${cream}80`; }}
                >{item}</button>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: sage, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Contato</div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: `${cream}80`, lineHeight: 1.8, margin: 0 }}>
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
