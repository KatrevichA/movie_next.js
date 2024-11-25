import React, {FC} from 'react';
import {IMovieIdVideos} from "@/models/IMovieIdVideos";
import PosterPreview from "@/components/poster/PosterPreview";
import Link from "next/link";
import {Button} from "@mui/material";

type MyType ={
    movie:IMovieIdVideos
}

const MovieInfo:FC<MyType> = ({movie}) => {
    return (
        <div className={'MovieInfo'}>
            <div className={'poster'}>
                <PosterPreview poster={movie.poster_path} name={movie.title}/>
            </div>
            <div className={'about'}>
                {movie.genres.map(genre =>
                    <Link key={genre.id} href={`/genres/?with_genre=` + genre.id} >
                        <Button variant="contained">{genre.name}</Button>
                    </Link>)}
                <div>
                    <h2>DATE {movie.release_date}</h2>
                    <h2>OVERVIEW</h2>
                    <p className={'overview'}>{movie.overview}</p>
                </div>
            </div>

        </div>
    );
};

export default MovieInfo;