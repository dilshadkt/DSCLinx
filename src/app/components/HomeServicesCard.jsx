import ServiceCard from "@/components/ServiceCard";

const SERVICES = [
  {
    name: "Architecture Drawing",
    desc: "We provide you with Architectural Drawings that are the foundation for the construction and remodeling project.",
    image: "/icons/architecture.png",
  },
  {
    name: "Food Equipment",
    desc: "Dsclinx provides you with a hand-picked list of essential kitchen appliances and equipment you need. The process is done under the supervision of experts.",
    image: "/icons/food-equipment.png",
  },
  {
    name: "Commercial Reno",
    desc: "We provide you with a way to transform your space into a breathable and attractive space. We evolve, improve and modify with modernization.",
    image: "/icons/commercial-reno.png",
  },
  {
    name: "Hood Installation",
    desc: "Provide you with the best arrangement and alignment service along with safety. We specialize in the installation, maintenance, and arrangement of Hood.",
    image: "/icons/hood-installation.png",
  },
  {
    name: "Electrical Services",
    desc: "We offer you a professional approach to domestic and commercial electrical services",
    image: "/icons/electrical-services.png",
  },
  {
    name: "Bathroom Reno",
    desc: "Resize and remodel your bathroom space with your likes and modern concepts.Resetting space with complete utilization of space with equipment.",
    image: "/icons/bathroom-reno.png",
  },
];
export default function HomeServicesCard() {
  return (
    <>
      {SERVICES.map((service, key) => (
        <ServiceCard
          key={key}
          name={service.name}
          desc={service.desc}
          image={service.image}
          color={"text-white"}
        />
      ))}
    </>
  );
}
