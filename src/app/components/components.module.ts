import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
    declarations: [HeaderComponent, ExperienceCardComponent],
    imports: [CommonModule, TranslateModule],
    exports: [HeaderComponent, ExperienceCardComponent],
})
export class ComponentsModule {}
