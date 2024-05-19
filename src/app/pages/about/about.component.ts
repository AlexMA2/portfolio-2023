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
        setTimeout(() => {
            this.arrowPosition = this.computeTopLeft();
        });
    }

    private computeTopLeft(): Record<'top' | 'left', number> {
        const boxMessage =
            this.boxMessage.nativeElement.getBoundingClientRect();

        console.log(
            '🚀 ~ AboutComponent ~ computeTopLeft ~ indow.innerWidth:',
            window.innerWidth,
            boxMessage
        );
        if (window.innerWidth < 1025) {
            return {
                top: boxMessage.bottom - boxMessage.height + 16,
                left: boxMessage.width / 2 - 25,
            };
        }

        return {
            top: boxMessage.bottom - boxMessage.height + 2,
            left: boxMessage.width - 2,
        };
    }
}
