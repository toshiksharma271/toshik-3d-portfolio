import {
    
    python,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    linux,
    EXL,
    ABCStep,
    jira,
    mysql,
    powerBi,
    Tableau,
    sqlServer,
    Excel,
    kpmg_logo,
    Employee,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "JavaScript",
      icon: javascript ,
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
    },
    {
      title: "Git",
      icon: git,
    },
    {
      title: "Linux",
      icon: linux,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  
    
  ];
  
  const experiences = [
    {
      title: "Chandigarh University",
      company_name: "Student",
      icon: "https://i.imgur.com/vjmUttx.jpg",
      iconBg: "white",
      date: "Aug 2022 - Aug 2026",
      points: [
        "Grasping computer science basics with a focus on algorithms and data structures.",
"Diving into competitive programming, honing skills in Python, C++, and JavaScript.",
"Mastering multiple languages like Python, C++, and JavaScript for versatile coding.",
"Staying current with evolving tech trends, continuously expanding language proficiency.",
        
      ],
    },
    {
      title: "Career Point World School",
      company_name: "Student",
      icon: "https://i.imgur.com/elq3P1O.png",
      iconBg: "#ffffff",
      date: "April 2021 - March 2022",
      points: [
        "Studied physics and math in 12th Standard, gaining a solid grasp of fundamental concepts.",
        "Explored the intricacies of science, focusing on physics and mathematics.",
        "Built a strong foundation in physics and math during my school years.",
        "Acquired essential knowledge in physics and mathematics through school education.",
      ],
    },
    {
      title: "Shri MaheshWari Sr.Sec. School",
      company_name: "Student",
      icon: "https://i.imgur.com/91NyTkA.jpg",
      iconBg: "#ffffff",
      date: "April 2019 - March 2020",
      points: [
        "Explored diverse subjects in 10th grade, building a strong educational foundation.",
"Studied various disciplines, broadening my knowledge during 10th grade.",
"Acquired a well-rounded education in 10th grade, covering multiple subjects.",
"Built essential knowledge across diverse subjects during my 10th-grade studies.",

      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Toshik Sharma's keen, dynamic data work fuels team success.",
      name: "Kavita Sharma",
      designation: "Senior Specialist",
      company: "Commvault",
      image: "https://i.imgur.com/FRPzwnY.jpeg",
    },
    {
      testimonial:
        "Toshik's committed, development features boosts the team.",
      name: "Akshi Sharma",
      designation: "R&D Specialist",
      company: "KPMG",
      image: "https://i.imgur.com/IedNCpl.jpg",
    },
    {
      testimonial:
        "Toshik's tech eagerness elevates the forward-thinking team.",
      name: "Heena",
      designation: "Ecommerce Specialist",
      company: "AKOI",
      image: "https://i.imgur.com/2Kcd1KE.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D-Porfolio",
      description:"	Developed 3D portfolio with HTML, CSS, JavaScript, React, and Tailwind CSS, Integrated Three.js for dynamic 3D models, showcasing advanced design.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.imgur.com/RNfCzvV.png",
      source_code_link: "https://github.com/toshiksharma271/toshik-3d-portfolio",
      live_link: "https://toshik-3d-portfolio.netlify.app/",
    },
    {
      name: "BaingCryption",
      description:
        "Explore the crypto world. Buy and sell cryptocurrencies easily on BaingCryption. Made using React, Solidity, HTML, CSS, JavaScript, React Router and many more.. ",
      tags: [
        {
          name: "ReactRouter",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.imgur.com/xkkVExQ.png",
      source_code_link: "https://github.com/toshiksharma271/baingcryption",
      live_link: "https://baingcryption.vercel.app/",
    },
    {
      name: "Post-Search",
      description:
        "In React, implement a search feature by managing input state. Utilize the fetch API for asynchronous data fetching from an external source.",
      tags: [
        {
          name: "API",
          color: "blue-text-gradient",
        },
        {
          name: "useEffect",
          color: "green-text-gradient",
        },
        {
          name: "Asynchronous",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.imgur.com/eEoBT4q.png",
      source_code_link: "https://github.com/toshiksharma271/Post-Search",
      live_link: "https://post-search.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };