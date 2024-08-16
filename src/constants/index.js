import { edunet } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  angular,
  bootstrap,
  docker,
  figma,
  snapgram,
  threads,
  facebook,
  sql,
  sqlServer
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend"
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend"
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend"
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend"
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend"
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend"
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management"
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend"
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend"
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend"
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend"
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend"
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend"
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database"
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database"
  },
  {
    imageUrl: sqlServer,
    name: "SQL Server",
    type: "Database"
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control"
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control"
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps"
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design"
  }
];

export const experiences = [
  {
    title: "Front-end Developer (Internship)",
    company_name: "EDUNET Co., Ltd",
    icon: edunet,
    iconBg: "#EEEDEB",
    date: "August 2023 - November 2023",
    points: [
      "Design UI/UX, develop and build user interface for Smart vOCR - Smart document management system.",
      "Technologies: HTML, CSS, JavaScript, TypeScript, Angular, Bootstrap, Docker.",
      "Collaborating with cross-functional teams including product managers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  }
];

export const socialLinks = [
  {
    name: "Facebook",
    iconUrl: facebook,
    link: "https://www.facebook.com/phucnguyenhoang611"
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/PhucNguyenHoang611"
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/phucnguyen611"
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-orange",
    name: "Online Furniture Store Website - Admin Page",
    description:
      "Building E-commerce website allowing furniture buying and selling, product management.",
    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Material UI"],
    link: "https://github.com/PhucNguyenHoang611/NGUYENS_HOME_Furniture-ADMIN",
    demoLink: "https://nguyenshomefurniture-admin.vercel.app"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "Online Furniture Store Website - API",
    description:
      "API of E-commerce website allowing furniture buying and selling, product management.",
    techStack: ["JavaScript", "NodeJS", "Express", "MongoDB"],
    link: "https://github.com/PhucNguyenHoang611/NGUYENS_HOME_Furniture-API",
    demoLink: "https://nguyenshomefurniture-be.onrender.com"
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    name: "SOCIAL NETWORKS SUPPORT FINDING LOST ITEMS",
    description: "Micro-frontends website support findind lost items.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "Apollo Client",
      "Module Federation",
      "Socket.IO"
    ],
    link: "https://github.com/PhucNguyenHoang611/Finder_App",
    demoLink: ""
  },
  {
    iconUrl: threads,
    theme: "btn-back-yellow",
    name: " ONLINE CHAT WEBSITE",
    description:
      "Building a website allowing user to message with other users.",
    techStack: [
      "ReactJS",
      "JavaScript",
      "TailwindCSS",
      "Material UI",
      "Socket.IO",
      "NodeJS",
      "Express",
      "MongoDB"
    ],
    link: "https://github.com/PhucNguyenHoang611/BeFriendsChatApplication",
    demoLink: "https://befriends-neon.vercel.app"
  }
];
