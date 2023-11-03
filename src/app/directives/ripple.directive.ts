import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
@Directive({
    selector: '[axRipple]',
})
export class RippleDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}
    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        const ripple = this.renderer.createElement('div');
        this.renderer.addClass(ripple, 'ripple');
        this.renderer.appendChild(this.el.nativeElement, ripple);
        const rect = this.el.nativeElement.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        this.renderer.setStyle(ripple, 'width', `${size}px`);
        this.renderer.setStyle(ripple, 'height', `${size}px`);
        this.renderer.setStyle(
            ripple,
            'left',
            `${event.clientX - rect.left - size / 2}px`
        );
        this.renderer.setStyle(
            ripple,
            'top',
            `${event.clientY - rect.top - size / 2}px`
        );

        setTimeout(() => {
            this.renderer.removeChild(this.el.nativeElement, ripple);
        }, 600);
    }
}
