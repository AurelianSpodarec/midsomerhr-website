import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import Link from "next/link";

interface ITestimonial {
  name: string
  title: string
  image: string
  quote: string
  company?: {
    link?: {
      url: string
      name: string
    }
    name: string
    image: string
    logo: string
  }
}

const dataTestimonials: ITestimonial[] = [
  {
    name: "Nathan Malcolm",
    title: "Owner & CEO",
    image: "nathan-malcolm.jpg",
    quote: "Thanks again for such a quick turn around, We will definitely reach out to you again if we need anything else in this line of work (which I’m sure we will)",
    company: {
      link: {
        url: "https://www.club1984.store/",
        name: "Club1984.store"
      },
      name: "CLUB 1984",
      image: "club-1984.png",
      logo: "club-logo.jpg"
    },
  }
]


function CardTestimonial({ item: { name, title, image, quote, company } }: { item: ITestimonial }) {
  return (
    // <figure className="border border-gray-200 rounded-xs">
    //   <div className="p-8">
    //     <figcaption className="mb-4 items-center">
    //       <img src={`/testimonials/${company?.image}`} />
    //       <div className="overflow-hidden rounded-full w-20 h-20 lg:w-24 lg:h-24 -mt-4 -ml-4 mb-4">
    //         <img src={`/testimonials/${image}`} className="object-cover w-full h-full" />
    //       </div>
    //       <div>
    //         <h4 className="font-bold font-roboto">{name}</h4>
    //         <span className="italic font-roboto">{title}</span>
    //       </div>
    //     </figcaption>
    //     <blockquote>
    //       <p className="text-sm font-normal">"{quote}"</p>
    //     </blockquote>
    //   </div>
    // </figure>
    <div className="mx-auto max-w-2xl lg:max-w-4xl">

      <div className="flex justify-center align-center items-center">
        <img className="h-10" src={`/testimonials/${company?.logo}`} alt="" />
        <img className="h-20" src={`/testimonials/${company?.image}`} alt="" />
      </div>

      <figure className="mt-4">
        <blockquote className="text-center text-xl leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>“{quote}”</p>
        </blockquote>
        <figcaption className="mt-10 justify-center flex">

          <div className="flex flex-col align-center">
            <img className="mb-2 mx-auto h-20 w-20 object-cover rounded-full" src={`/testimonials/${image}`} alt="" />
            <div className="text-center">
              <div className="font-semibold text-gray-900 text-lg">Judith Black</div>
              <p>{title}
                <span> at </span>
                <Link href={company?.link?.url} target="blank" className="font-semibold">
                  {company?.link?.name}
                </Link>
              </p>
            </div>
          </div>


          {/* <div className="text-gray-600">CEO of Workcation</div> */}
        </figcaption>
      </figure>
    </div>
  )
}


function SectionTestimonials() {
  return (
    <Section>
      <Container>
        <header className="flex flex-col justify-center items-center text-center mb-20">
          <span>Don’t Take My Word for It!</span>
          <h2 className="text-6xl font-extrabold font-playFair max-w-5xl">
            Praised <img src="/gb-flag-heart.png" className="inline-block h-10 -rotate-12 px-1" /> by British Business Owners
          </h2>
        </header>

        <div className="">
          {dataTestimonials.map((testimonial => {
            return <CardTestimonial item={testimonial} />
          }))}
        </div>
      </Container>
    </Section>
  )
}

export default SectionTestimonials
