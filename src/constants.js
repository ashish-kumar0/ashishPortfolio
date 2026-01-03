// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import abesLogo from './assets/education_logo/abes.png';
import gpsLogo from './assets/education_logo/gps.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import grocifyLogo from './assets/work_logo/grocify.png';
import amazonLogo from './assets/work_logo/amazon.png';
import flipcartLogo from './assets/work_logo/flipcart.png';
import notesLogo from './assets/work_logo/notes.png';
import moveitLogo from './assets/work_logo/moveit.png';
import attendanceLogo from './assets/work_logo/attendance.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: abesLogo,
      school: "ABES Engineering College",
      date: "Sept 2023 - July 2027",
      grade: "8.00 CGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering. During my academic journey, I built a strong foundation in programming, software development, and core computer science concepts. I studied key subjects such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Technologies, and Software Engineering. Alongside academics, I actively participated in technical workshops, coding activities, and academic projects, which strengthened my practical skills and problem-solving abilities. My B.Tech experience played a crucial role in shaping my technical expertise, analytical thinking, and professional growth.",
      degree: "Bachelor of Technology- B-Tech",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    {
      id: 2,
      img: gpsLogo,
      school: "Gautam Public School, Ghaziabad",
      date: "Apr 2021 - March 2022",
      grade: "89%",
      desc: "I completed my class 12 education from Gautam Public School, Ghaziabad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: gpsLogo,
      school: "Gautam Public School, Ghaziabad",
      date: "Apr 2019 - March 2020",
      grade: "92%",
      desc: "I completed my class 10 education from Gautam Public School, Ghaziabad, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Grocify",
      description:
        "Grocify is a full-stack online grocery ordering web application designed to provide users with a smooth and convenient shopping experience. The platform allows users to browse grocery products, add items to the cart, manage orders, and complete purchases through a user-friendly interface. The goal of the project was to simulate a real-world e-commerce system with scalable and efficient architecture.",
      image: grocifyLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS",],
      github: "https://github.com/ashish-kumar0/Grocify.git",
      webapp: "https://grocify-kohl-eta.vercel.app/",
    },
    {
      id: 1,
      title: "Notes",
      description:
        "The Note-Taking Application is a full-stack web application designed to help users create, organize, and manage notes efficiently. It provides a simple and intuitive interface where users can store their personal or work-related notes securely. The project focuses on productivity, usability, and clean data management.",
      image: notesLogo,
      tags: ["React JS", "Node.js", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashish-kumar0/Notes-App.git",
      webapp: "https://notes-app-omega-opal.vercel.app/",
    },
    {
      id: 2,
      title: "Amazon ",
      description:
        "The Amazon Project is a full-stack e-commerce web application inspired by Amazon, designed to replicate core online shopping functionalities. The application allows users to browse products, view detailed product information, add items to the cart, and place orders through a smooth and user-friendly interface. The main objective of this project was to understand real-world e-commerce workflows, scalability, and system design.",
      image: amazonLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashish-kumar0/projet_Amazon.git",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Flipcart",
      description:
        "The Flipkart Project is a full-stack e-commerce web application inspired by Flipkart, developed to replicate core online shopping functionalities. The application enables users to browse products, view detailed product information, add items to the cart, and place orders through a smooth and intuitive interface. The primary goal was to understand real-world e-commerce architecture, scalability, and end-to-end workflows.",
      image: flipcartLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashish-kumar0/project_Flipcart.git",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: " Attendance Management Application",
      description:
        "The Attendance Management Application is a full-stack web application designed to digitize and simplify the process of tracking attendance. The system allows authorized users (such as teachers or admins) to mark, update, and monitor attendance records efficiently, reducing manual effort and improving accuracy.",
      image: attendanceLogo,
      tags: ["python", "SQL", "Computer Vision", "OpenCV"],
      github: "https://github.com/ashish-kumar0/Real-time-attendance-monitoring-.git",
      // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Move It",
      description:
        "Move It is a responsive business website designed for a moving and logistics service provider. The application focuses on delivering a clean, modern user experience that helps customers easily understand services, check service availability using postcode search, and initiate bookings or contact requests. The goal was to build a conversion-focused landing page that feels simple, trustworthy, and user-friendly.",
      image: moveitLogo,
      tags: ["HTML", "CSS","Bootstrap"],
      github: "https://github.com/ashish-kumar0/project_Move_It.git",
      // webapp: "https://webversedigital.com/",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  