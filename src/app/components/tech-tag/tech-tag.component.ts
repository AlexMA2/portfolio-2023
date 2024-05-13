import { Component, Input } from '@angular/core';

export enum TechEnum {
    ANGULAR = 'angular',
    REACT = 'react',
    HTML = 'html',
    CSS = 'css',
    JAVASCRIPT = 'javascript',
    TYPESCRIPT = 'typescript',
    SQL = 'sql',
    TAILWIND = 'tailwind',
    GRAPHQL = 'graphql',
    FIREBASE = 'firebase',
    CYPRESS = 'cypress',
    APOLLO = 'apollo',
    JASMINE = 'jasmine',
    APEXCHART = 'apexchart',
    NET = '.net',
}

@Component({
    selector: 'ax-tech-tag',
    templateUrl: './tech-tag.component.html',
})
export class TechTagComponent {
    @Input() tech: TechEnum = TechEnum.ANGULAR;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() color: 'primary' | 'secondary' | 'transparent' | 'none' =
        'transparent';
}
