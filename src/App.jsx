import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import QuickSearchModal from './components/QuickSearchModal';
import BookingModal from './components/BookingModal';

import HomePage from './pages/HomePage';
import TheStayPage from './pages/TheStayPage';
import GalleryPage from './pages/GalleryPage';
import ArrivalPage from './pages/ArrivalPage';
import CheckInPage from './pages/CheckInPage';
import StayGuidePage from './pages/StayGuidePage';
import InAndAroundPage from './pages/InAndAroundPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [guideSectionId, setGuideSectionId] = useState('01');

  // Scroll to top when changing tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleNavigateGuide = (sectionId) => {
    setGuideSectionId(sectionId);
    setActiveTab('guide');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-sand)' }}>
      {/* Top Header & Mobile Bottom Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBook={() => setBookOpen(true)}
      />

      {/* Main View Router */}
      <main>
        {activeTab === 'home' && (
          <HomePage
            onSelectTab={setActiveTab}
            onOpenBook={() => setBookOpen(true)}
          />
        )}

        {activeTab === 'stay' && (
          <TheStayPage
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage
            onOpenBook={() => setBookOpen(true)}
          />
        )}

        {activeTab === 'arrival' && (
          <ArrivalPage
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === 'checkin' && (
          <CheckInPage
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === 'guide' && (
          <StayGuidePage
            initialSectionId={guideSectionId}
          />
        )}

        {activeTab === 'around' && (
          <InAndAroundPage />
        )}
      </main>

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectTab={setActiveTab}
        onNavigateGuide={handleNavigateGuide}
      />

      {/* Direct Booking Modal */}
      <BookingModal
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
      />
    </div>
  );
}
