'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type YouTubePreviewProps = {
  videoId: string;
  consentText?: string;
  thumbnailQuality?: 'maxresdefault' | 'hqdefault' | 'mqdefault';
};

export default function YouTubePreview({
  videoId,
  consentText = 'Zum Abspielen des Videos bitte klicken. Dabei werden Inhalte von YouTube geladen.',
  thumbnailQuality = 'hqdefault',
}: YouTubePreviewProps) {
  const [consentGiven, setConsentGiven] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  return (
    <div className='relative aspect-video w-full rounded overflow-hidden shadow'>
      {consentGiven ? (
        <iframe
          className='w-full h-full'
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title='YouTube Video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className='relative w-full h-full cursor-pointer group'
          onClick={() => setConsentGiven(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={'YouTube Thumbnail'}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={'object-cover transition group-hover:brightness-90'}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=='
          />
          <div className='absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-4'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-auto mb-2 h-12 w-12'
                fill='white'
                viewBox='0 0 24 24'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
              <p className='text-sm'>{consentText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
