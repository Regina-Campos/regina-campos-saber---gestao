import { Briefcase, TrendingUp, MonitorPlay } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Services() {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-rc-gold mb-4" />,
      title: 'Soluções de Crédito',
      desc: 'Assessoria estratégica para acesso a crédito, consórcios e estruturação de garantias. Foco em aprovação inteligente e taxas otimizadas para pessoa jurídica.',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-rc-gold mb-4" />,
      title: 'Educação Financeira',
      desc: 'Treinamentos corporativos e mentorias individuais desenhadas para elevar a maturidade financeira dos gestores e de suas equipes.',
    },
    {
      icon: <MonitorPlay className="w-10 h-10 text-rc-gold mb-4" />,
      title: 'Produtos Digitais',
      desc: 'Ferramentas de gestão, planilhas estruturadas e e-books focados na aplicação prática de metodologias validadas no mercado.',
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-rc-gold pb-2 mb-6">
            <h2 className="text-3xl md:text-4xl text-rc-navy font-bold">O Que Faço</h2>
          </div>
          <p className="text-lg text-rc-graphite/80">
            Soluções integradas que conectam estratégia financeira à execução impecável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <Card
              key={idx}
              className="bg-rc-ivory/50 border-none shadow-subtle hover:shadow-elevation hover:-translate-y-2 transition-all duration-300 rounded-sm overflow-hidden group"
            >
              <CardHeader className="pt-8 pb-4 text-center items-center border-b border-rc-gold/10 mx-6">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <CardTitle className="font-serif text-2xl text-rc-navy">{svc.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 pb-8 px-8 text-center text-rc-graphite/80 leading-relaxed">
                <CardDescription className="text-base text-inherit">{svc.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
