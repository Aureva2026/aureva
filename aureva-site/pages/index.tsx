import React, { useState, useEffect } from "react";
import Head from "next/head";

const COLORS = {
  deepForest: "#1F3A2E",
  sage: "#ABB69A",
  warmCream: "#E7E2D6",
  taupe: "#C9C1B3",
  charcoal: "#333333",
};

export default function IndexPage(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Membros", href: "#membros" },
    { label: "Produtos", href: "#produtos" },
    { label: "Serviços", href: "#servicos" },
  ];

  const a11yFocus = {
    outline: "none",
    boxShadow: `0 0 0 3px ${COLORS.sage}`,
  };

  const playfairStyle = { fontFamily: "'Playfair Display', serif" };
  const systemStyle = { fontFamily: "Poppins, 'Avenir Next', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" };

  const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  const UserIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const HeartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const CloseIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <div style={{ ...systemStyle, backgroundColor: COLORS.warmCream, color: COLORS.charcoal }}>
      <Head>
        <title>Aureva — Marketplace de Lifestyle para a Melhor Idade</title>
        <meta name="description" content="Aureva é um marketplace premium de lifestyle para a melhor idade. Produtos e serviços selecionados para inspirar bem-estar, conexão e propósito." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <a
        href="#conteudo"
        className="skip-link"
        style={{
          position: "absolute",
          left: "-9999px",
          zIndex: 1000,
          padding: "12px 16px",
          backgroundColor: COLORS.deepForest,
          color: COLORS.warmCream,
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 500,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "16px";
          e.currentTarget.style.top = "16px";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
        }}
      >
        Pular para o conteúdo principal
      </a>

      <header
        role="banner"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(231, 226, 214, 0.92)" : COLORS.warmCream,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${COLORS.taupe}`,
          transition: "background-color 200ms ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="#" aria-label="Aureva — Página inicial" style={{ textDecoration: "none", color: "inherit" }}>
            <div>
              <div style={{ ...playfairStyle, fontSize: 30, fontWeight: 600, lineHeight: 1.1, color: COLORS.deepForest }}>Aureva</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: COLORS.charcoal, marginTop: 2, fontWeight: 500 }}>Marketplace de Lifestyle</div>
            </div>
          </a>

          <nav aria-label="Navegação principal" style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontSize: 15, fontWeight: 500, color: COLORS.charcoal, textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.deepForest)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.charcoal)}
                onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
                onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 18 }} className="desktop-actions">
            <button aria-label="Buscar" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 6 }} onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)} onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
              <SearchIcon />
            </button>
            <button aria-label="Minha conta" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 6 }} onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)} onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
              <UserIcon />
            </button>
            <button aria-label="Favoritos" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 6 }} onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)} onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
              <HeartIcon />
            </button>
            <a
              href="#contato"
              style={{
                backgroundColor: COLORS.deepForest,
                color: COLORS.warmCream,
                borderRadius: 9999,
                padding: "12px 22px",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 120ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
              onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              Fale conosco
            </a>
          </div>

          <button
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 6 }}
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-menu" style={{ borderTop: `1px solid ${COLORS.taupe}`, backgroundColor: COLORS.warmCream }} className="mobile-menu">
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: 16, fontWeight: 500, color: COLORS.charcoal, textDecoration: "none", padding: "8px 0" }}
                  onClick={() => setMenuOpen(false)}
                  onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                style={{
                  backgroundColor: COLORS.deepForest,
                  color: COLORS.warmCream,
                  borderRadius: 9999,
                  padding: "12px 22px",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: 8,
                }}
                onClick={() => setMenuOpen(false)}
              >
                Fale conosco
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="conteudo">
        <section id="hero" aria-label="Apresentação Aureva">
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              minHeight: "auto",
            }}
            className="hero-grid"
          >
            <div
              style={{
                backgroundColor: COLORS.warmCream,
                padding: "64px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="hero-left"
            >
              <h1 style={{ ...playfairStyle, fontSize: 48, lineHeight: 1.15, color: COLORS.deepForest, margin: 0, maxWidth: 560 }} className="hero-title">
                A melhor idade, vivida com elegância
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: COLORS.charcoal, marginTop: 20, maxWidth: 520 }}>
                Produtos e serviços selecionados para inspirar bem-estar, conexão e propósito em cada fase da vida.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
                <a
                  href="#produtos"
                  style={{
                    backgroundColor: COLORS.deepForest,
                    color: "#fff",
                    borderRadius: 9999,
                    padding: "14px 28px",
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  Explorar produtos
                </a>
                <a
                  href="#servicos"
                  style={{
                    border: `2px solid ${COLORS.deepForest}`,
                    color: COLORS.deepForest,
                    borderRadius: 9999,
                    padding: "14px 28px",
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  Conhecer serviços
                </a>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 16,
                  marginTop: 48,
                }}
                className="pillars-mini-grid"
              >
                {[
                  { label: "Vitalidade", desc: "Energia para viver cada dia" },
                  { label: "Elegância", desc: "Estilo atemporal e confortável" },
                  { label: "Propósito", desc: "Significado em cada escolha" },
                  { label: "Conexão", desc: "Pessoas, histórias e comunidade" },
                ].map((item) => (
                  <div key={item.label} style={{ borderTop: `1px solid ${COLORS.taupe}`, paddingTop: 14 }}>
                    <div style={{ fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, color: COLORS.deepForest }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: COLORS.charcoal, marginTop: 4, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ minHeight: 360 }} className="hero-right">
              <img
                src="https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=800&q=80"
                alt="Senhora elegante sorrindo, representando a melhor idade vivida com elegância"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                className="hero-img"
              />
            </div>
          </div>
        </section>

        <section id="pilares" aria-labelledby="pilares-title" style={{ padding: "80px 24px", backgroundColor: COLORS.warmCream }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 id="pilares-title" style={{ ...playfairStyle, fontSize: 38, color: COLORS.deepForest, textAlign: "center", margin: 0 }}>Nossa Curadoria</h2>
            <p style={{ fontSize: 17, color: COLORS.charcoal, textAlign: "center", marginTop: 12, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              Quatro pilares que guiam cada produto e experiência dentro do Aureva.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 24,
                marginTop: 48,
              }}
              className="pilares-grid"
            >
              {[
                { icon: "🌿", title: "Curadoria Consciente", desc: "Produtos selecionados com propósito e qualidade, pensados para valorizar o que realmente importa." },
                { icon: "✦", title: "Experiência Premium", desc: "Jornada de compra segura, humana e acolhedora, do primeiro clique ao pós-venda." },
                { icon: "◈", title: "Estilo de Vida", desc: "Muito mais que produtos, o Aureva propõe um jeito de viver bem, com leveza e intenção." },
                { icon: "♥", title: "Escolhas que Fazem Bem", desc: "Para você, para os outros e para o planeta. Consumo com significado e impacto positivo." },
              ].map((card) => (
                <div key={card.title} style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(31, 58, 46, 0.06)" }}>
                  <div style={{ fontSize: 40, lineHeight: 1 }} aria-hidden="true">{card.icon}</div>
                  <h3 style={{ ...playfairStyle, fontSize: 24, color: COLORS.deepForest, marginTop: 18, marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ fontSize: 15, color: COLORS.charcoal, lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categorias" aria-labelledby="categorias-title" style={{ padding: "80px 24px", backgroundColor: "#fff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 id="categorias-title" style={{ ...playfairStyle, fontSize: 38, color: COLORS.deepForest, textAlign: "center", margin: 0 }}>Categorias em destaque</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 24,
                marginTop: 48,
              }}
              className="categories-grid"
            >
              {[
                { title: "Bem-estar", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80", alt: "Mulher madura praticando exercício leve em ambiente tranquilo" },
                { title: "Casa", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", alt: "Interior de casa aconchegante e elegante com iluminação natural" },
                { title: "Experiências", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3c7?auto=format&fit=crop&w=800&q=80", alt: "Grupo de pessoas maduras compartilhando uma atividade ao ar livre" },
              ].map((cat) => (
                <a
                  key={cat.title}
                  href="#"
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    minHeight: 360,
                    display: "flex",
                    alignItems: "flex-end",
                    textDecoration: "none",
                    backgroundImage: `linear-gradient(to top, ${COLORS.deepForest}e6 0%, ${COLORS.deepForest}80 40%, transparent 80%), url(${cat.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onFocus={(e) => { e.currentTarget.style.outline = `3px solid ${COLORS.sage}`; e.currentTarget.style.outlineOffset = 2; }}
                  onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
                >
                  <div style={{ padding: 28, width: "100%" }}>
                    <h3 style={{ ...playfairStyle, fontSize: 28, color: "#fff", margin: 0 }}>{cat.title}</h3>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 500, marginTop: 8, display: "inline-block", textDecoration: "underline", textUnderlineOffset: 4 }}>Ver seleção</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" aria-labelledby="depoimentos-title" style={{ padding: "80px 24px", backgroundColor: COLORS.deepForest }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 id="depoimentos-title" style={{ ...playfairStyle, fontSize: 38, color: "#fff", textAlign: "center", margin: 0 }}>O que dizem nossos membros</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 24,
                marginTop: 48,
              }}
              className="testimonials-grid"
            >
              {[
                { text: "Finalmente encontrei um lugar onde me sinto representada. Os produtos têm qualidade e a experiência de compra é muito tranquila.", name: "Helena Moraes", info: "68 anos, São Paulo" },
                { text: "A curadoria do Aureva é diferente de tudo que já vi. Cada item parece ter sido escolhido pensando em quem a gente é hoje.", name: "Roberto Antunes", info: "72 anos, Rio de Janeiro" },
                { text: "Gosto de saber que estou consumindo de forma mais consciente, sem abrir mão do conforto e da beleza.", name: "Célia Rocha", info: "70 anos, Curitiba" },
              ].map((t) => (
                <div key={t.name} style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 32 }}>
                  <div style={{ fontSize: 48, color: COLORS.sage, lineHeight: 1, marginBottom: 12 }} aria-hidden="true">“</div>
                  <p style={{ fontSize: 17, color: "#fff", lineHeight: 1.7, margin: 0 }}>{t.text}</p>
                  <div style={{ marginTop: 24 }}>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: 16 }}>{t.name}</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{t.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" aria-labelledby="contato-title" style={{ padding: "80px 24px", backgroundColor: COLORS.warmCream }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 id="contato-title" style={{ ...playfairStyle, fontSize: 38, color: COLORS.deepForest, textAlign: "center", margin: 0 }}>Fale conosco</h2>
            <p style={{ fontSize: 17, color: COLORS.charcoal, textAlign: "center", marginTop: 12, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              Quer saber mais sobre o Aureva, parcerias ou como fazer parte da comunidade? Envie uma mensagem para nossa equipe.
            </p>

            <form style={{ marginTop: 40, backgroundColor: "#fff", borderRadius: 16, padding: "32px", boxShadow: "0 2px 12px rgba(31, 58, 46, 0.06)" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }} className="form-grid">
                <div>
                  <label htmlFor="nome" style={{ display: "block", fontSize: 14, fontWeight: 600, color: COLORS.deepForest, marginBottom: 6 }}>Nome</label>
                  <input id="nome" name="nome" type="text" required placeholder="Seu nome completo" style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.taupe}`, fontSize: 16, color: COLORS.charcoal, backgroundColor: "#fff" }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: 14, fontWeight: 600, color: COLORS.deepForest, marginBottom: 6 }}>Email</label>
                  <input id="email" name="email" type="email" required placeholder="seu@email.com" style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.taupe}`, fontSize: 16, color: COLORS.charcoal, backgroundColor: "#fff" }} />
                </div>
                <div>
                  <label htmlFor="telefone" style={{ display: "block", fontSize: 14, fontWeight: 600, color: COLORS.deepForest, marginBottom: 6 }}>Telefone</label>
                  <input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.taupe}`, fontSize: 16, color: COLORS.charcoal, backgroundColor: "#fff" }} />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="mensagem" style={{ display: "block", fontSize: 14, fontWeight: 600, color: COLORS.deepForest, marginBottom: 6 }}>Mensagem</label>
                  <textarea id="mensagem" name="mensagem" required rows={5} placeholder="Como podemos ajudar?" style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: `1px solid ${COLORS.taupe}`, fontSize: 16, color: COLORS.charcoal, backgroundColor: "#fff", resize: "vertical" }} />
                </div>
              </div>
              <button
                type="submit"
                style={{
                  marginTop: 24,
                  backgroundColor: COLORS.deepForest,
                  color: COLORS.warmCream,
                  borderRadius: 9999,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
                onFocus={(e) => Object.assign(e.currentTarget.style, a11yFocus)}
                onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                Enviar mensagem
              </button>
            </form>

            <div style={{ marginTop: 36, textAlign: "center" }}>
              <p style={{ fontSize: 16, color: COLORS.charcoal, margin: 0 }}>
                <strong>Andre Cunha</strong> — Fundador do Aureva
              </p>
              <p style={{ fontSize: 15, color: COLORS.charcoal, marginTop: 8 }}>
                Email: <a href="mailto:contato@aureva.app.br" style={{ color: COLORS.deepForest, textDecoration: "underline", textUnderlineOffset: 3 }}>contato@aureva.app.br</a>
                <span style={{ margin: "0 12px" }}>•</span>
                Telefone: <a href="tel:+5511999998888" style={{ color: COLORS.deepForest, textDecoration: "underline", textUnderlineOffset: 3 }}>(11) 99999-8888</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" style={{ backgroundColor: COLORS.deepForest, color: COLORS.warmCream, padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 40,
            }}
            className="footer-grid"
          >
            <div>
              <div style={{ ...playfairStyle, fontSize: 30, fontWeight: 600 }}>Aureva</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 12, color: "rgba(231, 226, 214, 0.85)", maxWidth: 280 }}>
                Marketplace premium de lifestyle para a melhor idade. Curadoria, elegância e propósito para quem vive com intensidade.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Navegação</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Membros", "Produtos", "Serviços", "Depoimentos", "Contato"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} style={{ color: "rgba(231, 226, 214, 0.85)", textDecoration: "none", fontSize: 15 }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(231, 226, 214, 0.85)")}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Atendimento</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li>
                  <a href="mailto:contato@aureva.app.br" style={{ color: "rgba(231, 226, 214, 0.85)", textDecoration: "none", fontSize: 15 }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(231, 226, 214, 0.85)")}>contato@aureva.app.br</a>
                </li>
                <li>
                  <a href="tel:+5511999998888" style={{ color: "rgba(231, 226, 214, 0.85)", textDecoration: "none", fontSize: 15 }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(231, 226, 214, 0.85)")}>(11) 99999-8888</a>
                </li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Redes Sociais</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Instagram", href: "https://instagram.com/aureva" },
                  { label: "LinkedIn", href: "https://linkedin.com/company/aureva" },
                  { label: "YouTube", href: "https://youtube.com/@aureva" },
                ].map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(231, 226, 214, 0.85)", textDecoration: "none", fontSize: 15 }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(231, 226, 214, 0.85)")}>{social.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ borderTop: `1px solid rgba(231, 226, 214, 0.2)`, marginTop: 48, paddingTop: 24, display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }} className="footer-bottom">
            <p style={{ fontSize: 14, color: "rgba(231, 226, 214, 0.7)", margin: 0, textAlign: "center" }}>
              Copyright © 2026 Aureva. Todos os direitos reservados.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
              {[
                { label: "Política de Privacidade", href: "#" },
                { label: "Termos de Uso", href: "#" },
                { label: "Acessibilidade", href: "#" },
              ].map((link) => (
                <a key={link.label} href={link.href} style={{ fontSize: 13, color: "rgba(231, 226, 214, 0.7)", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(231, 226, 214, 0.7)")}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        *:focus-visible {
          outline: 3px solid #ABB69A;
          outline-offset: 2px;
        }
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 60% 40% !important;
            min-height: 720px !important;
          }
          .hero-img {
            border-radius: 0 0 0 16px !important;
          }
          .pillars-mini-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .pilares-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .form-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-bottom {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
        @media (min-width: 1024px) {
          .pilares-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .categories-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav,
          .desktop-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .hero-title {
            font-size: 36px !important;
          }
        }
        @media (min-width: 768px) {
          .mobile-menu-btn,
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
