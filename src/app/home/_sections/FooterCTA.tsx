import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

import Link from "next/link"

function IconChessKing() {
  return (
    <svg className="absolute w-[100px] bottom-0 left-[-60px] opacity-10"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 166 512.89"><path d="M41.08 261.18c-.98 39.54-9.97 115.81-19.86 141.36h123.56c-11.51-28.98-21.03-104.74-22.36-141.36H41.08zm9.8-71.77h64.24c4.21 0 7.65 3.48 7.65 7.65 0 4.16-3.48 7.64-7.65 7.64H50.88c-4.17 0-7.65-3.44-7.65-7.64 0-4.21 3.44-7.65 7.65-7.65zm-22.45 47.84h109.14c4.21 0 7.65 3.46 7.65 7.65s-3.46 7.64-7.65 7.64H28.43c-4.19 0-7.65-3.43-7.65-7.64 0-4.21 3.44-7.65 7.65-7.65zm11.22-23.92h86.7c4.2 0 7.64 3.47 7.64 7.65 0 4.17-3.47 7.64-7.64 7.64h-86.7c-4.17 0-7.64-3.44-7.64-7.64 0-4.21 3.44-7.65 7.64-7.65zM26.68 411.18h112.64c5.16 0 9.38 4.24 9.38 9.37 0 5.13-4.24 9.37-9.38 9.37H26.68c-5.14 0-9.38-4.21-9.38-9.37 0-5.16 4.22-9.37 9.38-9.37zM9.69 493.5h146.62c5.33 0 9.69 4.36 9.69 9.69 0 5.34-4.36 9.7-9.69 9.7H9.69c-5.33 0-9.69-4.36-9.69-9.7 0-5.33 4.36-9.69 9.69-9.69zm127.4-54.92c7.85 13.77 20.69 27.71 18.61 46.26H10.28c-2.09-18.55 12.49-32.49 20.33-46.26h106.48zM69.71 2.74c5.77-3.34 19.74-3.95 26.58 0L89.36 34l31.26-6.93c3.34 5.77 3.95 19.74 0 26.58l-31.26-6.93 6.93 31.26c-6.84 3.95-20.81 3.34-26.58 0l6.93-31.26-31.26 6.93c-3.95-6.84-3.34-20.81 0-26.58L76.64 34 69.71 2.74zm-6.63 84.53h39.84c.83 0 1.51.68 1.51 1.51v10.17h22.86c5.53-.09 9.35 2.2 11.29 5.67 6.48 11.61-8.85 23.4-13.55 35.59-3.98 10.35-4.09 18.84-4.09 29.54v7.88c0 1.73-1.42 3.15-3.15 3.15H48.21c-1.73 0-3.15-1.42-3.15-3.15v-7.88c0-10.7-.1-19.19-4.09-29.54-4.7-12.2-20.03-23.98-13.55-35.59 1.94-3.47 5.76-5.76 11.29-5.67h22.86V88.78c0-.83.68-1.51 1.51-1.51z" />
    </svg>
  )
}

function IconChessBoard() {
  return (
    <svg className="opacity-60 absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path>
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
    </svg>
  )
}

function SectionFooterCTA() {
  return (
    <Section color="brand" size="lg">
      <IconChessKing />
      <IconChessBoard />

      <Container className="lg:px-24">
        <div className="flex lg:gap-32">
          <div>
            <div className="mb-6">
              <h3 className="text-4xl lg:text-5xl mb-4 max-w-md font-bold text-white font-roboto">Lets talk</h3>
              <p className="text-white text-md lg:text-lg max-w-[480px]">LD</p>
            </div>
            <button className="flex items-center lg:mr-4 mx-auto lg:mx-0 align-center space-x-2 py-5 px-7 xs:py-4 lg:px-8 bg-[#1b1b1b] text-[#ebebeb] hover:bg-blue-700 xs:text-lg text-center font-semibold leading-none rounded-2xl transition duration-100">
              <span>Book a call with Kristina</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4 0.5L16 6L6.4 11.5V6.95263H0V5.04737H6.4V0.5Z" fill="white" />
              </svg>
            </button>
          </div>
          <Link href="/book-demo" className="hidden lg:block">
            <img src="/images/panther-no-bg.png" className="absolute right-[108px] w-[440px] bottom-0 z-10 hover:scale-105 cursor-pointer block" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}

export default SectionFooterCTA
