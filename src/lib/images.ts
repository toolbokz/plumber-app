export type ImageData = {
    src: string;
    width: number;
    height: number;
    alt: string;
    credit?: string;
    creditUrl?: string;
};

/**
 * Fetch a photo from the Unsplash API.
 * Results are cached (revalidated weekly) so the same query returns a consistent image.
 */
export async function fetchUnsplashImage(
    query: string,
    options: {
        orientation?: "landscape" | "portrait" | "squarish";
        width?: number;
    } = {},
): Promise<ImageData | null> {
    const key = process.env.UNSPLASH_ACCESS_KEY;
    if (!key) return null;

    const params = new URLSearchParams({
        query,
        per_page: "1",
        ...(options.orientation && { orientation: options.orientation }),
    });

    try {
        const res = await fetch(
            `https://api.unsplash.com/search/photos?${params}`,
            {
                headers: { Authorization: `Client-ID ${key}` },
                next: { revalidate: 604800 },
            },
        );
        if (!res.ok) return null;

        const data = await res.json();
        const photo = data.results?.[0];
        if (!photo) return null;

        const w = options.width || 1200;
        return {
            src: `${photo.urls.raw}&w=${w}&q=80&fit=crop&auto=format`,
            width: photo.width,
            height: photo.height,
            alt: photo.alt_description || query,
            credit: photo.user?.name,
            creditUrl: photo.user?.links?.html,
        };
    } catch {
        return null;
    }
}

/**
 * Fetch a photo from the Pexels API.
 */
export async function fetchPexelsImage(
    query: string,
    options: {
        orientation?: "landscape" | "portrait" | "square";
    } = {},
): Promise<ImageData | null> {
    const key = process.env.PEXELS_API_KEY;
    if (!key) return null;

    const params = new URLSearchParams({
        query,
        per_page: "1",
        ...(options.orientation && { orientation: options.orientation }),
    });

    try {
        const res = await fetch(
            `https://api.pexels.com/v1/search?${params}`,
            {
                headers: { Authorization: key },
                next: { revalidate: 604800 },
            },
        );
        if (!res.ok) return null;

        const data = await res.json();
        const photo = data.photos?.[0];
        if (!photo) return null;

        return {
            src: photo.src.large2x || photo.src.large,
            width: photo.width,
            height: photo.height,
            alt: photo.alt || query,
            credit: photo.photographer,
            creditUrl: photo.photographer_url,
        };
    } catch {
        return null;
    }
}

/**
 * Fetch a photo from the Pixabay API.
 */
export async function fetchPixabayImage(
    query: string,
    options: {
        orientation?: "horizontal" | "vertical";
    } = {},
): Promise<ImageData | null> {
    const key = process.env.PIXABAY_API_KEY;
    if (!key) return null;

    const params = new URLSearchParams({
        key,
        q: query,
        per_page: "3",
        image_type: "photo",
        safesearch: "true",
        ...(options.orientation && { orientation: options.orientation }),
    });

    try {
        const res = await fetch(`https://pixabay.com/api/?${params}`, {
            next: { revalidate: 604800 },
        });
        if (!res.ok) return null;

        const data = await res.json();
        const photo = data.hits?.[0];
        if (!photo) return null;

        return {
            src: photo.largeImageURL,
            width: photo.imageWidth,
            height: photo.imageHeight,
            alt: photo.tags || query,
            credit: photo.user,
            creditUrl: `https://pixabay.com/users/${photo.user}-${photo.user_id}/`,
        };
    } catch {
        return null;
    }
}
