import React from 'react';
import { 
  Bed, 
  Users, 
  Wifi, 
  Utensils, 
  Car, 
  Key, 
  CigaretteOff, 
  Compass, 
  MapPin, 
  Star, 
  PhoneCall, 
  MessageSquare, 
  CalendarCheck,
  ArrowDown,
  ChevronRight
} from 'lucide-react';
import { propertyInfo, homeExperience, guestReviews } from '../data/propertyData';
import MediaRenderer from './MediaRenderer';

// Import image assets
import homeHeroImg from '../../Home.PNG';
import arrivalImg from '../../Arrival.html.png';
import inAroundImg from '../../In and Aorund .png';
import stayImg from '../../The Stay.png';

export default function HomePage({ onSelectTab, onOpenBook }) {
  const iconMap = {
    Bed: Bed,
    Users: Users,
    Wifi: Wifi,
    Utensils: Utensils,
    Car: Car,
    Key: Key,
    CigaretteOff: CigaretteOff
  };

  const experienceImages = [homeHeroImg, arrivalImg, inAroundImg, stayImg];

  return (
    <div className="page-container">
      {/* Hero Banner Section */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${homeHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '12px', background: 'rgba(212, 175, 55, 0.25)', color: '#FFD700' }}>
            BEACHFRONT STAY · SURATHKAL, MANGALURU
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3.2rem',
            fontWeight: '700',
            lineHeight: '1.05',
            color: '#ffffff',
            letterSpacing: '0.04em',
            marginBottom: '12px'
          }}>
            303 OYSTER BAY
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#e5e7eb',
            maxWidth: '540px',
            marginBottom: '24px',
            lineHeight: '1.5'
          }}>
            {propertyInfo.heroSubtitle}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onSelectTab('stay')}
              className="btn-primary"
            >
              EXPLORE THE STAY
              <ArrowDown size={16} />
            </button>
            <button 
              onClick={() => onSelectTab('checkin')}
              className="btn-secondary"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: '#ffffff' }}
            >
              <Key size={16} />
              SELF CHECK-IN
            </button>
          </div>
        </div>
      </div>

      {/* Property Specs Pill Grid */}
      <div style={{
        marginTop: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '12px'
      }}>
        {propertyInfo.specs.map((spec, index) => {
          const IconComponent = iconMap[spec.icon] || Bed;
          return (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: '14px 12px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <IconComponent size={22} color="var(--color-navy)" />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-navy)' }}>
                {spec.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Feature Highlight Section: Coastal Living Brought Indoors */}
      <div 
        className="glass-card"
        style={{
          marginTop: '40px',
          padding: '28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}
      >
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '280px' }}>
          <img 
            src={stayImg} 
            alt="Coastal Living Decor" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div className="badge-tag" style={{ marginBottom: '8px' }}>SURATHKAL HERITAGE</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '12px' }}>
            COASTAL LIVING, BROUGHT INDOORS
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.7', fontStyle: 'italic' }}>
            "Inspired by the fishing village of Iddya.<br />
            Weathered by salt, sand and sea."
          </p>
          <button 
            onClick={() => onSelectTab('stay')}
            className="btn-secondary"
            style={{ marginTop: '20px' }}
          >
            Read Our Story <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Section: The Experience */}
      <div style={{ marginTop: '54px' }}>
        <h2 className="section-title">THE EXPERIENCE</h2>
        <p className="section-subtitle">Unforgettable seaside moments carefully curated for your stay</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px'
        }}>
          {homeExperience.map((exp, idx) => {
            let mediaSrc = experienceImages[idx % experienceImages.length];
            if (exp.image && exp.image.startsWith('/assets/')) {
              mediaSrc = import.meta.env.BASE_URL + exp.image.substring(1);
            }
            
            return (
            <div key={idx} className="glass-card" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => onSelectTab('gallery')}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <MediaRenderer 
                  src={mediaSrc} 
                  alt={exp.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="hover-zoom"
                />
              </div>
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '6px' }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Guest Reviews */}
      <div style={{ marginTop: '54px' }}>
        <h2 className="section-title">GUEST REVIEWS</h2>
        <p className="section-subtitle">What guests love about 303 Oyster Bay</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {guestReviews.map((rev, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '12px', color: '#E59819' }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#E59819" />
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-navy)', fontStyle: 'italic', marginBottom: '14px' }}>
                "{rev.quote}"
              </p>
              <div style={{ fontSize: '0.78rem', color: '#E59819', fontWeight: '700', letterSpacing: '0.05em' }}>
                ★ airbnb verified guest
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Getting Here Summary */}
      <div className="glass-card-navy" style={{ marginTop: '54px', padding: '32px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold)', textAlign: 'center', marginBottom: '8px' }}>
          GETTING HERE
        </h2>
        <p style={{ textAlign: 'center', color: '#e5e7eb', fontSize: '0.9rem', marginBottom: '24px' }}>
          Iddya, Surathkal • Mangaluru, Karnataka
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>Mangalore Airport</div>
            <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: '600', marginTop: '4px' }}>20 mins taxi</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>Surathkal Railway Station</div>
            <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: '600', marginTop: '4px' }}>10 mins taxi</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffffff' }}>Google Maps</div>
            <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: '600', marginTop: '4px' }}>Easy to reach</div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => onSelectTab('arrival')}
            className="btn-primary"
          >
            PLAN YOUR ARRIVAL <MapPin size={16} />
          </button>
        </div>
      </div>

      {/* Floating Bottom Quick Action Bar */}
      <div style={{
        marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px'
      }}>
        <a 
          href={`tel:${propertyInfo.hostPhone}`}
          className="btn-secondary"
          style={{ justifyContent: 'center', padding: '14px', background: '#0F223D', color: 'var(--color-gold)', borderColor: 'var(--color-gold)' }}
        >
          <PhoneCall size={18} />
          Call: {propertyInfo.hostPhone}
        </a>

        <button 
          onClick={onOpenBook}
          className="btn-primary"
          style={{ justifyContent: 'center', padding: '14px' }}
        >
          <CalendarCheck size={18} />
          DIRECT BOOKING
        </button>

        <a 
          href={`https://wa.me/${propertyInfo.whatsappNumber}?text=Hi!%20I'm%20interested%20in%20303%20Oyster%20Bay`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ justifyContent: 'center', padding: '14px' }}
        >
          <MessageSquare size={18} />
          WHATSAPP US
        </a>
      </div>
    </div>
  );
}
