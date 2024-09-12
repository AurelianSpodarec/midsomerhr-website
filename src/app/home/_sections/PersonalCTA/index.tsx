import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

function SectionPersonalCTA() {
  return (
    <Section id="process" className="z-10" size="xs">
      <Container size="7xl" className="relative">

        <header className="flex flex-col text-center justify-center mb-20 h-[536px]">
          {/* <span className="text-lg font-caveat">Personal Touch</span> */}
          <h2 className="font-playFair font-extrabold text-5xl max-w-xl mx-auto">
            {/* You’ll Always Work Directly with Kristina - me! */}
            You’ll Always Work Directly with Kristina - That’s Me!
          </h2>
          {/* <p>Running a small business is tough enough without facing these common issues that big HR firms bring:</p> */}
          <div className="mt-4">
            {/* <button className="hidden lg:inline-flex nav-cta bg-[#913c6d] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">See How We'll work</button> */}
            <div className="text-center">
              <button className="hidden lg:inline-flex nav-cta bg-[#913c6d] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">Check how we'll work</button>
            </div>
          </div>
        </header>

        {/* <div className="relative h-full w-full"> */}
        <img className="absolute w-[130px] top-[0] left-[300px] rotate-12 rounded-xl" src="/kristina/v1.jpeg" alt="Obstacle" />
        {/* <img className="absolute w-[100px] top-[248px] right-1/2 -rotate-12 rounded-xl" src="/kristina/v3.jpeg" /> */}
        <img className="absolute w-[100px] top-[0] right-1/2 -rotate-12 rounded-xl" src="/kristina/v8.jpeg" />


        <img className="absolute w-[130px] top-[0] right-[300px] rotate-12 rounded-xl" src="/kristina/v9.jpeg" alt="Child Carousel" />
        <img className="absolute w-[130px] bottom-0 left-[300px] -rotate-12 rounded-xl" src="/kristina/v5.jpeg" alt="Car" />
        {/* <img className="absolute w-[130px] bottom-0 rounded-xl" src="/kristina/v10.jpeg" alt="Blue" /> */}
        <img className="absolute w-[130px] bottom-0 -rotate-12 left-[600px] rounded-xl" src="/kristina/v11.jpeg" alt="Holding Coffee" />
        {/* <img className="absolute w-[350px] bottom-0 rounded-xl" src="/kristina/v12.jpeg" /> */}
        <img className="absolute w-[100px] bottom-0 rotate-12 right-1/3 rounded-xl" src="/kristina/v13.jpeg" alt="Balcony" />
        {/* </div> */}

      </Container>
    </Section>
  )
}

export default SectionPersonalCTA