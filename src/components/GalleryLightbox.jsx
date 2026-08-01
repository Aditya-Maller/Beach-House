import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(15, 34, 61, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      {/* Top Header */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '24px',
        right: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ffffff',
        zIndex: 2010
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-gold)' }}>
          {currentImage.title || '303 OYSTER BAY'} ({currentIndex + 1} / {images.length})
        </div>
        <button 
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
        >
          <X size={30} />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.title || 'Gallery image'}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        />

        {/* Previous Button */}
        <button
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: '-20px',
            background: 'rgba(15, 34, 61, 0.8)',
            border: '1px solid var(--color-gold)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          style={{
            position: 'absolute',
            right: '-20px',
            background: 'rgba(15, 34, 61, 0.8)',
            border: '1px solid var(--color-gold)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Caption Footer */}
      {currentImage.caption && (
        <div style={{
          marginTop: '16px',
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '600px',
          fontSize: '0.95rem'
        }}>
          {currentImage.caption}
        </div>
      )}
    </div>
  );
}
