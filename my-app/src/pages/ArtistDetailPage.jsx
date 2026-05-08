import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFestival } from '../context/FestivalContext';
import ArtistDetail from '../components/ArtistDetail';

function ArtistDetailPage() {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const { artists, favorites, passport, toggleFavorite, markAttended, getArtistById } = useFestival();
  const artist = getArtistById(artistId);

  useEffect(() => {
    if (!artist && artists.length > 0) {
      navigate('/programme');
    }
  }, [artist, artists, navigate]);

  if (!artist) {
    return <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Chargement...</div>;
  }

  const isFavorite = favorites.includes(artist.id);
  const isAttended = passport.includes(artist.id);

  const handleMarkAttended = () => {
    markAttended(artist.id);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(artist.id);
  };

  const dayLabels = {
    '19 Juin': 'Vendredi 19 Juin', '20 Juin': 'Samedi 20 Juin', '21 Juin': 'Dimanche 21 Juin',
    '22 Juin': 'Lundi 22 Juin', '23 Juin': 'Mardi 23 Juin', '24 Juin': 'Mercredi 24 Juin',
    '25 Juin': 'Jeudi 25 Juin', '26 Juin': 'Vendredi 26 Juin', '27 Juin': 'Samedi 27 Juin',
  };

  return (
    <>
      <ArtistDetail
        artist={artist}
        onMarkAttended={handleMarkAttended}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
        isAttended={isAttended}
      />
      <div className="detail-body">
        <div>
          <p className="detail-bio">{artist.bio}</p>
        </div>
        <div className="detail-sidebar">
          <div className="info-card">
            <div className="info-row"><label>Date</label><span>{dayLabels[artist.day] || artist.day}</span></div>
            <div className="info-row"><label>Heure</label><span>{artist.heure}</span></div>
            <div className="info-row"><label>Scène</label><span>{artist.scene}</span></div>
            <div className="info-row"><label>Genre</label><span>{artist.genre}</span></div>
          </div>
          <button className="back-btn" onClick={() => navigate('/programme')}>← Retour au Programme</button>
        </div>
      </div>
    </>
  );
}

export default ArtistDetailPage;