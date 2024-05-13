import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: SkillsComponent,
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    declarations: [SkillsComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild(routes),
        TranslateModule,
    ],
})
export class SkillsModule {}
