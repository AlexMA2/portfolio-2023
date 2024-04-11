import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

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
        TranslateModule,
        RouterModule.forChild(routes),
    ],
})
export class AboutModule {}
