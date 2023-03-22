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

  useEffect(() => {
    async function loadJamesBondMovies() {
      const bondMovies = await fetchJamesBondMovies();
      setMovies(bondMovies);
    }
    loadJamesBondMovies();
  }, []);

  return (
    <div className="App">
      <h1>Filmsøk</h1>
      <MovieSearch onSearch={handleSearch} />
      <SearchResults movies={movies} />
    </div>
  );
}

export default App;
