import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/components/experience-card/experience-card.component';
import { TechEnum } from 'src/app/components/tech-tag/tech-tag.component';

@Component({
    selector: 'ax-skills',
    templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
    skills: TechEnum[] = [
        TechEnum.ANGULAR,
        TechEnum.REACT,
        TechEnum.HTML,
        TechEnum.CSS,
        TechEnum.JAVASCRIPT,
        TechEnum.TYPESCRIPT,
        TechEnum.SQL,
        TechEnum.TAILWIND,
        TechEnum.GRAPHQL,
    ];

    selectedSkill?: TechEnum;

    experiences: Experience[] = [];
    filteredExperiences: Experience[] = [];

    ngOnInit(): void {
        this.experiences = [
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
                ],
                about: {
                    sourceCode:
                        'https://github.com/AlexMA2/CalculatorGame-Angular',
                    deployment: 'https://thecalculatorgame.netlify.app/home',
                    description:
                        'A calculator game that challenges the player to solve math problems quickly.',
                },
                startDate: '2024-01-11',
                endDate: '2024-03-20',
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
                        description:
                            'Used to display data in a visually appealing way',
                    },
                ],
                about: {
                    description:
                        'I worked on the frontend of the landing page for a startup company. I designed the layout, implemented the design, and connected the frontend to the backend.',
                },
                startDate: '2023-01-15',
                endDate: '2024-04-30',
            },
        ];

        this.filteredExperiences = [...this.experiences];
    }

    selectSkill(skill: TechEnum): void {
        this.selectedSkill = skill;

        this.filteredExperiences = this.experiences.filter((experience) => {
            return experience.technologiesUsed.some(
                (tech) => tech.technology === skill
            );
        });
    }
}
