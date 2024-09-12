import { RoughNotation } from "react-rough-notation"

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import CardPoint from "./CardPoint"
import { dataHowItWorks } from "./dataHowItWorks"

function SectionHowItWorks() {
  return (
    <Section id="process">
      <Container>

        <header className="flex flex-col text-center justify-center mb-20">
          <span className="text-lg font-caveat">Building a True HR Partnership</span>
          <h2 className="font-playFair font-extrabold text-6xl max-w-3xl mx-auto">
            How I'll help you <RoughNotation type="underline" show={true} color="#913c6d" strokeWidth={3} padding={[-13, 20]}>Transform</RoughNotation> <RoughNotation type="underline" show={true} color="#913c6d" strokeWidth={3} padding={[-13, 20]}>Your HR</RoughNotation> Experience
          </h2>
        </header>

        <div className="grid grid-cols-3 gap-6">
          {dataHowItWorks.map((item) => {
            return <CardPoint item={item} />
          })}
        </div>

        <div className="text-center mt-20">
          <button className="hidden lg:inline-flex nav-cta bg-[#913c6d] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">Show packages</button>
        </div>

      </Container>
    </Section>
  )
}

export default SectionHowItWorks
