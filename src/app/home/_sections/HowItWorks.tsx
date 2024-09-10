import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

const data = [
  {
    title: "Understanding Your Needs",
    desc: "We’ll start with a free call or meeting to get to know your business, your challenges, and your goals. I’ll dive into understanding what matters most to you.",
  },
  {
    title: "Tailored HR Support",
    desc: "I’ll develop HR strategies that address your specific needs, whether it’s creating employment contracts, managing employee relations, or offering ongoing support.",
  },
  {
    title: "Ongoing Partnership",
    desc: "Whether you need ongoing HR support or help with one-off projects, I’m here for you as your go-to HR consultant. You’ll always have a direct line to me when you need it.",
  }
]

function CardPoint({ item }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-1 font-roboto">{item.title}</h3>
      <p className="text-lg text-[#07111D]">{item.desc}</p>
    </div>
  )
}

function SectionHowItWorks() {
  return (
    <Section id="process">
      <Container>
        <header className="flex flex-col text-center justify-center mb-20">
          <span>Partnership</span>
          <h2 className="font-playFair font-extrabold text-6xl max-w-3xl mx-auto">
            How I'll help you Transform Your HR Experience
          </h2>
          {/* <p>Running a small business is tough enough without facing these common issues that big HR firms bring:</p> */}
        </header>
        <div className="grid grid-cols-3 gap-6">
          {data.map((item) => {
            return <CardPoint item={item} />
          })}
        </div>
      </Container>
    </Section>
  )
}

export default SectionHowItWorks