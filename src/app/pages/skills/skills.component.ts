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

    ngOnInit(): void {
        this.experiences.push({
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
                sourceCode: 'https://github.com/AlexMA2/CalculatorGame-Angular',
                deployment: '',
                description:
                    'A calculator game that challenges the player to solve math problems quickly.',
            },
            endDate: '2024-03-04',
            startDate: '2024-04-06',
        });
    }
}
