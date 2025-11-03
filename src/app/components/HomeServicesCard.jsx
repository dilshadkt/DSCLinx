import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/constants";

export default function HomeServicesCard() {
  return (
    <>
      {SERVICES.slice(0, 6).map((service, key) => (
        <ServiceCard
          key={key}
          name={service.name}
          desc={service.desc}
          icon={service.icon}
          color={"text-white"}
          link={service.link}
        />
      ))}
    </>
  );
}
