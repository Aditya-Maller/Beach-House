import React from 'react';

export default function MediaRenderer({ src, alt, style, className }) {
  if (!src) return null;

  const isVideo = src.match(/\.(mp4|webm|ogg|mov)$/i);

  if (isVideo) {
    return (
      <video
        src={src}
        style={style}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return <img src={src} alt={alt} style={style} className={className} />;
}
