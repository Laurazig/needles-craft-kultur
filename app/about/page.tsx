// import React from "react";
import Header from "../components/Header";
import BannerAbout from "../components/banner/BannerAbout";
import Image from "next/image";
import FlyerGrassi from "../../public/assets/flyer-grassi.jpg"
import FlyerEng from "../../public/assets/flyer-eng.jpg"
import FlyerGerm from "../../public/assets/flyer-german.jpg"
import FIAlogo from "../../public/assets/logos/FIA_logo.png"
import GrassiLogo from "../../public/assets/logos/GrassiLogo.png"
import LeipzigWardrobelogo from "../../public/assets/logos/LeipzigWardrobeLogo.png"
import GroupWorkshop from "../../public/assets/team/group-in-workshop.jpg"
import TeamStairs from "../../public/assets/team/group-on-stairs.jpg"
import GroupJule from "../../public/assets/team/group-in-workshop-jule.jpg"
import CrochetChildren from "../../public/assets/crochet-children.jpg"

export default function About() {

    return (
        <>
            <Header />
            <BannerAbout />
            <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-20">
                <h1 className='text-center text-5xl mt-6 mb-6 tracking-widest'>About</h1>
                <p className='text-center my-10'>A community textile workshop at Grassi Museum in Leipzig. Every Wednesday from 11-1pm and Fridays from 3pm to 5pm.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image src={GroupWorkshop} alt="group in workshop" className='rounded-3xl'></Image>
                    <Image src={GroupJule} alt="group" className='rounded-3xl'></Image>
                    <Image src={TeamStairs} alt="group on stairs" className='rounded-3xl'></Image>
                    <Image src={FlyerGrassi} alt="Flyer outside Grassi Museum" className='rounded-3xl'></Image>
                    <Image src={FlyerEng} alt="flyer in English" className='rounded-3xl'></Image>
                    <Image src={FlyerGerm} alt="flyer in German" className='rounded-3xl'></Image>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                </div> */}
                <div className="text-center my-10">
                    <h2 className="mt-5 text-xl">Collaboration</h2>
                    <p>The project is a collaboration between FiA - Frauen in Arbeit, Leipzig Wardrobe by Laura Hesse and Grassi Museum.</p>
                </div>
                <div className="grid grid-cols-2 xl:w-1/2 xl:m-auto bg-gray-900 p-5 my-5">
                    <a href="https://www.fia-leipzig.de/" target="_blank" className="hover:scale-[1.01]"><Image src={FIAlogo} alt="FIA logo" className='my-4 m-auto'></Image></a>
                    <p className="ml-5 mt-3 text-gray-300 text-justify text-xs md:text-base">FiA - Frauen in Arbeit is an intercultural women's center for information and connections. </p>
                </div>
                <div className="my-3"></div>
                <div className="grid grid-cols-2 xl:w-1/2 xl:m-auto bg-gray-900 p-5 my-5">
                    <p className="mt-3 text-gray-300 text-justify text-xs md:text-base">The Leipzig Wardrobe project aims to build a sewing community in Leipzig and promote skill sharing.</p>
                    <a href="https://www.instagram.com/leipzig.wardrobe/" target="_blank" className="ml-5 hover:scale-[1.01]"><Image src={LeipzigWardrobelogo} alt="Leipzig wardrobe logo" className='my-4 w-20 m-auto'></Image></a>
                </div>
                <div className="my-3"></div>
                <div className="grid grid-cols-2 xl:w-1/2 xl:m-auto bg-gray-900 p-5 my-5">
                    <a href="https://grassi-voelkerkunde.skd.museum/en/" target="_blank" className="hover:scale-[1.01]"><Image src={GrassiLogo} alt="Grassi logo" className='my-4 m-auto'></Image></a>
                    <p className="ml-5 mt-3 text-gray-300 text-justify text-xs md:text-base">Grassi Museum für Völkerkunde zu Leipzig. A network museum which works with and for a diverse urban society.</p>
                </div>
            </main>
        </>
    )
}