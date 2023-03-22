const API_KEY = '413ff1b';



export async function searchMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
}

export async function fetchJamesBondMovies() {
  const response = await fetch(`https://www.omdbapi.com/?s=James%20Bond&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search.slice(0, 10);
}

export const fetchMovieById = async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data;
  };
  
  
