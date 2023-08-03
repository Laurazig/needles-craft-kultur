import React from "react"
import Header from "../header/Header"
import Image from "next/image"

export default function Workshops() {

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-20">
                <h1 className='text-center text-5xl mt-6 mb-6 tracking-widest'>Workshops</h1>
                <a href="https://grassi-voelkerkunde.skd.museum/en/programm/">Check out the Grassi program.</a>
            </main>
        </>
    )
}




