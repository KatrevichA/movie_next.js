
import {IMovieResponse} from "@/models/IMovieResponse";
import {IMovie} from "@/models/IMovie";

/*todo helper base url*/
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
        }
    },

};


/*todo getMovie*/
/*todo getGenres (action click - oll films choosing genre ) */