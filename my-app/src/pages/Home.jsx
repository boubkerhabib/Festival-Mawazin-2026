import React from 'react';
import { useFestival } from '../context/FestivalContext';
import ConcertCard from '../components/ConcertCard';

function Home() {
  const { artists, favorites, passport, markAttended } = useFestival();
  const featuredArtist = artists.find(a => a.id === 'a1') || artists[0];

  const heroStats = { days: 9, scenes: 7, artistsCount: artists.length, edition: '21ème' };

  return (
    <div className="hero">
      <div className="hero-tag">★ Festival International</div>
      <h1>Mawazin<br /><em>2026</em></h1>
      <p className="hero-sub">Rythmes du Monde · 19 – 27 Juin · Rabat, Maroc</p>
      <div className="hero-stats">
        <div className="stat"><span className="stat-num">{heroStats.days}</span><span className="stat-label">Jours</span></div>
        <div className="stat"><span className="stat-num">{heroStats.scenes}</span><span className="stat-label">Scènes</span></div>
        <div className="stat"><span className="stat-num">{heroStats.artistsCount}</span><span className="stat-label">Artistes</span></div>
        <div className="stat"><span className="stat-num">{heroStats.edition}</span><span className="stat-label">Édition</span></div>
      </div>

      <ConcertCard concert={featuredArtist} onMarkAttended={markAttended} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mint)', marginBottom: '0.5rem' }}>Scènes</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: '1.9', fontWeight: '300' }}>
            OLM Souissi · Nahda<br />Bouregreg · Th. Mohammed V<br />Chellah · Plage de Salé<br />Scène de Quartier
          </div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>Genres musicaux</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span className="badge badge-gold">Pop</span>
            <span className="badge badge-mint">Hip-Hop</span>
            <span className="badge badge-scene">Gnawa</span>
            <span className="badge badge-scene">Jazz</span>
            <span className="badge badge-scene">Chaabi</span>
            <span className="badge badge-scene">R&B</span>
            <span className="badge badge-scene">World</span>
          </div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '0.5rem' }}>Mon Résumé</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.9' }}>
            <span style={{ color: 'var(--gold2)' }}>♡ {favorites.length} artiste{favorites.length !== 1 ? 's' : ''} en favoris</span><br />
            <span style={{ color: 'var(--mint2)' }}>✓ {passport.length} concert{passport.length !== 1 ? 's' : ''} mémorisé{passport.length !== 1 ? 's' : ''}</span><br />
            <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Mawazin 2026 · 19-27 Juin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;