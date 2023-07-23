import React from 'react';
import Image from 'next/image';
import Header from "./components/header/Header";
import Laura from "./assets/team/laura.jpg";
import Asya from "./assets/team/Asya.jpg";
import Team from "./assets/team/team-first-meeting-fia.jpg";
import Insta from './assets/insta-needles-craft-kultur.jpg';
import vidBannerCrochet from './assets/crochet480.mp4';

export default function Home() {

  return (
    <div>
      <Header />

      {/* <header> */}
      {/* <ReactPlayer loop muted playsInline>
          <source src={vidBannerCrochet} type="video/webm"></source>
        </ReactPlayer> */}
      {/* <video autoPlay loop muted playsInline>
          <source src={vidBannerCrochet} type="video/webm"></source>
          <source src="my-animation.mp4" type="video/mp4">
        </video> */}
      {/* </header> */}

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="hover:scale-75 duration-300 hover:hue-rotate-180">
            <Image src={Insta} alt="instagram screenshot" />
          </div>

          <a
            href="https://www.instagram.com/needles_craft_kultur_leipzig/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Needles, Craft & Kultur{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Grassi Museum textile workshop
            </p>
          </a>
          <div>
            <h1>The Team</h1> 
             <Image src={Laura} alt="team member Laura" className='my-4 h-64 w-auto'></Image>
             <Image src={Asya} alt="team member Asya" className='my-4 h-64 w-auto'></Image>
             <Image src={Team} alt="team" className='my-4 h-64 w-auto'></Image>
        </div>
        {/* <video src={vidBannerCrochet}></video> */}
        </div>
      </main>
    </div>
  );
}
