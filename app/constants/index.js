// constants/index.js
import Html from "../../public/assets/Skills/html.png";
import Css from "../../public/assets/Skills/css.png";
import Javascript from "../../public/assets/Skills/javascript.png";
import ReactImg from "../../public/assets/Skills/react.png";
import Tailwind from "../../public/assets/Skills/tailwind.png";
import Node from "../../public/assets/Skills/node.png"
import TypeScript from "../../public/assets/Skills/typescript.png"
import Github from "../../public/assets/Skills/github1.png";
import NextJS from "../../public/assets/Skills/nextjs.png";
import python from "../../public/assets/Skills/python.png";
import mongodb from "../../public/assets/Skills/mongodb.png"
import Cplus from "../../public/assets/Skills/cplus.png"
import openAPI from "../../public/assets/Skills/openapi.png"

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  Home,
  Wrench,
  Contact,
  UserRound,
  PenLine,
  FileText,
} from "lucide-react";

// Skills
export const skillsData = [
  {
    imgSrc: Node,
    alt: "NodeJs",
    title: "NodeJS",
  },
  {
    imgSrc: ReactImg,
    alt: "React",
    title: "React",
  },
  {
    imgSrc: NextJS,
    alt: "Next",
    title: "Next",
  },
  {
    imgSrc: Javascript,
    alt: "JS",
    title: "JavaScript",
  },
  {
    imgSrc: TypeScript,
    alt: "TypeScript",
    title: "TypeScript",
  },
  {
    imgSrc: Tailwind,
    alt: "Tailwind",
    title: "Tailwind",
  },
  {
    imgSrc: openAPI,
    alt: "openAPI",
    title: "OpenAPI",
  },
  {
    imgSrc: mongodb,
    alt: "mongodb",
    title: "MongoDB",
  },
  {
    imgSrc: Cplus,
    alt: "c++",
    title: "C++",
  },
  {
    imgSrc: Github,
    alt: "Github",
    title: "Github",
  },

  {
    imgSrc: Html,
    alt: "HTML",
    title: "HTML",
  },
  {
    imgSrc: Css,
    alt: "CSS",
    title: "CSS",
  },
  {
    imgSrc: python,
    alt: "python",
    title: "python",
  },
];

//   Projects
export const ProjectCardList = [
  {
    title: "Youtube Clone",
    imgSrc:
      "/assets/images/youtube.svg",
    description: " This project is a comprehensive YouTube clone developed using Node.js and TypeScript, offering robust user management including signup, login, and profile updates. Users can upload, view, like, and comment on videos, as well as create and manage playlists. The platform supports channel subscriptions and provides a rich interface for viewing channel details, videos, playlists, and subscriber lists. Advanced features include real-time notifications, video streaming with quality settings, and search functionalities. Administrative tools are available for managing users and content. ",
    projectLink: "",
    projectLinkGithub: "https://github.com/JaswantSingh41/youtube_clone/tree/main/backend",
  },
  {
    title: "Todo CLI in NodeJS",
    imgSrc:
      "/assets/images/todo.svg",
    description:
      "Nodejs-CLI is a versatile command-line tool designed to boost productivity. It features task management, file operations, and system info utilities. Users can manage todos with add, list, update, and delete commands, all shown in a clear table. The CLI also supports executing JavaScript code, installing npm packages, and opening Windows applications. Console commands include clear and clear-all for a clean workspace. Built with Node.js, it uses cli-table3 and date-fns for enhanced functionality. This tool is perfect for developers seeking streamlined workflow management.",
    projectLink: "",
    projectLinkGithub: "https://github.com/JaswantSingh41/Nodejs-CLI/tree/main/nodejs-cli",
  },
  {
    title: "Node.js Multithreading with Cluster and Express",
    imgSrc:
      "/assets/images/node.svg",
    description:
      "Developed a high-performance Node.js application using the cluster module to efficiently handle multiple concurrent requests. Implemented CPU-intensive and I/O-intensive tasks with Express.js to demonstrate the benefits of multithreading. Managed worker processes to optimize CPU utilization. Automated load testing using shell scripts to simulate concurrent requests. Collaborated with team members via Git and GitHub for version control, pull requests, and code reviews. Ensured secure and efficient coding practices through regular reviews and input validation. Documented the project setup and usage for easy onboarding of new developers",
    projectLink: "",
    projectLinkGithub: "https://github.com/JaswantSingh41/Node.JS-MultiThread",
  },
  {
    title: "Portfolio",
    imgSrc:
      "/assets/images/portfolio.svg",
    description:
      "Welcome to my portfolio!",
    projectLink: "",
    projectLinkGithub: "https://github.com/JaswantSingh41/Node.JS-MultiThread",
  },
];

// Navbar
export const navLinks = [
  {
    href: "/",
    text: "Home",
    rel: "",
    target: "",
    icon: <Home />,
  },
  {
    href: "#About",
    text: "About",
    rel: "",
    target: "",
    icon: <UserRound />,
  },
  {
    href: "#Projects",
    text: "Projects",
    rel: "",
    target: "",
    icon: <Wrench />,
  },
  {
    href: "#Skills",
    text: "Skills",
    rel: "",
    target: "",
    icon: <PenLine />,
  },

  {
    href: "https://drive.google.com/file/d/1VjZWf0N40WRQE30AfHupcwWXbje7SVmY/view?usp=sharing ",
    text: "Resume",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: <FileText />,
  },
  {
    href: "/Contact",
    text: "Contact",
    rel: "",
    target: "",
    icon: <Contact />,
  },
];

export const mobileNavIcons = [
  {
    href: "https://www.linkedin.com/in/jaswantsingh41/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/JaswantSingh41",
    icon: <FaGithub />,
  },
  {
    href: "mailto:jaswant9461412627@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1VjZWf0N40WRQE30AfHupcwWXbje7SVmY/view?usp=sharing",
    icon: <BsFillPersonLinesFill />,
  },
];

// Footer
export const footerLinks = [
  {
    href: "https://www.linkedin.com/in/jaswantsingh41/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/JaswantSingh41",
    icon: <FaGithub />,
  },
  {
    href: "mailto:jaswant9461412627@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1VjZWf0N40WRQE30AfHupcwWXbje7SVmY/view?usp=sharing",
    icon: <BsFillPersonLinesFill />,
  },
];
