'use client'
import Icon from '../../../public/assets/favicon.png';
import Image from 'next/image';
import Burger from './burger/burger';
// import { useRouter } from 'next/router';
// import en from '../../../public/assets/translations/en';
// import de from '../../../public/assets/translations/de';
// import sy from '../../../public/assets/translations/sy';
// import { BsFillMoonStarsFill } from 'react-icons/bs';

// import { useState } from "react";

export default function Header() {
    // const [isNavOpen, setIsNavOpen] = useState(false);

    // const router = useRouter();
    // const { locale } = router;
    // const text = locale === 'en' ? en : de;

    // const changeLanguage = (e: { target: { value: any; }; }) => {
    //     const local = e.target.value;
    //     //ES 6 shorthand notation for objects location: location
    //     router.push('/', '/', { locale });
    // };

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
            <div className='inline-flex'>
                <a href="/" className='mr-5'>
                    <Image src={Icon} alt="logo" className='h-9 w-9 ml-4 hover:grayscale' />
                </a>
                <h1 className='self-center'>Needles, Craft & Kultur @ Grassi</h1>
                {/* <BsFillMoonStarsFill /> */}
                {/* <select
                    // onChange={changeLanguage}
                    // defaultValue={locale}
                    className='text-white text-lg bg-transparent'
                >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="sy">SY</option>
                </select> */}
            </div>
            <Burger />
        </div>
    );
}
