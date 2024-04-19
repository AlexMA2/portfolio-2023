import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { TechTagComponent } from './tech-tag/tech-tag.component';
@NgModule({
    declarations: [HeaderComponent, ExperienceCardComponent, TechTagComponent],
    imports: [CommonModule, TranslateModule],
    exports: [HeaderComponent, ExperienceCardComponent, TechTagComponent],
})
export class ComponentsModule {}
