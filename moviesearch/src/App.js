import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import { searchMovies, fetchJamesBondMovies } from './api';
import MovieSearch from './MovieSearch';
import SearchResults from './SearchResults';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = useCallback(async (searchTerm) => {
    if (searchTerm.trim().length < 3) {
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
    <Router>
      <div className="App">
        <header>
        <Link to="/" onClick={loadJamesBondMovies}>
          <h1 className="header">Filmsøk</h1>
        </Link>
        </header>
        <Routes>
          <Route path="/" element={<><MovieSearch onSearch={handleSearch} /><SearchResults movies={movies} /></>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
