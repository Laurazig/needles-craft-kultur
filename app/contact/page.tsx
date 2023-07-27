import React from "react";
import Header from "../components/header/Header";
import Image from "next/image";
import Grassi from "../../public/assets/grassi.png"

export default function Contact() {

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h2 className='text-center text-5xl'>Contact</h2>
                <Image src={Grassi} alt="grassi museum" className='my-4 h-64 w-auto'></Image>
                <div className='text-center my-10'>needles.craft.kultur@gmail.com</div>
                <div className='text-center my-10'>send us a message on instagram @needles_craft_kultur_leipzig</div>
            </main>
        </>



    )
}