// import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import BannerTeam from "../components/banner/BannerTeam";
import team from "../../public/assets/team/team-first-meeting-fia.jpg";
import Laura from "../../public/assets/team/laura.jpg";
import Asya from "../../public/assets/team/asya.jpg";
import Jule from "../../public/assets/team/jule-shibori.jpg";
import Jeany from "../../public/assets/team/Jeany-work.png";
import Eitidal from "../../public/assets/team/eitidal-work.jpg";


export default function Team() {

    return (
        <div className="justify-items-center">
            <Header />
            <BannerTeam />
            <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-20">
                <h1 className="text-center text-5xl mt-6 mb-6 tracking-widest">The Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Image src={team} alt="Grassi team" className="rounded-3xl  w-96"></Image>
                        <p>We had our first meeting in Aug 2022</p>
                    </div>
                    <div>
                        <Image src={Laura} alt="team member Laura" className="rounded-3xl  w-96"></Image>
                        <p>Laura leads the Friday group</p>
                    </div>
                    <div>
                        <Image src={Asya} alt="team member Asya" className="rounded-3xl  w-96"></Image>
                        <p>Asya leads the Wednesday group with FIA (Frauen in Arbeit)</p>
                    </div>
                   <div>
                        <Image src={Jule} alt="team member Jule" className="rounded-3xl  w-96"></Image>
                        <p>Jule is part of the Friday team</p>
                    </div>
                    <div>
                        <Image src={Jeany} alt="team member Jeany" className="rounded-3xl  w-96"></Image>
                        <p>Jeany is part of the Friday group and is the best crocheter in town</p>
                    </div>
                    <div>
                        <Image src={Eitidal} alt="team member Eitidal" className="rounded-3xl  w-96"></Image>
                        <p>Eitidal is part of the Wednesday group</p>
                    </div> 
                </div>
            </main>
        </div>
    )
}