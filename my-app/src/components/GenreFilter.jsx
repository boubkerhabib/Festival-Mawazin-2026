import React from 'react';

function GenreFilter({ genres, activeGenre, onSelectGenre }) {
  return (
    <div className="genre-filter">
      <button
        className={`genre-btn ${activeGenre === 'Tous' ? 'active' : ''}`}
        onClick={() => onSelectGenre('Tous')}
        data-genre="Tous"
      >
        Tous
      </button>
      {genres.map(genre => (
        <button
          key={genre}
          className={`genre-btn ${activeGenre === genre ? 'active' : ''}`}
          onClick={() => onSelectGenre(genre)}
          data-genre={genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;