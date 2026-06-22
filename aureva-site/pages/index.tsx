import { useState } from 'react';
import Head from 'next/head';

const navItems = ['Membros', 'Produtos', 'Serviços'];

const categories = [
  { name: 'Beleza & Bem-estar', icon: '✦' },
  { name: 'Mobilidade & Conforto', icon: '✦' },
  { name: 'Casa & Segurança', icon: '✦' },
  { name: 'Tecnologia Assistiva', icon: '✦' },
  { name: 'Nutrição & Saúde', icon: '✦' },
  { name: 'Experiências & Lazer', icon: '✦' },
];

const testimonials = [
  {
    quote: 'O Aureva mudou a forma como encontro produtos feitos para a minha rotina. Tudo é elegante, simples e confiável.',
    author: 'Dona Rosa, 72',
    location: 'São Paulo, SP',
  },
  {
    quote: 'Finalmente um lugar que entende que a melhor idade também merece design bonito e atendimento respeitoso.',
    author: 'Seu Jorge, 68',
    location: 'Belo Horizonte, MG',
  },
  {
    quote: 'A navegação é tão fácil que consigo comprar sozinha sem precisar pedir ajuda para ninguém.',
    author: 'Dona Lúcia, 75',
    location: 'Curitiba, PR',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Aureva — Marketplace Premium para a Melhor Idade</title>
        <meta name="description" content="Aureva é um marketplace premium de produtos e serviços para a melhor idade." />
      </Head>

      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-forest focus:text-cream px-6 py-3 rounded-lg text-xl font-semibold">
        Pular para o conteúdo principal
      </a>

      <header className="sticky top-0 z-40 bg-sage/95 border-b border-forest/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="/" className="text-3xl font-serif font-semibold text-forest tracking-wide" aria-label="Aureva — Página inicial">
            Aureva
          </a>

          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-xl font-medium text-forest hover:text-gold focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream rounded px-2 py-1 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="text-xl font-semibold bg-forest text-cream px-7 py-3 rounded-full hover:bg-forest-dark focus:outline-none focus:ring-4 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-colors"
            >
              Entre na lista
            </button>
          </nav>

          <button
            className="md:hidden text-forest p-2 focus:outline-none focus:ring-2 focus:ring-forest rounded"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-8 h-1 bg-forest mb-1.5 rounded"></span>
            <span className="block w-8 h-1 bg-forest mb-1.5 rounded"></span>
            <span className="block w-8 h-1 bg-forest rounded"></span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-forest/20 px-6 pb-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left text-2xl font-medium text-forest py-4 border-b border-forest/10 focus:outline-none focus:ring-2 focus:ring-forest rounded px-2"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="mt-6 w-full text-2xl font-semibold bg-forest text-cream px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-gold"
            >
              Entre na lista
            </button>
          </div>
        )}
      </header>

      <main id="conteudo">
        <section className="relative bg-cream overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-sage/40 blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold/10 blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-36 text-center">
            <span className="inline-block text-xl md:text-2xl font-medium tracking-widest text-forest/80 uppercase mb-8">
              Bem-vindo à Aureva
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-forest leading-tight mb-10">
              Cuidado, elegância e propósito<br className="hidden md:block" /> para a melhor idade
            </h1>
            <p className="text-2xl md:text-3xl text-forest/90 max-w-4xl mx-auto leading-relaxed mb-14">
              Um marketplace premium onde produtos, serviços e experiências são escolhidos com atenção real às necessidades de quem vive com mais sabedoria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => scrollTo('contato')}
                className="text-2xl font-semibold bg-forest text-cream px-10 py-5 rounded-full hover:bg-forest-dark focus:outline-none focus:ring-4 focus:ring-gold focus:ring-offset-4 focus:ring-offset-cream transition-colors min-w-[16rem]"
              >
                Cadastre-se grátis
              </button>
              <button
                onClick={() => scrollTo('produtos')}
                className="text-2xl font-semibold text-forest border-2 border-forest px-10 py-5 rounded-full hover:bg-forest/5 focus:outline-none focus:ring-4 focus:ring-forest focus:ring-offset-4 focus:ring-offset-cream transition-colors min-w-[16rem]"
              >
                Explorar ofertas
              </button>
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-sage/30 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-forest mb-8">
                Categorias pensadas para você
              </h2>
              <p className="text-2xl md:text-3xl text-forest/90 max-w-4xl mx-auto leading-relaxed">
                Cada categoria é curada com foco em acessibilidade, qualidade e dignidade.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <article
                  key={category.name}
                  className="group bg-cream border border-forest/10 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all focus-within:ring-4 focus-within:ring-forest focus-within:ring-offset-4 focus-within:ring-offset-cream"
                  tabIndex={0}
                >
                  <span className="text-5xl text-gold mb-8 block" aria-hidden="true">{category.icon}</span>
                  <h3 className="text-3xl font-semibold text-forest mb-5">{category.name}</h3>
                  <p className="text-xl text-forest/80 leading-relaxed">
                    Soluções cuidadosamente selecionadas para promover autonomia, conforto e prazer no dia a dia.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="membros" className="bg-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif font-semibold text-forest mb-8 leading-tight">
                  Faça parte de uma comunidade que valoriza cada fase da vida
                </h2>
                <p className="text-2xl md:text-3xl text-forest/90 leading-relaxed mb-12">
                  Membros Aureva têm acesso a ofertas exclusivas, atendimento humanizado e conteúdos feitos para inspirar, informar e conectar.
                </p>
                <ul className="space-y-6">
                  {['Descontos em produtos premium', 'Suporte por telefone e WhatsApp', 'Convites para eventos e experiências', 'Curadoria atualizada por especialistas'].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-5 text-2xl text-forest">
                      <span className="text-gold text-3xl leading-none" aria-hidden="true">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sage/30 rounded-[3rem] p-12 md:p-16 flex flex-col items-center text-center">
                <span className="text-7xl mb-8">✦</span>
                <h3 className="text-3xl md:text-4xl font-semibold text-forest mb-6">Associação gratuita</h3>
                <p className="text-2xl text-forest/90 mb-10 leading-relaxed">
                  Cadastre-se em poucos minutos e comece a descobrir produtos e serviços feitos para o seu ritmo.
                </p>
                <button
                  onClick={() => scrollTo('contato')}
                  className="text-2xl font-semibold bg-forest text-cream px-10 py-5 rounded-full hover:bg-forest-dark focus:outline-none focus:ring-4 focus:ring-gold focus:ring-offset-4 focus:ring-offset-cream transition-colors"
                >
                  Tornar-se membro
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="serviços" className="bg-forest text-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-8">
                Serviços que cuidam de quem você ama
              </h2>
              <p className="text-2xl md:text-3xl text-cream/90 max-w-4xl mx-auto leading-relaxed">
                Desde acompanhamento domiciliar até assessoria de bem-estar, conectamos famílias a profissionais de confiança.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {['Acompanhamento Domiciliar', 'Nutrição e Cuidados', 'Assessoria de Bem-estar'].map((service) => (
                <div key={service} className="bg-cream/10 border border-cream/20 rounded-3xl p-10 text-center focus-within:ring-4 focus-within:ring-gold rounded-3xl">
                  <span className="text-6xl text-gold mb-8 block" aria-hidden="true">✦</span>
                  <h3 className="text-3xl font-semibold text-cream mb-5">{service}</h3>
                  <p className="text-xl text-cream/85 leading-relaxed">
                    Profissionais verificados, com atenção individualizada e comunicação clara.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-forest text-center mb-20">
              O que dizem nossos membros
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="bg-sage/20 border border-forest/10 rounded-3xl p-10 flex flex-col justify-between h-full">
                  <p className="text-2xl md:text-3xl text-forest/95 leading-relaxed mb-10">“{t.quote}”</p>
                  <footer>
                    <p className="text-2xl font-semibold text-forest">{t.author}</p>
                    <p className="text-xl text-forest/75">{t.location}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-sage/30 py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-forest mb-8">Entre em contato</h2>
              <p className="text-2xl md:text-3xl text-forest/90 leading-relaxed">
                Tem dúvidas? Quer ser avisado do lançamento? Envie uma mensagem e responderemos com carinho.
              </p>
            </div>

            <div className="bg-cream rounded-3xl p-8 md:p-14 shadow-sm border border-forest/10">
              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-6xl text-gold mb-6 block" aria-hidden="true">✦</span>
                  <h3 className="text-3xl font-semibold text-forest mb-4">Mensagem enviada!</h3>
                  <p className="text-2xl text-forest/90">Agradecemos o contato. Nossa equipe retornará em breve.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-2xl font-semibold text-forest underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-forest rounded px-2 py-1"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label htmlFor="name" className="block text-2xl font-semibold text-forest mb-3">Nome completo</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full text-2xl text-forest bg-cream border-2 border-forest/30 rounded-xl px-6 py-4 focus:outline-none focus:border-forest focus:ring-4 focus:ring-gold/40 placeholder:text-forest/50"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-2xl font-semibold text-forest mb-3">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full text-2xl text-forest bg-cream border-2 border-forest/30 rounded-xl px-6 py-4 focus:outline-none focus:border-forest focus:ring-4 focus:ring-gold/40 placeholder:text-forest/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-2xl font-semibold text-forest mb-3">Mensagem</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full text-2xl text-forest bg-cream border-2 border-forest/30 rounded-xl px-6 py-4 focus:outline-none focus:border-forest focus:ring-4 focus:ring-gold/40 placeholder:text-forest/50"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-2xl font-semibold bg-forest text-cream px-8 py-5 rounded-full hover:bg-forest-dark focus:outline-none focus:ring-4 focus:ring-gold focus:ring-offset-4 focus:ring-offset-cream transition-colors"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <p className="text-4xl font-serif font-semibold mb-8">Aureva</p>
              <p className="text-xl text-cream/85 leading-relaxed">
                aureva.app.br<br />
                Marketplace premium para a melhor idade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Navegação</h3>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="text-xl text-cream/85 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded px-1 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollTo('contato')}
                    className="text-xl text-cream/85 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded px-1 transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contato</h3>
              <p className="text-xl text-cream/85 leading-relaxed">
                contato@aureva.app.br<br />
                (11) 0000-0000<br />
                Atendimento de segunda a sexta, 9h às 18h.
              </p>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xl text-cream/80">© {new Date().getFullYear()} Aureva. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="text-xl text-cream/80 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded px-1 transition-colors">Privacidade</a>
              <a href="#" className="text-xl text-cream/80 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded px-1 transition-colors">Termos</a>
              <a href="#" className="text-xl text-cream/80 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded px-1 transition-colors">Acessibilidade</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}