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
          icon={service.icon}
          color={"text-black"}
          link={service.link}
        />
      ))}
    </>
  );
}
