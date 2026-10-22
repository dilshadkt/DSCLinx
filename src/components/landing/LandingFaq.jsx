import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "./content";

export default function LandingFaq() {
  return (
    <section className="container py-[70px] max-md:py-[50px] max-sm:py-[40px] max-w-[960px]">
      <h2 className="text-center tracking-[-.42px] leading-[120%] text-[42px] font-semibold max-md:text-[30px] max-sm:text-[24px]">
        Restaurant Renovation FAQs
      </h2>
      <Accordion type="single" collapsible className="w-full mt-10 max-md:mt-6">
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${i}`}
            className="border-2 border-[#51515175] px-5 mb-4"
          >
            <AccordionTrigger className="text-[20px] hover:no-underline text-left max-sm:text-[16px]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] leading-[28px] max-sm:text-[14px] max-sm:leading-[22px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
