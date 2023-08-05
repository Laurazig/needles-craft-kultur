'use client'
import Image from 'next/image'
import BannerTeamFirstMeeting from '../../../public/assets/banner/banner-team-first-meeting-fia.jpg'

export default function BannerTeam() {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
        <Image
          src={BannerTeamFirstMeeting}
          alt='team first meeting'
          layout='fill'
          objectFit='cover' />
      </div>

    </div>
  );
}