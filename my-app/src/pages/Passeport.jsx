import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFestival } from '../context/FestivalContext';
import GenreFilter from '../components/GenreFilter';
import ConcertItem from '../components/ConcertItem';

function Passeport() {
  const { artists, passport } = useFestival();
  const [activeGenre, setActiveGenre] = useState('Tous');
  const navigate = useNavigate();

  const attendedArtists = artists.filter(a => passport.includes(a.id));
  const presentGenres = [...new Set(attendedArtists.map(a => a.genre))];
  const filtered = activeGenre === 'Tous'
    ? attendedArtists
    : attendedArtists.filter(a => a.genre === activeGenre);

  return (
    <>
      <div className="passport-header">
        <div className="passport-inner">
          <div className="passport-stamp">✓ Passeport Musical</div>
          <div className="passport-count">{attendedArtists.length} concert{attendedArtists.length !== 1 ? 's' : ''}</div>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', fontWeight: '300' }}>Vos souvenirs du festival Mawazin 2026</p>
        </div>
      </div>
      <div className="container">
        <GenreFilter genres={presentGenres} activeGenre={activeGenre} onSelectGenre={setActiveGenre} />
        {attendedArtists.length === 0 ? (
          <div className="empty-state">
            <h3>Passeport vierge</h3>
            <p>Marquez "J'y étais" sur les concerts pour construire vos souvenirs.</p>
            <button className="btn btn-ghost" onClick={() => navigate('/programme')} style={{ marginTop: '1rem' }}>Explorer le Programme →</button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty-state" style={{ padding: '2rem' }}>
            <p>Aucun concert de ce genre dans votre passeport.</p>
          </div>
        ) : (
          filtered.map(artist => <ConcertItem key={artist.id} concert={artist} />)
        )}
      </div>
    </>
  );
}

export default Passeport;