import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from './api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMovieById(id);
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Laster...</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>Released: {movie.Released}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Writer: {movie.Writer}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Awards: {movie.Awards}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
