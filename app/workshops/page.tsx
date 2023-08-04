import React from "react"
import Header from "../components/header/Header"
import Image from "next/image"

export default function Workshops() {

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col p-5 md:p-20">
                <h1 className='text-center text-5xl mt-6 mb-6 tracking-widest'>Workshops</h1>
                <h2 className="my-6">August</h2>
                <div className="grid grid-cols-7 gap-4">
                    <div className="bg-slate-700">Mon</div>
                    <div className="bg-slate-700">Tues</div>
                    <div className="bg-slate-700">Wed</div>
                    <div className="bg-slate-700">Thurs</div>
                    <div className="bg-slate-700">Fri</div>
                    <div className="bg-slate-700">Sat</div>
                    <div className="bg-slate-700">Sun</div>
                    <div className="border-2 border-slate-700"></div>
                    <div className="border-2 border-slate-700">1st</div>
                    <div className="border-2 border-slate-700">2nd - FIA</div>
                    <div className="border-2 border-slate-700">3rd</div>
                    <div className="border-2 border-slate-700">4th - Jule</div>
                    <div className="border-2 border-slate-700">5th</div>
                    <div className="border-2 border-slate-700">6th</div>
                    <div className="border-2 border-slate-700">7th</div>
                    <div className="border-2 border-slate-700">8th</div>
                    <div className="border-2 border-slate-700">9th - FIA</div>
                    <div className="border-2 border-slate-700">10th</div>
                    <div className="border-2 border-slate-700">11th - Laura</div>
                    <div className="border-2 border-slate-700">12th</div>
                    <div className="border-2 border-slate-700">13th</div>
                    <div className="border-2 border-slate-700">14th</div>
                    <div className="border-2 border-slate-700">15th</div>
                    <div className="border-2 border-slate-700">16th- FIA</div>
                </div>
                <a href="https://grassi-voelkerkunde.skd.museum/en/programm/" target="_blank" className="bg-slate-600 mt-10 p-4 w-30 hover:text-slate-200">Check out the Grassi program.</a>
            </main>
        </>
    )
}




