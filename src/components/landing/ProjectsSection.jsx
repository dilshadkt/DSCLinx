"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import { PROJECTS } from "./content";

export default function ProjectsSection() {
  return (
    <section className="container py-[70px] max-md:py-[50px] max-sm:py-[40px]">
      <div className="text-center">
        <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-md:text-[30px] max-sm:text-[24px]">
          Our Projects
        </h2>
        <p className="max-w-[640px] mx-auto text-[18px] leading-[150%] max-md:text-[15px]">
          Real restaurant projects delivered by our team. Tap a project to see
          more photos.
        </p>
      </div>

      {/* Mobile: one card per row. Tablet: 2 columns. Desktop: 4 columns. */}
      <div className="mt-10 max-md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [first, ...rest] = project.gallery;
  const location = project.city ? `${project.city}, ON` : "ON";

  return (
    <article className="bg-white border border-gray-200 overflow-hidden">
      <LightGallery speed={400} plugins={[lgZoom]} download={false}>
        <a href={first} className="group block cursor-pointer">
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <Image
              src={project.cover}
              alt={`${project.name} restaurant renovation`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        {rest.map((src) => (
          <a key={src} href={src} className="hidden" aria-hidden="true" tabIndex={-1}>
            {/* gallery-only item */}
          </a>
        ))}
      </LightGallery>
      <div className="p-5">
        <h3 className="text-[20px] max-sm:text-[17px] font-semibold leading-[130%]">
          {project.name}
        </h3>
        <p className="text-gray-600 mt-1">{location}</p>
      </div>
    </article>
  );
}
