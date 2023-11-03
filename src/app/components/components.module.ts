import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesModule } from '../directives/directives.module';
@NgModule({
    declarations: [HeaderComponent, ExperienceCardComponent],
    imports: [CommonModule, DirectivesModule],
    exports: [HeaderComponent, ExperienceCardComponent],
})
export class ComponentsModule {}
