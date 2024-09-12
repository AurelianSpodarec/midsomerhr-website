import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"
import { dataObjections } from "./dataFAQ"

function SectionFAQ() {
  return (
    <Section>
      <Container size="4xl">
        <header className="text-center mb-20">
          <span className="font-caveat text-lg">Things I get asked</span>
          <h2 className="font-extrabold text-6xl font-playFair">Questions? Answers.</h2>
        </header>
        <AccordionBasic type="single" data={dataObjections} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
