import React, { useState } from 'react';
import { Play, Maximize2, Star, PhoneCall, CalendarCheck } from 'lucide-react';
import GalleryLightbox from '../components/GalleryLightbox';
import { guestReviews, propertyInfo } from '../data/propertyData';

// Image assets
import galleryHeroImg from '../../Gallery.png';
import homeImg from '../../Home.PNG';
import arrivalImg from '../../Arrival.html.png';
import beachMgmtImg from '../../Beach Management .png';
import comfortImg from '../../Comfort & Living.png';
import kitchen1Img from '../../Kitchen 1.png';
import kitchen2Img from '../../Kitchen 2.png';
import selfCheckImg from '../../Self Check in.png';
import stayGuideImg from '../../Stay Guide1.PNG';
import theStayImg from '../../The Stay.png';
import utilityImg from '../../Utility & Convenience .png';

export default function GalleryPage({ onOpenBook }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages = [
    { src: galleryHeroImg, title: "MOMENTS AT 303 OYSTER BAY", caption: "Balcony living room with unobstructed sunset views over the Arabian Sea." },
    { src: homeImg, title: "LIVING ROOM & SEA LOUNGE", caption: "Sunlit interior inspired by Surathkal coastal heritage." },
    { src: theStayImg, title: "MASTER BEDROOM & SURF DECOR", caption: "Custom handcrafted wooden interiors and original Mantra Surf School surfboard." },
    { src: beachMgmtImg, title: "BALCONY SUNSET VISTA", caption: "Watch the golden sun dip into the sea every evening." },
    { src: comfortImg, title: "COMFORT & AIR CONDITIONING", caption: "Dedicated AC units and modern amenities in both bedrooms." },
    { src: kitchen1Img, title: "MODERN KITCHEN & PURIFIER", caption: "Equipped with live-filtration water purifier and appliances." },
    { src: kitchen2Img, title: "INDUCTION HOB & CHIMNEY", caption: "Touch control cooking and quiet exhaust ventilation." },
    { src: selfCheckImg, title: "SMART DIGITAL DOOR LOCK", caption: "Keyless self check-in smart lock keypad." },
    { src: arrivalImg, title: "EXTERIOR & PARKING BAY 303", caption: "Oyster Bay luxury complex with dedicated bay 303." }
  ];

  const videos = [
    { title: "SUNSET FROM THE BALCONY", desc: "Golden hour over Surathkal beach", thumbnail: beachMgmtImg },
    { title: "WALKTHROUGH OF 303 OYSTER BAY", desc: "Full tour of bedrooms & living lounge", thumbnail: homeImg },
    { title: "SURATHKAL BEACH AT SUNSET", desc: "Just 450m from your doorstep", thumbnail: arrivalImg },
    { title: "EVENING ARRIVAL AT 303 OYSTER BAY", desc: "Night illumination & smart lock access", thumbnail: selfCheckImg }
  ];

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="page-container">
      {/* Hero Banner Header */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${galleryHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '360px'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '10px' }}>GALLERY</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.8rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            MOMENTS AT<br />303 OYSTER BAY
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#e5e7eb', maxWidth: '500px' }}>
            A glimpse of your stay by the sea.
          </p>
          <button 
            onClick={() => openLightbox(0)}
            className="btn-primary"
            style={{ marginTop: '20px' }}
          >
            <Maximize2 size={16} /> Open Fullscreen Gallery
          </button>
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <div style={{ marginTop: '48px' }}>
        <h2 className="section-title">PHOTO GALLERY</h2>
        <p className="section-subtitle">Explore the spaces, views and textures of Oyster Bay</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px'
        }}>
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              onClick={() => openLightbox(idx)}
              style={{ overflow: 'hidden', cursor: 'pointer', height: '220px', position: 'relative' }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(15, 34, 61, 0.85) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px'
              }}>
                <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.85rem' }}>
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Videos */}
      <div style={{ marginTop: '54px' }}>
        <h2 className="section-title">VIDEO TOURS</h2>
        <p className="section-subtitle">Immersive short clips around the stay and beach</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {videos.map((vid, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => alert(`Playing video: ${vid.title}`)}
            >
              <div style={{ position: 'relative', height: '170px' }}>
                <img 
                  src={vid.thumbnail} 
                  alt={vid.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15, 34, 61, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.9)',
                    color: 'var(--color-navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-gold)'
                  }}>
                    <Play size={24} fill="var(--color-navy)" style={{ marginLeft: '3px' }} />
                  </div>
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '4px' }}>
                  {vid.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {vid.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Reviews Section */}
      <div style={{ marginTop: '54px' }}>
        <h2 className="section-title">GUEST STORIES</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {guestReviews.map((rev, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '10px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-amber)" color="var(--color-amber)" />
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--color-navy)', fontStyle: 'italic' }}>
                "{rev.quote}"
              </p>
              <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--color-gold-hover)', fontWeight: '700' }}>
                — {rev.author}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Booking Banner */}
      <div className="glass-card" style={{ marginTop: '54px', padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-navy)' }}>READY TO BOOK YOUR STAY?</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Host Direct Phone: {propertyInfo.hostPhone}</p>
        </div>
        <button onClick={onOpenBook} className="btn-primary">
          <CalendarCheck size={18} /> BOOK YOUR STAY NOW
        </button>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
        onNext={() => setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
      />
    </div>
  );
}
