import React from 'react';
import {apiMovieDb} from "@/services/api.service";
import MovieInfo from "@/components/movie/MovieInfo";

type Params = Promise<{
    id:string
}>;


const MovieIdPage :({params}: { params: Params }) => Promise<React.JSX.Element> = async ({params}:{ params: Params }) => {
const {id} = await params;
    const movieDetails = await apiMovieDb.movie.getMovieId(id);

    return (
        <div>

            <MovieInfo movie={movieDetails}/>

        </div>
    );
};

export default MovieIdPage;