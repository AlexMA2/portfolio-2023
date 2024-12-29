import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from './header.model';

@Component({
    selector: 'ax-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    active: NavLink = 'about-me';

    constructor(private router: Router) {}

    ngOnInit(): void {
        const path = window.location.pathname.split('/')[1] as NavLink;

        this.active = path || 'about-me';
    }

    setActive(active: NavLink) {
        this.active = active;
        this.router.navigate([active]);
    }
}
