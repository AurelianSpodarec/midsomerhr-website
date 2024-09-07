import Link from "next/link"

function Footer() {
  return (
    <footer className="text-white bg-[#1c1d1f] py-8 relative">
      <div className="px-16">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <p className="text-3xl tracking-wider font-bold font-bebas mb-6 lg:mb-0">
            Aurelian Spodarec
          </p>

          <div className="flex flex-col-reverse lg:flex-row md:space-x-8">
            <div className="md:space-x-6 text-center text-sm flex flex-col md:flex-row pt-6 md:pt-0">
              <Link href="/privacy" className="py-1.5">Terms of Service</Link>
              <Link href="/about" className="py-1.5">About</Link>
              <Link href="/contact" className="py-1.5">Contact</Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/copyai/" >
                <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/656088bfb2e826ea15790b1b_Frame%20316126176.svg" loading="lazy" alt="" />
              </a>
              <a href="https://www.facebook.com/groups/887950931991543/" >
                <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/656088bf82cf41a39803d531_Frame%20316126177.svg" loading="lazy" alt="" />
              </a>
              <a href="https://www.twitter.com/copy_ai" >
                <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/65822605bd3609a56a231a75_x.svg" loading="lazy" alt="" />
              </a>
            </div>
          </div>

          <div className="md:hidden text-sm text-center mt-6">
            &copy; Copyright 2024 Aurelian Spodarec. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
