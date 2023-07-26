import React from "react";
import Image from "next/image";
import Laura from "../../assets/team/laura.JPG";
import Asya from "../../assets/team/Asya.JPG";

export default function Team() {

    return(
        <div>
            <h1>The Team</h1> 
             <Image src={Laura} alt="team member Laura"></Image>
             <Image src={Asya} alt="team member Asya"></Image>
        </div>
    )
}