import React from 'react';
import { 
  Plane, 
  Train, 
  Bus, 
  MapPin, 
  ExternalLink, 
  Car, 
  Compass, 
  ParkingSquare, 
  ArrowUpRight, 
  DoorOpen, 
  PhoneCall, 
  Key,
  ChevronRight
} from 'lucide-react';
import { arrivalRoutes, arrivalChecklist, propertyInfo } from '../data/propertyData';
import arrivalHeroImg from '../../Arrival.html.png';

export default function ArrivalPage({ onSelectTab }) {
  const openMapsQuery = (query) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  const getTransitIcon = (title) => {
    if (title.includes('Airport')) return Plane;
    if (title.includes('Railway') || title.includes('Station')) return Train;
    return Bus;
  };

  return (
    <div className="page-container">
      {/* Hero Banner Header */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${arrivalHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '340px'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '10px' }}>ARRIVING AT</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.8rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            303 OYSTER BAY
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#e5e7eb', maxWidth: '550px' }}>
            Everything you need to get here smoothly.<br />
            📍 Iddya, Surathkal • Mangaluru
          </p>
        </div>
      </div>

      {/* Section: BY AIR, RAIL & ROAD */}
      <div style={{ marginTop: '48px' }}>
        <h2 className="section-title">BY AIR, RAIL & ROAD</h2>
        <p className="section-subtitle">Distances and direct travel routes to the property</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {arrivalRoutes.map((route, idx) => {
            const Icon = getTransitIcon(route.title);
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'var(--color-navy)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                      {route.title}
                    </h3>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-amber)', marginTop: '2px' }}>
                      {route.distance}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                      {route.details}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openMapsQuery(route.mapQuery)}
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  OPEN IN MAPS <ExternalLink size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cards: Taxi Info & Local Bus Tip */}
      <div style={{
        marginTop: '36px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Car size={24} color="var(--color-amber)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-navy)' }}>
              TAXI INFORMATION
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Ola and Uber operate in Mangaluru, though availability may vary depending on the time of day and location.
          </p>
          <div style={{ marginTop: '12px', fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--color-navy)', fontWeight: '600' }}>
            If you would like assistance arranging a cab, please feel free to contact the host.
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Compass size={24} color="var(--color-amber)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-navy)' }}>
              TRAVELLING LIKE A LOCAL?
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            If you are familiar with the area and travelling by local bus from Mangaluru or Udupi, alight at <strong>Surathkal Bus Stop</strong> and take an auto-rickshaw to Oyster Bay.
          </p>
          <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--color-navy)', fontWeight: '700' }}>
            Nearest landmark: Khilriya English Medium School
          </div>
        </div>
      </div>

      {/* Section: UPON ARRIVAL */}
      <div style={{ marginTop: '54px' }}>
        <h2 className="section-title">UPON ARRIVAL</h2>
        <p className="section-subtitle">Quick directions once you reach the building</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {arrivalChecklist.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--color-amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px auto'
              }}>
                <ParkingSquare size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '6px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Host & Security Banner */}
      <div className="glass-card-navy" style={{ marginTop: '48px', padding: '28px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '16px' }}>
          NEED HELP ON THE WAY?
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <a href={`tel:${propertyInfo.hostPhone}`} className="btn-primary" style={{ padding: '10px 20px' }}>
            <PhoneCall size={16} /> Host: {propertyInfo.hostPhone}
          </a>
          <a href={`tel:${propertyInfo.securityPhone}`} className="btn-secondary" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: '#ffffff', padding: '10px 20px' }}>
            <PhoneCall size={16} /> Security: {propertyInfo.securityPhone}
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(212,175,55,0.25)', paddingTop: '20px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
            READY TO ENTER?
          </div>
          <button onClick={() => onSelectTab('checkin')} className="btn-primary" style={{ padding: '12px 28px' }}>
            <Key size={18} /> OPEN SELF CHECK-IN GUIDE <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
