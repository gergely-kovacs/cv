export type Position =
    | 'Software Engineer Trainee'
    | 'Junior Software Engineer'
    | 'Software Engineer'
    | 'Senior Software Engineer';

export interface EmploymentPeroid {
    id: number;
    employerId: number;
    positions: Position[];
    startDate: Date;
    endDate: Date;
    website: string;
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

export interface Employer {
    id: number;
    name: string;
    website: string;
}

export const clients: Employer[] = [
    {
        id: 1,
        name: 'UBS',
        website: 'https://www.ubs.com/global/en.html',
    },
    {
        id: 2,
        name: 'Holcim',
        website: 'https://www.holcim.com/',
    },
    {
        id: 3,
        name: 'Mediacom',
        website: 'https://www.essencemediacom.com/',
    },
    {
        id: 4,
        name: 'Axis Aviation',
        website: 'https://axis-aviation.com/',
    },
];

export const employers: Employer[] = [
    {
        id: 1,
        name: 'AdNovum Hungary Kft',
        website: 'https://www.adnovum.com/',
    },
    {
        id: 2,
        name: 'GG Development Kft',
        website: 'https://www.gg.dev/',
    },
    {
        id: 3,
        name: 'KUKA Hungaria Kft',
        website: 'https://www.kuka.com/',
    },
];

export const employmentPeriods: EmploymentPeroid[] = [
    {
        id: 1,
        employerId: 1,
        positions: ['Software Engineer Trainee', 'Junior Software Engineer'],
        startDate: new Date('2016-04-01'),
        endDate: new Date('2017-10-31'),
        website: 'https://www.adnovum.com/',
    },
    {
        id: 2,
        employerId: 2,
        positions: ['Software Engineer'],
        startDate: new Date('2017-11-01'),
        endDate: new Date('2019-03-31'),
        website: 'https://www.gg.dev/',
    },
    {
        id: 3,
        employerId: 3,
        positions: ['Software Engineer'],
        startDate: new Date('2019-09-01'),
        endDate: new Date('2019-10-31'),
        website: 'https://www.kuka.com/',
    },
    {
        id: 4,
        employerId: 2,
        positions: ['Software Engineer', 'Senior Software Engineer'],
        startDate: new Date('2021-03-01'),
        endDate: new Date('2023-06-31'),
        website: 'https://www.gg.dev/',
    },
];

export const projects: Project[] = [
    {
        id: 1,
        employmentPeriodId: 1,
        name: 'Trainee project',
        goal: 'Investigating RxJava integration into the company toolbox',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SVN', 'Java', 'Maven', 'RxJava'],
        tasks: [
            'Creating some web app that utilizes RxJava',
            'Holding a presentation about the app and my findings to my colleagues',
        ],
        duration_months: 2,
    },
    {
        id: 2,
        employmentPeriodId: 1,
        name: 'UBS Mobile Banking App',
        goal: 'Cross-platform mobile banking web app for Union Bank Switzerland',
        technologies: [
            'HTML',
            'CSS',
            'SVN',
            'Ant',
            'JavaScript',
            'Cordova',
            'jQuery',
            'Karma & Jasmine',
            'RequireJS',
            'Objective C',
            'Java (Android)',
            'Shell',
        ],
        tasks: ['Frontend bug fixing and change requests about login, navigation, and native functionality.'],
        duration_months: 10,
    },
    {
        id: 3,
        employmentPeriodId: 1,
        name: 'LafargeHolcim LOGON',
        goal: "Rewriting the old delivery scheduling page in a logistics web app, the main goal was increasing the page's performance",
        technologies: [
            'HTML',
            'CSS',
            'Sass',
            'git',
            'Gradle',
            'TypeScript',
            'Angular',
            'Karma & Jasmine',
            'RxJS',
            '@ngrx/store',
            '@ngrx/effects',
        ],
        tasks: ['Frontend implementation'],
        duration_months: 7,
    },
    {
        id: 4,
        employmentPeriodId: 2,
        name: 'IKOutdoor Campaign Manager',
        goal: 'A web app to track details (e.g. geolocation, photos, campaigns) about billboards',
        technologies: ['HTML', 'CSS', 'JavaScript', 'git', 'gulp', 'AngularJS', 'nodeJS', 'Strapi', 'MySQL'],
        tasks: ['Full stack development'],
        duration_months: 4,
    },
    {
        id: 5,
        employmentPeriodId: 2,
        name: 'Kera',
        goal: 'A web app to manage delivery notes for an agricultural store',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'git',
            'Yarn',
            'Angular',
            'RxJS',
            'nodeJS',
            'hapi.js',
            'Firebird DB',
        ],
        tasks: ['Full stack development'],
        duration_months: 2,
    },
    {
        id: 6,
        employmentPeriodId: 2,
        name: 'Mediacom MDigital',
        goal: 'A web app to track campaigns and advertisements for a marketing company',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'git',
            'npm',
            'Yarn',
            'Angular',
            'Karma & Jasmine',
            'RxJS',
            '@ngrx/store',
            '@ngrx/effects',
            'nodeJS',
            'hapiJS',
            'sequelize',
            'MSSQL',
        ],
        tasks: ['Full stack development, Sonar introduction, some minor dev ops tasks'],
        duration_months: 13,
    },
    {
        id: 7,
        employmentPeriodId: 3,
        name: 'KUKA Cloud Software',
        goal: 'A code editor and runner to control industrial robotic arms',
        technologies: ['HTML', 'CSS', 'TypeScript', 'git', 'Docker', 'npm', 'Vue.js', 'Jest', 'nodeJS', 'express'],
        tasks: ['Frontend implementation', 'LSP implementation for the KUKA Robotics Language'],
        duration_months: 2,
    },
    {
        id: 8,
        employmentPeriodId: 4,
        name: 'Bator',
        goal: 'An online classroom for language classes, with feedback powered by AI',
        technologies: ['HTML', 'CSS', 'TypeScript', 'git', 'Docker', 'npm', 'django', 'Angular'],
        tasks: ['Fullstack development'],
        duration_months: 8,
    },
    {
        id: 9,
        employmentPeriodId: 4,
        name: 'Consor Policy Manager',
        goal: 'An insurance management platform',
        technologies: ['CSS', 'git', 'Docker', 'Java', 'Vaadin'],
        tasks: ['Frontend implementation'],
        duration_months: 1,
    },
    {
        id: 10,
        employmentPeriodId: 4,
        name: 'Mediacom Timesheet Tool',
        goal: 'Employee worktime management software',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Docker', 'git', 'django', 'HTMX'],
        tasks: ['Fullstack development'],
        duration_months: 8,
    },
    {
        id: 11,
        employmentPeriodId: 4,
        name: 'Axis Aviation App',
        goal: 'Aircraft inventory and maintenance management, and flight scheduling apps',
        technologies: ['HTML', 'CSS', 'TypeScript', 'git', 'Docker', 'Angular', 'Ionic'],
        tasks: ['Frontend development'],
        duration_months: 6,
    },
    {
        id: 12,
        employmentPeriodId: 4,
        name: 'Kingrass',
        goal: 'Plastic grass website migration from WordPress into Jekyll',
        technologies: ['HTML', 'CSS', 'JavaScript', 'git', 'Jekyll'],
        tasks: ['Frontend development'],
        duration_months: 2,
    },
    {
        id: 13,
        employmentPeriodId: 4,
        name: 'Annanow',
        goal: 'Allows searching for delivery providers for online purchases',
        technologies: ['HTML', 'CSS', 'JavaScript', 'git', 'Docker', 'django', 'HTMX'],
        tasks: ['Frontend development'],
        duration_months: 1,
    },
];

export const CORE_TECHNOLOGIES = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];
