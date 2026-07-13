import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function Products() {
  const products = [
    {
      title: 'Guia Prático de Gestão de Caixa',
      type: 'E-book',
      desc: 'Um manual definitivo para organizar as finanças da sua empresa e evitar a quebra por falta de liquidez.',
      image: 'https://img.usecurling.com/p/400/500?q=business%20book%20cover',
      link: '#',
      platform: 'Amazon',
    },
    {
      title: 'Workbook: Diagnóstico de Crédito',
      type: 'Material Prático',
      desc: 'Exercícios práticos para avaliar a saúde financeira do seu negócio antes de buscar recursos no mercado.',
      image: 'https://img.usecurling.com/p/400/500?q=finance%20workbook',
      link: '#',
      platform: 'Eduzz',
    },
    {
      title: 'Dashboard de Indicadores Financeiros',
      type: 'Ferramenta',
      desc: 'Planilha automatizada para acompanhamento em tempo real dos principais KPIs do seu negócio.',
      image: 'https://img.usecurling.com/p/400/500?q=management%20dashboard',
      link: '#',
      platform: 'Eduzz',
    },
  ]

  return (
    <section id="produtos" className="py-24 bg-rc-navy text-rc-ivory">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-rc-gold/20 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl text-rc-ivory font-bold mb-4">
              Vitrine de Conhecimento
            </h2>
            <p className="text-rc-ivory/70 text-lg">
              Materiais desenvolvidos para proporcionar autonomia e embasamento técnico para suas
              decisões.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <Card
              key={idx}
              className="bg-white border-none shadow-xl rounded-sm overflow-hidden flex flex-col group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-rc-navy text-rc-gold text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {prod.type}
                </div>
              </div>
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="font-serif text-xl text-rc-navy leading-snug">
                  {prod.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-rc-graphite/80 text-sm leading-relaxed">{prod.desc}</p>
              </CardContent>
              <CardFooter className="pt-4 pb-6 border-t border-gray-100 mt-auto">
                <Button
                  asChild
                  className="w-full bg-rc-gold text-rc-navy hover:bg-rc-navy hover:text-rc-gold font-semibold transition-colors rounded-sm"
                >
                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar na {prod.platform} <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
