import { YouTubeVideoRegex } from './regexes';


/**
 * Converts a youtube video url to an embed url
 * @param videoUrl 
 */
export const getYoutubeEmbedUrl = (videoUrl: string): SafeResourceUrl | string => {
    if (videoUrl) {
        const match = videoUrl.match(YouTubeVideoRegex);
        if (match && match.groups?.id) {
            const id = match.groups.id;
            return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
        }
    }
    return '';
}
