import React from "react";
import Header from "../components/header/Header";
import Image from "next/image";
import FlyerGrassi from "../../public/assets/flyer-grassi.jpg"
import FlyerEng from "../../public/assets/flyer-eng.jpg"
import FlyerGerm from "../../public/assets/flyer-german.jpg"
import CrochetChildren from "../../public/assets/crochet-children.jpg"

export default function About() {

    return (
        <>
            <Header />
            <main className="min-h-screen flex-col items-center justify-between p-5 md:p-20">
                <h1 className='text-center text-5xl mt-6 mb-6'>About</h1>
                <p className='text-center my-10'>A community textile workshop at Grassi Museum in Leipzig. Every Wednesday from 11-1pm and Fridays from 3pm to 5pm.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image src={FlyerGrassi} alt="Flyer outside Grassi Museum" className='rounded-3xl'></Image>
                    <Image src={FlyerEng} alt="flyer in English" className='rounded-3xl'></Image>
                    <Image src={FlyerGerm} alt="flyer in German" className='rounded-3xl'></Image>
                </div>
                {/* <Image src={CrochetChildren} alt="childrens hands chrochet" className='my-4'></Image> */}
            </main>
        </>
    )
}