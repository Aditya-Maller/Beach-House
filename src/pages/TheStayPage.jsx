import React from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  Droplet, 
  Recycle, 
  ShieldCheck,
  ChevronRight,
  Anchor,
  Compass
} from 'lucide-react';
import { stayStoryCards, propertyInfo } from '../data/propertyData';
import MediaRenderer from './MediaRenderer';

// Assets
import stayImg from '../../The Stay.png';
import beachMgmtImg from '../../Beach Management .png';

export default function TheStayPage({ onSelectTab }) {
  return (
    <div className="page-container">
      {/* Hero Banner Header */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${stayImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '340px'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '10px' }}>THE STORY OF 303 OYSTER BAY</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            BUILT BY THE SEA.<br />INSPIRED BY LIFE.
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#e5e7eb', maxWidth: '600px' }}>
            EVERY CORNER OF 303 OYSTER BAY TELLS A STORY.<br />
            Of the sea, the shore and the simple, beautiful life of a coastal village.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div style={{ textAlign: 'center', margin: '48px 0 36px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-navy)' }}>
          A HOME THAT CARRIES THE COAST
        </h2>
        <p style={{
          maxWidth: '750px',
          margin: '12px auto 0 auto',
          fontSize: '1.05rem',
          color: 'var(--color-text-muted)',
          lineHeight: '1.7'
        }}>
          303 OYSTER BAY is more than just a stay – it is a celebration of what we love, what is dear to us – the sea. Thoughtfully crafted with natural textures, weathered finishes and objects that carry memories of the sea.
        </p>
      </div>

      {/* Story Grid (8 Cards) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {stayStoryCards.map((card, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {card.image && (
              <div style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
                <MediaRenderer 
                  src={card.image.startsWith('/assets/') ? import.meta.env.BASE_URL + card.image.substring(1) : card.image} 
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--color-amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-serif)'
              }}>
                0{idx + 1}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                color: 'var(--color-navy)',
                marginBottom: '8px',
                letterSpacing: '0.02em'
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flex: 1 }}>
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Guest Etiquette & House Appreciation Footer Banner */}
      <div 
        className="glass-card-navy"
        style={{
          marginTop: '56px',
          padding: '36px 28px',
          textAlign: 'center'
        }}
      >
        <div style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>
          <Anchor size={28} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '8px' }}>
          THANK YOU FOR STAYING WITH US
        </h2>
        <p style={{ color: '#e5e7eb', fontSize: '0.95rem', maxWidth: '650px', margin: '0 auto 28px auto' }}>
          Thank you for visiting us and giving us the opportunity to host you. We loved it as much as you did. Look forward to welcoming you once again.
        </p>

        {/* 5 Pillars Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '16px',
          textAlign: 'center'
        }}>
          <div style={{ padding: '12px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
            <HeartHandshake size={22} color="var(--color-gold)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.75rem', color: '#ffffff' }}>Treating our home with care</div>
          </div>
          <div style={{ padding: '12px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
            <Sparkles size={22} color="var(--color-gold)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.75rem', color: '#ffffff' }}>Keeping apartment clean</div>
          </div>
          <div style={{ padding: '12px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
            <Droplet size={22} color="var(--color-gold)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.75rem', color: '#ffffff' }}>Mindful of water & energy</div>
          </div>
          <div style={{ padding: '12px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
            <Recycle size={22} color="var(--color-gold)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.75rem', color: '#ffffff' }}>Segregating waste responsibly</div>
          </div>
          <div style={{ padding: '12px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
            <ShieldCheck size={22} color="var(--color-gold)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.75rem', color: '#ffffff' }}>Respecting home for next guest</div>
          </div>
        </div>

        <div style={{ marginTop: '28px' }}>
          <button onClick={() => onSelectTab('guide')} className="btn-primary">
            Explore Guest Stay Guide <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
