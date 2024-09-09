import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

const dataPainPoints = [
  {
    title: "Locked into Long-Term Contracts",
    desc: "Large companies tie you into contracts that are difficult to escape, leaving you stuck with overpriced services you may no longer need.",
  },
  {
    title: "Faceless Corporations",
    desc: "Ever feel like you're just another number? You never speak to the same person twice, and they don’t truly understand your business needs."
  },
  {
    title: "Sky-High Fees",
    desc: "Big HR firms often charge exorbitant fees without offering the level of personalized   generic advice that doesn’t align with the specific challenges of your business."
  },
  {
    title: "Risk-Averse, Generic Advice",
    desc: "You get one-size-fits-all advice that’s more about covering the HR firm's back than offering proactive, tailored solutions."
  }
]

function CardPoint({ item }) {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="text-2xl font-bold">{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  )
}

function SectionPainPoints() {
  return (
    <Section id="process" color="clean" className="bg-[#292d32] text-white">
      <Container>
        <header className="flex flex-col text-center justify-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-playFair font-extrabold text-6xl">The Problem with <br /> Big HR Firms</h2>
          <p>Running a small business is tough enough without facing these common issues that big HR firms bring:</p>
        </header>
        <div className="grid grid-cols-4 gap-6">
          {dataPainPoints.map((item) => {
            return <CardPoint item={item} />
          })}
        </div>
      </Container>
    </Section>
  )
}

export default SectionPainPoints