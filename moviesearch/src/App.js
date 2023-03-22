import React, { useState, useEffect } from 'react';
import './App.scss';
import { searchMovies } from './api';
import SearchResults from './SearchResults';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const results = await searchMovies('James Bond');
      setMovies(results.slice(0, 10));
    }

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Filmsøk</h1>
      <SearchResults movies={movies} />
    </div>
  );
}

export default App;
