'use client'

import React from "react"
import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { RoughNotation } from "react-rough-notation"


const data = [
  {
    title: "Locked into Long-Term Contracts",
    desc: "Large companies tie you into contracts that are difficult to escape, leaving you stuck with overpriced services you may no longer need.",
  },
  {
    title: "Faceless Corporations",
    desc: "Ever feel like you're just another number? You never speak to the same person twice, and they don’t truly understand your business needs.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,48v55.77C216,174.6,176.6,232,128,232S40,174.6,40,103.79V48a8,8,0,0,1,10.89-7.47C66,46.41,95.11,55.71,128,55.71s62-9.3,77.11-15.16A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M158.66,188.43a8,8,0,0,1-11.09,2.23C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43ZM189.34,114a8,8,0,0,0-11.3.62c-2.68,3-8.85,5.34-14,5.34s-11.36-2.35-14-5.34A8,8,0,0,0,138,125.33c5.71,6.38,16.14,10.67,26,10.67s20.25-4.29,26-10.67A8,8,0,0,0,189.34,114ZM224,48v55.77c0,35.84-9.65,69.65-27.18,95.18-18.16,26.46-42.6,41-68.82,41s-50.66-14.57-68.82-41C41.65,173.44,32,139.63,32,103.79V48A16,16,0,0,1,53.79,33.09C67.84,38.55,96.18,47.71,128,47.71s60.15-9.16,74.21-14.62A16,16,0,0,1,224,48Zm-16,0v0c-15.1,5.89-45.57,15.73-80,15.73S63.1,53.87,48,48v55.79c0,32.64,8.66,63.23,24.37,86.13C87.46,211.9,107.21,224,128,224s40.54-12.1,55.63-34.08C199.34,167,208,136.43,208,103.79Zm-90,77.31A8,8,0,0,0,106,114.66c-2.68,3-8.85,5.34-14,5.34s-11.36-2.35-14-5.34A8,8,0,0,0,66,125.33C71.75,131.71,82.18,136,92,136S112.25,131.71,118,125.33Z"></path></svg>
  },
  {
    title: "Sky-High Fees",
    desc: "Big HR firms often charge exorbitant fees without offering the level of personalized   generic advice that doesn’t align with the specific challenges of your business."
  },
  {
    title: "Risk-Averse, Generic Advice",
    desc: "You get one-size-fits-all advice that’s more about covering the HR firm's back than offering proactive, tailored solutions."
  },

  {
    title: "Risk-Averse, Generic Advice",
    desc: "You get one-size-fits-all advice that’s more about covering the HR firm's back than offering proactive, tailored solutions."
  },
  {
    title: "Risk-Averse, Generic Advice",
    desc: "You get one-size-fits-all advice that’s more about covering the HR firm's back than offering proactive, tailored solutions."
  }
]

function CardPoint({ item }) {
  return (
    <div className="border border-black p-6 rounded-lg mx-2 bg-[#262525] h-full">
      <div className="h-12 w-12 mb-4">
        {/* {item.icon} */}
        <div className="border-2 border-gray-500 rounded-full h-7 w-7 flex items-center align-center justify-center">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-[#ebebeb]">{item.title}</h3>
      <p className="text-[#f2f2f2]">{item.desc}</p>
    </div>
  )
}

// #292d32
function SectionPainPoints() {


  return (
    <Section id="process" color="clean" size="xl" className="bg-[#2e2e2e] text-white">
      <Container size="clear" className="max-w-full px-0 mx-0">
        <header className="flex flex-col text-center justify-center mb-20 max-w-lg mx-auto">
          <h2 className="font-playFair font-extrabold text-6xl mb-2">
            The <RoughNotation type="underline" show={true} color="#913c6d" strokeWidth={3} padding={[-13, 20]}>Problem</RoughNotation> with <RoughNotation type="underline" show={true} color="#913c6d" strokeWidth={3} padding={[-13, 20]}>Big HR</RoughNotation> Firms
          </h2>
          <p>Running a small business is already a challenge - dealing with big HR firms shouldn’t add to it. </p>
        </header>

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full">
          <CarouselContent className="-ml-1">
            {data.map((item, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4 min-h-[250px]">
                <CardPoint item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </Container>
    </Section>
  )
}

export default SectionPainPoints