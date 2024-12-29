import { Experience } from 'src/app/components/experience-card/experience-card.component';
import { TechEnum } from 'src/app/components/tech-tag/tech-tag.component';

export const EXPERIENCES: Experience[] = [
    {
        title: 'LastMBiz Landing Page',
        type: 'work',
        technologiesUsed: [
            {
                technology: TechEnum.ANGULAR,
                description: 'Frontend framework',
            },
            {
                technology: TechEnum.TYPESCRIPT,
                description: 'Programming language',
            },
            {
                technology: TechEnum.TAILWIND,
                description: 'CSS framework',
            },
            {
                technology: TechEnum.FIREBASE,
                description:
                    'Firebase database, realtime databse, authentication, hosting',
            },
        ],
        about: {
            description:
                'I worked on the frontend of the landing page for a startup company. I designed the layout, implemented the design, and connected the frontend to the backend.',
        },
        startDate: '2022-10-02',
        endDate: '2022-11-30',
    },
    {
        title: 'Invian Web',
        type: 'work',
        technologiesUsed: [
            {
                technology: TechEnum.ANGULAR,
                description: 'Frontend framework',
            },
            {
                technology: TechEnum.TYPESCRIPT,
                description: 'Programming language',
            },
            {
                technology: TechEnum.TAILWIND,
                description: 'CSS framework',
            },
            {
                technology: TechEnum.APEXCHART,
                description: 'Used to display data in a visually appealing way',
            },
        ],
        about: {
            description:
                'I worked on the frontend of the two main apps. I gave ideas to improve the process and to make better and reusables components.',
        },
        startDate: '2023-01-15',
        endDate: undefined,
    },
    {
        title: 'Calculator Game',
        type: 'personal',
        technologiesUsed: [
            {
                technology: TechEnum.ANGULAR,
                description: 'Frontend framework',
            },
            {
                technology: TechEnum.TYPESCRIPT,
                description: 'Programming language',
            },
            {
                technology: TechEnum.TAILWIND,
                description: 'CSS framework',
            },
            {
                technology: TechEnum.GRAPHQL,
                description: 'Query language',
            },
            {
                technology: TechEnum.CYPRESS,
                description: 'E2E testing',
            },
            {
                technology: TechEnum.JASMINE,
                description: 'Unit testing',
            },
        ],
        about: {
            sourceCode: 'https://github.com/AlexMA2/CalculatorGame-Angular',
            deployment: 'https://thecalculatorgame.netlify.app/home',
            description:
                'A calculator game that challenges the player to solve math problems quickly.',
        },
        startDate: '2024-01-11',
        endDate: '2024-03-20',
    },

    {
        title: 'Apollo Server for Calculator Game',
        type: 'personal',
        technologiesUsed: [
            {
                technology: TechEnum.APOLLO,
                description: 'State management library',
            },
        ],
        about: {
            sourceCode: 'https://github.com/AlexMA2/PizzeriaAPI',
            description:
                'This project was made to serve as a graphql server for the application Calculator Game. Its used to store user data, manage tournament creations andstore the results of the games.',
        },
        startDate: '2024-04-13',
        endDate: '2024-04-08',
    },
    {
        title: 'QuickSort Visualizer',
        type: 'personal',
        technologiesUsed: [
            {
                technology: TechEnum.HTML,
                description: 'Web Structure',
            },
            {
                technology: TechEnum.JAVASCRIPT,
                description: 'Programming language',
            },
            {
                technology: TechEnum.CSS,
                description: 'Styles',
            },
        ],
        about: {
            sourceCode:
                'https://github.com/AlexMA2/Animacion-del-Algoritmo-QuickSort',
            deployment:
                'https://alexma2.github.io/Animacion-del-Algoritmo-QuickSort/',
            description:
                'An animation of the QuickSort algorithm that visualizes how the algorithm sorts an array.',
        },
        startDate: '2021-03-09',
        endDate: '2022-11-25',
    },

    {
        title: 'Pizzeria API',
        type: 'personal',
        technologiesUsed: [
            {
                technology: TechEnum.NET,
                description: 'Backend Framework',
            },
            {
                technology: TechEnum.SQL,
                description:
                    'Used to store data. I used PostgreSQL as a database',
            },
        ],
        about: {
            sourceCode: 'https://github.com/AlexMA2/apollo-server',
            description:
                'The API allows the user to create, read, update, and delete data from the database. The API is used to manage pizzas and their ingredients.',
        },
        startDate: '2022-11-21',
        endDate: '2022-12-10',
    },
];
