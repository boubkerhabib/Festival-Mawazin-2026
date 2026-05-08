import React from 'react';

function ArtistCard({ artist, isFavorite, onToggleFavorite, onViewDetail }) {
  const genreColors = {
    Pop: '#c9a227',
    'Hip-Hop': '#3dd6a3',
    Gnawa: '#8b5cf6',
    Jazz: '#3b82f6',
    Chaabi: '#f97316',
    'R&B': '#ec4899',
    World: '#10b981',
    Afrobeats: '#f59e0b',
  };
  const color = genreColors[artist.genre] || '#888';

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  };

  return (
    <div className="artist-card" onClick={onViewDetail}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          className="badge"
          style={{
            background: `rgba(${hexToRgb(color)}, 0.1)`,
            color: color,
            border: `1px solid rgba(${hexToRgb(color)}, 0.3)`,
            fontSize: '0.7rem',
          }}
        >
          {artist.genre}
        </span>
      </div>
      <div className="artist-name">{artist.name}</div>
      <div className="artist-meta">{artist.heure} · {artist.scene}</div>
      <div className="artist-card-actions" onClick={e => e.stopPropagation()}>
        <button className={`fav-btn ${isFavorite ? 'active' : ''}`} onClick={onToggleFavorite}>
          {isFavorite ? '★ Favori' : '♡ Favori'}
        </button>
        <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Voir →</span>
      </div>
    </div>
  );
}

export default ArtistCard;