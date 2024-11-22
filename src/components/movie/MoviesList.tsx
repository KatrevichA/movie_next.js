import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreview from "@/components/poster/PosterPreview";
type MyProps = {
    movies:IMovie[]
}
const MoviesList:FC<MyProps> = ({movies}) => {
    return (
        <div>
            <div className="mainPage">

                {
                    movies && movies.map(value => <div key={value.id}>
                        <PosterPreview poster={value.poster_path} name={value.title}/>
                        {/* todo MoviesListCard*/}
                    </div>)
                }

            </div>
        </div>
    );
};

export default MoviesList;