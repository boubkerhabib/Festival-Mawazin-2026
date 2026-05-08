import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFestival } from '../context/FestivalContext';

const DAYS = ['19 Juin', '20 Juin', '21 Juin', '22 Juin', '23 Juin', '24 Juin', '25 Juin', '26 Juin', '27 Juin'];
const DAY_LABELS = {
  '19 Juin': 'Vendredi 19 Juin', '20 Juin': 'Samedi 20 Juin', '21 Juin': 'Dimanche 21 Juin',
  '22 Juin': 'Lundi 22 Juin', '23 Juin': 'Mardi 23 Juin', '24 Juin': 'Mercredi 24 Juin',
  '25 Juin': 'Jeudi 25 Juin', '26 Juin': 'Vendredi 26 Juin', '27 Juin': 'Samedi 27 Juin',
};

function Planning() {
  const { artists, favorites, toggleFavorite } = useFestival();
  const navigate = useNavigate();
  const favArtists = artists.filter(a => favorites.includes(a.id));

  const byDay = {};
  DAYS.forEach(day => {
    const list = favArtists.filter(a => a.day === day);
    if (list.length) byDay[day] = list;
  });

  return (
    <>
      <div className="page-header">
        <h2>Mon Planning</h2>
        <p>{favArtists.length} artiste{favArtists.length !== 1 ? 's' : ''} en favoris</p>
      </div>
      <div className="container" style={{ paddingTop: 0 }}>
        {favArtists.length === 0 ? (
          <div className="empty-state">
            <h3>Aucun favori</h3>
            <p>Ajoutez des artistes depuis le Programme pour construire votre planning.</p>
            <button className="btn btn-ghost" onClick={() => navigate('/programme')} style={{ marginTop: '1rem' }}>Voir le Programme →</button>
          </div>
        ) : (
          Object.entries(byDay).map(([day, artists]) => (
            <div key={day} className="planning-day">
              <h3>{DAY_LABELS[day] || day}</h3>
              {artists.map(artist => (
                <div key={artist.id} className="list-item">
                  <div className="list-item-left">
                    <span className="list-item-name">{artist.name}</span>
                    <span className="list-item-meta">{artist.heure} · {artist.scene} · {artist.genre}</span>
                  </div>
                  <div className="list-item-actions">
                    <button className="btn btn-ghost" onClick={() => navigate(`/programme/${artist.id}`)} style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Détail</button>
                    <button className="btn btn-danger" onClick={() => toggleFavorite(artist.id)} style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Retirer</button>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Planning;