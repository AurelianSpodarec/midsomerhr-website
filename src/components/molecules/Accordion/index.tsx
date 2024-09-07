import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function AccordionBasic({ type, data }) {
  return (
    <Accordion type={type}>
      {data.map((item) => {
        return (
          <AccordionItem value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionBasic
