import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/constants";

export default function ServicesCard() {
  return (
    <>
      {SERVICES.map((service, key) => (
        <ServiceCard
          key={key}
          name={service.name}
          desc={service.desc}
          image={service.image}
          color={"text-black"}
        />
      ))}
    </>
  );
}
