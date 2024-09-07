import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

const dataPricing = [
  {
    highlight: false,
    name: "One-off Landing page",
    description: "Ideal for businesses aiming to launch a high-impact, conversion-focused landing page.",
    price: 2900,
    subtitle: "Launch your site in 5days",
    services: [
      {
        name: "Branding",
        highlighted: false
      },
      {
        name: "Copywriting",
        highlighted: false
      },
      {
        name: "Creative Strategy",
        highlighted: false
      },
      {
        name: "Development",
        highlighted: true
      },
      {
        name: "Slack channel & Trello board",
        highlighted: false
      },
      {
        name: "Theming",
        highlighted: false
      },
      {
        name: "Custom Graphics / Illustration",
        highlighted: false
      }
    ]
  },
  {
    highlight: true,
    name: "Multi-Page",
    description: "Perfect for complex offerings and a comprehensive online presence with SEO.",
    price: 5700,
    subtitle: "Launch your site in 5days",
    services: [
      {
        name: "Branding",
        highlighted: false
      },
      {
        name: "Copywriting",
        highlighted: false
      },
      {
        name: "Creative Strategy",
        highlighted: false
      },
      {
        name: "Development",
        highlighted: true
      },
      {
        name: "Slack channel & Trello board",
        highlighted: false
      },
      {
        name: "Theming",
        highlighted: false
      },
      {
        name: "Custom Graphics / Illustration",
        highlighted: false
      }
    ]
  },
  {
    highlight: false,
    name: "SaaS & Dashboard ⚡",
    description: "Perfect for startups needing a strong foundation for their SaaS front-end - fast and efficiently.",
    price: 10000,
    subtitle: "Launch your site in 5days",
    services: [
      {
        name: "Branding",
        highlighted: false
      },
      {
        name: "Copywriting",
        highlighted: false
      },
      {
        name: "Creative Strategy",
        highlighted: false
      },
      {
        name: "Development",
        highlighted: true
      },
      {
        name: "Slack channel & Trello board",
        highlighted: false
      },
      {
        name: "Theming",
        highlighted: false
      },
      {
        name: "Custom Graphics / Illustration",
        highlighted: false
      }
    ]
  }
]

function PricingCard({ item }) {
  return (

    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">

      <div className="flex items-center justify-between align-center">
        <h2 className="text-2xl tracking-widest title-font mb-1 font-medium">{item.name}</h2>
        {item.highlight &&
          <div className="bg-[gold] py-2 px-5 rounded-2xl text-black">
            Best Value
          </div>
        }
      </div>
      <p>{item.description}</p>

      <div className="mt-2 mb-2">
        <h1 className="text-5xl font-bold text-gray-900 font-playFair leading-none">{item.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h1>
        <p className="text-xs text-gray-500 mb-4">Launch your site in 5days</p>
      </div>

      <button className="text-white py-4 px-6 bg-black rounded-xl">
        Get started today
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
      </button>


      {item.services.map((service) => {
        return (
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {service.name}
          </p>
        )
      })}


    </div>

  )
}

function SectionPricing() {
  return (
    <Section id="pricing">
      <Container size="8xl">
        <header className="flex flex-col justify-center items-center text-center mb-20">
          <span>Pricing</span>
          <h2 className="font-bold text-5xl">Simple & transparent pricing</h2>
        </header>
        <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
          {dataPricing.map((item) => {
            return <PricingCard item={item} />
          })}
        </div>
      </Container>
    </Section>
  )
}

export default SectionPricing
