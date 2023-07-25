'use client'

import Icon from '../../assets/favicon.png';
import Image from 'next/image';
import Burger from './burger/burger';
import { BsFillMoonStarsFill } from 'react-icons/bs';


import { useState } from "react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
            <a href="/">
                <Image src={Icon} alt="logo" className='h-9 w-9 ml-4' />
            </a>
            <h1>Needles, Craft & Kultur @ Grassi</h1>
            <BsFillMoonStarsFill />
            <Burger />
        </div>
    );
}
