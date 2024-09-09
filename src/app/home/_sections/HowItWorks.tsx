import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

const dataPainPoints = [
  {
    title: "",
    desc: "",
  }
]

function CardPoint() {
  return (
    <div>

    </div>
  )
}

function SectionHowItWorks() {
  return (
    <Section id="process">
      <Container>
        <header className="flex flex-col text-center justify-center">
          <span>Partnership</span>
          <h2 className="font-playFair font-extrabold text-6xl">How it Works</h2>
          {/* <p>Running a small business is tough enough without facing these common issues that big HR firms bring:</p> */}
        </header>
        <div className="grid grid-cols-4">

        </div>
      </Container>
    </Section>
  )
}

export default SectionHowItWorks