import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ax-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    active: 'about-me' | 'contact' | 'skills-projects' = 'about-me';

    constructor(private router: Router) {}

    ngOnInit(): void {
        const path = window.location.pathname.split('/')[1] as
            | 'about-me'
            | 'contact'
            | 'skills-projects';
        console.log(
            '🚀 ~ HeaderComponent ~ ngOnInit ~ path:',
            window.location.pathname,
            path
        );
        this.active = path || 'about-me';
    }

    setActive(active: 'about-me' | 'contact' | 'skills-projects') {
        this.active = active;
        this.router.navigate([active]);
    }
}
