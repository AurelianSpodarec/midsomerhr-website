import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"

const dataObjections = [
  {
    "question": "Who’s is behind MidsomerHR?",
    "answer": "MidsomerHR is led by a dedicated consultant (me! Kristina) who genuinely cares about your business’s success. I bring years of corporate HR experience to small business owners, providing personalized HR solutions that align with your specific needs - no call centers, no faceless consultants, just hands-on support. :)"
  },
  {
    "question": "What are the benefits of hiring an HR consultant?",
    "answer": "Hiring an HR consultant offers you expert, flexible support without the cost of employing a full-time HR professional. I’m here to provide tailored advice, handle employee relations, and ensure your HR processes run smoothly, all while saving you time and resources."
  },
  {
    "question": "Why choose an HR consultant over a full-time HR professional?",
    "answer": "For businesses with up to 50 people, hiring a full-time HR professional can be expensive. An HR consultant like me offers the expertise you need at a fraction of the cost, allowing you to invest in what matters most - growing your business."
  },
  {
    "question": "How will an HR consultant understand my company’s unique needs?",
    "answer": "I take the time to get to know you and your business. We’ll start with an initial call where I listen to your specific challenges and goals. From there, I create tailored solutions that fit your business perfectly - because no two businesses are the same."
  },
  {
    "question": "What if the consultant's solutions don’t align with my business goals?",
    "answer": "My goal is to partner with you, not just offer generic advice. If something doesn’t feel right, we’ll adjust the plan together. I’m committed to making sure my solutions help you achieve success and align with your business objectives."
  },
  {
    "question": "How will MidsomerHR help my business succeed?",
    "answer": "The timeline depends on your specific needs, but many clients start seeing improvements within a few weeks of implementing the recommended changes. Whether it’s a new contract or a project, I’ll ensure you’re on track for success as quickly as possible."
  }
]

function SectionFAQ() {
  return (
    <Section>
      <Container size="4xl">
        <header className="text-center">
          <span className="text-2xl">FAQ</span>
          <h2 className="font-extrabold text-6xl font-playFair">Questions? Answers.</h2>
        </header>
        <AccordionBasic type="single" data={dataObjections} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
