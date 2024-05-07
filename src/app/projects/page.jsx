import React from "react";
import Banner from "@/components/Banner";
import ProjectsCard from "./ProjectsCard";
import { getProjects } from "@/lib/projects";

export default function page() {
  const projects = getProjects();
  return (
    <>
      {/* Banner section Start*/}

      <Banner
        head={"Our Projects"}
        desc={
          "We’ve done hundreds of restaurants across the GTA. Check some of the highlights below!"
        }
      />
      <section class="container py-[50px] overflow-hidden max-lg:py-[40px] max-md:py-[30px] max-sm:py-[20px]">
      <div className=" mb-[52px] max-lg:mb-[40px] max-md:mb-[40px]">
        <div className="flex flex-col gap-4">
          <ProjectsCard totalCards={getProjects()} />
        </div>
      </div>
      </section>
      {/* Banner section End*/}
    </>
  );
}
