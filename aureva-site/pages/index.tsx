import React from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
  const colors = {
    deepGreen: '#1F3A2E',
    sage: '#ABB69A',
    cream: '#E7E2D6',
    taupe: '#C9C1B3',
    charcoal: '#333333',
  };

  const pillars = [
    { title: 'Bem-Estar', text: 'Práticas e produtos que acolhem o corpo e a mente.' },
    { title: 'Cultura', text: 'Experiências que enriquecem a vida social e intelectual.' },
    { title: 'Saúde', text: 'Cuidado preventivo e especializado para cada momento.' },
    { title: 'Gastronomia', text: 'Sabor, nutrição e prazer em cada refeição.' },
  ];

  const curation = [
    { title: 'Vinho Orgânico', text: 'Seleção de rótulos suaves, perfeitos para harmonizar com bons momentos.' },
    { title: 'Consultoria de Estilo', text: 'Assessoria que valoriza a elegância e o conforto pessoal.' },
    { title: 'Retiro de Bem-Estar', text: 'Experiências imersivas para renovar energias e conexões.' },
    { title: 'Aulas de Culinária', text: 'Workshops práticos com chefs que celebram o sabor da vida.' },
  ];

  const categories = [
    { title: 'Produtos', text: 'Itens premium selecionados para o dia a dia com mais conforto e sofisticação.' },
    { title: 'Serviços', text: 'Profissionais qualificados em saúde, bem-estar, estilo e lazer.' },
    { title: 'Membros', text: 'Uma comunidade de pessoas que vivem a melhor idade com propósito.' },
  ];

  const testimonials = [
    { text: 'A Aureva transformou a maneira como descubro produtos e serviços para a minha rotina.', author: 'Marina Lopes, 68' },
    { text: 'Elegância, cuidado e uma curadoria impecável. Finalmente um lugar que me entende.', author: 'Roberto Dias, 72' },
    { text: 'Encontrei uma comunidade vibrante e experiências que realmente enriquecem a vida.', author: 'Cecília Moraes, 65' },
  ];

  return (
    <>
      <Head>
        <title>Aureva — A melhor idade, vivida com elegância</title>
        <meta name="description" content="Marketplace premium para a melhor idade." />
      </Head>

      <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: colors.charcoal, backgroundColor: colors.cream, margin: 0, padding: 0, boxSizing: 'border-box' as const }}>
        <header style={{ position: 'sticky' as const, top: 0, backgroundColor: colors.cream, borderBottom: `1px solid ${colors.taupe}`, zIndex: 1000, padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: colors.deepGreen, letterSpacing: 2 }}>AUREVA</div>
          <nav style={{ display: 'flex', gap: 32 }}>
            <a href="#membros" style={{ color: colors.deepGreen, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Membros</a>
            <a href="#produtos" style={{ color: colors.deepGreen, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Produtos</a>
            <a href="#servicos" style={{ color: colors.deepGreen, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Serviços</a>
          </nav>
        </header>

        <main>
          <section style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: 48, lineHeight: 1.2, color: colors.deepGreen, margin: '0 0 24px' }}>A melhor idade, vivida com elegância</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, margin: '0 0 40px', color: colors.charcoal }}>
                Um marketplace premium que conecta pessoas, produtos e experiências para quem sabe que a vida fica ainda mais rica com o tempo.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {pillars.map((p, i) => (
                  <div key={i} style={{ backgroundColor: '#ffffff', padding: 24, borderRadius: 8, border: `1px solid ${colors.taupe}` }}>
                    <h3 style={{ fontSize: 18, color: colors.deepGreen, margin: '0 0 8px' }}>{p.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: colors.charcoal }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80"
                alt="Mulher sorridente em ambiente elegante"
                style={{ width: '100%', height: 'auto', borderRadius: 12, boxShadow: `0 20px 40px rgba(31,58,46,0.15)` }}
              />
            </div>
          </section>

          <section id="membros" style={{ backgroundColor: '#ffffff', padding: '80px 40px' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <h2 style={{ fontSize: 36, color: colors.deepGreen, margin: '0 0 16px', textAlign: 'center' as const }}>Curadoria Aureva</h2>
              <p style={{ fontSize: 17, textAlign: 'center' as const, margin: '0 0 56px', color: colors.charcoal }}>Cada detalhe escolhido para inspirar e acompanhar a sua melhor idade.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
                {curation.map((item, i) => (
                  <div key={i} style={{ backgroundColor: colors.cream, padding: 32, borderRadius: 8, border: `1px solid ${colors.taupe}` }}>
                    <h3 style={{ fontSize: 18, color: colors.deepGreen, margin: '0 0 12px' }}>{item.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.5, margin: 0, color: colors.charcoal }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="produtos" style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 36, color: colors.deepGreen, margin: '0 0 16px', textAlign: 'center' as const }}>Categorias</h2>
            <p style={{ fontSize: 17, textAlign: 'center' as const, margin: '0 0 56px', color: colors.charcoal }}>Explore o que o ecossistema Aureva oferece para o seu estilo de vida.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {categories.map((cat, i) => (
                <div key={i} style={{ backgroundColor: '#ffffff', padding: 40, borderRadius: 12, boxShadow: `0 10px 30px rgba(31,58,46,0.08)`, borderTop: `4px solid ${colors.sage}` }}>
                  <h3 style={{ fontSize: 22, color: colors.deepGreen, margin: '0 0 16px' }}>{cat.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0, color: colors.charcoal }}>{cat.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="servicos" style={{ backgroundColor: colors.deepGreen, padding: '80px 40px', color: '#ffffff' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <h2 style={{ fontSize: 36, color: '#ffffff', margin: '0 0 56px', textAlign: 'center' as const }}>Depoimentos</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
                {testimonials.map((t, i) => (
                  <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: 32, borderRadius: 12, border: `1px solid rgba(255,255,255,0.15)` }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, margin: '0 0 24px', fontStyle: 'italic' as const }}>“{t.text}”</p>
                    <p style={{ fontSize: 14, margin: 0, color: colors.sage, fontWeight: 600 }}>{t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ backgroundColor: colors.cream, padding: '80px 40px' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
              <div>
                <h2 style={{ fontSize: 36, color: colors.deepGreen, margin: '0 0 16px' }}>Entre em contato</h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, margin: '0 0 32px', color: colors.charcoal }}>
                  Quer fazer parte da Aureva ou conhecer nossas soluções premium? Fale com a gente.
                </p>
                <div style={{ backgroundColor: '#ffffff', padding: 24, borderRadius: 8, border: `1px solid ${colors.taupe}` }}>
                  <p style={{ margin: '0 0 8px', fontSize: 16, color: colors.charcoal }}><strong>Andre Cunha</strong></p>
                  <p style={{ margin: 0, fontSize: 15, color: colors.deepGreen }}>contato@aureva.app.br</p>
                </div>
              </div>
              <form style={{ backgroundColor: '#ffffff', padding: 40, borderRadius: 12, boxShadow: `0 10px 30px rgba(31,58,46,0.08)` }}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 14, marginBottom: 8, color: colors.charcoal }}>Nome</label>
                  <input type="text" name="name" style={{ width: '100%', padding: 12, border: `1px solid ${colors.taupe}`, borderRadius: 6, fontSize: 15, backgroundColor: colors.cream }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 14, marginBottom: 8, color: colors.charcoal }}>Email</label>
                  <input type="email" name="email" style={{ width: '100%', padding: 12, border: `1px solid ${colors.taupe}`, borderRadius: 6, fontSize: 15, backgroundColor: colors.cream }} />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 14, marginBottom: 8, color: colors.charcoal }}>Mensagem</label>
                  <textarea name="message" rows={4} style={{ width: '100%', padding: 12, border: `1px solid ${colors.taupe}`, borderRadius: 6, fontSize: 15, resize: 'vertical' as const, backgroundColor: colors.cream }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: 14, backgroundColor: colors.deepGreen, color: '#ffffff', border: 'none', borderRadius: 6, fontSize: 16, cursor: 'pointer', fontWeight: 600 }}>
                  Enviar mensagem
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer style={{ backgroundColor: colors.deepGreen, color: '#ffffff', padding: '60px 40px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>AUREVA</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: colors.sage, margin: 0 }}>
                Marketplace premium para a melhor idade. Conectando pessoas, produtos e experiências com elegância e propósito.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, margin: '0 0 16px', color: '#ffffff' }}>Navegação</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 10 }}><a href="#membros" style={{ color: colors.sage, textDecoration: 'none', fontSize: 15 }}>Membros</a></li>
                <li style={{ marginBottom: 10 }}><a href="#produtos" style={{ color: colors.sage, textDecoration: 'none', fontSize: 15 }}>Produtos</a></li>
                <li style={{ marginBottom: 10 }}><a href="#servicos" style={{ color: colors.sage, textDecoration: 'none', fontSize: 15 }}>Serviços</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 16, margin: '0 0 16px', color: '#ffffff' }}>Contato</h4>
              <p style={{ fontSize: 15, color: colors.sage, margin: '0 0 8px' }}>Andre Cunha</p>
              <p style={{ fontSize: 15, color: colors.sage, margin: 0 }}>contato@aureva.app.br</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, margin: '0 0 16px', color: '#ffffff' }}>Redes</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 10 }}><a href="#" style={{ color: colors.sage, textDecoration: 'none', fontSize: 15 }}>Instagram</a></li>
                <li style={{ marginBottom: 10 }}><a href="#" style={{ color: colors.sage, textDecoration: 'none', fontSize: 15 }}>LinkedIn</a></li>
                <li style={{ marginBottom: 10 }}><a href="#" style={{ color: colors.sage, textDecoration: 'none', fontSize: 15 }}>YouTube</a></li>
              </ul>
            </div>
          </div>
          <div style={{ maxWidth: 1200, margin: '48px auto 0', borderTop: `1px solid rgba(255,255,255,0.15)`, paddingTop: 24, textAlign: 'center' as const }}>
            <p style={{ fontSize: 14, color: colors.sage, margin: 0 }}>© {new Date().getFullYear()} Aureva. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
}