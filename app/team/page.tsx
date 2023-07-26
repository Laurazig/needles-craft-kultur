import React from "react";
import Image from "next/image";
// import Laura from "../assets/team/team-first-meeting-fia.jpg";
// import Asya from "../../assets/team/Asya.jpg";
import team from "../assets/team/team-first-meeting-fia.jpg";

export default function Team() {

    return(
        <div className="justify-items-center">
            <h1 className="text-center text-5xl mt-6">The Team</h1> 
             {/* <Image src={Laura} alt="team member Laura"></Image> */}
             {/* <Image src={Asya} alt="team member Asya"></Image> */}
             <Image src={team} alt="Grassi team" className=" w-96"></Image>
             <p>We had our first meeting in Aug 2022</p>
        </div>
    )
}