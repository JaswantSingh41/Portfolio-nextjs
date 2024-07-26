"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      id="About"
      className="w-full flex-center min-h-screen items-center flex-col  md:flex-left md:flex-row mt-0 ">
      <h2 className="head_text text-center md:hidden mb-5 md:text-right">
        <span className="red_gradient">About Me</span>
      </h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.45, delay: 0.25 }}
        className=" sm:mt-5 md:flex-auto">
        <div className="relative w-[350px] h-[350px]  lg:h-[450px] lg:w-[450px] -z-10">
          <Image
            className="mb-5 object-fit"
            src={"/assets/images/AboutMe.png"}
            alt={"about pic"}
            fill
          />
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-col">
        <h2 className="head_text text-center hidden md:block md:text-right">
          <span className="red_gradient">About Me</span>
        </h2>
        <p className="desc text-justify animate-slide-up-fade sm:ml-3">
          Hey there! 👋 I am Jaswant Singh, a dedicated <span className="pink_gradient">Full-stack developer</span> with a passion for building innovative web applications. I specialize in <span className="pink_gradient">Node.js, React, JavaScript, TypeScript, Next.js</span>, and I am eager to leverage my skills in a dynamic team.
          <br /><br />
          Currently, I am an SWE Fellow at <span className="pink_gradient">HeadstarterAI</span>HeadstarterAI and an engineering college dropout. I continuously enhance my problem-solving skills through solving data structures and algorithm challenges.
          <br /><br />
          I value collaborative work and strive for clear communication, actively promoting well-documented code.
          <br /><br />
          I am open to discussing potential projects or collaboration opportunities and seeking mentorship from experienced software development professionals.
          If you're willing to share your
          knowledge, I'd love to connect!
        </p>
      </motion.div>
      <hr />
    </section>
  );
};

export default About;
