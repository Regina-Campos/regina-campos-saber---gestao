import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.usecurling.com/p/1920/1080?q=desk%20laptop%20salt%20lamp')",
        }}
      >
        <div className="absolute inset-0 bg-rc-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-rc-navy via-transparent to-transparent opacity-80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-rc-ivory leading-tight mb-6 drop-shadow-md">
          Conhecimento que transforma <span className="text-rc-gold italic">gestão</span> em
          resultados.
        </h1>
        <p className="text-lg md:text-xl text-rc-ivory/90 mb-10 font-light max-w-2xl mx-auto">
          Estratégias sólidas em crédito corporativo, educação financeira e ferramentas para elevar
          o patamar do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-transparent border-2 border-rc-gold text-rc-gold hover:bg-rc-gold hover:text-rc-navy font-semibold px-8 py-6 text-base rounded-sm transition-all duration-300"
            asChild
          >
            <a href="#servicos">Conhecer Soluções</a>
          </Button>
          <Button
            size="lg"
            className="bg-rc-ivory text-rc-navy hover:bg-white font-semibold px-8 py-6 text-base rounded-sm transition-all duration-300"
            asChild
          >
            <a href="#contato">Falar com Especialista</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
