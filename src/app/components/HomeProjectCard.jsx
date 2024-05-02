import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Pizza Hut – Richmond Hill",
    image: "/projects/PizzaHut–Rich.png",
    link: "/pizzahut–richmondhill",
  },
  {
    name: "Layalina – Cambridge",
    image: "/projects/Layalina–Cambridge.png",
    link: "/layalina–cambridge",
  },
  {
    name: "Bridal Shop – 111 Berkeley St.",
    image: "/projects/BridalShop–Berkeley.png",
    link: "/bridalshop",
  },
  {
    name: "Centerpoint Hurry Curry",
    image: "/projects/CenterpointHurryCurry.png",
    link: "/centerpoint-hurrycurry",
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
