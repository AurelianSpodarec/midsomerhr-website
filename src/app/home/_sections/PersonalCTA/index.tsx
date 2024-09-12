import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

function SectionPersonalCTA() {
  return (
    <Section id="process" className="z-10 py-[160px]" size="xs">
      <Container size="clean" className="relative max-w-[1400px]">

        <header className="flex flex-col text-center justify-center mb-20 h-[536px]">
          <div>
            <h2 className="font-playFair font-extrabold text-5xl max-w-xl mx-auto">
              You’ll Always Work Directly with Kristina - That’s Me!
            </h2>
            <span className="max-w-xl mx-auto block">I’m dedicated to offering you a personal touch in every interaction, ensuring that your business’s confidentiality and integrity are always upheld.</span>
          </div>
          <div className="mt-6">
            <div className="text-center">
              <button className="hidden lg:inline-flex nav-cta bg-[#913c6d] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">Check how we'll work</button>
            </div>
          </div>
        </header>

        {/* <div className="relative h-full w-full"> */}
        <img className="absolute shadow-xl w-[130px] top-[-100px] left-[300px] rotate-12 rounded-xl" src="/kristina/v1.jpeg" alt="Obstacle" />
        <img className="absolute shadow-xl w-[100px] top-[-70px] right-[600px] -rotate-6 rounded-xl" src="/kristina/v8.jpeg" alt="Field" />
        <img className="absolute shadow-xl w-[130px] top-[-100px] right-[250px] rotate-12 rounded-xl" src="/kristina/v9.jpeg" alt="Child Carousel" />
        {/* <img className="absolute shadow-xl w-[100px] top-[248px] right-1/2 -rotate-12 rounded-xl" src="/kristina/v3.jpeg" /> */}


        <img className="absolute shadow-xl w-[130px] bottom-[-30px] left-[250px] -rotate-12 rounded-xl" src="/kristina/v5.jpeg" alt="Car" />
        <img className="absolute shadow-xl w-[90px] bottom-[-70px] -rotate-12 left-[750px] rounded-xl" src="/kristina/v11.jpeg" alt="Holding Coffee" />
        <img className="absolute shadow-xl w-[130px] bottom-0 rotate-12 left-[1100px] rounded-xl" src="/kristina/v13.jpeg" alt="Balcony" />
        {/* <img className="absolute w-[130px] bottom-0 rounded-xl" src="/kristina/v10.jpeg" alt="Blue" /> */}
        {/* <img className="absolute w-[350px] bottom-0 rounded-xl" src="/kristina/v12.jpeg" /> */}
        {/* </div> */}

      </Container>
    </Section>
  )
}

export default SectionPersonalCTA