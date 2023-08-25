import axios from "axios";


const getMovieBillboard = async () => await axios.get(`${import.meta.env.VITE_APP_API}/popular?api_key=${import.meta.env.VITE_APP_KEY}`);

const searchMovie = (word) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APP_KEY}&query=${word}`);

const getCategorys = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_APP_KEY}`);

const getMovieByGenreId = async (id) => await axios.get(`${import.meta.env.VITE_APP_API}/popular?api_key=${import.meta.env.VITE_APP_KEY}&with_genres=${id}`);

export default { getMovieBillboard, getMovieByGenreId, getCategorys, searchMovie };