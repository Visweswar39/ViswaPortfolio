/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "viswa's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "viswa Portfolio",
    type: "website",
    url: "http://visweswar39.github.io/ViswaPortfolio",
  },
};

//Home Page
const greeting = {
  title: "Visweswara Rao Yaramanedi",
  logo_name: "Visweswar39",
  nickname: "viswa",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/13sxSFMDHeG9_a0uwmAGKOwO3GYqinwLt/view?usp=drive_link",
  portfolio_repository: "https://github.com/Visweswar39",
  githubProfile: "https://github.com/Visweswar39",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Visweswar39",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/visweswar39/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yaramanediviswes@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/viswa_23",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/visweswar39",
    fontAwesomeIcon: "fa-kaggle", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#20BEFF", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with NLP and Machine Learning projects",
        "⚡ Designing and implementing recommender systems for personalized content recommendations",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "SKLearn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node & Express ",
        "⚡ Designing and managing databases using MongoDB for efficient data storage",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Mobile Application Development",
      fileName: "MobileDevImg",
      skills: [
        "⚡ Proficient in developing cross-platform mobile applications using React Native",
        "⚡ Experience with state management using Redux or Context API for efficient data flow",
        "⚡ Integration of native modules and third-party libraries to enhance app functionality",
        "⚡ Familiarity with optimizing app performance and ensuring smooth user experiences on both iOS and Android platforms"
      ],
      softwareSkills: [
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "React-Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/visweswar39/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/Visweswar39",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gayatri Vidya Parishad College of Engineering Visakhapatnam",
      subtitle: "B.Tech.(hons) in Information Technology",
      logo_path: "gvpce.png",
      alt_name: "GVPCE",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DSA, DBMS, OS, CN etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was also part of Honors course where I learnt about Natural Language Processing and ReactJs.",
      ],
      website_link: "http://gvpce.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/d07cf4de-3b1c-498e-b8bd-554cc50d7a45/badges/1482485",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "AWS Machine Learning",
      subtitle: "- Aws academy",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1uXL_Uv3nJMVHsX3ygGzv9M33l3f3vZh_/view?usp=share_link",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "AWS Cloud Foundation",
      subtitle: "- Aws academy",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1TrGeieinToe22vmZ5WjIhwOYFDbcVfHa/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#1F70C199",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/d07cf4de-3b1c-498e-b8bd-554cc50d7a45/badges/1476606",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/d07cf4de-3b1c-498e-b8bd-554cc50d7a45",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Programming essentials in pyhton",
      subtitle: "- Python institute",
      logo_path: "python-institute.png",
      certificate_link:
        "https://drive.google.com/file/d/1S1mo2s1hyCDbEuQE95d_KF5TnezQcdRK/view?usp=drive_link",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Hackathon and Volunteership",
  description:
    "I have worked with evolving startups as Front-End App Developer and Website Developer. I also participated in exciting hackathons and solved interesting problems. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: " Full Stack Web development Intern",
          company: "Edgroom",
          company_url: "https://edgroom.com/",
          logo_path: "edgroom_logo.jpeg",
          duration: "May 2024 - Present",
          location: "Bengaluru, India",
          description:
            "Worked as Full Stack Web development intern in Edgroom, An EdTech Platform for personalized career guidance and college guidance, built using NextJs!",
          color: "#000000",
        },
        {
          title: "Frontend App Development Intern",
          company: "GAMAYAS",
          company_url: "https://gamayas.com/",
          logo_path: "gamayas_png.png",
          duration: "June 2023 - November 2023",
          location: "Hyderabad, India",
          description:
            "worked in Front-End App Development for MissSwag, A gynecological app providing medical assistance to women built using React Native, Flask and postgresql!",
          color: "#000000",
        },
      ],
    },
    {
      title: "Hackathons",
      experiences: [
        {
          title: "Winner",
          company: "GradRight",
          company_url: "https://antidote-bm.gradright.com/",
          logo_path: "codeclash_logo.png",
          duration: "September 2024",
          location: "Remote",
          description:
            "Code Clash is a mini-hackathon where participants design innovative solutions to showcase their skills and problem-solving abilities for a chance to fast-track their path to a Master's program in the USA. I emerged victorious in this competition, securing my place among the top talent.",
          color: "#D83B01",
        },
        {
          title: "SIH-2022 Grand Finalist",
          company: "Smart India Hackathon",
          company_url: "https://www.aicte-india.org/Initiatives/smart-india-hackathon",
          logo_path: "sih_logo.png",
          duration: "June 2022",
          location: "Namakkal, Tamil Nadu",
          description:
            "Smart India Hackathon is one of the largest hackathons in the world conducted by central government of India.It is a nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving.",
          color: "#D83B01",
        },
        {
          title: "Team Lead",
          company: "Rajasthan IT Day Hackathon",
          company_url: "https://raj-it-hackathon.pwskills.com/",
          logo_path: "rajasthan_it_day_logo.png",
          duration: "March 2023",
          location: "Jaipur, Rajasthan",
          description:
            "Rajasthan It Day Hackathon is a 36-hour non-stop coding marathon aimed at finding effective solutions to promote and improve the state’s IT and e-governance initiatives. We Developed a solution to solve Rajasthan's massive unemployment problem.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "NSS Volunteer",
          company: "National Service Scheme",
          company_url: "https://www.facebook.com/nssgvp/",
          logo_path: "nss_logo.png",
          duration: "February 2022 - Present",
          location: "Visakhapatnam, Andhra Pradesh",
          description:
            "The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by Ministry of Youth Affairs & Sports Govt. of India, popularly known as NSS was launched in Gandhiji’s Birth Centenary Year 1969.Actively participated in many events organized by NSS.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects, Web Applications and Mobile Applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "viswa3.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@yaramanediviswes",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Seethanagaram, parvatipuram manyam(district), Andhra Pradesh, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/AXMSXcdQXwV1gXMq5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
