import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { DirectivesModule } from 'src/app/directives/directives.module';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule,
        RouterModule.forChild(routes),
    ],
})
export class AboutModule {}
