import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FestivalProvider } from './context/FestivalContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Programme from './pages/Programme';
import ArtistDetailPage from './pages/ArtistDetailPage';
import Planning from './pages/Planning';
import Passeport from './pages/Passeport';
import './theme.css';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/programme', label: 'Programme' },
  { path: '/planning', label: 'Planning' },
  { path: '/passeport', label: 'Passeport' },
];

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Beat — Mawazin 2026',
      '/programme': 'Programme · Beat',
      '/planning': 'Mon Planning · Beat',
      '/passeport': 'Mon Passeport · Beat',
    };
    document.title = titles[location.pathname] || 'Beat · Mawazin 2026';
  }, [location]);

  return (
    <>
      <Navbar links={navLinks} currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/programme/:artistId" element={<ArtistDetailPage />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/passeport" element={<Passeport />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <FestivalProvider>
      <AppContent />
    </FestivalProvider>
  );
}

export default App;