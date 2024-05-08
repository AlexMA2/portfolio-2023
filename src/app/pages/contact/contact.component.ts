import { Component } from '@angular/core';

@Component({
    selector: 'ax-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    socialMedias: any[] = [
        {
            name: 'LinkedIn',
            clipboard: 'https://www.linkedin.com/in/alexmamani/',
            link: 'https://www.linkedin.com/in/alexmamani/',
        },
        {
            name: 'GitHub',
            clipboard: 'https://github.com/AlexMA2',
            link: 'https://github.com/AlexMA2',
        },
        {
            name: 'Email',
            clipboard: 'alex_162001@hotmail.com',
            link: 'mailto:alex_162001@hotmail.com',
        },
    ];

    constructor() {}

    copy(clipboard: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = clipboard;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}
