export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const education = [ 
  {
    id: 1,
    name: 'Bachelors of Science in Cybersecurity',
    position: 'University of Nebraska at Omaha',
    img: 'assets/UNO.png',
    attained:
      'Attained: August 2022',
  },
  {
    id: 2,
    name: 'Network+',
    position: 'CompTIA',
    img: 'assets/networkplus.jpg',
    attained:
    'Attained: IN PROGRESS',
  },
  {
    id: 3,
    name: 'Security+',
    position: 'CompTIA',
    img: 'assets/securityplus.png',
    attained:
      'Attained: IN PROGRESS',
  },
];

export const myProjects = [
  {
    title: 'Work in progress',
    desc: 'Work in progress',
    subdesc:
      'Future projects will be displayed here! If you would like to check out the functionality, click on the arrows down below. What you will see is not a project of mine but of a youtuber who I followed to create this website.',
    href: 'https://octaviomunozreynoso.net/',
    texture: '/textures/project/static.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  }, 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Fast Enterprises',
    pos: 'Technical Team Member',
    duration: 'June 2023 - March 2024',
    title: "In my role, I troubleshot and resolved technical issues for both clients and internal users, ensuring all systems met performance standards. I proactively identified and addressed system problems while implementing new features and enhancements, such as shortcuts. Additionally, I utilized Excel and a ticketing system to track tasks and developed SQL scripts to streamline daily operations.",
    icon: '/assets/fast.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Marriott',
    pos: 'Bellman',
    duration: 'June 2022 - May 2023',
    title: "As a bellman, I assisted guests with their luggage and ensured a smooth check-in and check-out experience. I also drove the hotel shuttle, providing safe and timely transportation for guests to and from local destinations. My focus was on delivering excellent customer service and ensuring a positive guest experience throughout their stay.",
    icon: '/assets/marriott.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Amazon',
    pos: 'Warehouse Associate',
    duration: 'April 2019 - September 2021',
    title: "I supported management by guiding employees to meet performance goals and contributed to audits while tracking package issues. Additionally, I trained eight new hires to ensure they developed the skills needed for efficient work. My focus was on fostering teamwork and improving overall operational effectiveness.",
    icon: '/assets/Amazon.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'MercyOne',
    pos: 'Certified Nursing Assistant',
    duration: 'October 2017 - January 2019',
    title: "I supported nurses and assisted patients with daily activities, ensuring comfort and well-being. I managed tasks in a fast-paced environment while maintaining a compassionate approach. I also monitored vital signs and documented patient progress to support quality care.",
    icon: '/assets/mercy.svg',
    animation: 'victory',
  },
  {
    id: 5,
    name: 'The Game Shoppe',
    pos: 'Capstone',
    duration: 'May 2021 - June 2021',
    title: "I assisted in developing a database for special orders at The Game Shoppe, ensuring efficient tracking and management of inventory. Additionally, I identified potential security threats and implemented policies to mitigate risks. My work contributed to a more secure and streamlined ordering process for the business.",
    icon: '/assets/shop.svg',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'Lean2Surf Website',
    pos: 'Capstone',
    duration: 'August 2021 - December 2021',
    title: "I assisted in developing the Learn2Surf website, which teaches students basic cybersecurity concepts in an engaging way. I contributed to creating educational content and collaborated with a team to meet project deadlines efficiently. Additionally, I ensured the website met high standards of usability for an optimal user experience.",
    icon: '/assets/computer.svg',
    animation: 'salute',
  },
];

export const programLang = [
  {
    id: 1,
    name: 'ARM',
    path: '/assets/arm.svg',
  },
  {
    id: 2,
    name: 'Bash',
    path: '/assets/bash.svg',
  },
  {
    id: 3,
    name: 'C',
    path: '/assets/c.svg',
  },
  {
    id: 4,
    name: 'C++',
    path: '/assets/cpp.svg',
  },
  {
    id: 5,
    name: ' CSS',
    path: '/assets/css.svg',
  },
  {
    id: 6,
    name: 'HTML',
    path: '/assets/html.svg',
  },
  {
    id: 7,
    name: 'Java',
    path: '/assets/java.svg',
  },
  {
    id: 8,
    name: 'JavaScript',
    path: '/assets/javascript.svg',
  },
  {
    id: 9,
    name: 'Python',
    path: '/assets/python.svg',
  },
  {
    id: 10,
    name: 'SQL',
    path: '/assets/sql.svg',
  },
];
