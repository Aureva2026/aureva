import Head from 'next/head';
import { useState, useEffect } from 'react';

type Slide = {
  title: string;
  desc: string;
};

export default function Home(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  const nextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveSlide((prev) => (prev - 1 + 4) % 4);
  };

  const goToSlide = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    setActiveSlide(index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setNome('');
    setEmail('');
    setMensagem('');
  };

  const slides: Slide[] = [
    { title: 'Curadoria Consciente', desc: 'Produtos selecionados com propósito e qualidade por quem entende das necessidades da melhor idade.' },
    { title: 'Experiência Premium', desc: 'Jornada de compra segura, humana e acolhedora — do primeiro clique à entrega.' },
    { title: 'Estilo de Vida', desc: 'Muito mais que produtos: bem-estar, cultura e momentos que realmente importam.' },
    { title: 'Escolhas que Fazem Bem', desc: 'Para você, para os outros e para o planeta. Cada escolha é um passo consciente.' }
  ];

  const LogoSvg = ({ width = 48, height = 48, color = '#1F3A2E' }: { width?: number; height?: number; color?: string }) => (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="14" r="8" fill={color} />
      <path d="M12 44C12 32 18 24 24 24C30 24 36 32 36 44" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M8 40C8 40 14 28 24 28C34 28 40 40 40 40" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#333333', margin: 0, padding: 0, backgroundColor: '#E7E2D6' }}>
      <Head>
        <title>Aureva Marketplace de Lifestyle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header style={{ position: 'sticky', top: 0, backgroundColor: '#E7E2D6', zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', height: 80 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#E7E2D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LogoSvg />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#1F3A2E', lineHeight: 1.1 }}>Aureva</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, color: '#1F3A2E', textTransform: 'uppercase', letterSpacing: 1.5 }}>Marketplace de Lifestyle</div>
            </div>
          </div>

          <nav style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 32, fontSize: 18 }}>
            <button onClick={(e) => handleScrollTo(e, 'membros')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: 8 }}>Membros</button>
            <button onClick={(e) => handleScrollTo(e, 'produtos')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: 8 }}>Produtos</button>
            <button onClick={(e) => handleScrollTo(e, 'servicos')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: 8 }}>Serviços</button>
          </nav>

          <button onClick={(e) => handleScrollTo(e, 'contato')} style={{ display: isMobile ? 'none' : 'block', backgroundColor: '#1F3A2E', color: '#E7E2D6', border: 'none', borderRadius: 30, padding: '12px 24px', fontSize: 18, fontFamily: "'Poppins', sans-serif", fontWeight: 600, cursor: 'pointer' }}>Fale Conosco</button>

          <button onClick={(e) => toggleMenu(e)} style={{ display: isMobile ? 'flex' : 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, alignItems: 'center', justifyContent: 'center' }} aria-label="Menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1F3A2E" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {isMobile && menuOpen && (
          <div style={{ backgroundColor: '#E7E2D6', padding: '16px 24px', borderTop: '1px solid #C9C1B3', display: 'flex', flexDirection: 'column', gap: 8, boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}>
            <button onClick={(e) => handleScrollTo(e, 'membros')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: '12px 0', textAlign: 'left' }}>Membros</button>
            <button onClick={(e) => handleScrollTo(e, 'produtos')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: '12px 0', textAlign: 'left' }}>Produtos</button>
            <button onClick={(e) => handleScrollTo(e, 'servicos')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: '12px 0', textAlign: 'left' }}>Serviços</button>
            <button onClick={(e) => handleScrollTo(e, 'contato')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, fontFamily: "'Poppins', sans-serif", color: '#1F3A2E', fontWeight: 500, padding: '12px 0', textAlign: 'left' }}>Fale Conosco</button>
          </div>
        )}
      </header>

      <main>
        <section style={{ display: 'flex', minHeight: 'calc(100vh - 80px)', width: '100%', flexDirection: isMobile ? 'column' : 'row' }}>
          <div style={{ width: isMobile ? '100%' : '50%', padding: isMobile ? '48px 24px' : '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#E7E2D6' }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 36 : 52, color: '#1F3A2E', fontWeight: 700, margin: '0 0 24px 0', lineHeight: 1.2 }}>A melhor idade, vivida com elegância</h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: '#333333', margin: '0 0 32px 0', lineHeight: 1.6 }}>Um marketplace premium pensado para quem vive a vida com mais experiência, estilo e propósito.</p>
            <button onClick={(e) => handleScrollTo(e, 'produtos')} style={{ alignSelf: 'flex-start', backgroundColor: '#1F3A2E', color: '#E7E2D6', border: 'none', borderRadius: 30, padding: '16px 32px', fontSize: 18, fontFamily: "'Poppins', sans-serif", fontWeight: 600, cursor: 'pointer', marginBottom: 32 }}>DESCUBRA MAIS</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#1F3A2E', fontSize: 24 }}>★★★★★</span>
                <span style={{ fontSize: 18, fontWeight: 600, color: '#1F3A2E' }}>4.8</span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, color: '#333333' }}>+2.000 membros</div>
            </div>
          </div>
          <div style={{ width: isMobile ? '100%' : '50%', minHeight: 400, position: 'relative', backgroundImage: 'url("https://adapta-one-prod.s3.sa-east-1.amazonaws.com/andre%40aytyrealty.com.br/png/Editedimage_1782170807987.png"), linear-gradient(135deg, #ABB69A, #1F3A2E)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LogoSvg width={120} height={120} color="#E7E2D6" />
            </div>
          </div>
        </section>

        <section id="membros" style={{ padding: '96px 24px', maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: '#1F3A2E', fontWeight: 700, margin: '0 0 24px 0' }}>Membros</h2>
          <p style={{ fontSize: 18, color: '#333333', lineHeight: 1.8, margin: 0 }}>Faça parte de uma comunidade exclusiva de pessoas 65+ que compartilham interesses, experiências e uma vida plena. Nossos membros têm acesso a conteúdos, eventos e benefícios especiais.</p>
        </section>

        <section id="produtos" style={{ padding: '96px 24px', maxWidth: 1200, margin: '0 auto', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: '#1F3A2E', fontWeight: 700, margin: '0 0 24px 0' }}>Produtos</h2>
          <p style={{ fontSize: 18, color: '#333333', lineHeight: 1.8, margin: 0 }}>Uma seleção cuidadosa de produtos premium para conforto, bem-estar, estilo e casa. Cada item passa por uma curadoria especializada para atender às necessidades da melhor idade.</p>
        </section>

        <section id="servicos" style={{ padding: '96px 24px', maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: '#1F3A2E', fontWeight: 700, margin: '0 0 24px 0' }}>Serviços</h2>
          <p style={{ fontSize: 18, color: '#333333', lineHeight: 1.8, margin: 0 }}>Serviços especializados de saúde, bem-estar, consultoria pessoal, viagens e experiências culturais. Tudo pensado para oferecer praticidade, segurança e qualidade de vida.</p>
        </section>

        <section style={{ backgroundColor: '#1F3A2E', padding: '96px 24px', color: '#E7E2D6' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, margin: '0 0 48px 0', textAlign: 'center' }}>Carrossel de Experiências</h2>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 24 }}>
              <button onClick={(e) => prevSlide(e)} style={{ background: 'none', border: '2px solid #E7E2D6', color: '#E7E2D6', borderRadius: '50%', width: 48, height: 48, fontSize: 24, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>‹</button>
              <div style={{ flex: 1, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, margin: '0 0 16px 0' }}>{slides[activeSlide].title}</h3>
                  <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 700, margin: '0 auto' }}>{slides[activeSlide].desc}</p>
                </div>
              </div>
              <button onClick={(e) => nextSlide(e)} style={{ background: 'none', border: '2px solid #E7E2D6', color: '#E7E2D6', borderRadius: '50%', width: 48, height: 48, fontSize: 24, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>›</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32 }}>
              {slides.map((_, index) => (
                <button key={index} onClick={(e) => goToSlide(e, index)} style={{ width: 12, height: 12, borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: activeSlide === index ? '#E7E2D6' : '#ABB69A' }} aria-label={`Slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" style={{ padding: '96px 24px', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: '#1F3A2E', fontWeight: 700, margin: '0 0 32px 0', textAlign: 'center' }}>Fale Conosco</h2>
          <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <input type="text" name="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.currentTarget.value)} style={{ padding: 16, borderRadius: 8, border: '1px solid #C9C1B3', fontSize: 16, fontFamily: "'Poppins', sans-serif", backgroundColor: '#ffffff' }} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} style={{ padding: 16, borderRadius: 8, border: '1px solid #C9C1B3', fontSize: 16, fontFamily: "'Poppins', sans-serif", backgroundColor: '#ffffff' }} />
            <textarea name="mensagem" placeholder="Mensagem" rows={5} value={mensagem} onChange={(e) => setMensagem(e.currentTarget.value)} style={{ padding: 16, borderRadius: 8, border: '1px solid #C9C1B3', fontSize: 16, fontFamily: "'Poppins', sans-serif", resize: 'vertical', backgroundColor: '#ffffff' }} />
            <button type="submit" style={{ backgroundColor: '#1F3A2E', color: '#E7E2D6', border: 'none', borderRadius: 30, padding: '16px 32px', fontSize: 18, fontFamily: "'Poppins', sans-serif", fontWeight: 600, cursor: 'pointer' }}>Enviar Mensagem</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: 32, fontSize: 16, color: '#333333' }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Andre Cunha</div>
            <div>contato@aureva.app.br</div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#1F3A2E', color: '#E7E2D6', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <LogoSvg width={40} height={40} color="#E7E2D6" />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700 }}>Aureva</div>
            </div>
            <div style={{ fontSize: 14, opacity: 0.9 }}>Marketplace de Lifestyle para a melhor idade.</div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 16 }}>Navegação</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button onClick={(e) => handleScrollTo(e, 'membros')} style={{ background: 'none', border: 'none', color: '#E7E2D6', cursor: 'pointer', fontSize: 14, textAlign: 'left', padding: 0, fontFamily: "'Poppins', sans-serif" }}>Membros</button>
              <button onClick={(e) => handleScrollTo(e, 'produtos')} style={{ background: 'none', border: 'none', color: '#E7E2D6', cursor: 'pointer', fontSize: 14, textAlign: 'left', padding: 0, fontFamily: "'Poppins', sans-serif" }}>Produtos</button>
              <button onClick={(e) => handleScrollTo(e, 'servicos')} style={{ background: 'none', border: 'none', color: '#E7E2D6', cursor: 'pointer', fontSize: 14, textAlign: 'left', padding: 0, fontFamily: "'Poppins', sans-serif" }}>Serviços</button>
              <button onClick={(e) => handleScrollTo(e, 'contato')} style={{ background: 'none', border: 'none', color: '#E7E2D6', cursor: 'pointer', fontSize: 14, textAlign: 'left', padding: 0, fontFamily: "'Poppins', sans-serif" }}>Contato</button>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 16 }}>Contato</div>
            <div style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.8 }}>Andre Cunha</div>
            <div style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.8 }}>contato@aureva.app.br</div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '48px auto 0 auto', paddingTop: 24, borderTop: '1px solid rgba(231, 226, 214, 0.2)', fontSize: 14, textAlign: 'center', opacity: 0.8 }}>© 2026 Aureva. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
