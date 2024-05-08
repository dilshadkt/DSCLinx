import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Pizza Hut – Richmond Hill",
    image: "/projects/PizzaHut–Rich.png",
    link: "/PizzaHutRichmondHill",
  },
  {
    name: "Layalina – Cambridge",
    image: "/projects/Layalina–Cambridge.png",
    link: "/LayalinaCambridge",
  },
  {
    name: "Bridal Shop – 111 Berkeley St.",
    image: "/projects/BridalShopBerkeley.png",
    link: "/BridalShopBerkeley",
  },
  {
    name: "Centerpoint Hurry Curry",
    image: "/projects/CenterpointHurryCurry.png",
    link: "/CenterpointHurryCurry",
  },
];

export default function HomeProjectCard() {
  return (
    <>
      {PROJECTS.map((project, key) => (
        <ProjectCard
          key={key}
          name={project.name}
          image={project.image}
          link={project.link}
        />
      ))}
    </>
  );
}
