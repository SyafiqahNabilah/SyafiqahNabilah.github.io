/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syafiqah Hisham",
  title: "Hi, I'm Syafiqah 👋",
  subTitle: emoji(
    "Backend Java Developer with 3+ years of experience developing enterprise banking applications using Java 21, Spring Boot and Microservices. Passionate about building secure REST APIs, solving production issues and continuously learning cloud technologies."
  ),
  resumeLink:
    "YOUR_RESUME_LINK",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IqaHisham",
  linkedin: "https://www.linkedin.com/in/syafiqah-nabilah-31588b187/",
  gmail: "syafiqahnabilah98@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "JAVA BACKEND DEVELOPER SPECIALIZING IN ENTERPRISE APPLICATIONS AND MICROSERVICES",

  skills: [
    emoji("⚡ Build scalable RESTful APIs using Java 21, Spring Boot and Spring MVC"),
    emoji("⚡ Develop enterprise microservices, API integrations and backend business logic"),
    emoji("⚡ Troubleshoot production issues, perform VAPT remediation and support production deployments"),
    emoji("⚡ Write clean, maintainable code with Hibernate/JPA, JUnit and Mockito"),
    emoji("⚡ Currently learning AWS, Docker, Kubernetes and cloud-native development")
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fa fa-leaf"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Maven",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],

  display: true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universiti Malaysia Terengganu",
      logo: require("./assets/images/Logo_Rasmi_UMT.png"),
      subHeader: "Bachelor of Computer Science(Software Engineering)",
      duration: "September 2019 - March 2023",
      desc: "Bachelor of Computer Science (Software Engineering) with a strong foundation in software development, object-oriented programming, databases and system design.",
      descBullets: [
        "Java Programming",
        "Software Engineering",
        "Software Testing","Database Systems","Web Development","Cyber Security",
        "System Analysis & Design"
      ]
    },
    {
      schoolName: "Kolej Vokasional Perdagangan Johor Bahru",
      logo: require("./assets/images/Logo_Rasmi_KV.png"),
      subHeader: "Diploma in Database Management System and Web Application",
      duration: "September 2013 - April 2017",
      desc: "Completed Diploma in Information Technology with emphasis on software development and web technologies.",
      descBullets: [
        "PHP Development",
        "Database Management",
        "Mobile Application Development",
        "System Analysis","Software Maintenance"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "REST API Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Microservices",
      progressPercentage: "80%"
    },
    {
      Stack: "Database",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "40%"
    }
  ],

  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
  role: "Microservice Developer",
  company: "IT services",
  companylogo: null,
  date: "2023 - Present",
  desc:
    "Develop and maintain enterprise banking backend applications using Java 21, Spring Boot and Microservices.",

  descBullets: [
    "Develop RESTful APIs for enterprise banking platforms",
    "Implement business logic, request validation and database enhancements",
    "Integrate internal banking systems and third-party services",
    "Support SIT, UAT and production deployments",
    "Resolve production incidents during go-live",
    "Perform VAPT remediation for secure production releases",
    "Develop unit tests using JUnit and Mockito",
    "Collaborate with Product Owners, QA and Business Analysts in Agile Scrum"
  ]
},
    {
      role: "Junior Programmer",
      company: "Edess Education Development And Solutions Specialist Sdn Bhd",
      companylogo: require("./assets/images/edess.jpg"),
      date: "Oct 2018 – Aug 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "IT internship",
      company: "Pinnacle Platform Sdn Bhd",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some big projects and complete",
  projects: [
    {
projectName:"Credit Card API Integration",

projectDesc:
"Developed backend microservices for Credit Card enrollment, integrating enterprise banking systems with insurance services through REST APIs and XML request transformation.",

footerLink:[]
}
    {
      image: require("./assets/images/renbo1.webp"),
      projectName: "Rental and Borrow Management System",
      projectDesc: "A web based/consortium web application that allow user to promote their products to let other people rent or borrow the item. My final year project that using Java, Spring boot, MVC, thymeleaf and Boostrap. ",
      footerLink: [
        {
          name: "View full description",
          url: "https://drive.google.com/file/d/1VVCnvIwpffMoU9yt9aFkZleWPxvP6gRB/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/albayen1.png"),
      projectName: "Albayen",
      projectDesc: "An e-learning system for Sekolah Agama in Johor. Have 5 roles in included. Allow teachers to upload homework, task, and quizzes",
      footerLink: [
        {
          name: "View full description",
          url: "https://drive.google.com/file/d/1VVCnvIwpffMoU9yt9aFkZleWPxvP6gRB/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/ojt1.png"),
      projectName: "Sistem Pengurusan Maklumat Latihan Industri (SPMLI) - 2017",
      projectDesc: "Sistem Pengurusan Maklumat Latihan Industri (SPMLI) is a system developed to manage the information of students undergoing industrial training at the Johor Bahru Vocational College of Commerce.",
      footerLink: [
        {
          name: "View full description",
          url: "https://drive.google.com/file/d/1VVCnvIwpffMoU9yt9aFkZleWPxvP6gRB/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect!"),
  subtitle:
    "I'm open to Backend Java Developer opportunities, collaborations and technical discussions.",
  number: "+60137276046",
  email_address: "syafiqahnabilah98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
