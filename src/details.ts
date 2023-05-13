export type Position =
  | "Software Engineer Trainee"
  | "Junior Software Engineer"
  | "Software Engineer"
  | "Senior Software Engineer";

export interface EmploymentPeroid {
  id: number;
  name: string;
  positions: Position[];
  startDate: Date;
  endDate: Date;
}

export interface Project {
  id: number;
  employmentPeriodId: number;
  name: string;
  goal: string;
  technologies: string[];
  tasks: string[];
  duration_months: number;
}

export const employmentPeriods: EmploymentPeroid[] = [
  {
    id: 1,
    name: "AdNovum Hungary Kft",
    positions: ["Software Engineer Trainee", "Junior Software Engineer"],
    startDate: new Date("2016-04-01"),
    endDate: new Date("2017-10-31"),
  },
  {
    id: 2,
    name: "GG Kft",
    positions: ["Software Engineer"],
    startDate: new Date("2017-11-01"),
    endDate: new Date("2019-03-31"),
  },
  {
    id: 3,
    name: "KUKA Hungaria Kft",
    positions: ["Software Engineer"],
    startDate: new Date("2019-09-01"),
    endDate: new Date("2019-10-31"),
  },
  {
    id: 4,
    name: "GG Kft",
    positions: ["Software Engineer", "Senior Software Engineer"],
    startDate: new Date("2021-03-01"),
    endDate: new Date("2023-06-31"),
  },
];

export const details: Project[] = [
  {
    id: 1,
    employmentPeriodId: 1,
    name: "Trainee project",
    goal: "Investigating RxJava integration into the company toolbox",
    technologies: ["SVN", "Maven", "Java", "JavaScript", "RxJava"],
    tasks: [
      "Creating some web app that utilizes RxJava",
      "Holding a presentation about the app and my findings to my colleagues",
    ],
    duration_months: 2,
  },
  {
    id: 2,
    employmentPeriodId: 1,
    name: "UBS Mobile Banking App",
    goal: "Cross-platform mobile banking web app for Union Bank Switzerland",
    technologies: [
      "SVN",
      "Ant",
      "JavaScript (ES5)",
      "Apache Cordova",
      "jQuery",
      "Karma & Jasmine",
      "RequireJS",
      "Objective C",
      "Java (Android)",
      "Shell",
    ],
    tasks: ["Frontend bug fixing and change requests about login, navigation, and native functionality."],
    duration_months: 10,
  },
  {
    id: 3,
    employmentPeriodId: 1,
    name: "LafargeHolcim LOGON",
    goal: "Rewriting the old delivery scheduling page in a logistics web app, the main goal was increasing the page's performance",
    technologies: [
      "git",
      "npm",
      "Gradle",
      "TypeScript",
      "Angular",
      "Karma & Jasmine",
      "RxJS",
      "@ngrx/store",
      "@ngrx/effects",
    ],
    tasks: ["Frontend implementation"],
    duration_months: 7,
  },
  {
    id: 4,
    employmentPeriodId: 2,
    name: "IKOutdoor Campaign Manager",
    goal: "A web app to track details (e.g. geolocation, photos, campaigns) about billboards",
    technologies: ["git", "npm", "gulp", "JavaScript", "AngularJS", "nodeJS", "Strapi", "MySQL"],
    tasks: ["Full stack development"],
    duration_months: 4,
  },
  {
    id: 5,
    employmentPeriodId: 2,
    name: "Kera",
    goal: "A web app to manage delivery notes for an agricultural store",
    technologies: [
      "git",
      "npm",
      "Yarn",
      "TypeScript",
      "Angular",
      "RxJS",
      "JavaScript",
      "nodeJS",
      "hapi.js",
      "Firebird DB",
    ],
    tasks: ["Full stack development"],
    duration_months: 2,
  },
  {
    id: 6,
    employmentPeriodId: 2,
    name: "MediaCom MDigital",
    goal: "A web app to track campaigns and advertisements for a marketing company",
    technologies: [
      "git",
      "npm",
      "Yarn",
      "TypeScript",
      "Angular",
      "Karma & Jasmine",
      "RxJS",
      "@ngrx/store",
      "@ngrx/effects",
      "nodeJS",
      "hapiJS",
      "sequelize",
      "MSSQL",
    ],
    tasks: ["Full stack development, Sonar introduction, some minor dev ops tasks"],
    duration_months: 13,
  },
  {
    id: 7,
    employmentPeriodId: 3,
    name: "KUKA Cloud Software",
    goal: "A software to control industrial robotic arms",
    technologies: ["git", "npm", "TypeScript", "Vue.js", "Jest", "nodeJS", "express", "Docker"],
    tasks: ["Frontend implementation", "LSP implementation for the KUKA Robotics Language"],
    duration_months: 2,
  },
  {
    id: 8,
    employmentPeriodId: 4,
    name: "Bator",
    goal: "An online classroom for language classes, with feedback powered by AI",
    technologies: ["git", "django", "Angular", "Docker"],
    tasks: ["Fullstack development"],
    duration_months: 8,
  },
  {
    id: 9,
    employmentPeriodId: 4,
    name: "Consor Policy Manager",
    goal: "An insurance management platform",
    technologies: ["git", "Java", "Vaadin", "Docker"],
    tasks: ["Frontend implementation"],
    duration_months: 1,
  },
  {
    id: 10,
    employmentPeriodId: 4,
    name: "MediaCom Timesheet Tool",
    goal: "Employee worktime management software",
    technologies: ["git", "django", "HTMX", "Docker"],
    tasks: ["Fullstack development"],
    duration_months: 8,
  },
  {
    id: 11,
    employmentPeriodId: 4,
    name: "Axis Aviation App",
    goal: "Aircraft inventory and maintenance management, and flight scheduling apps",
    technologies: ["git", "Angular", "Ionic", "Docker"],
    tasks: ["Frontend development"],
    duration_months: 6,
  },
  // TODO: add kingrass and annanow?
];
