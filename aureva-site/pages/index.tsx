import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const forest = '#1F3A2E';
const sage = '#ABB69A';
const cream = '#E7E2D6';
const greige = '#C9C1B3';
const dark = '#333333';

export default function HomePage(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const slides = [
    {
      title: 'Tranquilidade',
      text: 'Viva cada momento com segurança e conforto, cuidado por quem entende de você.',
      color: forest,
      textColor: cream,
    },
    {
      title: 'Comunidade',
      text: 'Faça parte de uma rede acolhedora de pessoas, memórias e experiências.',
      color: greige,
      textColor: dark,
    },
    {
      title: 'Bem-estar',
      text: 'Cuidado integral que valoriza sua saúde física, mental e emocional.',
      color: sage,
      textColor: dark,
    },
    {
      title: 'Independência',
      text: 'Soluções que preservam sua autonomia e estilo de vida com dignidade.',
      color: cream,
      textColor: forest,
    },
  ];

  const members = [
    { name: 'Dona Marta', role: 'Membro desde 2022', quote: 'Aqui me sinto em casa e parte de uma grande família.' },
    { name: 'Seu Antônio', role: 'Membro desde 2021', quote: 'Aureva devolveu minha independência sem me afastar de quem eu amo.' },
    { name: 'Dona Helena', role: 'Membro desde 2023', quote: 'Cuidado, respeito e alegria em cada detalhe.' },
  ];

  const products = [
    { title: 'Residência Acolhedora', desc: 'Moradia adaptada com assistência 24h e ambientes acolhedores.' },
    { title: 'Acompanhamento Familiar', desc: 'Ferramenta para familiares acompanharem rotina, saúde e bem-estar.' },
    { title: 'Plano de Bem-estar', desc: 'Atividades, nutrição e saúde preventiva planejadas para cada pessoa.' },
  ];

  const services = [
    'Cuidados de enfermagem e saúde',
    'Acompanhamento domiciliar',
    'Atividades socioculturais',
    'Transporte e mobilidade assistida',
    'Consultoria familiar',
    'Emergência 24 horas',
  ];

  useEffect(() => {
    const ids = ['membros', 'produtos', 'servicos', 'experiencias', 'contato'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.scrollMarginTop = '80px';
      }
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCarouselArrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const dir = e.currentTarget.getAttribute('data-dir');
    setActiveSlide((prev) => {
      if (dir === 'prev') {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
      return prev === slides.length - 1 ? 0 : prev + 1;
    });
  };

  const handleCarouselDot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const idx = e.currentTarget.getAttribute('data-index');
    if (idx === null) return;
    setActiveSlide(parseInt(idx, 10));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;
    if (name && email && message) {
      setSubmitted(true);
      setFormValues({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <Head>
        <title>Aureva — Cuidado que acolhe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', backgroundColor: cream, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', boxSizing: 'border-box', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        <a href="#home" onClick={handleNavClick} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <svg viewBox="0 0 100 100" style={{ width: '48px', height: '48px', display: 'block' }} role="img" aria-label="Aureva logo">
            <circle cx="50" cy="28" r="18" fill={forest} />
            <path d="M50 50 C30 50 15 68 15 95 C15 98 18 100 21 100 L79 100 C82 100 85 98 85 95 C85 68 70 50 50 50 Z" fill={sage} />
            <path d="M50 50 C38 60 30 78 28 95" stroke={cream} strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: forest }}>Aureva</span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <a href="#membros" onClick={handleNavClick} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 500, color: forest, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Membros</a>
          <a href="#produtos" onClick={handleNavClick} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 500, color: forest, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Produtos</a>
          <a href="#servicos" onClick={handleNavClick} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 500, color: forest, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Serviços</a>
          <a href="#contato" onClick={handleNavClick} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, color: cream, backgroundColor: forest, padding: '12px 24px', borderRadius: '9999px', textDecoration: 'none' }}>Contato</a>
        </nav>
      </header>

      <main>
        <section id="home" style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)', backgroundImage: "linear-gradient(rgba(31,58,46,0.72), rgba(31,58,46,0.55)), url('https://adapta-one-prod.s3.sa-east-1.amazonaws.com/andre%40aytyrealty.com.br/png/Editedimage_1782170807987.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 32px' }}>
          <div style={{ maxWidth: '800px', textAlign: 'center', color: cream }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 700, lineHeight: 1.15, marginBottom: '24px' }}>Cuidado que acolhe, liberdade que transforma</h1>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', lineHeight: 1.6, marginBottom: '40px' }}>Aureva conecta famílias e idosos a soluções modernas de moradia, saúde e convivência.</p>
            <a href="#membros" onClick={handleNavClick} style={{ display: 'inline-block', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, color: forest, backgroundColor: cream, padding: '16px 32px', borderRadius: '9999px', textDecoration: 'none' }}>Conheça a Aureva</a>
          </div>
        </section>

        <section id="membros" style={{ padding: '96px 32px', backgroundColor: cream }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: '16px' }}>Membros</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: dark, textAlign: 'center', marginBottom: '64px' }}>Uma comunidade feita de histórias e pessoas.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {members.map((member, index) => (
                <div key={index} style={{ backgroundColor: greige, padding: '32px', borderRadius: '16px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 600, color: forest, marginBottom: '8px' }}>{member.name}</h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: forest, marginBottom: '16px', fontWeight: 500 }}>{member.role}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: dark, lineHeight: 1.6 }}>"{member.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" style={{ padding: '96px 32px', backgroundColor: greige }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: '16px' }}>Produtos</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: dark, textAlign: 'center', marginBottom: '64px' }}>Soluções pensadas para cada etapa da vida.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {products.map((product, index) => (
                <div key={index} style={{ backgroundColor: cream, padding: '32px', borderRadius: '16px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 600, color: forest, marginBottom: '12px' }}>{product.title}</h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: dark, lineHeight: 1.6 }}>{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" style={{ padding: '96px 32px', backgroundColor: forest, color: cream }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 600, textAlign: 'center', marginBottom: '16px' }}>Serviços</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', textAlign: 'center', marginBottom: '64px', opacity: 0.9 }}>Atendimento completo para quem você ama.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {services.map((service, index) => (
                <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(231,226,214,0.2)' }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 500, margin: 0 }}>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" style={{ padding: '96px 32px', backgroundColor: sage }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: '64px' }}>Carrossel de Experiências</h2>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', backgroundColor: cream, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}>
              <div style={{ display: 'flex', transform: `translateX(-${activeSlide * 100}%)`, transition: 'transform 0.5s ease' }}>
                {slides.map((slide, index) => (
                  <div key={index} style={{ minWidth: '100%', flexShrink: 0, padding: '80px 48px', boxSizing: 'border-box', backgroundColor: slide.color, color: slide.textColor, textAlign: 'center' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '16px' }}>{slide.title}</h3>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>{slide.text}</p>
                  </div>
                ))}
              </div>

              <button type="button" data-dir="prev" onClick={handleCarouselArrow} style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', border: 'none', backgroundColor: cream, color: forest, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} aria-label="Slide anterior">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button type="button" data-dir="next" onClick={handleCarouselArrow} style={{ position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', border: 'none', backgroundColor: cream, color: forest, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} aria-label="Próximo slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
              {slides.map((_, index) => (
                <button type="button" key={index} data-index={index} onClick={handleCarouselDot} style={{ width: '14px', height: '14px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: activeSlide === index ? forest : greige }} aria-label={`Slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" style={{ padding: '96px 32px', backgroundColor: cream }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 600, color: forest, textAlign: 'center', marginBottom: '16px' }}>Contato</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: dark, textAlign: 'center', marginBottom: '48px' }}>Fale com a gente e descubra como a Aureva pode ajudar.</p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 32px', backgroundColor: greige, borderRadius: '16px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: forest, margin: 0 }}>Obrigado pelo contato! Responderemos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="text" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Seu nome" required style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', padding: '16px', borderRadius: '8px', border: '1px solid greige', backgroundColor: '#FFFFFF', color: dark }} />
                <input type="email" name="email" value={formValues.email} onChange={handleInputChange} placeholder="Seu e-mail" required style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', padding: '16px', borderRadius: '8px', border: '1px solid greige', backgroundColor: '#FFFFFF', color: dark }} />
                <textarea name="message" value={formValues.message} onChange={handleInputChange} placeholder="Sua mensagem" required rows={5} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', padding: '16px', borderRadius: '8px', border: '1px solid greige', backgroundColor: '#FFFFFF', color: dark, resize: 'vertical' }} />
                <button type="submit" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, color: cream, backgroundColor: forest, padding: '16px 32px', borderRadius: '9999px', border: 'none', cursor: 'pointer' }}>Enviar mensagem</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer style={{ padding: '48px 32px', backgroundColor: dark, color: cream, textAlign: 'center' }}>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', margin: 0, opacity: 0.9 }}>© {new Date().getFullYear()} Aureva. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
