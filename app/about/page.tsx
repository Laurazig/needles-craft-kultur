import React from "react";
import Header from "../components/header/Header";
import Image from "next/image";
import CrochetChildren from "../../public/assets/crochet-children.jpg"

export default function About() {

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className='text-center text-5xl'>About</h1>
                <Image src={CrochetChildren} alt="childrens hands chrochet" className='my-4 h-64 w-auto'></Image>
                <p className='text-center my-10'>A community textile workshop at Grassi Museum in Leipzig. Every Wednesday from 11-1pm and Fridays from 3pm to 5pm</p>
            </main>
        </>
    )
}