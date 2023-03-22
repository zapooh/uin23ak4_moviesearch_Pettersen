import React from 'react';
import MovieCard from './MovieCard';

const SearchResults = ({ movies }) => {
  return (
    <div className="search-results">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
