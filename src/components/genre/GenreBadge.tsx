import React from 'react';
import {apiMovieDb} from "@/services/api.service";
import './Genre.css';
import Link from "next/link";
import {Button} from "@mui/material";

const GenreBadge = async () => {
    const genres = await apiMovieDb.genres.getGenres();

    return (
        <div className={'genres'}>
            {
                genres.genres.map(value => <div key={value.id}>
                        <Link href={'/genres/?with_genre='+ value.id}>
                            <Button variant="outlined">{value.name}</Button>
                        </Link>
                </div>)
            }
        </div>
    );
};
export default GenreBadge;