import React, { useState } from 'react';
import { X, Calendar, Users, MessageSquare, PhoneCall, CheckCircle } from 'lucide-react';
import { propertyInfo } from '../data/propertyData';

export default function BookingModal({ isOpen, onClose }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const message = `Hello! I would like to inquire about booking 303 Oyster Bay Beachfront Stay.%0A%0A*Details:*%0A• Name: ${name || 'Guest'}%0A• Check-in: ${checkIn || 'TBD'}%0A• Check-out: ${checkOut || 'TBD'}%0A• Guests: ${guests}%0A%0APlease let me know availability and pricing!`;
    const url = `https://wa.me/${propertyInfo.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    setMessageSent(true);
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          background: 'var(--color-navy)',
          color: '#ffffff',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-gold)' }}>
              DIRECT BOOKING INQUIRY
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>
              303 Oyster Bay · Surathkal, Mangaluru
            </div>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px' }}>
          {messageSent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircle size={54} color="var(--color-teal)" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-navy)', fontSize: '1.4rem' }}>
                Redirecting to WhatsApp!
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
                Your booking inquiry has been formatted. If WhatsApp did not open automatically, click below to call host directly.
              </p>
              <a
                href={`tel:${propertyInfo.hostPhone}`}
                className="btn-primary"
                style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}
              >
                <PhoneCall size={18} />
                Call Host ({propertyInfo.hostPhone})
              </a>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-navy)', marginBottom: '6px' }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-navy)', marginBottom: '6px' }}>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-navy)', marginBottom: '6px' }}>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-navy)', marginBottom: '6px' }}>
                  Number of Guests (Max 6)
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.95rem',
                    background: '#ffffff'
                  }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests (Standard)</option>
                  <option value="5">5 Guests (+ Extra Mattress)</option>
                  <option value="6">6 Guests (+ Extra Mattress)</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button type="submit" className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                  <MessageSquare size={18} />
                  Book via WhatsApp Direct
                </button>
                <a 
                  href={`tel:${propertyInfo.hostPhone}`} 
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <PhoneCall size={18} />
                  Call Host: {propertyInfo.hostPhone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
