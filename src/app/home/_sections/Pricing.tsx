import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

const dataPricing = [
  {
    "highlight": false,
    "name": "HR Pay-As-You-Go",
    "description": "Ideal for businesses needing expert help with one-off HR projects or flexible support.",
    "price": 97,
    "subtitle": "Starting at: £97",
    "services": [
      {
        "name": "Introducing Flexible Working",
        "highlighted": false
      },
      {
        "name": "Redundancies or Restructures",
        "highlighted": false
      },
      {
        "name": "Implementing HR Information or Appraisal Systems",
        "highlighted": false
      },
      {
        "name": "Employee Engagement Surveys",
        "highlighted": false
      },
      {
        "name": "Developing Performance Systems",
        "highlighted": false
      },
      {
        "name": "New Employee Onboarding",
        "highlighted": false
      },
      {
        "name": "Developing a People Plan",
        "highlighted": false
      },
      {
        "name": "Disciplinary and Grievance Issues",
        "highlighted": false
      },
      {
        "name": "Performance Management",
        "highlighted": false
      },
      {
        "name": "Redundancy, Restructure, and Settlement Agreements",
        "highlighted": false
      },
      {
        "name": "Sickness Absence, AWOL, or Employee Wellbeing",
        "highlighted": false
      },
      {
        "name": "Flexible and Hybrid Working",
        "highlighted": false
      },
      {
        "name": "Employee Engagement and Culture",
        "highlighted": false
      }
    ]
  },
  {
    highlight: false,
    name: "HR Monthly Retainer",
    description: "Perfect for businesses seeking ongoing HR support to manage and grow their teams effectively.",
    price: 197,
    priceOption: "m",
    subtitle: "Starting at: £197",
    services: [
      {
        name: "HR Software and Setup",
        highlighted: false
      },
      {
        name: "Admin Support for HR System",
        highlighted: false
      },
      {
        name: "Advice Helpline",
        highlighted: false
      },
      {
        name: "Email Support",
        highlighted: false
      },
      {
        name: "Bespoke HR Letters",
        highlighted: false
      },
      {
        name: "Letter Templates",
        highlighted: false
      },
      {
        name: "Employment Law Updates",
        highlighted: false
      },
      {
        name: "Monthly Newsletter",
        highlighted: false
      },
      {
        name: "Quarterly People Strategy Meeting",
        highlighted: false
      },
      {
        name: "Bespoke People Plan Tailored to Your Business",
        highlighted: false
      }
    ]
  },
  {
    highlight: false,
    name: "HR Consulting Package",
    description: "Perfect for new businesses or those aiming to refine and enhance their HR systems.",
    price: 597,
    subtitle: "Starting at: £597",
    services: [
      {
        name: "Contract of Employment",
        highlighted: false
      },
      {
        name: "Offer Letter",
        highlighted: false
      },
      {
        name: "Suite of Basic HR Policies",
        highlighted: false
      },
      {
        name: "Review of Current Documents",
        highlighted: false
      },
      {
        name: "Update & Fill Gaps in Policies",
        highlighted: false
      },
      {
        name: "Custom Templates & Documents Aligned with Your Culture & Values",
        highlighted: false
      }
    ]
  },
];


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
        <span className="text-xl text-gray-500">starting at</span>
        <div>
          <h1 className="text-6xl font-bold text-gray-900 font-playFair leading-none">
            {item.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            <span className="text-lg">{item.priceOption ? "/m" : ""}</span>
          </h1>
        </div>
        <p className="text-xs text-gray-500 mb-4">Contact us for a tailored quote based on your needs.</p>
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
