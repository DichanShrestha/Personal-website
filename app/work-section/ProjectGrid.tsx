import { useScroll, useTransform, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { useEffect, useRef, useState } from "react";

const ProjectGrid = () => {
  const [xValue, setXValue] = useState(["30%", "-32%"]);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setXValue(["35%", "-35%"]);
      } else {
        setXValue(["30%", "-55%"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xValue);

  return (
    <section
      ref={targetRef}
      style={{ width: "calc(100vw - 50px)" }}
      className="relative h-[500vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[250%] gap-8 px-8">
          {devProjects.map((project: ProjectProps) => (
            <div
              key={project.id}
              className="w-[85vw] flex-shrink-0 md:w-[1000px]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
