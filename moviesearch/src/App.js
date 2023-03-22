import React, { useState, useCallback, useEffect } from 'react';
import './App.scss';
import { searchMovies, fetchJamesBondMovies } from './api';
import MovieSearch from './MovieSearch';
import SearchResults from './SearchResults';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = useCallback(async (searchTerm) => {
    if (searchTerm.trim() === '') {
      return;
    }
    const results = await searchMovies(searchTerm);
    setMovies(results);
  }, []);

  const loadJamesBondMovies = useCallback(async () => {
    const bondMovies = await fetchJamesBondMovies();
    setMovies(bondMovies);
  }, []);

  useEffect(() => {
    loadJamesBondMovies();
  }, [loadJamesBondMovies]);

  return (
    <div className="App">
      <h1 onClick={loadJamesBondMovies}>
        Filmsøk
      </h1>
      <MovieSearch onSearch={handleSearch} />
      <SearchResults movies={movies} />
    </div>
  );
}

export default App;
