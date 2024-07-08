'use client'
import Image from 'next/image'
import aboutImg from '/public/images/slider2.jpg'

const About = () => {
  return (
    <div className='lg:flex justify-between items-center  mt-[10%] w-full'>
      <div className='image-container'>
        <Image src={aboutImg} alt='about' className='w-[90%] h-[90%] rounded-[10px] object-cover' />
      </div>
      <div className='text-container p-4 w-full'>
        <h3 className='text-green-600 text-sm text-start'>About Us</h3>
      </div>
    </div>
  )
}

export default About
