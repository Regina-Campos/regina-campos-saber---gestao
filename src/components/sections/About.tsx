import { GraduationCap, Award, BookOpen } from 'lucide-react'
import reginaPortrait from '@/assets/fotounip-1f0c8.png'

export function About() {
  const credentials = [
    {
      icon: <GraduationCap className="w-6 h-6 text-rc-gold" />,
      title: 'Formação Acadêmica',
      desc: 'Mestrado em Administração e Pós-Graduação em Finanças Corporativas.',
    },
    {
      icon: <Award className="w-6 h-6 text-rc-gold" />,
      title: 'Experiência de Mercado',
      desc: 'Mais de 20 anos atuando diretamente no mercado financeiro e corporativo.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rc-gold" />,
      title: 'Docência',
      desc: 'Professora universitária, traduzindo complexidade em conhecimento aplicável.',
    },
  ]

  return (
    <section id="quem-sou" className="py-24 bg-rc-ivory">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 animate-slide-up">
            <div className="absolute inset-0 border-2 border-rc-gold/30 translate-x-4 translate-y-4 rounded-xl" />
            <div className="relative z-10 w-full h-[450px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
              <img
                src={reginaPortrait}
                alt="Regina Campos"
                loading="lazy"
                className="w-full h-full object-cover object-[25%_15%] scale-[1.25] md:scale-[1.2] translate-y-2 md:translate-y-4 transition-transform duration-700 hover:scale-[1.3] md:hover:scale-[1.25] grayscale-[10%] sepia-[5%] contrast-[1.05]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block border-b-2 border-rc-gold pb-2 mb-6">
              <h2 className="text-3xl md:text-4xl text-rc-navy font-bold">Quem Sou</h2>
            </div>

            <h3 className="text-2xl font-serif text-rc-graphite mb-6 italic leading-relaxed">
              "Mais de 20 anos transitando entre o rigor do mercado financeiro e a clareza da sala
              de aula."
            </h3>

            <div className="space-y-4 text-rc-graphite/90 leading-relaxed mb-10">
              <p>
                Acredito firmemente que o{' '}
                <strong>conhecimento que transforma gestão em resultados</strong> é o que realmente
                muda vidas e empresas. Minha trajetória foi construída na intersecção entre a teoria
                acadêmica e a prática agressiva do mercado de crédito.
              </p>
              <p>
                Hoje, meu foco é ajudar empreendedores e gestores a acessarem recursos estratégicos
                de forma inteligente, estruturando suas operações para o crescimento sustentável
                através de consultoria e educação direcionada.
              </p>
            </div>

            <div className="space-y-6">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="p-3 bg-white shadow-sm rounded-full group-hover:scale-110 transition-transform border border-rc-gold/20">
                    {cred.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-rc-navy text-lg">{cred.title}</h4>
                    <p className="text-sm text-rc-graphite/80 mt-1">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
