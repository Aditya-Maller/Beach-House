import React from 'react';
import { 
  Home, 
  BedDouble, 
  Image as ImageIcon, 
  MapPin, 
  BookOpen, 
  Compass, 
  CalendarCheck,
  Search,
  PhoneCall
} from 'lucide-react';
import { propertyInfo } from '../data/propertyData';

export default function Navbar({ activeTab, setActiveTab, onOpenSearch, onOpenBook }) {
  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'stay', label: 'THE STAY', icon: BedDouble },
    { id: 'gallery', label: 'GALLERY', icon: ImageIcon },
    { id: 'arrival', label: 'ARRIVAL', icon: MapPin },
    { id: 'guide', label: 'STAY GUIDE', icon: BookOpen },
    { id: 'around', label: 'IN & AROUND', icon: Compass },
    { id: 'book', label: 'BOOK', icon: CalendarCheck, isSpecial: true }
  ];

  return (
    <>
      {/* Top Header */}
      <header className="app-header">
        <div 
          onClick={() => setActiveTab('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            background: 'var(--color-navy)',
            color: 'var(--color-gold)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: '1.5px solid var(--color-gold)'
          }}>
            303
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--color-navy)',
              letterSpacing: '0.08em',
              lineHeight: '1'
            }}>
              OYSTER BAY
            </div>
            <div style={{
              fontSize: '0.65rem',
              color: 'var(--color-gold-hover)',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              SURATHKAL, MANGALURU
            </div>
          </div>
        </div>

        {/* Top Header Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            onClick={onOpenSearch}
            className="btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            title="Search Guest Guide"
          >
            <Search size={15} />
            <span style={{ display: 'none', '@media (minWidth: 640px)': { display: 'inline' } }}>
              Search Guide
            </span>
          </button>

          <a 
            href={`tel:${propertyInfo.hostPhone}`}
            className="btn-primary"
            style={{ padding: '8px 14px', fontSize: '0.82rem' }}
          >
            <PhoneCall size={15} />
            <span>Host</span>
          </a>
        </div>
      </header>

      {/* Sticky Mobile & Desktop Bottom Tab Navigation */}
      <nav className="bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isSpecial = item.isSpecial;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              style={isSpecial ? { color: isActive ? 'var(--color-amber)' : 'rgba(217, 119, 6, 0.7)' } : {}}
            >
              <Icon size={20} style={{ marginBottom: '3px' }} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
