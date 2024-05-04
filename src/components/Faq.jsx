import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    question: "Are There Any Maintenance Or Aftercare Tips?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab distinctio possimus reiciendis deleniti aut, animi tempore sed commodi, placeat modi veritatis odio incidunt iure.",
  },
  {
    question: "Are There Any Maintenance Or Aftercare Tips?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab distinctio possimus reiciendis deleniti aut, animi tempore sed commodi, placeat modi veritatis odio incidunt iure.",
  },
  {
    question: "Are There Any Maintenance Or Aftercare Tips?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab distinctio possimus reiciendis deleniti aut, animi tempore sed commodi, placeat modi veritatis odio incidunt iure.",
  },
  {
    question: "Are There Any Maintenance Or Aftercare Tips?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab distinctio possimus reiciendis deleniti aut, animi tempore sed commodi, placeat modi veritatis odio incidunt iure.",
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
