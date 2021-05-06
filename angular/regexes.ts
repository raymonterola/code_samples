// works with https://youtu.be/xg43lcItgKk or https://www.youtube.com/watch?v=xg43lcItgKk
export const YouTubeVideoRegex = new RegExp(
    '^(https:\\/\\/)(www\\.youtube\\.com|youtu\\.?be)\\/(watch\\?v=)?(?<id>[\\w-]+)'
);