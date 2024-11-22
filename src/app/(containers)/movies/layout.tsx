import {Metadata} from "next";
import React from "react";

export const metadata:Metadata ={
    title: 'Movies',
    description:'about (oll information)'
}
type Props = {children:React.ReactNode};
const Movies = ({children}:Props)=>{
    return (
        <>
            {children}
        </>
    )
};

export default Movies;