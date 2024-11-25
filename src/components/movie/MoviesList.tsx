import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import MoviesListCard from "@/components/movie/MoviesListCard";

type MyProps = {
    movies:IMovie[]
}
const MoviesList:FC<MyProps> = ({movies}) => {
    return (
        <div>
            <div className="mainPage">

                {
                    movies && movies.map(value => <div key={value.id}>
                    <MoviesListCard movie={value}/>
                        {/* todo MoviesListCard*/}
                    </div>)
                }

            </div>
        </div>
    );
};

export default MoviesList;