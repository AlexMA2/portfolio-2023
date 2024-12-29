import { Component, Input } from '@angular/core';
import { TechEnum } from '../tech-tag/tech-tag.component';

export interface Experience {
    title: string;
    type: 'personal' | 'work';
    technologiesUsed: TechnologyExperience[];
    about: AboutExperience;
    startDate: string;
    endDate?: string;
}

export interface TechnologyExperience {
    technology: TechEnum;
    description: string;
}

export interface AboutExperience {
    sourceCode?: string;
    deployment?: string;
    description: string;
}

@Component({
    selector: 'ax-experience-card',
    templateUrl: './experience-card.component.html',
})
export class ExperienceCardComponent {
    @Input() experience!: Experience;
}
