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
    endDate: new Date("2017-11-01"),
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
];
