import fs from "fs";
import matter from "gray-matter";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      image: matterResult.data.image,
      title: matterResult.data.title,
      category: matterResult.data.category,
      description: matterResult.data.description,
      link: matterResult.data.link,
      date: matterResult.data.date,
    };
  });
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProject(slug) {
  const id = slug;
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const imagesDirectory = path.join(process.cwd(), `public/projects/${slug}`);
  let images = []
  if (fs.existsSync(imagesDirectory)) {
    images = fs.readdirSync(imagesDirectory).map(item=> `/projects/${slug}/${item}`)
  }
  return {
    id,
    image: matterResult.data.image,
    title: matterResult.data.title,
    category: matterResult.data.category,
    description: matterResult.data.description,
    link: matterResult.data.link,
    date: matterResult.data.date,
    images: images
  };
}
