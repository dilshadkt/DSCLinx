import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Amor Shawarma",
    image: "/projects/AmorShawarma.jpg",
    link: "/AmorShawarma",
  },
  {
    name: "Beavertails Mississauga",
    image: "/projects/BeavertailsMississauga.jpg",
    link: "/BeavertailsMississauga",
  },
  {
    name: "WareHouse Windsor",
    image: "/projects/WareHouseWindsor.jpg",
    link: "/WareHouseWindsor",
  },
  {
    name: "Farrah Foods Paris",
    image: "/projects/FarrahFoodsParis.jpg",
    link: "/FarrahFoodsParis",
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
