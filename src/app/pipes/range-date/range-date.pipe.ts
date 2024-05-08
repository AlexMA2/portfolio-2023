import { Pipe, PipeTransform } from '@angular/core';

interface RangeDate {
    startDate: string;
    endDate: string;
}

@Pipe({
    name: 'rangeDate',
    standalone: true,
})
export class RangeDatePipe implements PipeTransform {
    transform(value: RangeDate): string {
        const language = localStorage.getItem('lang');
        console.log('🚀 ~ RangeDatePipe ~ transform ~ language:', language);
        if (!language) return '';
        const rtf = new Intl.DateTimeFormat(language, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });
        const start = new Date(value.startDate + 'T00:00:00');
        const end = new Date(value.endDate + 'T00:00:00');

        return `${rtf.format(start)} - ${rtf.format(end)}`;
    }
}
