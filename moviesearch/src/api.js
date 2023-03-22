const API_KEY = '413ff1b';

export async function searchMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
}
