import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Diagnosis() {
  return (
    <section className="py-24 bg-[#EAE5D9]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-rc-navy rounded-sm p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-rc-gold/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-serif text-rc-ivory mb-4">
                Dificuldades com acesso a crédito?
              </h2>
              <p className="text-rc-ivory/80 text-lg mb-6 leading-relaxed">
                Muitas empresas falham não por falta de faturamento, mas por falta de estruturação
                adequada na hora de apresentar seus números ao mercado. Realize uma{' '}
                <strong>Avaliação Diagnóstica</strong> e descubra o caminho viável.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end w-full">
              <Button
                size="lg"
                className="bg-rc-gold text-rc-navy hover:bg-white w-full md:w-auto px-8 py-6 text-base font-bold rounded-sm transition-all duration-300 shadow-lg"
                asChild
              >
                <a href="#contato" className="flex items-center gap-2">
                  Agendar Diagnóstico <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
