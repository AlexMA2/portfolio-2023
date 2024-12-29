import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/components/experience-card/experience-card.component';
import { TechEnum } from 'src/app/components/tech-tag/tech-tag.component';
import { EXPERIENCES } from './skills.model';

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
        TechEnum.FIREBASE,
        TechEnum.CYPRESS,
        TechEnum.JASMINE,
        TechEnum.APEXCHART,
        TechEnum.NET,
    ];

    selectedSkill?: TechEnum;

    experiences: Experience[] = [];
    filteredExperiences: Experience[] = [];

    ngOnInit(): void {
        this.experiences = EXPERIENCES;

        this.filteredExperiences = [...this.experiences];
    }

    selectSkill(skill: TechEnum): void {
        if (skill === this.selectedSkill) {
            this.selectedSkill = undefined;
            this.filteredExperiences = this.experiences;
            return;
        }

        this.selectedSkill = skill;

        this.filteredExperiences = this.experiences.filter((experience) => {
            return experience.technologiesUsed.some(
                (tech) => tech.technology === skill
            );
        });
    }
}
