import { Component, Input } from '@angular/core';

export enum TechEnum {
    ANGULAR = 'angular',
    REACT = 'react',
    HTML = 'html',
    CSS = 'css',
    JAVASCRIPT = 'javascript',
    TYPESCRIPT = 'typescript',
    NODEJS = 'nodejs',
    EXPRESS = 'express',
    MONGODB = 'mongodb',
    SQL = 'sql',
    TAILWIND = 'tailwind',
    GRAPHQL = 'graphql',
}

@Component({
    selector: 'ax-tech-tag',
    templateUrl: './tech-tag.component.html',
})
export class TechTagComponent {
    @Input() tech: TechEnum = TechEnum.ANGULAR;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() color: 'primary' | 'secondary' | 'transparent' = 'transparent';
}
