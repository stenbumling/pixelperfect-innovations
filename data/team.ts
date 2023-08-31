export interface TeamMember {
  id: string;
  image: string;
  name: string;
  jobTitle: string;
  description: string;
  quote: string;
  presentation: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    image: '/assets/taryn.png',
    name: 'Taryn Woodlund',
    jobTitle: 'UX/UI Designer',
    description:
      'Passionate about creating user-centered designs that blend aesthetics with intuitive functionality. Believes that thoughtful design can transform digital experiences and drive meaningful user engagement.',
    quote:
      'Design is not just what it looks like and feels like. Design is how it works.',
    presentation:
      "With a strong foundation in design principles and a keen eye for detail, I'm dedicated to crafting seamless and delightful user experiences. My work bridges the gap between user needs and innovative design solutions, ensuring that every interface I create engages and delights users.",
    skills: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Figma',
      'Interaction Design',
      'Information Architecture',
      'Usability Testing',
    ],
  },
  {
    id: '2',
    image: '/assets/eleanor.png',
    name: 'Eleanor Dalhurst',
    jobTitle: 'Front End Developer',
    description:
      'Experienced in crafting responsive and interactive web interfaces that seamlessly adapt to various devices. Enjoys turning design concepts into dynamic user experiences that leave a lasting impact.',
    quote: 'The best way to predict the future is to create it.',
    presentation:
      'As a frontend developer, I bring designs to life through code, ensuring seamless user experiences across different platforms and screen sizes. My passion for clean and maintainable code, combined with an eye for design details, allows me to deliver web solutions that are as functional as they are visually appealing.',
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'Responsive Design',
      'Frontend Frameworks',
      'Unit Testing',
    ],
  },
  {
    id: '3',
    image: '/assets/gage.png',
    name: 'Gage Logan Martin',
    jobTitle: 'Back End Developer',
    description:
      'Skilled in building robust and scalable server-side solutions that power modern web applications. Enthusiastic about optimizing performance and security to ensure seamless user interactions.',
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    presentation:
      "As a back-end developer, I specialize in architecting and implementing server-side solutions that ensure the smooth functioning of web applications. My expertise in databases, APIs, and server frameworks enables me to create performant and reliable systems that meet the demands of today's dynamic digital landscape.",
    skills: [
      'Node.js',
      'RESTful APIs',
      'Database Design',
      'Database Management',
      'Server Architecture',
      'Integration Testing',
      'Security',
    ],
  },
  {
    id: '4',
    image: '/assets/lila-marie.png',
    name: 'Lila Marie Andersen',
    jobTitle: 'Full Stack Developer',
    description:
      'Bringing both front-end finesse and back-end expertise to create holistic web experiences. Enjoys collaborating across the development spectrum to deliver innovative and cohesive solutions.',
    quote: 'The only way to do great work is to love what you do.',
    presentation:
      'With a comprehensive skill set spanning both front-end and back-end technologies, I thrive in the dynamic world of full-stack development. My ability to seamlessly navigate both sides of the stack enables me to create end-to-end solutions that marry elegant design with robust functionality, resulting in web applications that are both intuitive and powerful.',
    skills: [
      'Wireframing',
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'Node.js',
      'Databases',
    ],
  },
  {
    id: '5',
    image: '/assets/marlon.png',
    name: 'Marlon Rosenberg',
    jobTitle: 'Graphic Designer',
    description:
      'Creating visually stunning and impactful designs that capture attention and communicate messages effectively. Passionate about blending artistry with functionality to create designs that resonate.',
    quote: 'Design adds value faster than it adds costs.',
    presentation:
      'With a strong artistic background and an eye for aesthetics, I am dedicated to creating compelling visual experiences. My designs harmoniously merge creativity with strategic communication, resulting in graphics that leave a lasting impression. I take pride in crafting visuals that convey stories and emotions, while also serving the goals and objectives of each project.',
    skills: [
      'Adobe Creative Suite',
      'Typography',
      'Illustration',
      'Visual Branding',
      'Visual Communication',
      'Conceptual Design',
      'Design Principles',
    ],
  },
];

export default teamMembers;
