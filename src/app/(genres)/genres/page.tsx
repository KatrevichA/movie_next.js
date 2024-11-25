import React, {FC} from 'react';
import {apiMovieDb} from "@/services/api.service";
import PaginationGenres from "@/helpers/paginationGenrs/PaginationGenres";
import MoviesList from "@/components/movie/MoviesList";

type SearchParams = Promise<{ page: string, with_genre:string}>;
type MyProps = {
    searchParams: SearchParams
}
const GenresPage:FC<MyProps> = async (searchParams) => {

    const {page} = await searchParams.searchParams;
    const pages = page || '1';
    const {with_genre} = await searchParams.searchParams;

    const allMoviesGenres = await apiMovieDb.genres.getAllMovieWithGenre(with_genre, pages)
        .then(res => res)

    const movies = allMoviesGenres.results;
    const totalPages = allMoviesGenres.total_pages;

    return (
        <div>
            <PaginationGenres totalPages={totalPages} with_genre={with_genre}/>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default GenresPage;