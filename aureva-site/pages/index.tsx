import { useState, useEffect } from 'react';
import Head from 'next/head';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skipVisible, setSkipVisible] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setSkipVisible(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Aureva | Marketplace Premium de Lifestyle para a Melhor Idade</title>
        <meta
          name="description"
          content="O Aureva é o marketplace premium de lifestyle para pessoas 65+. Curadoria consciente, experiência premium e elegância atemporal para viver com excelência."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <a
        href="#conteudo"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('conteudo');
        }}
        className={`fixed left-4 top-4 z-50 rounded-md bg-[#1F3A2E] px-4 py-2 text-sm font-medium text-[#E7E2D6] transition-transform focus:outline-none focus:ring-2 focus:ring-[#E7E2D6] focus:ring-offset-2 focus:ring-offset-[#1F3A2E] ${
          skipVisible ? 'translate-y-0' : '-translate-y-20'
        }`}
        onBlur={() => setSkipVisible(false)}
      >
        Pular para o conteúdo
      </a>

      <header
        className="sticky top-0 z-40 border-b border-[#C9C1B3]/30 bg-[#E7E2D6]/90 backdrop-blur-md"
        role="banner"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="font-serif text-2xl font-semibold tracking-tight text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
            aria-label="Aureva - Página inicial"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aureva
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a
              href="#membros"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('membros');
              }}
              className="text-base font-medium text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
            >
              Membros
            </a>
            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('produtos');
              }}
              className="text-base font-medium text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
            >
              Produtos
            </a>
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('servicos');
              }}
              className="text-base font-medium text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
            >
              Serviços
            </a>
          </nav>

          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contato');
            }}
            className="hidden rounded-full bg-[#1F3A2E] px-5 py-2.5 text-sm font-medium text-[#E7E2D6] transition hover:bg-[#142921] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6] md:inline-block"
          >
            Fale Conosco
          </a>

          <button
            type="button"
            className="rounded-md p-2 text-[#1F3A2E] transition hover:bg-[#ABB69A]/20 focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6] md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-[#C9C1B3]/30 bg-[#E7E2D6] px-4 py-4 md:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-3">
              <a
                href="#membros"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('membros');
                }}
                className="rounded-md px-3 py-2 text-base font-medium text-[#333333] transition hover:bg-[#ABB69A]/20 hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
              >
                Membros
              </a>
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('produtos');
                }}
                className="rounded-md px-3 py-2 text-base font-medium text-[#333333] transition hover:bg-[#ABB69A]/20 hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
              >
                Produtos
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('servicos');
                }}
                className="rounded-md px-3 py-2 text-base font-medium text-[#333333] transition hover:bg-[#ABB69A]/20 hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
              >
                Serviços
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contato');
                }}
                className="mt-2 rounded-full bg-[#1F3A2E] px-5 py-2.5 text-center text-sm font-medium text-[#E7E2D6] transition hover:bg-[#142921] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2"
              >
                Fale Conosco
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="conteudo">
        <section
          id="hero"
          className="relative overflow-hidden bg-[#1F3A2E] py-20 sm:py-28 lg:py-36"
          aria-label="Hero"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A2E] via-[#1F3A2E] to-[#2a4d3d] opacity-90"></div>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ABB69A]/10 blur-3xl sm:h-96 sm:w-96"></div>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#E7E2D6]/10 blur-3xl sm:h-96 sm:w-96"></div>
          <div className="absolute right-1/4 top-1/4 h-16 w-16 rounded-full border border-[#ABB69A]/30 sm:h-24 sm:w-24"></div>
          <div className="absolute bottom-1/3 left-1/4 h-12 w-12 rounded-full border border-[#E7E2D6]/20 sm:h-20 sm:w-20"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                className="text-4xl font-medium leading-tight text-[#E7E2D6] sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                O encontro entre patrimônio e sofisticação contemporânea.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#E7E2D6]/90 sm:text-xl md:text-2xl">
                Um novo conceito de viver, comprar e investir com excelência.
              </p>
              <div className="mt-10">
                <a
                  href="#conceito"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('conceito');
                  }}
                  className="inline-flex items-center rounded-full bg-[#E7E2D6] px-8 py-3.5 text-base font-semibold text-[#1F3A2E] transition hover:bg-[#C9C1B3] focus:outline-none focus:ring-2 focus:ring-[#E7E2D6] focus:ring-offset-2 focus:ring-offset-[#1F3A2E]"
                >
                  Descubra Mais
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="conceito" className="bg-[#E7E2D6] py-16 sm:py-24" aria-labelledby="conceito-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#ABB69A]">
                Nossa Essência
              </span>
              <h2
                id="conceito-title"
                className="mt-3 text-3xl font-medium text-[#1F3A2E] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Três pilares que movem o Aureva
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-[#C9C1B3]/20 p-8 transition hover:shadow-lg focus-within:ring-2 focus-within:ring-[#1F3A2E]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3A2E] text-3xl text-[#E7E2D6]" aria-hidden="true">
                  ✦
                </div>
                <h3 className="mb-3 text-2xl font-medium text-[#1F3A2E]">Vitalidade</h3>
                <p className="text-lg leading-relaxed text-[#333333]">
                  Cada curadoria celebra a energia de quem vive intensamente. Produtos e serviços que impulsionam o corpo, a mente e os relacionamentos.
                </p>
              </div>

              <div className="rounded-2xl bg-[#C9C1B3]/20 p-8 transition hover:shadow-lg focus-within:ring-2 focus-within:ring-[#1F3A2E]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3A2E] text-3xl text-[#E7E2D6]" aria-hidden="true">
                  ◉
                </div>
                <h3 className="mb-3 text-2xl font-medium text-[#1F3A2E]">Autonomia</h3>
                <p className="text-lg leading-relaxed text-[#333333]">
                  Tecnologia, design e atendimento pensados para oferecer liberdade real. Você no comando das suas escolhas, do seu tempo e do seu estilo.
                </p>
              </div>

              <div className="rounded-2xl bg-[#C9C1B3]/20 p-8 transition hover:shadow-lg focus-within:ring-2 focus-within:ring-[#1F3A2E] sm:col-span-2 lg:col-span-1">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3A2E] text-3xl text-[#E7E2D6]" aria-hidden="true">
                  ✧
                </div>
                <h3 className="mb-3 text-2xl font-medium text-[#1F3A2E]">Elegância</h3>
                <p className="text-lg leading-relaxed text-[#333333]">
                  Estética atemporal em cada detalhe. Uma experiência que honra a trajetória e eleva o cotidiano com refinamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="membros" className="bg-[#ABB69A]/20 py-16 sm:py-24" aria-labelledby="marca-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1F3A2E]">
                Curadoria Aureva
              </span>
              <h2
                id="marca-title"
                className="mt-3 text-3xl font-medium text-[#1F3A2E] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Uma marca que faz bem viver
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-[#E7E2D6] p-6 text-center shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#1F3A2E]">
                <div className="mb-4 text-4xl text-[#1F3A2E]" aria-hidden="true">
                  🌿
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Curadoria Consciente</h3>
                <p className="text-base leading-relaxed text-[#333333]">
                  Cada item é selecionado por critérios rigorosos de qualidade, impacto positivo e relevância para a melhor idade.
                </p>
              </div>

              <div className="rounded-2xl bg-[#E7E2D6] p-6 text-center shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#1F3A2E]">
                <div className="mb-4 text-4xl text-[#1F3A2E]" aria-hidden="true">
                  ✦
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Experiência Premium</h3>
                <p className="text-base leading-relaxed text-[#333333]">
                  Atendimento humanizado, navegação intuitiva e entrega impecável. Você merece uma jornada sem atritos.
                </p>
              </div>

              <div className="rounded-2xl bg-[#E7E2D6] p-6 text-center shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#1F3A2E]">
                <div className="mb-4 text-4xl text-[#1F3A2E]" aria-hidden="true">
                  ◈
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Estilo de Vida</h3>
                <p className="text-base leading-relaxed text-[#333333]">
                  Mais do que produtos, conectamos você a uma comunidade e a uma forma de viver com propósito e prazer.
                </p>
              </div>

              <div className="rounded-2xl bg-[#E7E2D6] p-6 text-center shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#1F3A2E]">
                <div className="mb-4 text-4xl text-[#1F3A2E]" aria-hidden="true">
                  ♥
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Escolhas que Fazem Bem</h3>
                <p className="text-base leading-relaxed text-[#333333]">
                  Bem-estar, sustentabilidade e longevidade ativa são prioridades em cada decisão da nossa curadoria.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-[#E7E2D6] py-16 sm:py-24" aria-labelledby="produtos-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#ABB69A]">
                Categorias
              </span>
              <h2
                id="produtos-title"
                className="mt-3 text-3xl font-medium text-[#1F3A2E] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore o universo Aureva
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="group overflow-hidden rounded-2xl bg-[#C9C1B3]/30 shadow-sm transition hover:shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506784365847-bbad939e4f9c?auto=format&fit=crop&w=800&q=80"
                    alt="Natureza serena com luz suave"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1F3A2E]/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Bem-Estar</h3>
                  <p className="text-base leading-relaxed text-[#333333]">
                    Produtos que cuidam do corpo e da mente, trazendo equilíbrio e qualidade de vida ao dia a dia.
                  </p>
                </div>
              </article>

              <article className="group overflow-hidden rounded-2xl bg-[#C9C1B3]/30 shadow-sm transition hover:shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
                    alt="Interiores elegantes e confortáveis"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1F3A2E]/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Casa & Conforto</h3>
                  <p className="text-base leading-relaxed text-[#333333]">
                    Soluções para um lar mais seguro, acolhedor e refinado, em sintonia com a sua rotina.
                  </p>
                </div>
              </article>

              <article className="group overflow-hidden rounded-2xl bg-[#C9C1B3]/30 shadow-sm transition hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                    alt="Grupo de amigos em lifestyle ativo"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1F3A2E]/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-medium text-[#1F3A2E]">Experiências</h3>
                  <p className="text-base leading-relaxed text-[#333333]">
                    Viagens, cultura, gastronomia e encontros exclusivos para viver momentos memoráveis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#1F3A2E] py-16 sm:py-24" aria-labelledby="servicos-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#ABB69A]">
                Depoimentos
              </span>
              <h2
                id="servicos-title"
                className="mt-3 text-3xl font-medium text-[#E7E2D6] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quem vive o Aureva, aprova
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <blockquote className="rounded-2xl border border-[#E7E2D6]/10 bg-[#E7E2D6]/5 p-8">
                <p className="text-lg leading-relaxed text-[#E7E2D6]">
                  "Finalmente encontrei um lugar que entende minha fase da vida. Tudo é elegante, prático e feito com respeito."
                </p>
                <footer className="mt-6">
                  <p className="font-medium text-[#E7E2D6]">Helena Moura</p>
                  <p className="text-sm text-[#ABB69A]">São Paulo, SP</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-2xl border border-[#E7E2D6]/10 bg-[#E7E2D6]/5 p-8">
                <p className="text-lg leading-relaxed text-[#E7E2D6]">
                  "A curadoria do Aureva é impecável. Sinto que cada produto foi escolhido para fazer a diferença no meu dia."
                </p>
                <footer className="mt-6">
                  <p className="font-medium text-[#E7E2D6]">Roberto Dias</p>
                  <p className="text-sm text-[#ABB69A]">Rio de Janeiro, RJ</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-2xl border border-[#E7E2D6]/10 bg-[#E7E2D6]/5 p-8 sm:col-span-2 lg:col-span-1">
                <p className="text-lg leading-relaxed text-[#E7E2D6]">
                  "Atendimento humanizado, entrega rápida e um cuidado que não se encontra em nenhum outro marketplace."
                </p>
                <footer className="mt-6">
                  <p className="font-medium text-[#E7E2D6]">Célia Andrade</p>
                  <p className="text-sm text-[#ABB69A]">Curitiba, PR</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#E7E2D6] py-16 sm:py-24" aria-labelledby="contato-title">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#ABB69A]">
                Fale Conosco
              </span>
              <h2
                id="contato-title"
                className="mt-3 text-3xl font-medium text-[#1F3A2E] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Estamos aqui para você
              </h2>
              <p className="mt-4 text-lg text-[#333333]">
                Envie uma mensagem e nossa equipe retornará com toda a atenção que você merece.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#C9C1B3]/20 p-6 shadow-sm sm:p-10"
              aria-label="Formulário de contato"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="nome" className="mb-2 text-base font-medium text-[#1F3A2E]">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-lg text-[#333333] placeholder-[#C9C1B3] transition focus:border-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 text-base font-medium text-[#1F3A2E]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-lg text-[#333333] placeholder-[#C9C1B3] transition focus:border-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="telefone" className="mb-2 text-base font-medium text-[#1F3A2E]">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-lg text-[#333333] placeholder-[#C9C1B3] transition focus:border-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="mensagem" className="mb-2 text-base font-medium text-[#1F3A2E]">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-lg text-[#333333] placeholder-[#C9C1B3] transition focus:border-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1F3A2E] px-8 py-3.5 text-base font-semibold text-[#E7E2D6] transition hover:bg-[#142921] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
                >
                  Enviar Mensagem
                </button>
              </div>

              {showSuccess && (
                <div
                  className="mt-6 rounded-lg bg-[#ABB69A] px-4 py-3 text-center text-base font-medium text-[#1F3A2E]"
                  role="status"
                  aria-live="polite"
                >
                  Obrigado! Recebemos sua mensagem e entraremos em contato em breve.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C9C1B3]/30 bg-[#E7E2D6] py-14 sm:py-20" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('hero');
                }}
                className="inline-block font-serif text-3xl font-semibold text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
                aria-label="Aureva - Voltar ao topo"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Aureva
              </a>
              <p className="mt-4 text-base leading-relaxed text-[#333333]">
                Marketplace premium de lifestyle para a melhor idade. Curadoria consciente, experiência refinada e elegância atemporal.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <h3 className="mb-4 text-lg font-semibold text-[#1F3A2E]">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#membros"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('membros');
                    }}
                    className="text-base text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                  >
                    Membros
                  </a>
                </li>
                <li>
                  <a
                    href="#produtos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('produtos');
                    }}
                    className="text-base text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('servicos');
                    }}
                    className="text-base text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('contato');
                    }}
                    className="text-base text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#1F3A2E]">Atendimento</h3>
              <address className="not-italic">
                <p className="text-base text-[#333333]">contato@aureva.app.br</p>
                <p className="mt-2 text-base text-[#333333]">0800 000 0000</p>
                <p className="mt-2 text-base text-[#333333]">
                  Segunda a Sexta, 9h às 18h
                </p>
              </address>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-[#1F3A2E]">Redes</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Aureva"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F3A2E] text-[#E7E2D6] transition hover:bg-[#142921] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn do Aureva"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F3A2E] text-[#E7E2D6] transition hover:bg-[#142921] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube do Aureva"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F3A2E] text-[#E7E2D6] transition hover:bg-[#142921] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E] focus:ring-offset-2 focus:ring-offset-[#E7E2D6]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#C9C1B3]/30 pt-8 sm:flex-row">
            <p className="text-sm text-[#333333]">
              © {new Date().getFullYear()} Aureva. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="text-sm text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-[#333333] transition hover:text-[#1F3A2E] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
              >
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;