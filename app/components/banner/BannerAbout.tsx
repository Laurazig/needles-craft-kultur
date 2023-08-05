'use client'
import Image from 'next/image'
import BannerLauraChild from '../../../public/assets/banner/Banner-laura-helping-child.jpg'

export default function BannerAbout() {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
        <Image
          src={BannerLauraChild}
          alt='adult helping child sew'
          layout='fill'
          objectFit='cover' />
      </div>

    </div>
  );
}