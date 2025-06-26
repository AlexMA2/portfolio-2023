import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ax-language-selector',
    standalone: true,
    imports: [],
    templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
    private translate = inject(TranslateService);

    protected languageOptions = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
    ];

    currentLang = this.getInitialLang();

    public changeLang(event: any) {
        const lang = event.target?.value;
        if (!lang || lang === this.currentLang) return;
        this.translate.use(lang);
        this.currentLang = lang;
    }

    private getInitialLang(): string {
        return (
            localStorage.getItem('app_lang') ||
            this.translate.getBrowserLang() ||
            'en'
        );
    }
}
