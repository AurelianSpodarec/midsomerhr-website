import Link from "next/link"
import { ITestimonial } from "./ITestimonial"

function CardTestimonial({ item: { name, title, image, quote, company } }: { item: ITestimonial }) {
  return (
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
        </figcaption>
      </figure>

    </div>
  )
}

export default CardTestimonial
