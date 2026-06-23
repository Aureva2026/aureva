import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = width < 768;

  const colors = {
    darkGreen: '#1F3A2E',
    sage: '#ABB69A',
    cream: '#E7E2D6',
    warmGray: '#C9C1B3',
    text: '#333333',
    white: '#FFFFFF',
  };

  const fonts = {
    title: '"Playfair Display", serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const sectionBase = {
    width: '100%',
    padding: isMobile ? '48px 20px' : '80px 40px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  };

  const container = {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '48px',
  };

  const buttonPrimary = {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    padding: '18px 32px',
    borderRadius: 8,
    border: 'none',
    fontFamily: fonts.body,
    fontSize: 18,
    fontWeight: 600,
    cursor: 'pointer',
    lineHeight: 1.4,
  };

  const buttonSecondary = {
    backgroundColor: 'transparent',
    color: colors.darkGreen,
    padding: '18px 32px',
    borderRadius: 8,
    border: `2px solid ${colors.darkGreen}`,
    fontFamily: fonts.body,
    fontSize: 18,
    fontWeight: 600,
    cursor: 'pointer',
    lineHeight: 1.4,
  };

  const inputStyle = {
    width: '100%',
    padding: '18px 20px',
    fontSize: 18,
    fontFamily: fonts.body,
    color: colors.text,
    backgroundColor: colors.white,
    border: `2px solid ${colors.warmGray}`,
    borderRadius: 8,
    outline: 'none',
  };

  const logoBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="36" height="36" viewBox="0 0 64 64" fill="none" style={{ display: 'block' }}>
          <path d="M32 8C26.5 8 22 12.5 22 18C22 23.5 26.5 28 32 28C37.5 28 42 23.5 42 18C42 12.5 37.5 8 32 8Z" stroke={colors.darkGreen} strokeWidth="3" />
          <path d="M12 36C20 28 28 34 32 34C36 34 44 28 52 36" stroke={colors.darkGreen} strokeWidth="3" strokeLinecap="round" />
          <path d="M32 28V52" stroke={colors.darkGreen} strokeWidth="3" strokeLinecap="round" />
          <path d="M24 44C28 40 36 40 40 44" stroke={colors.darkGreen} strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span style={{ fontFamily: fonts.title, fontSize: 28, fontWeight: 700, color: colors.darkGreen, letterSpacing: '-0.5px' }}>
          Aureva
        </span>
      </div>
      <span style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', color: colors.darkGreen, textTransform: 'uppercase' as const }}>
        Marketplace de Lifestyle
      </span>
    </div>
  );

  const navLink = (label: string) => (
    <a href="#" style={{ fontFamily: fonts.body, fontSize: 18, fontWeight: 500, color: colors.darkGreen, textDecoration: 'none' }}>
      {label}
    </a>
  );

  const iconSearch = (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={colors.darkGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const iconUser = (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={colors.darkGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const iconHeart = (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={colors.darkGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const pillar = (title: string, desc: string) => (
    <div style={{ flex: 1, minWidth: isMobile ? '100%' : 220, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3 style={{ margin: 0, fontFamily: fonts.title, fontSize: 24, color: colors.darkGreen }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 18, lineHeight: 1.6, color: colors.text }}>{desc}</p>
    </div>
  );

  const curadoriaCard = (title: string, desc: string) => (
    <div style={{ flex: 1, minWidth: isMobile ? '100%' : 240, backgroundColor: colors.white, padding: 32, borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h3 style={{ margin: 0, fontFamily: fonts.title, fontSize: 26, color: colors.darkGreen }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 18, lineHeight: 1.6, color: colors.text }}>{desc}</p>
    </div>
  );

  const categoriaCard = (image: string, title: string) => (
    <div style={{ flex: 1, minWidth: isMobile ? '100%' : 300, height: 360, borderRadius: 16, overflow: 'hidden', position: 'relative' as const }}>
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' as const }} />
      <div style={{ position: 'absolute' as const, inset: '0', background: 'linear-gradient(to top, rgba(31,58,46,0.85), rgba(31,58,46,0.1))', display: 'flex', alignItems: 'flex-end', padding: 28 }}>
        <h3 style={{ margin: 0, fontFamily: fonts.title, fontSize: 32, color: colors.white }}>{title}</h3>
      </div>
    </div>
  );

  const depoimento = (quote: string, author: string, role: string) => (
    <div style={{ flex: 1, minWidth: isMobile ? '100%' : 300, backgroundColor: 'rgba(255,255,255,0.08)', padding: 32, borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 20, lineHeight: 1.6, color: colors.white }}>"{quote}"</p>
      <div>
        <p style={{ margin: 0, fontFamily: fonts.title, fontSize: 22, color: colors.sage }}>{author}</p>
        <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 16, color: colors.warmGray }}>{role}</p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Aureva — Marketplace de Lifestyle para a Melhor Idade</title>
        <meta name="description" content="Aureva é o marketplace premium para a melhor idade: produtos, serviços e experiências com elegância." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={{ width: '100%', minHeight: '100vh', backgroundColor: colors.cream, fontFamily: fonts.body, color: colors.text, overflowX: 'hidden' as const }}>
        {/* Header */}
        <header style={{ position: 'sticky' as const, top: 0, zIndex: 1000, width: '100%', backgroundColor: 'rgba(231,226,214,0.95)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${colors.warmGray}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '16px 20px' : '20px 40px', display: 'flex', flexDirection: isMobile ? 'column' as const : 'row' as const, alignItems: 'center', gap: isMobile ? '16px' : 0, justifyContent: 'space-between' }}>
            {logoBlock}
            <nav style={{ display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', justifyContent: 'center', gap: 24 }}>
              {navLink('Membros')}
              {navLink('Produtos')}
              {navLink('Serviços')}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <button aria-label="Buscar" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{iconSearch}</button>
                <button aria-label="Conta" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{iconUser}</button>
                <button aria-label="Favoritos" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{iconHeart}</button>
              </div>
              <button style={buttonPrimary}>Fale Conosco</button>
            </div>
          </div>
        </header>

       {/* Hero Section */}
<section style={{
  padding: '40px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
}}>
  <div style={{
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    minHeight: '560px',
    backgroundImage: "url('/hero-banner.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    display: 'flex',
    alignItems: 'center',
    padding: '60px',
  }}>
    {/* Overlay escuro para legibilidade do texto */}
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(31,58,46,0.7) 0%, rgba(31,58,46,0.1) 100%)',
    }} />

    {/* Conteúdo do Hero */}
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '550px' }}>
      <h1 style={{
        fontSize: '60px',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1.1,
        margin: '0 0 16px',
        fontFamily: "'Playfair Display', serif",
      }}>
        A melhor idade,<br />vivida com elegância
      </h1>
      <p style={{
        fontSize: '22px',
        color: 'rgba(255,255,255,0.9)',
        margin: '0 0 32px',
        lineHeight: 1.5,
      }}>
        Descubra um universo de produtos e serviços premium<br />
        pensados para quem sabe o valor do tempo.
      </p>
      <a href="#"
        style={{
          display: 'inline-block',
          padding: '16px 40px',
          fontSize: '18px',
          fontWeight: 600,
          color: '#1F3A2E',
          background: '#D4AF37',
          borderRadius: '50px',
          textDecoration: 'none',
          transition: 'all 0.3s',
        }}
        onMouseOver={(e) => e.target.style.background = '#C5A032'}
        onMouseOut={(e) => e.target.style.background = '#D4AF37'}
      >
        Descubra Mais
      </a>
    </div>
  </div>
</section>
        {/* Curadoria */}
        <section style={{ ...sectionBase, backgroundColor: colors.white }}>
          <div style={container}>
            <div style={{ textAlign: 'center' as const, maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: fonts.title, fontSize: isMobile ? 34 : 42, color: colors.darkGreen }}>Curadoria Aureva</h2>
              <p style={{ margin: '16px 0 0', fontFamily: fonts.body, fontSize: 20, lineHeight: 1.6, color: colors.text }}>
                Cada item é escolhido a dedo por especialistas que entendem o estilo de vida, o conforto e a sofisticação da melhor idade.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 24, justifyContent: 'center' }}>
              {curadoriaCard('Selecionados à mão', 'Produtos testados por nossa equipe para garantir qualidade e usabilidade.')}
              {curadoriaCard('Foco em acessibilidade', 'Designs pensados para mobilidade, segurança e praticidade cotidiana.')}
              {curadoriaCard('Marcas de confiança', 'Parceiros cuidadosamente auditados para entregar o que há de melhor.')}
              {curadoriaCard('Experiências exclusivas', 'Desde viagens a serviços de bem-estar, tudo para enriquecer sua rotina.')}
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section style={{ ...sectionBase, backgroundColor: colors.cream }}>
          <div style={container}>
            <div style={{ textAlign: 'center' as const, maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: fonts.title, fontSize: isMobile ? 34 : 42, color: colors.darkGreen }}>Explore por Categoria</h2>
              <p style={{ margin: '16px 0 0', fontFamily: fonts.body, fontSize: 20, lineHeight: 1.6, color: colors.text }}>
                Navegue entre as áreas que tornam a vida ainda mais plena e elegante.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 24, justifyContent: 'center' }}>
              {categoriaCard('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', 'Moda & Acessórios')}
              {categoriaCard('https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=600&q=80', 'Bem-estar & Saúde')}
              {categoriaCard('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80', 'Casa & Conforto')}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section style={{ ...sectionBase, backgroundColor: colors.darkGreen }}>
          <div style={container}>
            <div style={{ textAlign: 'center' as const, maxWidth: 720 }}>
              <h2 style={{ margin: 0, fontFamily: fonts.title, fontSize: isMobile ? 34 : 42, color: colors.white }}>Histórias que Inspiram</h2>
              <p style={{ margin: '16px 0 0', fontFamily: fonts.body, fontSize: 20, lineHeight: 1.6, color: colors.cream }}>
                Veja como a Aureva está transformando a rotina de quem sabe aproveitar cada etapa da vida.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 24, justifyContent: 'center' }}>
              {depoimento('Encontrei produtos de qualidade que realmente respeitam meu estilo. É refrescante.', 'Marta Ribeiro', 'Membro desde 2023')}
              {depoimento('A curadoria me surpreendeu. Tudo é pensado com carinho e bom gosto.', 'Carlos Mendes', 'Membro desde 2022')}
              {depoimento('Aureva me conectou a uma comunidade vibrante e cheia de propósito.', 'Helena Souza', 'Membro desde 2024')}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section style={{ ...sectionBase, backgroundColor: colors.white }}>
          <div style={{ ...container, flexDirection: isMobile ? 'column' as const : 'row' as const, alignItems: 'flex-start', gap: isMobile ? '48px' : '64px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h2 style={{ margin: 0, fontFamily: fonts.title, fontSize: isMobile ? 34 : 42, color: colors.darkGreen }}>Fale com a Aureva</h2>
              <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 20, lineHeight: 1.6, color: colors.text }}>
                Queremos ouvir você. Envie uma mensagem e nossa equipe retornará em breve.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>
                  <strong>Andre Cunha</strong>
                </p>
                <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>contato@aureva.app.br</p>
                <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>(11) 99999-8888</p>
              </div>
            </div>
            <form style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>
                Nome
                <input type="text" placeholder="Seu nome completo" style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>
                E-mail
                <input type="email" placeholder="seu@email.com" style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>
                Telefone
                <input type="tel" placeholder="(00) 00000-0000" style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: fonts.body, fontSize: 18, color: colors.text }}>
                Mensagem
                <textarea placeholder="Como podemos ajudar?" rows={5} style={{ ...inputStyle, resize: 'none' as const }} />
              </label>
              <button type="submit" style={buttonPrimary}>Enviar Mensagem</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ width: '100%', backgroundColor: colors.darkGreen, padding: isMobile ? '48px 20px' : '64px 40px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' as const : 'row' as const, gap: isMobile ? '40px' : '24px', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8C26.5 8 22 12.5 22 18C22 23.5 26.5 28 32 28C37.5 28 42 23.5 42 18C42 12.5 37.5 8 32 8Z" stroke={colors.white} strokeWidth="3" />
                  <path d="M12 36C20 28 28 34 32 34C36 34 44 28 52 36" stroke={colors.white} strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 28V52" stroke={colors.white} strokeWidth="3" strokeLinecap="round" />
                  <path d="M24 44C28 40 36 40 40 44" stroke={colors.white} strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: fonts.title, fontSize: 26, fontWeight: 700, color: colors.white }}>Aureva</span>
              </div>
              <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 16, lineHeight: 1.6, color: colors.cream }}>
                Marketplace premium de lifestyle para a melhor idade.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ margin: 0, fontFamily: fonts.title, fontSize: 20, color: colors.white }}>Navegue</h4>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Membros</a>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Produtos</a>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Serviços</a>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Contato</a>
            </div>
            <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ margin: 0, fontFamily: fonts.title, fontSize: 20, color: colors.white }}>Categorias</h4>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Moda & Acessórios</a>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Bem-estar & Saúde</a>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Casa & Conforto</a>
              <a href="#" style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, textDecoration: 'none' }}>Experiências</a>
            </div>
            <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ margin: 0, fontFamily: fonts.title, fontSize: 20, color: colors.white }}>Contato</h4>
              <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 16, color: colors.cream }}>Andre Cunha</p>
              <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 16, color: colors.cream }}>contato@aureva.app.br</p>
              <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 16, color: colors.cream }}>(11) 99999-8888</p>
            </div>
          </div>
          <div style={{ maxWidth: 1200, margin: '48px auto 0', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24, textAlign: 'center' as const }}>
            <p style={{ margin: 0, fontFamily: fonts.body, fontSize: 14, color: colors.cream }}>
              © {new Date().getFullYear()} Aureva. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
