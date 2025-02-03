import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a bank account?",
    answer: "No! Kifaru works with mobile money & crypto, making it accessible to everyone.",
  },
  {
    question: "Is trading safe?",
    answer: "Yes! Our AI verifies all trades & blockchain technology ensures complete transparency.",
  },
  {
    question: "What if I don't have a smartphone?",
    answer: "No problem! You can use Kifaru via SMS on any basic phone.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};