import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='w-full mt-[60px] bg-black py-[25px]'>
      <div className='w-[85%] mx-auto'>
        <div className="w-full flex justify-between items-start text-[20px]">
          {/* About Us */}
          <div className="lg:w-[24%] md:w-[48%] w-full text-left">
            <p className='text-white font-sans font-semibold space-y-3 tracking-wide text-[22px]'>About Us</p>
            <div className='w-full pr-2'>
              <p className="w-full text-gray-600 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
          {/* Newsletter */}
          <div className="lg:w-[24%] md:w-[48%] w-full text-left flex flex-col justify-between">
            <p className='text-white font-sans font-semibold space-y-3 tracking-wide text-[22px]'>Newsletter</p>
            <div className='w-full pr-2'>
              <p className="w-full text-gray-600 tracking-wide">Stay update with our latest</p>
              <div className="w-full h-10 my-2 relative">
                <input type='text' placeholder='Enter Email' className='w-full h-full outline-none border border-1 border-gray-400 bg-gray-800 pl-6 py-1 placeholder:text-[15px] placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 placeholder:text-gray-400 placeholder:my-auto focus:text-gray-400' />
                <button className='absolute right-0 top-1/2 -translate-y-1/2 h-full px-3 bg-yellow-500'><FaArrowRightLong /></button>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="lg:w-[20%] md:w-[48%] w-full text-left">
            <p className='text-white font-sans font-semibold space-y-3 tracking-wide text-[22px]'>Instagram Feed</p>
            <div className=" grid grid-rows-2 grid-cols-4 gap-y-2 mt-2">
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i1.jpg" alt="insta-1" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i2.jpg" alt="insta-2" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i3.jpg" alt="insta-3" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i4.jpg" alt="insta-4" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i5.jpg" alt="insta-5" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i6.jpg" alt="insta-6" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i7.jpg" alt="insta-7" className=' object-cover' />
              <img src="https://preview.colorlib.com/theme/sensive/img/instagram/i8.jpg" alt="insta-8" className=' object-cover' />
            </div>
          </div>

          {/* Follow Us */}
          <div className="lg:w-[24%] md:w-[48%] w-full text-left">
            <p className="text-white font-sans font-semibold space-y-3 tracking-wide text-[22px]">Follow Us</p>
            <div className='w-full pr-2'>
              <p className="w-full text-gray-600 tracking-wide">Stay update with our latest</p>
              <div className="w-full flex items-start justify-start gap-4 mt-2 text-gray-400">
                <FaFacebookF className='cursor-pointer dura200 transition-all hover:text-yellow-500'/>
                <FaTwitter className='cursor-pointer dura200 transition-all hover:text-yellow-500'/>
                <FaInstagram className='cursor-pointer dura200 transition-all hover:text-yellow-500'/>
                <FaWhatsapp className='cursor-pointer dura200 transition-all hover:text-yellow-500'/>
              </div>
            </div>
          </div>
        </div>
        <p className='text-[gray] text-center my-[20px] text-[14px]'>Copyright ©2025 All rights reserved | This template is made with  by <a href="" className='text-[orange]'>Colorlib</a></p>
      </div>
    </footer>
  )
}
