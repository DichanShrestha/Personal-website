import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 md:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I build fast, scalable web apps that help startups grow and deliver great user experiences."
          }
          className={
            "mb-10 text-left font-serif text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I help startups bring their ideas to life by building fast, scalable web applications with clean UI and solid architecture. I'm especially focused on systems that feel seamless and actually solve real problems."
              }
            />
            <AnimatedBody
              text={
                "Outside of client work, I'm actively building my personal brand on X — sharing insights, projects, and content around web dev, system design, and startup tech."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "When I’m not coding, I’m probably hitting the gym, catching up on trading, or exploring new ways to level up my craft — both technically and personally."
              }
            />
            <AnimatedBody
              text={
                "I’m always up for collaborating on meaningful projects, so if you’re building something cool, let’s connect."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "font-serif text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, Zustand, Framer Motion, Tailwind CSS."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend Tools"}
                className={
                  "font-serif text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"Express.js, Node.js, Next.js(Api Routes) ."}
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Database Tools"}
                className={
                  "font-serif text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"MongoDB, PostgreSQL, MySQL."} />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Deployment Tools"}
                className={
                  "font-serif text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"Docker, AWS (Lightsail, S3), Nginx."} />
            </div>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
