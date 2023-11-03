import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
    declarations: [HeaderComponent, ExperienceCardComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, ExperienceCardComponent],
})
export class ComponentsModule {}
