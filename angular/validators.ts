import { YouTubeVideoRegex } from './regexes';

export const YouTubeUrlValidator = (control: AbstractControl): ValidationErrors | null => {
    return YouTubeVideoRegex.test(control.value?.trim()) ? null : { url: 'Invalid YouTube video url' };
};
