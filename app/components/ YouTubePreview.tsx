'use client';

import React, {useState} from 'react';

type YouTubePreviewProps = {
    videoId: string;
    consentText?: string;
};

export default function YouTubePreview({
                                           videoId,
                                           consentText = 'Zum Abspielen des Videos bitte klicken. Dabei werden Inhalte von YouTube geladen.',
                                       }: YouTubePreviewProps) {
    const [consentGiven, setConsentGiven] = useState(false);
    const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
    const [showFallback, setShowFallback] = useState(false);

    // Multiple thumbnail qualities as fallbacks for better iOS compatibility
    const thumbnailQualities = ['maxresdefault', 'hqdefault', 'mqdefault', 'default'];
    const currentQuality = thumbnailQualities[currentThumbnailIndex];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${currentQuality}.jpg`;

    // Handle thumbnail loading errors by trying next quality or showing fallback
    const handleThumbnailError = () => {
        if (currentThumbnailIndex < thumbnailQualities.length - 1) {
            setCurrentThumbnailIndex(currentThumbnailIndex + 1);
        } else {
            setShowFallback(true);
        }
    };

    // Create a fallback thumbnail using a data URL
    const createFallbackThumbnail = () => {
        return `data:image/svg+xml,${encodeURIComponent(`
            <svg width="480" height="360" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="360" fill="#f0f0f0"/>
                <rect x="190" y="140" width="100" height="80" rx="8" fill="#ff0000"/>
                <polygon points="220,160 220,200 250,180" fill="white"/>
                <text x="240" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#666">YouTube Video</text>
            </svg>
        `)}`;
    };

    return (
        <div className="relative aspect-video w-full rounded overflow-hidden shadow">
            {consentGiven ? (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setConsentGiven(true)}
                >
                    <img
                        src={showFallback ? createFallbackThumbnail() : thumbnailUrl}
                        alt="YouTube Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover transition group-hover:brightness-90"
                        onError={handleThumbnailError}
                        loading="lazy"
                    />
                    <div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-4">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto mb-2 h-12 w-12"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <p className="text-sm">{consentText}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
