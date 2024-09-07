import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import SectionPricing from "./_sections/Pricing"
import SectionHero from "./_sections/Hero"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"
import SectionTestimonials from "./_sections/Testimonials"
import SectionProcess from "./_sections/Process"
import SectionRecentWork from "./_sections/RecentWork"


function SectionHeader({ kicker, title, desc }) {
  return (
    <header className="flex justify-center items-center text-center">
      <div className=" max-w-2xl">
        {title && <h2 className="text-5xl font-bold">{title}</h2>}
      </div>
    </header>
  )
}

function Home() {
  return (
    <div>

      <SectionHero />
      <SectionTestimonials />
      <SectionPricing />
      <SectionFAQ />
      <SectionFooterCTA />

    </div>
  )
}

export default Home
