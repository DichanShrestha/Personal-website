import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className="relative z-10 flex h-[550px] w-full items-center justify-center overflow-hidden rounded-3xl bg-center py-0 px-5 sm:h-[700px] md:h-[650px] md:px-0 lg:h-[500px]"
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`absolute bottom-10 w-[70%] object-contain transition-all duration-500 md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />

      <div
        className={`absolute top-0 mt-6 flex items-center justify-center gap-4 text-[#0E1016] lg:mt-10 ${
          id % 2 === 0 ? "left-6 lg:left-14" : "right-6 lg:right-14"
        }`}
      >
        {available ? (
          <>
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-5 rounded-full bg-white p-4 text-lg md:w-6 md:text-xl lg:w-7 lg:text-2xl"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className="w-5 rounded-full bg-white p-4 text-lg md:w-6 md:text-xl lg:w-7 lg:text-2xl"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-5 rounded-full bg-white p-4 text-lg md:w-6 md:text-xl lg:w-7 lg:text-2xl"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className="rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px]">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute max-w-[90%] text-white md:max-w-[450px] lg:max-w-[400px] ${
          id % 2 === 0
            ? "left-6 top-32 lg:left-10 lg:top-52"
            : "right-6 top-32 lg:right-10 lg:top-52"
        } mb-10 md:mb-16 lg:mb-14`}
      >
        <AnimatedTitle
          text={name}
          className="font-serif text-[36px] leading-tight md:text-[44px] lg:text-[48px]"
          wordSpace="mr-[0.25em]"
          charSpace="-mr-[0.01em]"
        />
        <AnimatedBody
          text={description}
          className="mt-4 text-[15px] font-semibold text-[#95979D] md:text-[16px]"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech, idx) => (
            <AnimatedTitle
              key={idx}
              text={tech}
              wordSpace="mr-[0.25em]"
              charSpace="mr-[0.01em]"
              className="font-serif text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
