import { Component } from '@angular/core';

@Component({
    selector: 'ax-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    active = 'about';

    setActive(active: string) {
        this.active = active;
    }
}
