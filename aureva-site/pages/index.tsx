import React from 'react';
import Head from 'next/head';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`${playfair.variable} ${poppins.variable} font-sans`}>
      <Head>
        <title>Aureva — Marketplace de Lifestyle</title>
        <meta name="description" content="Aureva: a melhor idade, vivida com elegância. Marketplace de lifestyle para quem busca vitalidade, autonomia e refinamento." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header
        className="sticky top-0 z-50 w-full border-b border-[#C9C1B3] bg-[#E7E2D6]/95 backdrop-blur"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 md:flex-row">
          <div className="flex items-center gap-3">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <circle cx="22" cy="22" r="21" stroke="#1F3A2E" strokeWidth="2" />
              <circle cx="22" cy="16" r="5" fill="#1F3A2E" />
              <path
                d="M14 38C14 31 17 26 22 26C27 26 30 31 30 38"
                stroke="#1F3A2E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 30C12 24 16 22 22 22C28 22 32 24 34 30"
                stroke="#ABB69A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex flex-col">
              <span
                className="text-2xl font-semibold tracking-tight text-[#1F3A2E]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Aureva
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#333333]">
                Marketplace de Lifestyle
              </span>
            </div>
          </div>

          <nav className="mt-4 flex items-center gap-6 md:mt-0">
            {['Membros', 'Produtos', 'Serviços'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#333333] transition-colors"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#1F3A2E';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#333333';
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-[#1F3A2E] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all"
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#ABB69A';
                e.currentTarget.style.color = '#1F3A2E';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#1F3A2E';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden bg-[#E7E2D6] px-4 py-20 md:py-32"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <h1
                  className="text-4xl font-medium leading-tight text-[#1F3A2E] md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  A melhor idade, vivida com elegância
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-[#333333]">
                  Descubra uma comunidade curada de produtos, serviços e experiências pensadas para quem vive a vida com mais sabedoria, autonomia e estilo.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#experiencia"
                    className="inline-flex rounded-full bg-[#1F3A2E] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all"
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#152D20';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#1F3A2E';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Descubra Mais
                  </a>
                  <div className="flex items-center gap-2 rounded-full bg-white/60 px-5 py-2.5 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-[#1F3A2E]">4.8</span>
                    <span className="text-[#1F3A2E]">★★★★★</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-[#333333]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#ABB69A]"></span>
                  +2.000 membros
                </div>
              </div>

              <div className="relative hidden md:block">
                <div
                  className="aspect-[4/5] w-full rounded-3xl bg-[#ABB69A] p-6 shadow-xl transition-all"
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(31, 58, 46, 0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#1F3A2E]/30 bg-[#E7E2D6]">
                    <svg width="80" height="80" viewBox="0 0 44 44" fill="none" className="mb-4">
                      <circle cx="22" cy="22" r="21" stroke="#1F3A2E" strokeWidth="2" />
                      <circle cx="22" cy="16" r="5" fill="#1F3A2E" />
                      <path
                        d="M14 38C14 31 17 26 22 26C27 26 30 31 30 38"
                        stroke="#1F3A2E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className="text-3xl font-semibold text-[#1F3A2E]"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      Aureva
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section id="valores" className="bg-[#1F3A2E] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2
                className="mb-4 text-3xl font-medium text-[#E7E2D6] md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Nossos Valores
              </h2>
              <p className="mx-auto max-w-2xl text-[#E7E2D6]/80" style={{ fontFamily: 'var(--font-poppins)' }}>
                Três pilares que guiam cada experiência, produto e serviço oferecidos na Aureva.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3" style={{ fontFamily: 'var(--font-poppins)' }}>
              {[
                { title: 'Vitalidade', desc: 'Bem-estar físico e mental para aproveitar cada momento com disposição.' },
                { title: 'Autonomia', desc: 'Independência e liberdade para escolher como viver o próprio estilo de vida.' },
                { title: 'Elegância', desc: 'Refinamento em cada detalhe, do visual às experiências cotidianas.' },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-[#E7E2D6] p-8 transition-all"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#C9C1B3';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#E7E2D6';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3
                    className="mb-3 text-2xl font-medium text-[#1F3A2E]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#333333]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PALETA DE CORES */}
        <section id="paleta" className="bg-[#E7E2D6] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2
                className="mb-4 text-3xl font-medium text-[#1F3A2E] md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Paleta de Cores
              </h2>
              <p className="mx-auto max-w-2xl text-[#333333]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Tons que traduzem a essência sofisticada e natural da marca Aureva.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" style={{ fontFamily: 'var(--font-poppins)' }}>
              {[
                { name: 'Forest', hex: '#1F3A2E' },
                { name: 'Sage', hex: '#ABB69A' },
                { name: 'Cream', hex: '#E7E2D6' },
                { name: 'Greige', hex: '#C9C1B3' },
                { name: 'Dark', hex: '#333333' },
              ].map((color) => (
                <div
                  key={color.hex}
                  className="group rounded-2xl border border-[#C9C1B3] bg-white p-4 text-center transition-all"
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = color.hex;
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#C9C1B3';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="mx-auto mb-4 aspect-square w-full rounded-xl transition-transform"
                    style={{ backgroundColor: color.hex }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  ></div>
                  <p className="font-semibold text-[#333333]">{color.name}</p>
                  <p className="text-sm text-[#333333]/70">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="bg-[#C9C1B3] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2
                className="mb-4 text-3xl font-medium text-[#1F3A2E] md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                A Experiência Aureva
              </h2>
              <p className="mx-auto max-w-2xl text-[#333333]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Conectamos você a produtos, serviços e momentos que fazem sentido para o seu estilo de vida.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3" style={{ fontFamily: 'var(--font-poppins)' }}>
              {[
                { title: 'Curadoria', desc: 'Ofertas selecionadas por especialistas para atender às suas necessidades reais.' },
                { title: 'Comunidade', desc: 'Faça parte de uma rede de pessoas que compartilham interesses e experiências.' },
                { title: 'Benefícios', desc: 'Acesso a vantagens exclusivas, descontos e conteúdos pensados para você.' },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-[#1F3A2E] p-8 text-[#E7E2D6] transition-all"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#152D20';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#1F3A2E';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3
                    className="mb-3 text-2xl font-medium text-[#ABB69A]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#E7E2D6]/90">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="bg-[#E7E2D6] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2
                className="mb-4 text-3xl font-medium text-[#1F3A2E] md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Depoimentos
              </h2>
              <p className="mx-auto max-w-2xl text-[#333333]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Veja o que nossos membros dizem sobre a experiência na Aureva.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3" style={{ fontFamily: 'var(--font-poppins)' }}>
              {[
                { name: 'Marta Ribeiro', text: 'A Aureva mudou minha forma de descobrir produtos. Tudo é pensado com cuidado e elegância.' },
                { name: 'Carlos Eduardo', text: 'Finalmente encontrei um lugar que entende o que valorizo: qualidade, autonomia e bom gosto.' },
                { name: 'Helena Souza', text: 'A comunidade é acolhedora e os benefícios realmente fazem diferença no dia a dia.' },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-[#C9C1B3] bg-white p-8 transition-all"
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#1F3A2E';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(31, 58, 46, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#C9C1B3';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <p className="mb-6 text-[#333333]">“{t.text}”</p>
                  <p
                    className="font-semibold text-[#1F3A2E]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-[#1F3A2E] px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2
                  className="mb-4 text-3xl font-medium text-[#E7E2D6] md:text-4xl"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Fale Conosco
                </h2>
                <p className="mb-8 max-w-md text-[#E7E2D6]/80" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Entre em contato e descubra como a Aureva pode transformar sua experiência de lifestyle.
                </p>
                <div className="space-y-4 text-[#E7E2D6]" style={{ fontFamily: 'var(--font-poppins)' }}>
                  <div className="rounded-xl bg-[#152D20] p-5">
                    <p className="text-sm uppercase tracking-wider text-[#ABB69A]">Responsável</p>
                    <p className="font-medium">Andre Cunha</p>
                  </div>
                  <div className="rounded-xl bg-[#152D20] p-5">
                    <p className="text-sm uppercase tracking-wider text-[#ABB69A]">E-mail</p>
                    <p className="font-medium">contato@aureva.app.br</p>
                  </div>
                </div>
              </div>

              <form
                className="rounded-2xl bg-[#E7E2D6] p-8 md:p-10"
                style={{ fontFamily: 'var(--font-poppins)' }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-6">
                  <label htmlFor="nome" className="mb-2 block text-sm font-medium text-[#333333]">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    className="w-full rounded-xl border border-[#C9C1B3] bg-white px-4 py-3 text-[#333333] outline-none transition-all focus:border-[#1F3A2E]"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#333333]">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-[#C9C1B3] bg-white px-4 py-3 text-[#333333] outline-none transition-all focus:border-[#1F3A2E]"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-[#333333]">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    className="w-full rounded-xl border border-[#C9C1B3] bg-white px-4 py-3 text-[#333333] outline-none transition-all focus:border-[#1F3A2E]"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1F3A2E] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#152D20';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#1F3A2E';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#333333] px-4 py-14 text-[#E7E2D6]" style={{ fontFamily: 'var(--font-poppins)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="21" stroke="#E7E2D6" strokeWidth="2" />
                  <circle cx="22" cy="16" r="5" fill="#E7E2D6" />
                  <path
                    d="M14 38C14 31 17 26 22 26C27 26 30 31 30 38"
                    stroke="#E7E2D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Aureva
                </span>
              </div>
              <p className="text-sm text-[#E7E2D6]/70">
                Marketplace de lifestyle para quem vive a melhor idade com elegância.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ABB69A]">Navegação</h4>
              <ul className="space-y-2 text-sm">
                {['Membros', 'Produtos', 'Serviços', 'Experiência', 'Depoimentos'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-[#E7E2D6]/80 transition-colors"
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#E7E2D6';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'rgba(231, 226, 214, 0.8)';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ABB69A]">Contato</h4>
              <ul className="space-y-2 text-sm text-[#E7E2D6]/80">
                <li>Andre Cunha</li>
                <li>contato@aureva.app.br</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ABB69A]">Redes Sociais</h4>
              <div className="flex gap-3">
                {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-full bg-[#1F3A2E] px-4 py-2 text-xs font-medium text-white transition-all"
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#ABB69A';
                      e.currentTarget.style.color = '#1F3A2E';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#1F3A2E';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#E7E2D6]/20 pt-8 text-center text-sm text-[#E7E2D6]/60">
            © {new Date().getFullYear()} Aureva. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
