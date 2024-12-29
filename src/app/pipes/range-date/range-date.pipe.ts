import { Pipe, PipeTransform } from '@angular/core';

interface RangeDate {
    startDate: string;
    endDate?: string;
}

@Pipe({
    name: 'rangeDate',
    standalone: true,
})
export class RangeDatePipe implements PipeTransform {
    transform(value: RangeDate): string {
        if (!value) return '';

        const language = localStorage.getItem('lang');

        if (!language) return '';

        const clonedValue = { ...value };

        const rtf = new Intl.DateTimeFormat(language, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });
        const start = new Date(clonedValue.startDate + 'T00:00:00');

        if (!value.endDate) {
            clonedValue.endDate = new Date().toISOString().split('T')[0];
        }

        const end = new Date(clonedValue.endDate + 'T00:00:00');

        return `${rtf.format(start)} - ${rtf.format(end)}`;
    }
}
