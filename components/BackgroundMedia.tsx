"use client";

import { useEffect, useState } from 'react';

interface BackgroundMediaProps {
  src: string;
  className?: string;
}

export function BackgroundMedia({ src, className = "" }: BackgroundMediaProps) {
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

  useEffect(() => {
    const extension = src.split('.').pop()?.toLowerCase();
    if (extension === 'mp4') {
      setMediaType('video');
    } else {
      setMediaType('image');
    }
  }, [src]);

  if (mediaType === 'video') {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${className}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img 
      src={src} 
      alt="Background Media"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}