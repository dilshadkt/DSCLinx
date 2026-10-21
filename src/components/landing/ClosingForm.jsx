import Image from "next/image";
import LeadForm from "./LeadForm";
import { FORM } from "./content";

export default function ClosingForm() {
  return (
    <section className="relative bg-black overflow-hidden">
      <Image
        src="/footer.jpg"
        alt=""
        width={1200}
        height={700}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="container relative z-10 py-[80px] max-md:py-[50px] max-w-[640px]">
        <LeadForm
          id="quote-form-bottom"
          heading={FORM.heading}
          supporting={FORM.supporting}
          location="closing"
        />
      </div>
    </section>
  );
}
