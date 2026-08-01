import React, { useState } from 'react';
import { 
  Utensils, 
  Coffee, 
  Fish, 
  IceCream, 
  Car, 
  MapPin, 
  Heart, 
  Star, 
  ExternalLink,
  Search
} from 'lucide-react';
import { foodAndExplore } from '../data/propertyData';
import inAroundHeroImg from '../../In and Aorund .png';

export default function InAndAroundPage() {
  const [filter, setFilter] = useState('ALL');

  const { freshCatch, categories, dayTrips, hostPicks } = foodAndExplore;

  return (
    <div className="page-container">
      {/* Hero Banner Header */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${inAroundHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '340px'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '10px' }}>IN & AROUND</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.8rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            EXPLORE COAST, CULTURE & CUISINE
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#e5e7eb', maxWidth: '550px' }}>
            Our favourite places to eat, explore and experience around Surathkal, Mangaluru and the Udupi coast.
          </p>
        </div>
      </div>

      {/* Fresh Catch Highlight Banner */}
      <div className="glass-card" style={{ marginTop: '40px', padding: '28px', borderLeft: '5px solid var(--color-amber)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <Fish size={28} color="var(--color-amber)" />
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-navy)' }}>
              {freshCatch.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              {freshCatch.text}
            </p>
          </div>
        </div>

        <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--color-navy)', lineHeight: '1.8' }}>
          {freshCatch.points.map((pt, idx) => (
            <li key={idx}>
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Host Picks Horizontal Carousel */}
      <div style={{ marginTop: '48px' }}>
        <h2 className="section-title">HOST'S FAVORITE PICKS</h2>
        <p className="section-subtitle">Must-visit recommendations handpicked by your host</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px'
        }}>
          {hostPicks.map((pick, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              style={{ padding: '14px', textAlign: 'center', background: 'rgba(212, 175, 55, 0.08)' }}
            >
              <Heart size={18} color="var(--color-amber)" style={{ margin: '0 auto 6px auto' }} />
              <div style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--color-amber)', textTransform: 'uppercase' }}>
                {pick.title}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--color-navy)', marginTop: '4px' }}>
                {pick.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dining Categories */}
      {categories.map((cat, idx) => (
        <div key={idx} style={{ marginTop: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Utensils size={22} color="var(--color-amber)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-navy)' }}>
              {cat.name}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {cat.items.map((spot, sIdx) => (
              <div key={sIdx} className="glass-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-navy)' }}>
                    {spot.name}
                  </h3>
                  {spot.veg && (
                    <span style={{
                      border: '1px solid #16a34a',
                      color: '#16a34a',
                      fontSize: '0.65rem',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 'bold'
                    }}>
                      PURE VEG
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-amber)', marginBottom: '8px' }}>
                  📍 {spot.dist}
                </div>

                {spot.desc && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                    {spot.desc}
                  </p>
                )}

                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '4px' }}>
                    MUST TRY:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {spot.mustTry.map((item, tIdx) => (
                      <span key={tIdx} style={{
                        background: 'rgba(27, 54, 93, 0.07)',
                        color: 'var(--color-navy)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: '600'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Section: WORTH THE DRIVE (Day Trips) */}
      <div style={{ marginTop: '56px' }}>
        <h2 className="section-title">WORTH THE DRIVE</h2>
        <p className="section-subtitle">Scenic coastal day trips along the Udupi & Kundapura highway</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {dayTrips.map((trip, idx) => (
            <div key={idx} className="glass-card-navy" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold)' }}>
                  {trip.destination}
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#e5e7eb', fontWeight: '600' }}>
                  🚗 {trip.distance}
                </span>
              </div>

              {trip.spots && (
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', marginBottom: '6px' }}>
                    KEY PLACES TO EXPLORE:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {trip.spots.map((spot, sIdx) => (
                      <span key={sIdx} style={{ background: 'rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {trip.desc && (
                <p style={{ fontSize: '0.88rem', color: '#d1d5db', marginBottom: '16px', lineHeight: '1.5' }}>
                  {trip.desc}
                </p>
              )}

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', marginBottom: '6px' }}>
                  ICONIC PLACES TO EAT:
                </div>
                {trip.placesToEat.map((eat, eIdx) => (
                  <div key={eIdx} style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '6px', marginBottom: '6px', fontSize: '0.85rem' }}>
                    <strong>{eat.name}</strong> – <span style={{ color: 'var(--color-gold)' }}>{eat.mustTry}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
