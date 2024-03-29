const projects = [
  {
    name: "Jira clone",
    description:
      "A simple clone of the Jira software, a plateform to manage agile projects",
    key: "Jira",
    thumbnail: "backlog.png",
    tags: ["React", "MUI", "Symfony", "Postgresql"],
    features: [
      "Authentication based on JWT",
      "Projects management",
      "Product backlog",
      "Sprints management",
      "User stories management ",
      "Draggable kanban board",
      "Team collaborations",
    ],
    code: [
      {
        label: "Frontend",
        link: "https://github.com/AntsaC/Jira-clone-frontend",
      },
      {
        label: "Backend",
        link: "https://github.com/AntsaC/Jira-clone-backend",
      },
    ],
    technologies: [
      "Symfony 6",
      "Doctrine",
      "React",
      "React Mui",
      "React DND",
      "Tanstack",
      "Postgres",
      "REST",
      "PHP Unit",
      "Docker",
      "Compose",
      "Github Action",
      "CI pipeline",
    ],
    images: [
      "backlog.png",
      "board.png",
      "project.png",
      "sprint-formdialog.png",
      "sprint-story.png",
    ],
  },
  {
    name: "Fleet management",
    description:
      "Platform (a web app with mobile app) to manage fleets of companies",
    key: "Fleet",
    thumbnail: "map.PNG",
    tags: ["React", "Symfony", "Firebase", "Flutter"],
    features: [
      "Authentication based on JWT",
      "Vehicles management",
      "Users (Admin, Driver, Passenger) management",
      "Vehicle request",
      "Real-time tracking of vehicles",
      "Maintenances management",
      "Fuel management",
      "Data reporting",
      "Export PDF",
    ],
    technologies: [
      "Symfony 6",
      "Doctrine",
      "React",
      "React Mui",
      "Tanstack",
      "Flutter",
      "Firestore",
      "Postgres",
      "REST",
      "Websocket",
      "Firebase",
    ],
    images: ["map.PNG", "journal.PNG", "PDF.PNG", "rapport.PNG", "graph.PNG"],
  },
  {
    name: "Portfolio",
    description: "My portfolio as a full stack developper",
    key: "Portfolio",
    thumbnail: "hero.PNG",
    code: [
      {
        label: "Github",
        link: "https://github.com/AntsaC/portfolio",
      },
    ],
    tags: ["Next JS", "Tailwind CSS"],
    features: ["View my resume", "Projects catalog"],
    technologies: ["Next JS", "Tailwind CSS"],
    images: ["hero.PNG", "Projects.PNG", "Techno.PNG"],
  },
];

export const getProject = (key) => projects.find((p) => p.key === key);

export default projects;
