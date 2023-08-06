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
          {/* <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Sewing with Asya</p>
            <button className='text-purple-500 bg-white py-4 px-10 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>calendar</button>
          </div> */}
      </div>

    </div>
  );
}