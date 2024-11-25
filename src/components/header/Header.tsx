import React from 'react';
import Link from "next/link";
import UserInfo from "@/components/user/UserInfo";
import './Header.css';
import Image from "next/image";
import film from './icons8-film-reel-48.png';
import FormSearch from "@/helpers/search/Form";

const Header = () => {
    return (
        <div className={'header'}>

                <div className={'imgMovie'}>
                    <Image src={film} width={40} height={40} alt={'film'} priority={false}/>
                    <h4>MOVIE</h4>
                </div>
                <div className={'link'}>
                    <ul>
                        <li><Link href={'/'}>HOME</Link></li>
                        <li><Link href={'/movies'}>MOVIES</Link></li>
                    </ul>
                </div>
            <div>
                <FormSearch/>
            </div>
                <div className={'user'}>
                    <UserInfo/>
                </div>
        </div>
    );
};

export default Header;