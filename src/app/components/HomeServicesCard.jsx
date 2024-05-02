import ServicesCard from "@/components/ServicesCard";

const SERVICES = [
  {
    name: "Architecture Drawing",
    desc: "Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly",
    image: "/icons/architecture.png",
  },
  {
    name: "Food Equipment",
    desc: "Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly",
    image: "/icons/food-equipment.png",
  },
  {
    name: "Commercial Reno",
    desc: "Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly",
    image: "/icons/commercial-reno.png",
  },
  {
    name: "Hood Installation",
    desc: "Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly",
    image: "/icons/hood-installation.png",
  },
  {
    name: "Electrical Services",
    desc: "Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly",
    image: "/icons/electrical-services.png",
  },
  {
    name: "Bathroom Reno",
    desc: "Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly",
    image: "/icons/bathroom-reno.png",
  },
];
export default function HomeServicesCard() {
  return (
    <>
      {SERVICES.map((service, key) => (
        <ServicesCard
          key={key}
          name={service.name}
          desc={service.desc}
          image={service.image}
        />
      ))}
    </>
  );
}
