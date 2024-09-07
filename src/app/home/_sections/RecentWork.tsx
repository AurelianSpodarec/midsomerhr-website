import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

function SectionRecentWork() {
  return (
    <Section id="recent-work" color="clear">

      <Container>
        <h2>Recent work</h2>
        <div className="absolute right-[80px] top-[-20px] scale-50">
          <img src="https://i.imgur.com/ffDU9JI.png" />
        </div>
        <div className="flex overflow-hidden">
          <img className="h-[500px]" src="https://www.withsupafast.com/_next/image?url=%2Fimages%2Fwork%2Fdevjuice.png&w=1920&q=75" />
          <img className="h-[500px]" src="https://cdn.discordapp.com/attachments/724564275758235658/1270578327853207682/image.png?ex=66d28847&is=66d136c7&hm=52c80e4914cc88ef10e06c8351fd596979a541ba93c2ec34d2aedfe5a9943d93&" />
          <img className="h-[500px]" src="https://www.withsupafast.com/_next/image?url=%2Fimages%2Fwork%2Fopenstage.png&w=1920&q=75" />
          <img className="h-[500px]" src="https://www.withsupafast.com/_next/image?url=%2Fimages%2Fwork%2Farrow.png&w=1920&q=75" />
        </div>
      </Container>
    </Section>
  )
}

export default SectionRecentWork
