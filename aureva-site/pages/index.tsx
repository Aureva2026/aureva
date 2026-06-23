import React from 'react';
import Head from 'next/head';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Aureva | Lifestyle Premium para a Melhor Idade</title>
        <meta name="description" content="Aureva é o marketplace premium de lifestyle para quem tem 65+ e vive com elegância." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#C9C1B3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-['Playfair_Display'] text-3xl font-semibold text-[#1F3A2E]">
            Aureva
          </a>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#membros" className="text-[#333333] hover:text-[#1F3A2E] transition-colors">
              Membros
            </a>
            <a href="#produtos" className="text-[#333333] hover:text-[#1F3A2E] transition-colors">
              Produtos
            </a>
            <a href="#servicos" className="text-[#333333] hover:text-[#1F3A2E] transition-colors">
              Serviços
            </a>
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-[#1F3A2E] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#142922] transition-colors"
          >
            FALE CONOSCO
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#E7E2D6]">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-['Playfair_Display'] text-5xl leading-tight font-semibold text-[#1F3A2E]">
                A melhor idade, vivida com elegância
              </h1>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed">
                O marketplace premium de lifestyle para quem tem 65+. Produtos selecionados, serviços de confiança e uma experiência feita para inspirar cada momento.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#produtos"
                  className="rounded-full bg-[#1F3A2E] text-white px-8 py-3 font-medium hover:bg-[#142922] transition-colors"
                >
                  Explorar produtos
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border-2 border-[#1F3A2E] text-[#1F3A2E] px-8 py-3 font-medium hover:bg-[#1F3A2E] hover:text-white transition-colors"
                >
                  Conhecer serviços
                </a>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <span className="block text-4xl mb-2">🌿</span>
                  <p className="text-sm font-medium text-[#333333]">Vitalidade</p>
                </div>
                <div className="text-center">
                  <span className="block text-4xl mb-2">✨</span>
                  <p className="text-sm font-medium text-[#333333]">Elegância</p>
                </div>
                <div className="text-center">
                  <span className="block text-4xl mb-2">❤</span>
                  <p className="text-sm font-medium text-[#333333]">Propósito</p>
                </div>
                <div className="text-center">
                  <span className="block text-4xl mb-2">🤝</span>
                  <p className="text-sm font-medium text-[#333333]">Conexão</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 h-80 lg:h-[560px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=800&q=80"
                alt="Lifestyle para a melhor idade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#E7E2D6] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-4xl font-semibold text-[#1F3A2E]">
                Nossos pilares
              </h2>
              <p className="mt-4 text-lg text-[#333333]">
                Tudo na Aureva é pensado para celebrar a melhor idade com cuidado e sofisticação.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '☕', title: 'Curadoria Consciente', text: 'Produtos e serviços selecionados com critérios rigorosos de qualidade e propósito.' },
                { icon: '💎', title: 'Experiência Premium', text: 'Atendimento, embalagem e navegação pensados para oferecer prazer em cada detalhe.' },
                { icon: '🌸', title: 'Estilo de Vida', text: 'Soluções que acompanham rotinas, hobbies e sonhos da melhor idade.' },
                { icon: '🌱', title: 'Escolhas que Fazem Bem', text: 'Marcas e parceiros alinhados ao bem-estar, sustentabilidade e impacto positivo.' },
              ].map((pilar, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl">{pilar.icon}</span>
                  <h3 className="mt-6 font-['Playfair_Display'] text-xl font-semibold text-[#1F3A2E]">
                    {pilar.title}
                  </h3>
                  <p className="mt-3 text-[#333333] leading-relaxed">{pilar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-[#E7E2D6] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-4xl font-semibold text-[#1F3A2E]">
                Categorias em destaque
              </h2>
              <p className="mt-4 text-lg text-[#333333]">
                Explore seleções exclusivas para viver com mais conforto, beleza e significado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Bem-Estar', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80' },
                { title: 'Casa & Conforto', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&q=80' },
                { title: 'Experiências', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80' },
              ].map((categoria, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative h-80 rounded-2xl overflow-hidden block"
                >
                  <img
                    src={categoria.img}
                    alt={categoria.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A2E]/90 via-[#1F3A2E]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-white">
                      {categoria.title}
                    </h3>
                    <span className="mt-2 inline-block text-sm text-white/90 border-b border-white/70 pb-0.5">
                      Ver seleção
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1F3A2E] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-4xl font-semibold text-white">
                O que dizem por aí
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Histórias reais de quem descobriu uma nova forma de viver a melhor idade.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Helena M.', age: '68', text: 'A Aureva mudou a forma como cuido de mim. Encontrei produtos lindos e um atendimento que me faz sentir especial.' },
                { name: 'Roberto L.', age: '71', text: 'Finalmente um lugar que entende a gente. Serviços de confiança e uma curadoria que realmente faz sentido.' },
                { name: 'Dona Tereza', age: '74', text: 'Comprei presentes para toda a família e ainda descobri experiências incríveis para curtir com as amigas.' },
              ].map((depoimento, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10">
                  <p className="text-lg text-white/95 leading-relaxed">“{depoimento.text}”</p>
                  <div className="mt-6">
                    <p className="font-medium text-white">{depoimento.name}</p>
                    <p className="text-sm text-white/70">{depoimento.age} anos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#E7E2D6] py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display'] text-4xl font-semibold text-[#1F3A2E]">
                Fale conosco
              </h2>
              <p className="mt-4 text-lg text-[#333333]">
                Queremos conhecer você. Envie uma mensagem e nosso time entrará em contato.
              </p>
            </div>
            <form className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-[#333333] mb-2">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    className="w-full rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="assunto" className="block text-sm font-medium text-[#333333] mb-2">
                  Assunto
                </label>
                <input
                  id="assunto"
                  type="text"
                  className="w-full rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="mensagem" className="block text-sm font-medium text-[#333333] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  className="w-full rounded-lg border border-[#C9C1B3] bg-[#E7E2D6] px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1F3A2E]"
                  placeholder="Escreva sua mensagem"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#1F3A2E] text-white py-3.5 font-medium hover:bg-[#142922] transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F3A2E] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <a href="#" className="font-['Playfair_Display'] text-3xl font-semibold text-white">
                Aureva
              </a>
              <p className="mt-4 text-white/70 max-w-sm">
                Marketplace premium de lifestyle para a melhor idade. Elegância, cuidado e propósito em cada escolha.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Aureva</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Membros</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Parceiros</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Trabalhe conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Ajuda</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Central de ajuda</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Entregas</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Trocas e devoluções</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Fale conosco</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Aureva. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}