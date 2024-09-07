import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"

// const dataObjections = [
//   {
//     question: "Why do we need an HR consultant when we already have an HR team?",
//     response: "An HR consultant brings an outside perspective, offering specialized expertise and strategic guidance that complements your existing HR team. We help identify blind spots, implement best practices, and provide the extra support needed for complex challenges."
//   },
//   {
//     question: "We’re a small business—can’t we handle HR on our own?",
//     response: "Small businesses often lack the time and resources to stay on top of ever-changing HR laws and best practices. I provide tailored, cost-effective solutions that free up your time, allowing you to focus on growing your business while ensuring compliance and effective people management."
//   },
//   {
//     question: "We can’t afford an HR consultant.",
//     response: "Investing in an HR consultant can actually save you money in the long run by reducing turnover, avoiding costly compliance mistakes, and improving employee productivity. I offer flexible pricing options to fit your budget, ensuring you get the most value from our partnership."
//   },
//   {
//     question: "We’re worried an outsider won’t understand our company culture.",
//     response: "Understanding and preserving your company culture is a top priority. I take the time to immerse myself in your business, ensuring that any HR strategies we develop align with and enhance your existing culture, rather than disrupt it."
//   },
//   {
//     question: "We need quick solutions, not long-term projects.",
//     response: "I provide both immediate, actionable solutions and long-term strategies. Whether you need quick fixes or a comprehensive HR overhaul, I tailor my approach to meet your timelines and business needs."
//   },
//   {
//     question: "HR consultants are only useful for big companies with complex needs.",
//     response: "My services are designed specifically for small to mid-sized businesses. I offer scalable solutions that address your unique challenges, whether it's handling day-to-day HR tasks or tackling specific projects like recruitment, compliance, or employee engagement."
//   },
//   {
//     question: "We’re not sure if an HR consultant can deliver real results.",
//     response: "I measure success by tangible outcomes—reduced turnover, improved employee satisfaction, and compliance with employment laws. I provide regular updates and reports to ensure you see the value of our work together, every step of the way."
//   }
// ]

// function SectionFAQ() {
//   return (
//     <Section>
//       <Container>
//         <h2>Questions? Answers</h2>

//         {dataObjections.map((item, index) => (
//           <div key={index} className="faq-item">
//             <h3 className="faq-question">{item.question}</h3>
//             <p className="faq-response">{item.response}</p>
//           </div>
//         ))}

//       </Container>
//     </Section>
//   )
// }

// export default SectionFAQ


const dataObjections = [
  {
    question: "Who are you?",
    answer: "I'm a developer turned designer with a passion for copywriting. I noticed a gap in the market where agencies overcharge for simple projects that I can single handeldy handle entirely on my own. And as you've seen what I do is pretty dman good - founders agree(link to go to testimonials - underline). Not only fast but for a good price. "
    // Every website tends to look the same, so I developed a system that allows me to deliver high-quality work quickly and efficiently."
  },
  {
    question: "Why choose me over a freelancer, agency, or in-house developer?",
    answer: `
    Choosing the right partner—whether it's a designer, developer, copywriter, agency, or in-house developer—can be time-consuming and costly. Agencies often come with high fees and slow turnaround times, freelancers can be unreliable and inconsistent, and managing an in-house developer can be a hassle.

    While it's possible to find quality work, it often costs businesses significant time, money, and lost opportunities—resources that could have been saved with a quicker, more streamlined process. With agencies, you can easily spend £5k on meetings alone before seeing a basic wireframe. Then, when they deliver a broken site, fixing it can cost you another £5k. With me, you won't have those problems.
    `
  },
  {
    question: "How will I communicate and work with you?",
    answer: "I typically use Trello to manage projects, Notion (or a similar platform) for documentation, and Slack for communication. These tools help keep everything organized and ensure we're always on the same page."
  },
  {
    question: "How quickly will I receive my project?",
    answer: "Most projects are completed within 48 hours or less. For more complex requests, the turnaround time might be slightly longer. Rest assured, I'll keep you informed every step of the way, so you always know what's going on."
  },
  {
    question: "What if I'm unhappy with the result?",
    answer: "This rarely happens, but if you're not satisfied, I offer unlimited revisions. I'll work on the project until you're 100% happy with the outcome."
  },
]



function SectionFAQ() {
  return (
    <Section>
      <Container size="4xl">
        <header className="text-center">
          <span className="text-2xl">FAQ</span>
          <h2 className="font-extrabold text-6xl font-playFair">Questions? Answers.</h2>
        </header>
        <AccordionBasic type="multiple" data={dataObjections} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
