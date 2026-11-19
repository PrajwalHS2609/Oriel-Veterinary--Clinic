import React, { useState } from 'react';
import { OrielCrestMark } from './MedicalArtwork';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaFrame({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  fallbackTitle = 'Oriel Veterinary Clinic',
  loading = 'lazy',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#123A3E] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={imgClassName}
        />
      ) : (
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#123A3E] via-[#174D46] to-[#11191B]">
          <OrielCrestMark className="w-12 h-12 mb-4 opacity-90" />
          <p className="font-display text-sm font-semibold text-[#F7F4EC] tracking-wide">
            {fallbackTitle}
          </p>
          <p className="text-xs text-[#A8C6B5] mt-1 max-w-xs">{alt}</p>
        </div>
      )}
    </div>
  );
}
