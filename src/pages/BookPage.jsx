import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  ShieldCheck, 
  Lock, 
  Star, 
  Award, 
  DoorOpen, 
  Heart,
  Instagram,
  PhoneCall,
  ArrowRight,
  UserRound
} from 'lucide-react';
import { propertyInfo, guestReviews, bookingConfig } from '../data/propertyData';

export default function BookPage() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('4');
  const [children, setChildren] = useState('0');

  const handleCheckAvailability = () => {
    let url = bookingConfig.airbnbUrl;
    
    // Check if we need to append query parameters
    const params = new URLSearchParams();
    if (checkIn) params.append('check_in', checkIn);
    if (checkOut) params.append('check_out', checkOut);
    if (adults && adults !== '0') params.append('adults', adults);
    if (children && children !== '0') params.append('children', children);
    
    const queryString = params.toString();
    if (queryString) {
      // Handle URLs that might already have query parameters
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const confidenceItems = [
    { icon: ShieldCheck, title: "INSTANT CONFIRMATION", text: "Get immediate confirmation once you book." },
    { icon: Lock, title: "SECURE PAYMENT", text: "Your payment is protected by industry-leading security." },
    { icon: Star, title: "VERIFIED REVIEWS", text: "Rated by real guests who've loved their stay with us." },
    { icon: Award, title: "PROFESSIONAL HOSTING", text: "We're here for you before, during and after your stay." },
    { icon: DoorOpen, title: "SELF CHECK-IN", text: "Arrive at your convenience with easy self check-in." },
    { icon: Heart, title: "SUPERHOST QUALITY", text: "Committed to hospitality that exceeds your expectations." }
  ];

  // Placeholder images for the Instagram grid based on the mockup
  const instagramImages = [
    "Home.PNG", "Arrival.html.png", "In and Aorund .png", "The Stay.png",
    "Kitchen 1.png", "Kitchen 2.png", "Gallery.png", "Self Check in.png"
  ];

  return (
    <div className="page-container" style={{ paddingBottom: '120px' }}>
      
      {/* Hero Section */}
      <section className="hero-card" style={{ 
        backgroundImage: `url('./assets/Home.PNG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '40px'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 style={{ 
            color: 'var(--color-gold)', 
            fontSize: '0.8rem', 
            fontWeight: '700', 
            letterSpacing: '0.1em',
            marginBottom: '10px'
          }}>
            BOOK YOUR STAY
          </h3>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '3.5rem', 
            lineHeight: '1.1', 
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            Your sea.<br />Your time.
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'rgba(255,255,255,0.9)', 
            maxWidth: '400px' 
          }}>
            Reserve your coastal escape in just a few simple steps.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
          <span style={{ color: 'var(--color-gold)', margin: '0 15px' }}>—</span>
          WHEN WOULD YOU LIKE TO VISIT?
          <span style={{ color: 'var(--color-gold)', margin: '0 15px' }}>—</span>
        </h2>
        <p className="section-subtitle">Check availability in real time on our trusted booking partner.</p>

        <div className="glass-card" style={{ padding: '30px', margin: '0 auto', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {/* Check In */}
            <div style={{ flex: '1 1 180px', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '5px', letterSpacing: '0.05em' }}>
                CHECK-IN
              </label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-main)' }} 
                />
              </div>
            </div>

            {/* Check Out */}
            <div style={{ flex: '1 1 180px', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '5px', letterSpacing: '0.05em' }}>
                CHECK-OUT
              </label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-main)' }} 
                />
              </div>
            </div>

            {/* Adults */}
            <div style={{ flex: '1 1 120px', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '5px', letterSpacing: '0.05em' }}>
                ADULTS
              </label>
              <div style={{ position: 'relative' }}>
                <Users size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <select 
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-main)', appearance: 'none', backgroundColor: '#fff' }}
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Children */}
            <div style={{ flex: '1 1 120px', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '5px', letterSpacing: '0.05em' }}>
                CHILDREN
              </label>
              <div style={{ position: 'relative' }}>
                <UserRound size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <select 
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-main)', appearance: 'none', backgroundColor: '#fff' }}
                >
                  {[0, 1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '15px' }}>
            <button 
              onClick={handleCheckAvailability}
              className="btn-primary" 
              style={{ padding: '15px 40px', fontSize: '1rem', width: '100%', maxWidth: '300px', justifyContent: 'center', background: 'var(--color-amber)', color: '#fff', border: 'none', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              CHECK AVAILABILITY <ArrowRight size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '15px', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <Lock size={14} />
              <span>You will be taken to our trusted booking partner to complete your reservation securely.</span>
            </div>
          </div>

        </div>
      </section>

      {/* Book with Confidence Section */}
      <section style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
          <span style={{ color: 'var(--color-gold)', margin: '0 15px' }}>—</span>
          BOOK WITH CONFIDENCE
          <span style={{ color: 'var(--color-gold)', margin: '0 15px' }}>—</span>
        </h2>
        <p className="section-subtitle">Your comfort and security are our priority.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '30px' }}>
          {confidenceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} style={{ display: 'flex', gap: '15px', textAlign: 'left', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-amber)', padding: '5px' }}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-navy)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '5px', letterSpacing: '0.05em' }}>{item.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Loved by Our Guests Section */}
      <section style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
          <span style={{ color: 'var(--color-gold)', margin: '0 15px' }}>—</span>
          LOVED BY OUR GUESTS
          <span style={{ color: 'var(--color-gold)', margin: '0 15px' }}>—</span>
        </h2>
        <p className="section-subtitle">Real experiences from real guests.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {guestReviews.slice(0, 3).map((review, index) => (
            <div key={index} className="glass-card" style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(229, 231, 235, 0.4)', background: '#fff' }}>
              <div style={{ display: 'flex', gap: '2px', color: 'var(--color-amber)', marginBottom: '15px' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-main)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1 }}>
                "{review.quote}"
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600', marginBottom: '10px' }}>
                — {review.author.includes('Airbnb') ? 'Guest' : review.author}
              </div>
              {review.platform.toLowerCase() === 'airbnb' && (
                <div style={{ color: '#FF5A5F', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold', fontSize: '0.8rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.067c-4.448 0-8.067-3.619-8.067-8.067 0-4.448 3.619-8.067 8.067-8.067 4.448 0 8.067 3.619 8.067 8.067 0 4.448-3.619 8.067-8.067 8.067z" />
                    <path d="M12 5.333c-3.676 0-6.667 2.991-6.667 6.667S8.324 18.667 12 18.667 18.667 15.676 18.667 12 15.676 5.333 12 5.333zm0 11.334c-2.573 0-4.667-2.094-4.667-4.667s2.094-4.667 4.667-4.667 4.667 2.094 4.667 4.667-2.094 4.667-4.667 4.667z" />
                  </svg>
                  airbnb
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-navy)', marginBottom: '10px' }}>
              <Instagram size={24} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                SEE MORE OF {propertyInfo.name}
              </h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
              Every sunrise, every wave, every quiet corner tells a story. Explore more photographs, guest moments and behind-the-scenes glimpses of life by the sea.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-navy)', fontWeight: '600', marginBottom: '25px' }}>
              <Instagram size={18} />
              {bookingConfig.instagramHandle}
            </div>
            <a 
              href={bookingConfig.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ color: 'var(--color-amber)', border: '1px solid var(--color-amber)', background: 'transparent', padding: '10px 24px' }}
            >
              VIEW ON INSTAGRAM <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ flex: '2 1 500px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {instagramImages.map((img, i) => (
                <div key={i} style={{ aspectRatio: '1/1', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={`./assets/${img}`} alt="Instagram preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Host Section */}
      <section className="glass-card" style={{ padding: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-amber)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserRound size={28} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>HOST</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{propertyInfo.hostPhone}</div>
          </div>
        </div>
        
        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textAlign: 'center', flexGrow: 1 }}>
          Have questions before booking?<br />Feel free to reach out to the host.
        </div>
        
        <a 
          href={`tel:${propertyInfo.hostPhone.replace(/\s+/g, '')}`}
          className="btn-secondary"
          style={{ border: '1px solid var(--color-amber)', color: 'var(--color-amber)', background: 'transparent', padding: '10px 24px' }}
        >
          <PhoneCall size={16} /> CALL HOST
        </a>
      </section>

    </div>
  );
}
