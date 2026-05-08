import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFestival } from '../context/FestivalContext';
import DaySelector from '../components/DaySelector';
import GenreFilter from '../components/GenreFilter';
import ArtistCard from '../components/ArtistCard';

const DAYS = ['19 Juin', '20 Juin', '21 Juin', '22 Juin', '23 Juin', '24 Juin', '25 Juin', '26 Juin', '27 Juin'];
const GENRES = ['Pop', 'Hip-Hop', 'Gnawa', 'Jazz', 'Chaabi', 'R&B', 'World', 'Afrobeats'];

function Programme() {
  const { artists, favorites, toggleFavorite } = useFestival();
  const [selectedDay, setSelectedDay] = useState('19 Juin');
  const [activeGenre, setActiveGenre] = useState('Tous');
  const navigate = useNavigate();

  const filteredArtists = artists.filter(artist => {
    if (artist.day !== selectedDay) return false;
    if (activeGenre !== 'Tous' && artist.genre !== activeGenre) return false;
    return true;
  });

  return (
    <>
      <div className="page-header">
        <h2>Programme Complet</h2>
        <p>30 artistes · 9 jours · Cliquez pour découvrir</p>
      </div>
      <div className="container" style={{ paddingTop: 0 }}>
        <DaySelector days={DAYS} selectedDay={selectedDay} onSelectDay={setSelectedDay} />
        <GenreFilter genres={GENRES} activeGenre={activeGenre} onSelectGenre={setActiveGenre} />
        <div className="artists-grid">
          {filteredArtists.map(artist => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              isFavorite={favorites.includes(artist.id)}
              onToggleFavorite={() => toggleFavorite(artist.id)}
              onViewDetail={() => navigate(`/programme/${artist.id}`)}
            />
          ))}
          {filteredArtists.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--muted)' }}>
              Aucun artiste ce jour dans ce genre
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Programme;