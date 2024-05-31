import fs from "fs";
import matter from "gray-matter";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "src/services");

export function getServices(slug) {
  const id = slug;
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title,
    description: matterResult.data.description,
    image_one: matterResult.data.image_one,
    image_two: matterResult.data.image_two,
    section_head: matterResult.data.section_head,
    section_one: matterResult.data.section_one,
    section_two: matterResult.data.section_two,
    section_three: matterResult.data.section_three,
  };
}
