import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { TechTagComponent } from './tech-tag/tech-tag.component';
import { RangeDatePipe } from '../pipes/range-date/range-date.pipe';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
@NgModule({
    declarations: [HeaderComponent, ExperienceCardComponent, TechTagComponent],
    imports: [
        CommonModule,
        TranslateModule,
        RangeDatePipe,
        LanguageSelectorComponent,
    ],
    exports: [
        HeaderComponent,
        ExperienceCardComponent,
        TechTagComponent,
        LanguageSelectorComponent,
    ],
})
export class ComponentsModule {}
