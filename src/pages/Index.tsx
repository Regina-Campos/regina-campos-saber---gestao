import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Stats } from '@/components/sections/Stats'
import { Diagnosis } from '@/components/sections/Diagnosis'

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Diagnosis />
      <Products />
    </div>
  )
}
