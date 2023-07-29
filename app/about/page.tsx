import React from "react";
import Header from "../components/header/Header";
import Image from "next/image";
import FlyerGrassi from "../../public/assets/flyer-grassi.jpg"
import FlyerEng from "../../public/assets/flyer-eng.jpg"
import FlyerGerm from "../../public/assets/flyer-german.jpg"
import FIAlogo from "../../public/assets/logos/FIA_logo.png"
import LeipzigWardrobelogo from "../../public/assets/logos/LeipzigWardrobeLogo.png"
import CrochetChildren from "../../public/assets/crochet-children.jpg"

export default function About() {

    return (
        <>
            <Header />
            <main className="min-h-screen flex-col items-center justify-between p-5 md:p-20">
                <h1 className='text-center text-5xl mt-6 mb-6 tracking-widest'>About</h1>
                <p className='text-center my-10'>A community textile workshop at Grassi Museum in Leipzig. Every Wednesday from 11-1pm and Fridays from 3pm to 5pm.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image src={FlyerGrassi} alt="Flyer outside Grassi Museum" className='rounded-3xl'></Image>
                    <Image src={FlyerEng} alt="flyer in English" className='rounded-3xl'></Image>
                    <Image src={FlyerGerm} alt="flyer in German" className='rounded-3xl'></Image>
                </div>
                <div className="text-center">
                    <h2 className="mt-5 text-xl">Collaboration</h2>
                    <p>The project is a collaboration between FiA - Frauen in Arbeit and Leipzig Wardrobe by Laura Hesse</p>
                </div>
                <div className="grid grid-cols-2 xl:w-1/2 xl:m-auto">
                    <a href="https://www.fia-leipzig.de/" target="_blank" className=""><Image src={FIAlogo} alt="FIA logo" className='my-4'></Image></a>
                    <p className="ml-5 mt-3 text-pink-400 text-justify text-xs md:text-base">FiA - Frauen in Arbeit is an intercultural women's center for information and connections. </p>
                </div>
                <div className="grid grid-cols-2 xl:w-1/2 xl:m-auto">
                    <p className="mt-3 text-yellow-500 text-justify text-xs md:text-base">The Leipzig Wardrobe project aims to build a sewing community in Leipzig and promote skill shareing.</p>
                    <a href="https://www.instagram.com/leipzig.wardrobe/" target="_blank" className="ml-5"><Image src={LeipzigWardrobelogo} alt="Leipzig wardrobe logo" className='my-4 w-20 m-auto'></Image></a>
                </div>
                {/* <Image src={CrochetChildren} alt="childrens hands chrochet" className='my-4'></Image> */}

            </main>
        </>
    )
}