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
    highlight: true,
    name: "HR Monthly Support",
    description: "Perfect for businesses seeking ongoing HR support to manage and grow their teams effectively.",
    price: 199,
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

    <div className={`h-full p-6 rounded-lg bg-[#f1f1f1] border-2 ${item.highlight ? "border-[#959595] scale-[1.05]" : "border-[#ededed]"}  flex flex-col relative`}>

      <div className="mb-4">
        <div className="flex items-center justify-between align-center">
          <h2 className="text-2xl tracking-widest title-font mb-1 font-bold">{item.name}</h2>
          {item.highlight &&
            <div className="absolute right-[-13px] rotate-12 text-sm top-[0px] bg-[#1b263d]  py-1.5 px-4 rounded-2xl text-white">
              Most Popular
            </div>
          }
        </div>
        <p className="">{item.description}</p>
      </div>

      <div className="mt-2 mb-6">
        <span className="text-lg text-gray-600 font-playFair">starting at</span>
        <div>
          <h1 className="text-6xl font-bold text-gray-900 font-playFair leading-none">
            {item.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            <span className="text-lg">{item.priceOption ? "/m" : ""}</span>
          </h1>
        </div>
        {/* <p className="text-xs text-gray-500 mb-4">Contact us for a tailored quote based on your needs.</p> */}
        <p className="text-xs text-gray-500 mb-4">Contact us for a tailored quote</p>
      </div>

      <div className="flex flex-col mb-6">
        <button className={`font-bold py-4 px-6 ${item.highlight ? "bg-[#913c6d] text-white " : "border-2 border-[#3b3b3b] text-[#3b3b3b]"}  rounded-xl mb-2`}>
          Schedule a Free Consultation
        </button>
        <button className="underline decoration-dotted hover:decoration-solid font-semibold">
          or send an email →
        </button>
      </div>


      {item.services.map((service) => {
        return (
          <p className="flex items-center mb-2">
            {/* <span className="text-white fill-white"> */}
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#aa4780] bg-opacity-20 text-[#aa4780] rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              {/* ✔ */}
            </span>
            <span className="text-[#12141d]">
              {service.name}
            </span>
          </p>
        )
      })}


    </div>

  )
}

function SectionPricing() {
  return (
    <Section id="pricing" className="bg-[#faf9f9]">
      <Container size="clean">

        <header className="flex flex-col justify-center items-center text-center mb-20">
          <span className="font-caveat text-lg">Affordable expertise, tailored for your business</span>
          <h2 className="font-extrabold font-playFair text-6xl">Simple & transparent pricing</h2>
        </header>
        <div className="grid grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {dataPricing.map((item) => {
            return <PricingCard item={item} />
          })}
        </div>
      </Container>
    </Section>
  )
}

export default SectionPricing
