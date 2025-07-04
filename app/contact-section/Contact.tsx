import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
            }
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="bor der mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
              <Link
                href="mailto:dichanshrestha10@gmail.com?subject=Let%27s%20work%20together&body=Hello%2C%20I%27d%20like%20to%20discuss%20a%20collaboration%20opportunity%20on%20a%20project.%20Please%20let%20me%20know%20when%20you%27re%20available%20to%20talk."
                target="_blank"
                aria-label="Send me an email"
                className="bor der mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"Send me an email"}
                  className={"bor der w-[190px] pr-[40px] md:w-[170px] md:pr-0"}
                />
              </Link>
              <AnimatedBody
                text={"or"}
                className={
                  "bor der -mb-1 ml-2 inline-block overflow-hidden sm:-mb-2 md:-ml-[8px] md:-mb-3 lg:-mb-4"
                }
              />
              <Link
                href="https://cal.com/dichan-shrestha-zljrlx/30min"
                target="_blank"
                aria-label="Send me an email"
                className="bor der mt-1 w-[110px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:-ml-[3px] md:w-[120px] lg:mt-4"
              >
                <AnimatedBody
                  text={"Book a call"}
                  className={"w-[110px] md:w-[120px]"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/DichanShrestha"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedTitle
                text={"Github"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dichanshrestha"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <AnimatedTitle
                text={"LinkedIn"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://twitter.com/dichanshrestha"
              target="_blank"
              aria-label="View Twitter Profile"
            >
              <AnimatedTitle
                text={"X"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>

            <Link
              href="https://hashnode.com/@dichan"
              target="_blank"
              aria-label="View Hashnode Profile"
            >
              <AnimatedTitle
                text={"Hashnode"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
