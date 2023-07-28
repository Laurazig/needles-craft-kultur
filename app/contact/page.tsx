import React from "react";
import Header from "../components/header/Header";
import Image from "next/image";
import Grassi from "../../public/assets/grassi.png"

export default function Contact() {

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center p-5 md:p-20">
                <h2 className='text-center text-5xl mt-6 mb-6'>Contact</h2>
                <Image src={Grassi} alt="grassi museum" className='w-2/3 md:w-1/2 lg:w-1/4 rounded-3xl'></Image>
                <div className='text-center md:my-5'>needles.craft.kultur@gmail.com</div>
                <div className='text-center md:my-5'>send us a message on instagram @needles_craft_kultur_leipzig</div>
            </main>
        </>



    )
}