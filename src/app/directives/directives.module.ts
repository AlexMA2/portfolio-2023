import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleDirective } from './ripple.directive';

@NgModule({
    declarations: [RippleDirective],
    imports: [CommonModule],
    exports: [RippleDirective],
})
export class DirectivesModule {}
