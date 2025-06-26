// i18n.tokens.ts
import { InjectionToken } from '@angular/core';

export const AVAILABLE_LANGUAGES = new InjectionToken<string[]>(
    'AvailableLanguages'
);
