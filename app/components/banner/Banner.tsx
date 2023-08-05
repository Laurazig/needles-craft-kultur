'use client'
import Image from 'next/image'
import BannerAsyaHelpingStudents from '../../../public/assets/banner/banner-asya-helping-students.jpg'

export default function Banner() {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
        <Image
          src={BannerAsyaHelpingStudents}
          alt='adult helping students sew'
          layout='fill'
          objectFit='cover' />
      </div>

    </div>
  );
}