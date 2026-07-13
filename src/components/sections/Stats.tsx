export function Stats() {
  const stats = [
    { value: '20+', label: 'Anos de Experiência no Mercado' },
    { value: '5k+', label: 'Alunos Impactados' },
    { value: '300+', label: 'Empresas Atendidas e Estruturadas' },
  ]

  return (
    <section className="py-16 bg-rc-navy relative overflow-hidden border-t border-rc-gold/10">
      {/* Decorative subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#F5F1E8 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-rc-gold/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="py-6 md:py-0 px-4 animate-fade-in">
              <div className="text-4xl md:text-5xl font-serif text-rc-gold font-bold mb-3">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-rc-ivory/80 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
