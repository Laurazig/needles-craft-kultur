'use client'
import Image from 'next/image'
import BannerCrochetChildren from '../../../public/assets/banner/banner-crochet-children.jpg'

export default function BannerWorkshops() {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
        <Image
          src={BannerCrochetChildren}
          alt='adult helping children crochet'
          layout='fill'
          objectFit='cover' />
      </div>

    </div>
  );
}