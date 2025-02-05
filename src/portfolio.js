/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Biniam Hailu",
  title: "Hi, I'm Biniam",
  subTitle: emoji(
    `I’m a junior studying Computer Science and Applied Mathematics at Pacific Lutheran University. 
    I enjoy the process of learning new things and love solving complex problems. 
     Besides programming and math, I also love 
    playing chess, tennis, and soccer. I am excited to
     learn new things every day.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Suu3vELZlVhZo2Mj-pbQ5XXMtoMr0fEk/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "gbina27@gmail.com",
  linkedin: "https://www.linkedin.com/in/biniam-hailu/",
  github: "https://github.com/biniamhailu",
  // Gitlab,Medium,Stackoverflow, Instagram, Twitter and Kaggle are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "A growing list",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react",
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    // {
    //   skillName: "git",
    //   fontAwesome: "fa-solid fa-k"
    // },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pacific Lutheran University",
      logo: require("./assets/images/plu.jpg"),
      subHeader:
        "Bachelor of Science in Computer Science and Applied Mathematics",
      duration: "Expected May 2026",
      // desc: "Dean's List All Semesters",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // "jj"]
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Technician",
      company: "Pacific Lutheran University",
      companylogo: require("./assets/images/pluLogo.png"),
      date: "Sep 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Engineering Intern",
      company: "Techfinity Solutions",
      companylogo: require("./assets/images/techfinityLogo.png"),
      date: "May 2024 – Aug 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Coding Specialist",
      company: "MESA",
      companylogo: require("./assets/images/mesa.png"),
      date: "Sep 2023 – May 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/starBattle.png"),
      projectName: "Star Battle",
      projectDesc: " Desktop Puzzle Game",
      footerLink: [
        // {
        //   name: "View Code",
        //   url: ""
        // }
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/foodScanner2.png"),
      projectName: "Food Scanner",
      projectDesc:
        "An AI powered native Android app to scan foods if they are safe for consumption",
      footerLink: [
        // {
        //   name: "View Code",
        //   url: ""
        // }
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
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
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      // image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an oppotunity or just want to say hi?",
  number: "+1-206-990-4007",
  email_address: "gbina27@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
