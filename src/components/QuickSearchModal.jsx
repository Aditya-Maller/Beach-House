import React, { useState } from 'react';
import { Search, X, ChevronRight, BookOpen, Compass, Key } from 'lucide-react';
import { stayGuideSections, foodAndExplore, propertyInfo } from '../data/propertyData';

export default function QuickSearchModal({ isOpen, onClose, onSelectTab, onNavigateGuide }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Search logic
  const searchResults = [];

  if (query.trim().length > 1) {
    const q = query.toLowerCase();

    // Check Wi-Fi
    if ('wifi'.includes(q) || 'internet'.includes(q) || 'password'.includes(q)) {
      searchResults.push({
        category: 'Wi-Fi Access',
        title: `SSID: ${propertyInfo.wifiName}`,
        snippet: `Password: ${propertyInfo.wifiPassword}`,
        action: () => { onSelectTab('checkin'); onClose(); }
      });
    }

    // Search Stay Guide
    stayGuideSections.forEach((section) => {
      section.items.forEach((item) => {
        const matchesHeading = item.heading.toLowerCase().includes(q);
        const matchingPoints = item.points.filter((p) => p.toLowerCase().includes(q));
        
        if (matchesHeading || matchingPoints.length > 0) {
          searchResults.push({
            category: `Stay Guide (${section.pageNumber})`,
            title: item.heading,
            snippet: matchingPoints[0] || item.points[0],
            action: () => {
              onSelectTab('guide');
              onNavigateGuide(section.id);
              onClose();
            }
          });
        }
      });
    });

    // Search Food & Explore
    foodAndExplore.categories.forEach((cat) => {
      cat.items.forEach((spot) => {
        if (spot.name.toLowerCase().includes(q) || (spot.mustTry && spot.mustTry.some(t => t.toLowerCase().includes(q)))) {
          searchResults.push({
            category: `Dining (${cat.name})`,
            title: spot.name,
            snippet: `${spot.dist} - Must try: ${spot.mustTry?.join(', ')}`,
            action: () => { onSelectTab('around'); onClose(); }
          });
        }
      });
    });
  }

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid var(--color-border)',
          gap: '12px'
        }}>
          <Search size={22} color="var(--color-navy)" />
          <input
            type="text"
            placeholder="Search guide (e.g., wifi, ac, hob, geyser, food, pharmacy)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-navy)'
            }}
          />
          <button 
            onClick={onClose} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Popular Quick Suggestions */}
        {query.trim().length <= 1 && (
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '12px', letterSpacing: '0.05em' }}>
              POPULAR GUEST QUESTIONS
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['WiFi Password', 'Air Conditioning', 'Water Purifier', 'Self Check-in', 'Giri Manja Seafood', 'Checkout Checklist'].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => setQuery(keyword)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(27, 54, 93, 0.06)',
                    border: '1px solid rgba(27, 54, 93, 0.15)',
                    fontSize: '0.85rem',
                    color: 'var(--color-navy)',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query.trim().length > 1 && (
          <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '10px 0' }}>
            {searchResults.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                No direct matches found for "{query}". Try searching for 'wifi', 'food', or 'hob'.
              </div>
            ) : (
              searchResults.map((res, index) => (
                <div
                  key={index}
                  onClick={res.action}
                  style={{
                    padding: '12px 20px',
                    borderBottom: '1px solid #f3f4f6',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#faf7f2'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div>
                    <span className="badge-tag" style={{ marginBottom: '4px' }}>
                      {res.category}
                    </span>
                    <div style={{ fontWeight: '700', color: 'var(--color-navy)', fontSize: '0.95rem' }}>
                      {res.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                      {res.snippet}
                    </div>
                  </div>
                  <ChevronRight size={18} color="var(--color-gold)" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
