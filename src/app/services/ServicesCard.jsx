import ServiceCard from "@/components/ServiceCard";

export const SERVICES = [
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
    desc: "We offer you a professional approach to domestic and commercial electrical services.",
    image: "/icons/electrical-services.png",
  },
  {
    name: "Bathroom Reno",
    desc: "Resize and remodel your bathroom space with your likes and modern concepts.Resetting space with complete utilization of space with equipment.",
    image: "/icons/bathroom-reno.png",
  },
  {
    name: "Home Renovation",
    desc: "Revamping your homely space with architectural beauty and recollections.As your likes blend the tastes with modern and traditional works. Remould your home space professionally, and get customized home design and decor.",
    image: "/icons/home-renovation.png",
  },
  {
    name: "Retail Remodeling",
    desc: "Modernize your space with unlimited creativity in design and specialized installation.",
    image: "/icons/retail-remodeling.png",
  },
  {
    name: "Plumbing Services",
    desc: "We provide you with the best professional affordable plumbing services in repair and maintenance, finding you with the satisfactory solutions.",
    image: "/icons/plumbing-services.png",
  },
  {
    name: "Business for Sale",
    desc: "We help you with start-up ventures, Buying a Business, Investing in a Business, Joint Venture, Partnership, Distributorship, Buy Franchise and more.",
    image: "/icons/business-for-sale.png",
  },
  {
    name: "Supplies",
    desc: "Providing the parties with complete equipment and services. Make available the tools and supplies you need.",
    image: "/icons/supplies.png",
  },
  {
    name: "Your Request?",
    desc: "We're here to deliver you with the best solutions for your space. Let's put together your space more attractive.",
    image: "/icons/your-request.png",
  },
];
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
