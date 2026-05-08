import React from 'react';

function ConcertItem({ concert }) {
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
  const color = genreColors[concert.genre] || '#888';

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  };

  const dayLabels = {
    '19 Juin': 'Vendredi 19 Juin', '20 Juin': 'Samedi 20 Juin', '21 Juin': 'Dimanche 21 Juin',
    '22 Juin': 'Lundi 22 Juin', '23 Juin': 'Mardi 23 Juin', '24 Juin': 'Mercredi 24 Juin',
    '25 Juin': 'Jeudi 25 Juin', '26 Juin': 'Vendredi 26 Juin', '27 Juin': 'Samedi 27 Juin',
  };

  return (
    <div className="concert-item">
      <div className="concert-item-info">
        <span className="concert-item-name">{concert.name}</span>
        <span className="concert-item-meta">{dayLabels[concert.day] || concert.day} · {concert.heure} · {concert.scene}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="badge" style={{ background: `rgba(${hexToRgb(color)}, 0.1)`, color: color, border: `1px solid rgba(${hexToRgb(color)}, 0.3)`, fontSize: '0.72rem' }}>
          {concert.genre}
        </span>
        <span className="attended-badge">✓ J'y étais</span>
      </div>
    </div>
  );
}

export default ConcertItem;