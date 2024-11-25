import React from 'react';
import Image from "next/image";
import user from './icons8-verified-account-50.png';
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className={'user'}>
            <Image src={user} alt={'user'} height={40} width={40} priority={false}/>
            <h4>John Smith</h4>
        </div>
    );
};

export default UserInfo;