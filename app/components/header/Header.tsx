'use client'
import Icon from '../../../public/assets/favicon.png';
import Image from 'next/image';
import Burger from './burger/burger';
// import { BsFillMoonStarsFill } from 'react-icons/bs';

// import { useState } from "react";

export default function Header() {
    // const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
            <div className='inline-flex'>
                <a href="/" className='mr-5'>
                    <Image src={Icon} alt="logo" className='h-9 w-9 ml-4' />
                </a>
                <h1 className='self-center'>Needles, Craft & Kultur @ Grassi</h1>
                {/* <BsFillMoonStarsFill /> */}
            </div>
            <Burger />
        </div>
    );
}
