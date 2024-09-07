import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

const dataTestimonials = [
  {
    name: "Ivan Ferrera",
    title: "CEO, Ziti.io",
    image: "ivan.png",
    quote: "Aurelian did an exceptional job on our Next.js frontend project. His expertise and attention to detail resulted in a smooth, visually appealing, and highly functional application. Communicated effectively throughout the process, delivered on time, and exceeded expectations. Highly recommend his services."
  },
  {
    name: "Mike Rozema",
    title: "Producer and Musican",
    image: "mike.jpg",
    quote: "Very good experience. Aurelian is on top of things. Understands the process is give and take - and he is pro active. Quality of work is excellent, one of the best I've come across so far. Will work with him on future projects!"
  },
  {
    name: "Vladimir Kudinov",
    title: "Product Designer, Entrepreneur",
    image: "vladmir.jpg",
    quote: "his is the best developer I met. I never see a guy who so much care about your project. Aurelian was friendly and did everything possible to make a task in the best way. If you're looking for a professional, smart and responsible developer for your project, Aurelian is the one! 5/5"
  },
  // {
  //   name: "Degtyarenko Maksim",
  //   image: "maks.jpeg",
  //   quote: "Aurelian could successfully finilazy all tasks accordingly to our contract. With clear code and adjustment of all required corrections from our side, that is why we can recommend this developer as reliable, responsible and sensetive to details. Thank you very much for job Aurelian, and hope that you will help us with second release of our project."
  // }
]

interface ITestimonial {
  name: string
  title: string
  image: string
  quote: string
}

function CardTestimonial({ item: { name, title, image, quote } }: { item: ITestimonial }) {
  return (
    <figure className="border border-gray-200 rounded-xs">
      <div className="p-8">
        <figcaption className="mb-4 items-center">
          <div className="overflow-hidden rounded-full w-20 h-20 lg:w-24 lg:h-24 -mt-4 -ml-4 mb-4">
            <img src={`/images/testimonials/${image}`} className="object-cover w-full h-full" />
          </div>
          <div>
            <h4 className="font-bold font-roboto">{name}</h4>
            <span className="italic font-roboto">{title}</span>
          </div>
        </figcaption>
        <blockquote>
          <p className="text-sm font-normal">"{quote}"</p>
        </blockquote>
      </div>
    </figure>
  )
}


function SectionTestimonials() {
  return (
    <Section>
      <Container>
        <header className="flex justify-center items-center text-center mb-20">
          <h2 className="text-6xl font-extrabold font-playFair">Loved by founders</h2>
        </header>

        <div className="grid grid-cols-3 gap-4">
          {dataTestimonials.map((testimonial => {
            return <CardTestimonial item={testimonial} />
          }))}
        </div>
      </Container>
    </Section>
  )
}

export default SectionTestimonials
