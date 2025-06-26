import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LANGUAGES } from './shared/tokens/i18n.tokens';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private availableLangs = inject(AVAILABLE_LANGUAGES);
    loadingPage = false;
    constructor(translate: TranslateService, private router: Router) {
        translate.addLangs(this.availableLangs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        localStorage.setItem('lang', 'en');
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.loadingPage = true;
            } else if (event instanceof NavigationEnd) {
                this.loadingPage = false;
            }
        });
    }
}
