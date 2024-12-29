import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { debounce, debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
    selector: 'ax-about',
    templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('boxMessage') boxMessage!: ElementRef<HTMLDivElement>;

    arrowPosition: Record<'top' | 'left', number> = {
        top: 0,
        left: 0,
    };
    resizeSubscription!: Subscription;
    loading = true;

    constructor() {}

    ngOnInit(): void {
        const resize$ = fromEvent(window, 'resize');

        this.resizeSubscription = resize$.subscribe(() => {
            if (!this.loading) {
                this.loading = true;
            }
        });

        this.resizeSubscription.add(
            resize$.pipe(debounceTime(300)).subscribe(() => {
                this.arrowPosition = this.computeTopLeft();
                this.loading = false;
            })
        );
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.arrowPosition = this.computeTopLeft();
            this.loading = false;
        });
    }

    ngOnDestroy(): void {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }

    private computeTopLeft(): Record<'top' | 'left', number> {
        const boxMessage =
            this.boxMessage.nativeElement.getBoundingClientRect();

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
