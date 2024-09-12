
import SectionPricing from "./_sections/Pricing"
import SectionHero from "./_sections/Hero"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"
import SectionTestimonials from "./_sections/Testimonials"
import SectionPainPoints from "./_sections/PainPoints"
import SectionPainPointsSolution from "./_sections/PainPointsSolution"
import CardTestimonial from "./_sections/Testimonials/_components/CardTestimonial"

import { dataTestimonials } from "./_sections/Testimonials/dataTestimonials"
import Section from "@/components/_layout/Section"
import SectionPersonalCTA from "./_sections/PersonalCTA"
import SectionHowItWorks from "./_sections/HowItWorks"

// function SectionHeader({ kicker, title, desc }) {
//   return (
//     <header className="flex justify-center items-center text-center">
//       <div className=" max-w-2xl">
//         {title && <h2 className="text-5xl font-bold">{title}</h2>}
//       </div>
//     </header>
//   )
// }

function Home() {
  return (
    <div>

      <SectionHero />
      <SectionPainPoints />
      <SectionPainPointsSolution />
      {/* Newsletter about being updated  */}
      <SectionPersonalCTA />
      <SectionHowItWorks />

      <Section color="white">
        <CardTestimonial item={dataTestimonials[0]} />
      </Section>
      <SectionPricing />
      <SectionTestimonials />
      <SectionFAQ />
      <SectionFooterCTA />

    </div>
  )
}

export default Home
