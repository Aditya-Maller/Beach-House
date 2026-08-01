import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Sliders, 
  Tv, 
  Wind, 
  Lightbulb, 
  Flame, 
  Recycle, 
  Heart, 
  CheckSquare,
  PhoneCall
} from 'lucide-react';
import { stayGuideSections, propertyInfo } from '../data/propertyData';

// Image assets
import stayGuideHeroImg from '../../Stay Guide1.PNG';
import kitchen1Img from '../../Kitchen 1.png';
import kitchen2Img from '../../Kitchen 2.png';
import comfortImg from '../../Comfort & Living.png';
import beachMgmtImg from '../../Beach Management .png';
import utilityImg from '../../Utility & Convenience .png';

export default function StayGuidePage({ initialSectionId }) {
  const [activeSectionIdx, setActiveSectionIdx] = useState(
    initialSectionId ? stayGuideSections.findIndex(s => s.id === initialSectionId) : 0
  );

  const currentSection = stayGuideSections[activeSectionIdx] || stayGuideSections[0];

  const sectionHeroImages = [
    stayGuideHeroImg,
    kitchen1Img,
    kitchen2Img,
    comfortImg,
    beachMgmtImg,
    utilityImg
  ];

  const nextSection = () => {
    setActiveSectionIdx((prev) => (prev + 1) % stayGuideSections.length);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevSection = () => {
    setActiveSectionIdx((prev) => (prev === 0 ? stayGuideSections.length - 1 : prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-container">
      {/* Hero Banner Header */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${sectionHeroImages[activeSectionIdx]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '8px' }}>STAY GUIDE</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.4rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            GETTING AROUND 303 OYSTER BAY
          </h1>
          <p style={{ fontSize: '1rem', color: '#e5e7eb', maxWidth: '500px' }}>
            Your guide to help you move around and enjoy your stay with ease.
          </p>
        </div>
      </div>

      {/* Pagination Controller Bar (01/06 to 06/06) */}
      <div 
        className="glass-card"
        style={{
          marginTop: '28px',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <button 
          onClick={prevSection}
          className="btn-secondary"
          style={{ padding: '8px 14px' }}
        >
          <ChevronLeft size={18} /> Previous
        </button>

        {/* Dots & Counter Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {stayGuideSections.map((sec, idx) => (
              <div
                key={sec.id}
                onClick={() => setActiveSectionIdx(idx)}
                style={{
                  width: activeSectionIdx === idx ? '24px' : '10px',
                  height: '10px',
                  borderRadius: 'var(--radius-full)',
                  background: activeSectionIdx === idx ? 'var(--color-gold)' : 'rgba(27, 54, 93, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                title={sec.title}
              />
            ))}
          </div>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--color-navy)'
          }}>
            {currentSection.pageNumber}
          </span>
        </div>

        <button 
          onClick={nextSection}
          className="btn-primary"
          style={{ padding: '8px 14px' }}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>

      {/* Title Header for Current Section */}
      <div style={{ textAlign: 'center', margin: '36px 0 28px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.3rem', color: 'var(--color-navy)' }}>
          {currentSection.title}
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '4px' }}>
          {currentSection.subtitle}
        </p>
      </div>

      {/* Guide Content Items Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {currentSection.items.map((item, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              color: 'var(--color-navy)',
              marginBottom: '12px',
              borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
              paddingBottom: '6px'
            }}>
              {item.heading}
            </h3>

            <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} style={{ marginBottom: '8px' }}>
                  {pt}
                </li>
              ))}
            </ul>

            {item.alert && (
              <div style={{
                marginTop: '16px',
                background: 'rgba(239, 68, 68, 0.1)',
                borderLeft: '4px solid #ef4444',
                padding: '10px 14px',
                borderRadius: '4px',
                fontSize: '0.85rem',
                color: '#b91c1c',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertTriangle size={18} />
                {item.alert}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Operating Instructions Diagram Block (if present) */}
      {currentSection.instructions && (
        <div className="glass-card-navy" style={{ marginTop: '40px', padding: '28px' }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            color: 'var(--color-gold)',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            {currentSection.instructions.title}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {currentSection.instructions.steps.map((stepStr, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.88rem',
                  color: '#ffffff',
                  lineHeight: '1.6'
                }}
              >
                {stepStr}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Departure Checklist for Section 06/06 */}
      {currentSection.departureChecklist && (
        <div className="glass-card" style={{ marginTop: '40px', padding: '28px' }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            color: 'var(--color-navy)',
            textAlign: 'center',
            marginBottom: '8px'
          }}>
            BEFORE YOU LEAVE
          </h3>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
            A quick checklist to help you wrap up your stay smoothly.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px'
          }}>
            {currentSection.departureChecklist.map((checkItem, cIdx) => (
              <div 
                key={cIdx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  background: 'rgba(13, 148, 136, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--color-navy)'
                }}
              >
                <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span>{checkItem}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px', fontStyle: 'italic', color: 'var(--color-navy)', fontWeight: '600' }}>
            ❤️ Thank you for taking care of the apartment. We hope to host you again!
          </div>
        </div>
      )}

      {/* Host Call Bottom Bar */}
      <div style={{
        marginTop: '40px',
        background: 'rgba(27, 54, 93, 0.05)',
        borderRadius: 'var(--radius-md)',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.9rem',
        fontWeight: '700',
        color: 'var(--color-navy)'
      }}>
        <a href={`tel:${propertyInfo.hostPhone}`} style={{ color: 'var(--color-navy)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <PhoneCall size={16} color="var(--color-amber)" /> Call Host: {propertyInfo.hostPhone}
        </a>
        <span style={{ opacity: 0.3 }}>|</span>
        <a href={`tel:${propertyInfo.securityPhone}`} style={{ color: 'var(--color-navy)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <PhoneCall size={16} color="var(--color-amber)" /> Security: {propertyInfo.securityPhone}
        </a>
      </div>
    </div>
  );
}
