import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

function SectionProcess() {
  return (
    <Section id="process">
      <Container>
        <header className="flex justify-center">
          <h2 className="font-bold text-5xl">4-Step Plan</h2>
        </header>
        <div className="grid grid-cols-4 gap-4">
          <div className="border p-4 rounded">
            <h3>Book a Call: Start with a quick consultation</h3>
          </div>
          <div className="border p-4 rounded">
            <h3>Discovery Phase: Define your needs and goals</h3>
          </div>
          <div className="border p-4 rounded">
            <h3>Markeet Research and Development</h3>
          </div>
          <div className="border p-4 rounded">
            <h3>Launch: Go live in just 5 days</h3>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default SectionProcess
