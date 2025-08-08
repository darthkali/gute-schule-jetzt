import Image from 'next/image';
import React, { ReactNode } from 'react';

type ImageTextSectionProps = {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePosition?: 'left' | 'right';
  caption?: string;
  children: ReactNode;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xl';
};

export default function ImageTextFloatingSection({
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageHeight = 400,
  imagePosition = 'left',
  caption,
  children,
  size = 'xl',
}: ImageTextSectionProps) {
  const floatClass =
    imagePosition === 'right'
      ? 'lg:float-right lg:ml-4'
      : 'lg:float-left lg:mr-4';

  const sizeClasses = {
    tiny: 'max-w-xs', // 320px
    small: 'max-w-sm', // 384px
    medium: 'max-w-md', // 448px
    large: 'max-w-lg', // 512px
    xl: 'max-w-xl', // 576px
  };

  return (
    <div>
      <h2>{caption}</h2>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={`${floatClass} ${sizeClasses[size]} w-full mb-2 mx-auto  h-auto rounded shadow`}
      />
      <div className='clearfix'>{children}</div>
      <div className='clear-both'></div>
    </div>
  );
}
