import React, { useState } from 'react';
import { 
  Key, 
  ShieldCheck, 
  Wifi, 
  Copy, 
  Check, 
  Bell, 
  Sun, 
  FileText, 
  PhoneCall, 
  BookOpen,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { propertyInfo, checkInSteps } from '../data/propertyData';
import checkInHeroImg from '../../Self Check in.png';

export default function CheckInPage({ onSelectTab }) {
  const [copied, setCopied] = useState(false);

  const copyWifiPassword = () => {
    navigator.clipboard.writeText(propertyInfo.wifiPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="page-container">
      {/* Hero Banner Header */}
      <div 
        className="hero-card"
        style={{
          backgroundImage: `url(${checkInHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '340px'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge-tag" style={{ marginBottom: '10px' }}>SELF CHECK-IN</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.8rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            WELCOME TO<br />303 OYSTER BAY
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#e5e7eb', maxWidth: '500px' }}>
            You're just a few steps away from the sea.
          </p>
        </div>
      </div>

      {/* Section: BEFORE YOU ENTER (Identity Verification) */}
      <div className="glass-card" style={{ marginTop: '40px', padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <ShieldCheck size={28} color="var(--color-navy)" />
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-navy)' }}>
              BEFORE YOU ENTER
            </h2>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-amber)' }}>
              Identity Verification Requirement
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
          As required by local regulations, all guests staying at the apartment must provide a valid government-issued photo identity document during check-in.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          {['Aadhaar Card', 'Driving Licence', 'Passport', 'Voter ID Card'].map((doc, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(13, 148, 136, 0.1)',
                color: 'var(--color-teal)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Check size={16} /> {doc}
            </div>
          ))}
        </div>

        <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
          * For foreign nationals, a valid Passport and Visa details are required. Identity documents may be shared with the host or designated representative.
        </div>
      </div>

      {/* Section: OPENING THE DOOR (4 Steps) */}
      <div style={{ marginTop: '54px' }}>
        <h2 className="section-title">OPENING THE DOOR</h2>
        <p className="section-subtitle">Follow these 4 simple steps to unlock the smart door</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {checkInSteps.map((step) => (
            <div key={step.step} className="glass-card" style={{ padding: '24px', textAlign: 'center', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'var(--color-navy)',
                color: 'var(--color-gold)',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {step.step}
              </div>

              <div style={{ color: 'var(--color-amber)', margin: '20px 0 12px 0' }}>
                <Key size={32} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '16px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: 'var(--radius-sm)',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.88rem',
          color: 'var(--color-navy)',
          fontWeight: '600'
        }}>
          <AlertCircle size={20} color="var(--color-amber)" />
          Remember to carry your access password with you before you step out!
        </div>
      </div>

      {/* Wi-Fi Quick Access Widget */}
      <div className="glass-card-navy" style={{ marginTop: '48px', padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.2)',
              color: 'var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Wifi size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.05em' }}>
                HIGH-SPEED APARTMENT WI-FI
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff' }}>
                Network (SSID): {propertyInfo.wifiName}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#d1d5db' }}>
                Password: {propertyInfo.wifiPassword}
              </div>
            </div>
          </div>

          <button
            onClick={copyWifiPassword}
            className="btn-primary"
            style={{ padding: '10px 20px', minWidth: '160px', justifyContent: 'center' }}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Password Copied!' : 'Copy WiFi Pass'}
          </button>
        </div>
      </div>

      {/* Cards: House Notes & Arrival Tips */}
      <div style={{
        marginTop: '36px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '14px' }}>
            IMPORTANT HOUSE NOTES
          </h3>
          <ul style={{ paddingLeft: '18px', fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            <li>No smoking inside the apartment.</li>
            <li>Pets are not permitted.</li>
            <li>Please avoid moving heavy furniture.</li>
            <li>Do not sit on furniture with wet clothes or swimwear.</li>
            <li>Beach towels should not be used indoors.</li>
            <li>Kindly switch off lights and air-conditioning when leaving.</li>
          </ul>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '14px' }}>
            ARRIVAL TIPS
          </h3>
          
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bell size={16} color="var(--color-amber)" /> Smart Door Bell (VDP)
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              The Video Door Phone beside entrance functions as doorbell and supports guest verification.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sun size={16} color="var(--color-amber)" /> Motion Sensor Lighting
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              Entry passage lights switch ON automatically when movement is detected.
            </p>
          </div>
        </div>
      </div>

      {/* Banner: Open Stay Guide */}
      <div className="glass-card-navy" style={{ marginTop: '48px', padding: '28px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold)', marginBottom: '8px' }}>
          READY TO SETTLE IN?
        </h3>
        <p style={{ color: '#e5e7eb', fontSize: '0.92rem', marginBottom: '20px' }}>
          Everything else you need is available in our detailed Stay Guide.
        </p>
        <button onClick={() => onSelectTab('guide')} className="btn-primary" style={{ padding: '12px 28px' }}>
          <BookOpen size={18} /> OPEN STAY GUIDE <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
