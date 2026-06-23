import Head from 'next/head';
import { useState, useEffect } from 'react';

const forest = '#1F3A2E';
const sage = '#ABB69A';
const cream = '#E7E2D6';
const greige = '#C9C1B3';
const dark = '#333333';
const gold = '#D4AF37';

const LogoAureva = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="28" r="16" fill={forest} />
    <path d="M34 50 C34 50, 28 72, 50 90 C72 72, 66 50, 66 50 C66 50, 58 62, 50 62 C42 62, 34 50, 34 50Z" fill={forest} opacity="0.85" />
    <path d="M42 78 C42 78, 38 92, 50 96 C62 92, 58 78, 58 78" stroke={forest} strokeWidth="3" fill="none" />
  </svg>
);

const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconUser = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const IconLeaf = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const IconShield = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBox = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconHeartFill = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill={forest} stroke={forest} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const IconPeople = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBag = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={gold} stroke={gold} strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const pilarData = [
    { icon: <IconLeaf />, title: 'CURADORIA CONSCIENTE', desc: 'Produtos selecionados com propósito e qualidade.' },
    { icon: <IconShield />, title: 'EXPERIÊNCIA PREMIUM', desc: 'Jornada de compra segura, humana e acolhedora.' },
    { icon: <IconBox />, title: 'ESTILO DE VIDA', desc: 'Muito mais que produtos, um jeito de viver bem.' },
    { icon: <IconHeartFill />, title: 'ESCOLHAS QUE FAZEM BEM', desc: 'Para você, para os outros e para o planeta.' },
  ];

  const catData = [
    {
      icon: <IconPeople />,
      title: 'Membros',
      desc: 'Conecte-se com uma comunidade exclusiva de pessoas que compartilham o amor pela vida.',
      id: 'membros'
    },
    {
      icon: <IconBag />,
      title: 'Produtos',
      desc: 'Seleção premium de produtos para seu bem-estar, conforto e estilo de vida.',
      id: 'produtos'
    },
    {
      icon: <IconHeartFill />,
      title: 'Serviços',
      desc: 'Serviços especializados pensados para cada fase da sua jornada.',
      id: 'servicos'
    },
  ];

  return (
    <>
      <Head>
        <title>Aureva — Marketplace de Lifestyle para a Melhor Idade</title>
        <meta name="description" content="Aureva é um marketplace premium de lifestyle para a melhor idade." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* SKIP LINK */}
      <a href="#conteudo" style={{
        position: 'absolute', left: '-9999px', top: 0,
        background: forest, color: cream, padding: '12px 24px', zIndex: 100, fontWeight: 600,
      }} onFocus={(e) => { e.target.style.left = '16px'; e.target.style.top = '16px'; e.target.style.position = 'fixed'; }}
         onBlur={(e) => { e.target.style.left = '-9999px'; }} >
        Pular para o conteúdo
      </a>

      {/* HEADER */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(231,226,214,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${forest}20`,
        padding: mobile ? '8px 16px' : '12px 40px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 12, border: 'none', background: 'none', cursor: 'pointer' }}>
            <LogoAureva />
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: forest, lineHeight: 1.1, display: 'block' }}>Aureva</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 500, color: forest, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block' }}>Marketplace de Lifestyle</span>
            </div>
          </button>

          {/* Desktop Nav */}
          {!mobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {['MEMBROS', 'PRODUTOS', 'SERVIÇOS'].map(item => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, color: forest, letterSpacing: '0.08em',
                  background: 'none', border: 'none', cursor: 'pointer', padding: '8px 4px', transition: 'color 0.2s',
                }} onMouseOver={(e) => e.currentTarget.style.color = sage}
                   onMouseOut={(e) => e.currentTarget.style.color = forest} >
                  {item}
                </button>
              ))}
              <button aria-label="Buscar" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><IconSearch /></button>
              <button aria-label="Entrar" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><IconUser /></button>
              <button aria-label="Favoritos" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><IconHeart /></button>
              <button onClick={() => scrollTo('contato')} style={{
                fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: cream,
                background: forest, border: 'none', borderRadius: 50, padding: '10px 24px', cursor: 'pointer', letterSpacing: '0.05em',
              }} onMouseOver={(e) => { e.target.style.background = '#152D20'; }}
                 onMouseOut={(e) => { e.target.style.background = forest; }} >
                FALE CONOSCO
              </button>
            </nav>
          )}

          {/* Mobile menu button */}
          {mobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              background: 'none', border: `2px solid ${forest}`, borderRadius: 8, padding: '8px 12px', cursor: 'pointer',
            }}>
              <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
              <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
              <div style={{ width: 24, height: 2, background: forest, margin: '4px 0' }} />
            </button>
          )}
        </div>

        {/* Mobile Nav */}
        {mobile && menuOpen && (
          <nav style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['MEMBROS', 'PRODUTOS', 'SERVIÇOS'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={{
                fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, color: forest,
                background: 'none', border: 'none', cursor: 'pointer', padding: '12px 8px', textAlign: 'left', letterSpacing: '0.05em',
              }}>{item}</button>
            ))}
            <button onClick={() => scrollTo('contato')} style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: cream,
              background: forest, border: 'none', borderRadius: 50, padding: '12px 24px', cursor: 'pointer',
            }}>FALE CONOSCO</button>
          </nav>
        )}
      </header>

      <main id="conteudo">

        {/* HERO */}
        <section style={{
          maxWidth: 1280, margin: '0 auto', padding: mobile ? '32px 16px' : '60px 40px',
          display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 40, alignItems: 'center',
        }}>
          <div style={{ flex: 1, order: mobile ? 2 : 1 }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif", fontSize: mobile ? 36 : 52, fontWeight: 700,
              color: forest, lineHeight: 1.15, margin: '0 0 20px',
            }}>
              A melhor idade,<br />vivida com elegância
            </h1>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 18, lineHeight: 1.7, color: dark, margin: '0 0 32px', maxWidth: 520,
            }}>
              Um marketplace premium onde produtos, serviços e experiências são escolhidos com atenção real às necessidades de quem vive com mais sabedoria.
            </p>
            <button onClick={() => scrollTo('membros')} style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: cream,
              background: forest, border: 'none', borderRadius: 50, padding: '16px 40px', cursor: 'pointer', letterSpacing: '0.05em',
              transition: 'all 0.3s',
            }} onMouseOver={(e) => { e.target.style.background = '#152D20'; e.target.style.transform = 'scale(1.02)'; }}
               onMouseOut={(e) => { e.target.style.background = forest; e.target.style.transform = 'scale(1)'; }} >
              DESCUBRA MAIS
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 32 }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {[1,2,3,4,5].map(i => <IconStar key={i} />)}
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, color: forest }}>4.8 ★</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: dark }}>+2.000 membros</span>
            </div>
          </div>

          {/* Hero Image */}
          <div style={{
            flex: 1, order: mobile ? 1 : 2,
            width: '100%', minHeight: mobile ? 300 : 500,
            borderRadius: 24, overflow: 'hidden',
            background: `linear-gradient(135deg, ${cream}, ${sage})`,
            backgroundImage: `linear-gradient(135deg, ${cream}, ${sage}), url('/hero-banner.jpg')`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: `0 20px 60px ${forest}20`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', padding: 40 }}>
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="28" r="16" fill={forest} opacity="0.3" />
                <path d="M34 50 C34 50, 28 72, 50 90 C72 72, 66 50, 66 50 C66 50, 58 62, 50 62 C42 62, 34 50, 34 50Z" fill={forest} opacity="0.2" />
              </svg>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: forest, marginTop: 12 }}>
                Adicione sua foto aqui
              </p>
            </div>
          </div>
        </section>

        {/* PILARES */}
        <section style={{
          background: sage, padding: mobile ? '60px 16px' : '80px 40px',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: mobile ? 32 : 40,
              fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 12px',
            }}>
              Nossos Pilares
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 18, color: dark, textAlign: 'center',
              margin: '0 0 48px', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
            }}>
              Valores que guiam cada escolha na Aureva.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: 24,
            }}>
              {pilarData.map((p, i) => (
                <div key={i} style={{
                  background: cream, borderRadius: 20, padding: 32, textAlign: 'center',
                  border: `1px solid ${forest}15`,
                  transition: 'all 0.3s',
                }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = `0 8px 30px ${forest}15`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                   onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }} >
                  <div style={{ marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700,
                    color: forest, letterSpacing: '0.08em', margin: '0 0 12px',
                  }}>{p.title}</h3>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontSize: 15, color: dark, lineHeight: 1.6, margin: 0,
                  }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section id="membros" style={{
          padding: mobile ? '60px 16px' : '80px 40px',
          maxWidth: 1280, margin: '0 auto',
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: mobile ? 32 : 40,
            fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 48px',
          }}>
            Explore a Aureva
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 24,
          }}>
            {catData.map((c, i) => (
              <div key={i} id={c.id} style={{
                background: cream, borderRadius: 24, padding: 40, textAlign: 'center',
                border: `1px solid ${forest}15`,
                transition: 'all 0.3s',
              }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = `0 12px 40px ${forest}20`; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }} >
                <div style={{
                  width: 72, height: 72, borderRadius: 20, background: `${sage}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
                }}>{c.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 24,
                  fontWeight: 600, color: forest, margin: '0 0 16px',
                }}>{c.title}</h3>
                <p style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: 16, color: dark, lineHeight: 1.7, margin: 0,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section style={{
          background: forest, padding: mobile ? '60px 16px' : '80px 40px',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: mobile ? 32 : 40,
              fontWeight: 600, color: cream, textAlign: 'center', margin: '0 0 48px',
            }}>
              O que dizem nossos membros
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 24,
            }}>
              {[
                { quote: 'A Aureva mudou a forma como encontro produtos para minha rotina. Tudo é elegante, simples e confiável.', author: 'Dona Rosa', age: 72, city: 'São Paulo' },
                { quote: 'Finalmente um lugar que entende que a melhor idade também merece design bonito e atendimento respeitoso.', author: 'Seu Jorge', age: 68, city: 'Belo Horizonte' },
                { quote: 'A navegação é tão fácil que consigo comprar sozinha sem precisar de ajuda.', author: 'Dona Lúcia', age: 75, city: 'Curitiba' },
              ].map((t, i) => (
                <div key={i} style={{
                  background: `${cream}10`, borderRadius: 24, padding: 32,
                  border: `1px solid ${cream}20`,
                }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif", fontSize: 28, color: gold,
                    margin: '0 0 16px', lineHeight: 1,
                  }}>"</p>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontSize: 16, color: cream,
                    lineHeight: 1.7, margin: '0 0 24px', fontStyle: 'italic',
                  }}>"{t.quote}"</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: sage, margin: 0 }}>
                    {t.author}, {t.age}
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: `${cream}80`, margin: '4px 0 0' }}>
                    {t.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" style={{
          padding: mobile ? '60px 16px' : '80px 40px',
          background: sage,
        }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: mobile ? 32 : 40,
              fontWeight: 600, color: forest, textAlign: 'center', margin: '0 0 8px',
            }}>
              Entre em contato
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 18, color: dark, textAlign: 'center',
              margin: '0 0 40px',
            }}>
              Tem dúvidas? Quer ser avisado do lançamento? Envie uma mensagem.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada! Em breve retornamos.'); }}
                  style={{
                    background: cream, borderRadius: 24, padding: mobile ? 24 : 40,
                    border: `1px solid ${forest}15`,
                  }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>
                  Nome completo
                </label>
                <input required placeholder="Seu nome" style={{
                  width: '100%', padding: '14px 18px', fontSize: 16, fontFamily: "'Poppins', sans-serif",
                  border: `2px solid ${forest}30`, borderRadius: 12, background: cream, color: dark,
                  outline: 'none', boxSizing: 'border-box',
                }} onFocus={(e) => { e.target.style.borderColor = forest; }}
                   onBlur={(e) => { e.target.style.borderColor = `${forest}30`; }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>
                  E-mail
                </label>
                <input required type="email" placeholder="seu@email.com" style={{
                  width: '100%', padding: '14px 18px', fontSize: 16, fontFamily: "'Poppins', sans-serif",
                  border: `2px solid ${forest}30`, borderRadius: 12, background: cream, color: dark,
                  outline: 'none', boxSizing: 'border-box',
                }} onFocus={(e) => { e.target.style.borderColor = forest; }}
                   onBlur={(e) => { e.target.style.borderColor = `${forest}30`; }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: forest, display: 'block', marginBottom: 8 }}>
                  Mensagem
                </label>
                <textarea required rows={4} placeholder="Como podemos ajudar?" style={{
                  width: '100%', padding: '14px 18px', fontSize: 16, fontFamily: "'Poppins', sans-serif",
                  border: `2px solid ${forest}30`, borderRadius: 12, background: cream, color: dark,
                  outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                }} onFocus={(e) => { e.target.style.borderColor = forest; }}
                   onBlur={(e) => { e.target.style.borderColor = `${forest}30`; }} />
              </div>
              <button type="submit" style={{
                width: '100%', padding: '16px', fontSize: 16, fontWeight: 600,
                fontFamily: "'Poppins', sans-serif", color: cream, background: forest,
                border: 'none', borderRadius: 50, cursor: 'pointer', letterSpacing: '0.05em',
                transition: 'all 0.3s',
              }} onMouseOver={(e) => { e.target.style.background = '#152D20'; }}
                 onMouseOut={(e) => { e.target.style.background = forest; }} >
                ENVIAR MENSAGEM
              </button>
            </form>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 16, color: forest, textAlign: 'center', marginTop: 24, fontWeight: 500,
            }}>
              Andre Cunha — contato@aureva.app.br
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{
        background: forest, padding: mobile ? '40px 16px' : '60px 40px', color: cream,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 40,
            marginBottom: 40,
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="28" r="16" fill={cream} opacity="0.5" />
                  <path d="M34 50 C34 50, 28 72, 50 90 C72 72, 66 50, 66 50 C66 50, 58 62, 50 62 C42 62, 34 50, 34 50Z" fill={cream} opacity="0.4" />
                </svg>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600 }}>Aureva</span>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: `${cream}80`, lineHeight: 1.7, margin: 0 }}>
                Marketplace de lifestyle premium para a melhor idade.
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16, color: sage }}>NAVEGAÇÃO</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['MEMBROS', 'PRODUTOS', 'SERVIÇOS', 'CONTATO'].map(item => (
                  <button key={item} onClick={() => scrollTo(item === 'CONTATO' ? 'contato' : item.toLowerCase())} style={{
                    fontFamily: "'Poppins', sans-serif", fontSize: 14, color: `${cream}80`,
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
                  }} onMouseOver={(e) => { e.target.style.color = cream; }}
                     onMouseOut={(e) => { e.target.style.color = `${cream}80`; }} >
                    {item.charAt(0) + item.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 16, color: sage }}>CONTATO</h4>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: `${cream}80`, lineHeight: 1.8, margin: 0 }}>
                Andre Cunha<br />
                contato@aureva.app.br<br />
                (11) 99999-8888
              </p>
            </div>
          </div>
          <div style={{
            borderTop: `1px solid ${cream}20`, paddingTop: 24,
            display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16,
          }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: `${cream}60`, margin: 0 }}>
              © 2026 Aureva. Todos os direitos reservados.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="#" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: `${cream}60`, textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = cream; }} onMouseOut={(e) => { e.target.style.color = `${cream}60`; }}>Privacidade</a>
              <a href="#" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: `${cream}60`, textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = cream; }} onMouseOut={(e) => { e.target.style.color = `${cream}60`; }}>Termos</a>
              <a href="#" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: `${cream}60`, textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = cream; }} onMouseOut={(e) => { e.target.style.color = `${cream}60`; }}>Acessibilidade</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
