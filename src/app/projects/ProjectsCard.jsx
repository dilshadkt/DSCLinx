"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

function ProjectsCard({ totalCards }) {
  const [postNum, setPostNum] = useState(5); // Default number of posts dislplayed

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 4); // 2 is the number of posts you want to load per click
  }

  return (
    <>
      {totalCards.slice(0, postNum).map((post, key) => (
        <ProjectCard
          key={key}
          name={post.title}
          image={post.image}
          link={post.link}
        />
      ))}
      {postNum < totalCards.length && (
        <button
          className="button button--hyperion mx-auto w-fit justify-self-center bg-inherit p-[25px] text-lg font-medium max-sm:w-full lg:col-span-2"
          onClick={handleClick}
        >
          <span>
            <span>Load More</span>
          </span>
        </button>
      )}
    </>
  );
}

export default ProjectsCard;
