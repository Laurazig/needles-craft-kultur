import React from "react"
import Header from "../components/Header"
import BannerWorkshops from "../components/banner/BannerWorkshops"
import Image from "next/image"
import GrassiLogo from "../../public/assets/logos/GrassiLogo.png"


export default function Workshops() {

    return (
        <>
            <Header />
            <BannerWorkshops />
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
                    <div className="border-2 border-slate-700">1</div>
                    <div className="border-2 border-slate-700">2 - FIA</div>
                    <div className="border-2 border-slate-700">3</div>
                    <div className="border-2 border-slate-700">4 - Jule</div>
                    <div className="border-2 border-slate-700">5</div>
                    <div className="border-2 border-slate-700">6</div>
                    <div className="border-2 border-slate-700">7</div>
                    <div className="border-2 border-slate-700">8</div>
                    <div className="border-2 border-slate-700">9 - FIA</div>
                    <div className="border-2 border-slate-700">10</div>
                    <div className="border-2 border-slate-700">11 - Laura</div>
                    <div className="border-2 border-slate-700">12</div>
                    <div className="border-2 border-slate-700">13</div>
                    <div className="border-2 border-slate-700">14</div>
                    <div className="border-2 border-slate-700">15</div>
                    <div className="border-2 border-slate-700">16 - FIA</div>
                    <div className="border-2 border-slate-700">17</div>
                    <div className="border-2 border-slate-700">18 - Friday team</div>
                    <div className="border-2 border-slate-700">19</div>
                    <div className="border-2 border-slate-700">20</div>
                    <div className="border-2 border-slate-700">21</div>
                    <div className="border-2 border-slate-700">22</div>
                    <div className="border-2 border-slate-700">23 - FIA</div>
                    <div className="border-2 border-slate-700">24</div>
                    <div className="border-2 border-slate-700">25 - Friday team</div>
                    <div className="border-2 border-slate-700">26</div>
                    <div className="border-2 border-slate-700">27</div>
                    <div className="border-2 border-slate-700">28</div>
                    <div className="border-2 border-slate-700">29</div>
                    <div className="border-2 border-slate-700">30 - FIA</div>
                    <div className="border-2 border-slate-700">31</div>
                </div>

                <div className="mt-10 text-center m-auto">
                    <div className="bg-slate-600 mt-10 p-4 w-80">
                        <h2>Check out the Grassi program.</h2>
                        <a href="https://grassi-voelkerkunde.skd.museum/en/programm/" target="_blank" className="hover:scale-[1.01]" ><Image src={GrassiLogo} alt="Grassi logo" className='my-4 m-auto'></Image></a>
                    </div>
                </div>
            </main>
        </>
    )
}




