import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ax-about',
    templateUrl: './about.component.html',
})
export class AboutComponent implements AfterViewInit {
    @ViewChild('boxMessage') boxMessage!: ElementRef<HTMLDivElement>;

    arrowPosition: Record<'top' | 'left', number> = {
        top: 0,
        left: 0,
    };

    constructor() {}

    ngAfterViewInit(): void {
        const boxMessage =
            this.boxMessage.nativeElement.getBoundingClientRect();

        const left = boxMessage.width - 2;
        const top = boxMessage.bottom - boxMessage.height + 2;

        setTimeout(() => {
            this.arrowPosition.left = left;
            this.arrowPosition.top = top;
            this.arrowPosition = { ...this.arrowPosition };
        });
    }
}
