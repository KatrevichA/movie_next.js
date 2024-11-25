
import {IMovieResponse} from "@/models/IMovieResponse";
import {IMovie} from "@/models/IMovie";
import {IMovieIdVideos} from "@/models/IMovieIdVideos";
import {IGenresResponse} from "@/models/genres/IGenresResponse";
import {IGenres} from "@/models/genres/IGenres";

export const urls = {
    imageBaseUrl:'https://image.tmdb.org/t/p/w500'
};

const options = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmQ2YjNmNTBhYTdjZDNjOWMwN2MzNTU0ZTA0ZWM3ZCIsIm5iZiI6MTczMjAyODI5MS40MTgyNzQyLCJzdWIiOiI2NjZlZjUxMTI5ZGQwOGYwYTBhNjJmYmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NG4NrMc1feZ0WlEfgM8YgiPM6iU4N7kP85mEVdS9rbc'
    }
};

export const apiMovieDb ={
    movie: {
        getAllMovieWithPage: async (page:string):Promise<IMovieResponse & {movie: IMovie[]}> => {
            const movie = await
                fetch('https://api.themoviedb.org/3/discover/movie?page=' + page, options)
                    .then(value => value.json())
            return movie
        },
        getMovieId: async (id:string):Promise<IMovieIdVideos>=>{
            const movieId = await
                fetch('https://api.themoviedb.org/3/movie/'+id+'?&append_to_response=videos', options)
                    .then(value => value.json())
            return movieId
        }
    },
    genres:{
        getGenres: async ():Promise<IGenresResponse & {genres: IGenres[]} >=>{
            const genres = await
                fetch('https://api.themoviedb.org/3/genre/movie/list', options)
                .then(value => value.json());
            return genres
        },
        getAllMovieWithGenre: async (with_genres:string,page:string):Promise<IMovieResponse & {movie: IMovie[]}> =>{
            const list = await
                fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${with_genres}&page=${page}`, options)
                    .then(value => value.json())
            return list
        }
    },
    search: {
        searchWithPage: async (query:string, page:string):Promise<IMovieResponse & {movie: IMovie[]}>=> {
            const result = await
                fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, options)
                    .then(value => value.json())
            return result
        }
    }
};
