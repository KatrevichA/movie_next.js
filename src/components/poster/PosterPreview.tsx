import React, {FC} from 'react';
import {urls} from "@/services/api.service";
import Image from "next/image";
import './PosterPreview.css';
type Props = {
    poster: string,
    name: string,
}
const PosterPreview:FC<Props> = ({poster, name}) => {
    return (
        <div className={'posterImage'}>
            <Image src={ urls.imageBaseUrl + poster}
                   alt={name} width={100} height={150}/>
            <h4>{name}</h4>
        </div>
    );
};

export default PosterPreview;