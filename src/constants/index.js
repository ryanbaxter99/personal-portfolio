import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    michiganLogo,
    boyne,
    ncino,
    wingmanGPT,
    positive,
    huron,
    tcp,
    threejs,
    cplus,
    python,
    c,

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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "C",
      icon: c,
    },
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Zipline Tour Guide",
      company_name: "Boyne Highlands Resorts",
      icon: boyne,
      iconBg: "#383E56",
      date: "Dec 2019 - Feb 2021",
      points: [
        "Zipline Guide is a full-time seasonal position at Boyne Highlands Resort. ",
        "Guides are responsible for organizing and leading group tours on the Zip Line while ensuring safety of all guests and creating positive experience.",
      
      ],
    },
    {
      title: "Software Fundementals Tutor",
      company_name: "University of Michgan Digital Water Lab",
      icon: michiganLogo,
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
        "Provide a clear understanding of core concepts related to EECS 183 and EECS 280.",
        "Provide feedback and instruction on misunderstood material",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Host weekly sessions with students teaching object-oriented programming principles.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "nCino",
      icon: ncino,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Used Salesforce Lightning Web Components to develop statistic analysis tools for corporate banking loans and income statements.",
        "Improved the UX design of the Salesforce spreadsheet platform used in financial credit analysis.",
        "Used Google’s Angular framework to maintain and upgrade existing company software packages.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Engineer Research",
      company_name: "University of Michgan Digital Water Lab",
      icon: michiganLogo,
      iconBg: "#383E56",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Work with community stakeholders to understand how users interact with data and how they use relevant tools to support community objectives and goals.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Conducted research and developed data visualizations and app building libraries that gave better access to information regarding the Huron River Watershed to users.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "WingmanGPT",
      description:
        "A command-line tool that utilizes OpenAI's ChatGPT model to generate conversation starters for you, and can even send a text message to a specified number. It's like your own personal wingman!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ChatGPT",
          color: "green-text-gradient",
        },
        {
          name: "APIs",
          color: "pink-text-gradient",
        },
        {
          name: "Command-line",
          color: "blue-text-gradient",
        },
      ],
      image: wingmanGPT,
      source_code_link: "https://github.com/btschwartz12/WingmanGPT",
    },
    {
      name: "Positive Pupil Popup",
      description:
        "The Chrome extension rewards students who submit their assignments on time with a fun break option. They can play the 'BullRun' mini game or choose from a variety of activities using the 'bored api'. This encourages students to stay focused on their studies while also providing a brief, enjoyable break.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "green-text-gradient",
        },
        {
          name: "Chrome",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
      ],
      image: positive,
      source_code_link: "https://github.com/ClubRBJ/positive-pupil-popup",
    },
    {
      name: "Huron River Subway Map",
      description:
        "Prototype subway map for the Huron River Watershed. The map is designed to be a tool for community members to learn about the watershed and the organizations that work to protect it. The prototype uses the Mapbox API and displays lake locations.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "MapBox",
          color: "pink-text-gradient",
        },
      ],
      image: huron,
      source_code_link: "https://github.com/ryanbaxter99/Huron-River-Subway-Prototype",
    },
    {
      name: "The Common Phenomonon Website",
      description:
        "My first ever HTML/CSS website for a Michigan based podcost.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "MapBox",
          color: "pink-text-gradient",
        },
      ],
      image: tcp,
      source_code_link: "https://github.com/ryanbaxter99/Huron-River-Subway-Prototype",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };