"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectsCard({ totalCards }) {
  const [postNum, setPostNum] = useState(6); // Default number of posts dislplayed
  const [postIndex, setPostIndex] = useState(0);

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 4); // 2 is the number of posts you want to load per click
  }

  function getPages() {
    let pages = 0
    for (let i = 0; i < totalCards.length; i = i + postNum) {
      pages++
    }
    console.log(totalCards);
    return pages
  }

  return (
    <>
      <div className="gap-x-[24px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] grid max-md:grid-cols-[1fr]">
      {totalCards.slice(postIndex * postNum, (postIndex * postNum) + postNum).map((post, key) => (
        <ProjectCard
          key={key}
          name={post.title}
          image={post.image}
          link={post.link}
        />
      ))}
      </div>
      {/* {postNum < totalCards.length && (
        <button
          className="button button--hyperion mx-auto w-fit justify-self-center bg-inherit p-[25px] text-lg font-medium max-sm:w-full lg:col-span-2"
          onClick={handleClick}
        >
          <span>
            <span>Load More</span>
          </span>
        </button>
      )} */}
      <div className="flex gap-2 mx-auto w-fit justify-self-center bg-inherit p-[25px] text-lg font-medium max-sm:w-full justify-center">
        <Button onClick={()=>setPostIndex(prev=> prev -1)} disabled={postIndex === 0} variant="gohst"><ChevronLeft size={20} />{" Prievious"}</Button>
        {[...Array.from({length: getPages()})].map((_, i)=>(
          <Button className={`${(postIndex + 1 == i || postIndex - 1 == i ) ? "hidden sm:flex" : (postIndex != i) && "hidden lg:flex"} disabled:bg-[#004363] disabled:text-white disabled:opacity-100`} onClick={()=>setPostIndex(i)} key={i} disabled={postIndex === i} variant="outline">{i+1}</Button>
        ))}
        <Button onClick={()=>setPostIndex(prev=> prev + 1)} disabled={((postIndex + 1) * postNum) >= totalCards.length} variant="gohst">{"Next "}<ChevronRight size={20} /></Button>
      </div>
    </>
  );
}

export default ProjectsCard;
