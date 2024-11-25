import React, {FC} from 'react';
import {apiMovieDb} from "@/services/api.service";
import PaginationSearch from "@/helpers/paginationSearch/PaginationSearch";
import MoviesList from "@/components/movie/MoviesList";

type SearchParams = Promise<{ query: string, page:string}>;
type MyProps = {
    searchParams: SearchParams
}

const SearchPage:FC<MyProps> = async (searchParams) => {
    const {query} = await searchParams.searchParams;
    const {page} = await searchParams.searchParams;
    const pages = page || '1';

    const allSearchRes = await apiMovieDb.search.searchWithPage(query, pages);

    const movies = allSearchRes.results;
    const totalPages = allSearchRes.total_pages;


    return (
        <div>
            <PaginationSearch totalPages={totalPages} query={query}/>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default SearchPage;