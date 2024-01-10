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
      title: "Python",
      icon: python ,
    },
    {
      title: "MongoDB",
      icon: mongodb,
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
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "SQLserver",
      icon: sqlServer,
    },
    {
      name: "Excel",
      icon: Excel,
    },
    {
      name: "Tableau",
      icon: Tableau,
    },
    {
      name: "PowerBI",
      icon: powerBi,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Jira",
      icon: jira,
    },
    
  ];
  
  const experiences = [
    {
      title: "R&D Executive",
      company_name: "KPMG",
      icon: kpmg_logo,
      iconBg: "blue",
      date: "Jan 2024 - Present",
      points: [
        "Ensuring accuracy and optimizing processes by identifying discrepancies and errors in the data.",
        "Analyzing and visualizing data using SAS, Excel, and internal tools.",
        "Efficiently remediating data, compiling, and correcting to save costs.",
        "Validating and rectifying errors through close collaboration with cross-functional teams.",
        
      ],
    },
    {
      title: "Reporting Analyst",
      company_name: "Exl Services",
      icon: EXL,
      iconBg: "#ffffff",
      date: "June 2022 - Jan 2024",
      points: [
        "Utilizing SAS, Excel and internal tools to analyze and visualize data.",
        "Identify discrepancies and errors in the data, ensuring accuracy and optimization of processes.",
        "Collaborate closely with cross-functional teams to validate and rectify errors.",
        "Compiling and correcting data, saving cost through efficient remediation processes.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "ABCsteps Technologies Pvt Ltd",
      icon: ABCStep,
      iconBg: "#ffffff",
      date: "Oct 2019 - Oct 2021",
      points: [
        "Managed a team of 8 members and delivered businesson Digital Marketing and Web Development.",
        "Identified plans and resources required to meet project goals and objectives.",
        "Achieved project deadlines by coordinating with contractors to manage performance.",
        "Analyzed project performance data to identify areas of Improvement.",

      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Akshi Sharma's keen, dynamic data work fuels team success.",
      name: "Kavita Sharma",
      designation: "Senior Specialist",
      company: "Zoma",
      image: "https://i.imgur.com/FRPzwnY.jpeg",
    },
    {
      testimonial:
        "Akshi's committed, vital dataset analysis boosts the team.",
      name: "Toshik Sharma",
      designation: "Software Engineer",
      company: "Google",
      image: "https://i.imgur.com/5Rike5E.jpg",
    },
    {
      testimonial:
        "Akshi's tech eagerness elevates the forward-thinking team.",
      name: "Heena",
      designation: "Ecommerce Specialist",
      company: "AKOI",
      image: "https://i.imgur.com/2Kcd1KE.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Employee-Data-Analysis",
      description:
        "Generation of data model from the data provided, Creation of database & tables in MySQL server based on the ER Diagram, Creation of database & tables in MySQL server based on the ER Diagram.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "Sqoop",
          color: "green-text-gradient",
        },
        {
          name: "Hive",
          color: "pink-text-gradient",
        },
      ],
      image: Employee,
      source_code_link: "https://github.com/Akshi1206/Capstone-Big-Data-Engineering-",
    },
    {
      name: "Mobile-Manufacturer",
      description:
        "The database “Cellphones Information” contains details on cell phone sales or transactions,Fact_Transactions stores all the information about sales of specific cellphones.",
      tags: [
        {
          name: "JupiterNoteBook",
          color: "blue-text-gradient",
        },
        {
          name: "HiveQL",
          color: "green-text-gradient",
        },
        {
          name: "Shell",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Akshi1206/Mobile-Manufacturer-Data-Analysis",
    },
    {
      name: "Retail-Case-Study",
      description:
        "A retail store would like to understand customer behavior using their point of sale data (POS),The data set we will be using for this exercise comprises of 3 tables: Customer,Transactions,Product category.",
      tags: [
        {
          name: "Impala",
          color: "blue-text-gradient",
        },
        {
          name: "HDFS",
          color: "green-text-gradient",
        },
        {
          name: "SparkML",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Akshi1206/Retail-Case-Study",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };