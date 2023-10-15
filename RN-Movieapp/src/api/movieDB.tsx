import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '92c296e1d79fd89a16f8264c674f343f',
        language: 'es-ES'
    }
});

export default movieDB;