import { dataTestimonials } from "./dataTestimonials";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

import CardTestimonial from "./_components/CardTestimonial";

function SectionTestimonials() {
  return (
    <Section>
      <Container>
        <header className="flex flex-col justify-center items-center text-center mb-20">
          <span className="font-caveat text-lg">
            Don't Just Take My Word For It!
          </span>
          <h2 className="text-6xl font-extrabold font-playFair max-w-5xl">
            Praised <img src="/gb-flag-heart.png" className="inline-block h-10 -rotate-12 px-1" /> by British Business Owners
          </h2>
        </header>
        <div>
          {dataTestimonials.map((testimonial => {
            return <CardTestimonial item={testimonial} />
          }))}
        </div>
      </Container>
    </Section>
  )
}

export default SectionTestimonials
