import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ax-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    active: 'about-me' | 'contact' | 'skills-projects' = 'about-me';

    constructor(private router: Router) {}

    setActive(active: 'about-me' | 'contact' | 'skills-projects') {
        this.active = active;
        this.router.navigate([active]);
    }
}
