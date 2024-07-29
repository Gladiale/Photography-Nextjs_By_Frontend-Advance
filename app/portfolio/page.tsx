"use client";

import { Fade } from "react-awesome-reveal";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// 型について参考　https://zenn.dev/nbr41to/articles/6d339e11990f96

const projectData = [
  {
    image: "/work/3.png",
    category: "Portraits",
    name: "February 11, 2024",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "Models",
    name: "April 22, 2023",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/6.png",
    category: "Places",
    name: "Nov 07, 2023",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/7.png",
    category: "Corporate",
    name: "Jan 14, 2021",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/8.png",
    category: "Fashion",
    name: "Jan 31, 2023",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/9.png",
    category: "Fashion",
    name: "Jan 31, 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/10.png",
    category: "Corporate",
    name: "Mar 11, 2013",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/3.png",
    category: "Models",
    name: "Oct 23, 2019",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    codepen: "/",
  },
];

const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];

const Portfolio = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Portfolio</h2>
        </Fade>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>

          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
              {filterProjects.map((project, index) => (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))}
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
