export interface TeamMember {
  id: string;
  image: string;
  name: string;
  jobTitle: string;
  description: string;
  quote: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    image: "../public/images/taryn.png",
    name: "Taryn Woodlund",
    jobTitle: "UX/UI Designer",
    description:
      "Passionate about creating user-centered designs that blend aesthetics with intuitive functionality. Believes that thoughtful design can transform digital experiences and drive meaningful user engagement.",
    quote:
      "Design is not just what it looks like and feels like. Design is how it works.",
  },
  {
    id: "2",
    image: "../public/images/eleanor.png",
    name: "Eleanor Dalhurst",
    jobTitle: "Front End Developer",
    description:
      "Experienced in crafting responsive and interactive web interfaces that seamlessly adapt to various devices. Enjoys turning design concepts into dynamic user experiences that leave a lasting impact.",
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: "3",
    image: "../public/images/gage.png",
    name: "Gage Logan Martin",
    jobTitle: "Back End Developer",
    description:
      "Skilled in building robust and scalable server-side solutions that power modern web applications. Enthusiastic about optimizing performance and security to ensure seamless user interactions.",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
  },
  {
    id: "4",
    image: "../public/images/lila-marie.png",
    name: "Lila Marie Andersen",
    jobTitle: "Full Stack Developer",
    description:
      "Bringing both front-end finesse and back-end expertise to create holistic web experiences. Enjoys collaborating across the development spectrum to deliver innovative and cohesive solutions.",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: "5",
    image: "../public/images/marlon.png",
    name: "Marlon Rosenberg",
    jobTitle: "Graphic Designer",
    description:
      "Creating visually stunning and impactful designs that capture attention and communicate messages effectively. Passionate about blending artistry with functionality to create designs that resonate.",
    quote: "Design adds value faster than it adds costs.",
  },
];

export default teamMembers;
