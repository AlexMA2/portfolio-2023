import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

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
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class AboutModule {}
