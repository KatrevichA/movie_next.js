import React, {FC} from 'react';
import '../../../components/movie/Movie.css';
import Pagination from "@/helpers/pagination/Pagination";
import {apiMovieDb} from "@/services/api.service";
import MoviesList from "@/components/movie/MoviesList";

type SearchParams = Promise<{ page: string }>;
type MyProps = {
    searchParams: SearchParams
}
const MoviesPage:FC<MyProps> = async (searchParams) => {

    const {page} = await searchParams.searchParams;
    const pages = page || '1';

    const allMovies = await apiMovieDb.movie.getAllMovieWithPage(pages)
        .then(res => res);
    const movies = allMovies.results;
    const totalPages = allMovies.total_pages;


    return (
        <div>
            <Pagination totalPages={totalPages}/>

            <MoviesList movies={movies}/>


        </div>
    );
};

export default MoviesPage;