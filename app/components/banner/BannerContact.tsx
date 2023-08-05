'use client'
import Image from 'next/image'
import BannerGrassi from '../../../public/assets/banner/BannerGrassi.png'

export default function BannerContact() {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
        <Image
          src={BannerGrassi}
          alt='Grassi museum'
          layout='fill'
          objectFit='cover' />
      </div>

    </div>
  );
}