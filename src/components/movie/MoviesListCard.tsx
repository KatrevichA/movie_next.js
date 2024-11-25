import React, {FC} from 'react';
import './Movie.css';
import {IMovie} from "@/models/IMovie";
import PosterPreview from "@/components/poster/PosterPreview";
import Link from "next/link";

type MyType = {
    movie:IMovie
}

const MoviesListCard:FC<MyType> = ({movie}) => {


    return (
        <div>
            <Link href={'movies/'+ movie.id}>
                <PosterPreview poster={movie.poster_path} name={movie.title}/>
            </Link>
        </div>
);
};

export default MoviesListCard;