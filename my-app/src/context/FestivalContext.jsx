import React, { createContext, useContext, useState, useEffect } from 'react';

const FestivalContext = createContext();

export const useFestival = () => useContext(FestivalContext);

export function FestivalProvider({ children }) {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('beat-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [passport, setPassport] = useState(() => {
    const saved = localStorage.getItem('beat-passport');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch('/artists.json')
      .then(res => res.json())
      .then(data => {
        setArtists(data.artists);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load artists:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('beat-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('beat-passport', JSON.stringify(passport));
  }, [passport]);

  const toggleFavorite = (artistId) => {
    setFavorites(prev =>
      prev.includes(artistId)
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    );
  };

  const markAttended = (artistId) => {
    if (!passport.includes(artistId)) {
      setPassport(prev => [...prev, artistId]);
    }
  };

  const getArtistById = (id) => artists.find(a => a.id === id);

  const value = {
    artists,
    loading,
    favorites,
    passport,
    toggleFavorite,
    markAttended,
    getArtistById,
  };

  return (
    <FestivalContext.Provider value={value}>
      {children}
    </FestivalContext.Provider>
  );
}