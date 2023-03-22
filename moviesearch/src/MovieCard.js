import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <Link to={`/movie/${movie.imdbID}`}>
      <Link to={`/movie/${movie.imdbID}`} className="more-details-btn">Mer om filmen</Link>
      </Link>
    </div>
  );
};

export default MovieCard;
