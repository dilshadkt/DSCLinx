"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    question: "What is involved in the process of designing?",
    answer:
      "After the first meeting we will be in touch to make sure that you are fully satisfied. We will then develop a client brief including illustrations from your opinions and concepts including information about budget and timescale.",
  },
  {
    question: "When should you hire us?",
    answer:
      "It is best to hire us as soon as you are ready to start developing your construction project. We are delighted to provide estimates for the cost of your project and can provide some preliminary designs at the start of the process.",
  },
  {
    question: "How long will it take to complete the project?",
    answer:
      "It relies on the extent of the project and how long it takes for the client to make decisions, amongst other things. After our initial meeting a timeframe can be outlined.",
  },
  {
    question: "What are tips to do before the renovation starts?",
    answer:
      "Exchange your goals and Ideas with us. Tell us the things you don't want to change or need to be fixed. We will deliver the spatial solutions for you.",
  },
];

export default function Faq() {
  return (
    <>
      <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold  max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:text-[36px] max-sm:text-[27px]">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full mt-10">
        {FAQ.map((faq, key) => (
          <AccordionItem
            value={`faq-${key}`}
            key={key}
            className="border-2 border-[#51515175] px-5 mb-4"
          >
            <AccordionTrigger className="text-[20px] hover:no-underline text-left max-sm:text-[18px]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] leading-[28px] max-sm:text-[16px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
