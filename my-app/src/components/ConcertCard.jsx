import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConcertCard({ concert, onMarkAttended }) {
  const navigate = useNavigate();

  const handleMarkAttended = () => {
    onMarkAttended(concert.id);
    navigate('/passeport');
  };

  if (!concert) return null;

  return (
    <div className="concert-tonight">
      <div className="concert-label">★ Concert phare du soir</div>
      <div className="concert-main">
        <div className="concert-info">
          <h2>{concert.name}</h2>
          <p>{concert.genre} · {concert.heure} · {concert.scene}</p>
        </div>
        <div className="concert-meta">
          <span className="badge badge-gold">{concert.day}</span>
          <span className="badge badge-mint">{concert.genre}</span>
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            <button className="btn btn-ghost" onClick={() => navigate(`/programme/${concert.id}`)} style={{ fontSize: '0.8rem', padding: '8px 14px' }}>
              Voir l'artiste
            </button>
            <button className="btn btn-primary" onClick={handleMarkAttended} style={{ fontSize: '0.8rem', padding: '8px 14px' }}>
              J'y étais ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConcertCard;