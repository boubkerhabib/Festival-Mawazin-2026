import React from 'react';

function ArtistDetail({ artist, onMarkAttended, onToggleFavorite, isFavorite, isAttended }) {
  return (
    <div className="detail-hero">
      <div className="detail-inner">
        <div className="detail-header">
          <div className="detail-title">
            <h1>{artist.name}</h1>
            <div className="detail-badges">
              <span className="badge badge-gold">{artist.genre}</span>
              <span className="badge badge-scene">{artist.scene}</span>
              <span className="badge badge-mint">{artist.heure}</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <button className={`btn ${isFavorite ? 'btn-primary' : 'btn-ghost'}`} onClick={onToggleFavorite} style={{ fontSize: '0.85rem' }}>
              {isFavorite ? '★ Dans mes favoris' : '♡ Favoris'}
            </button>
            <button className={`btn ${isAttended ? 'btn-mint' : 'btn-ghost'}`} onClick={onMarkAttended} style={{ fontSize: '0.85rem' }}>
              {isAttended ? '✓ Concert mémorisé' : '✓ J\'y étais'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistDetail;