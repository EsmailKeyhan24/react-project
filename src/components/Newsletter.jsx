import React from 'react'

import { IoIosPerson } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { TfiThemifyFavicon } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight , FaAngleLeft} from "react-icons/fa6";





import Img1 from '../assets/thumb1.png.webp'
import Img2 from '../assets/thumb2.png.webp'
import Img3 from '../assets/thumb3.png.webp'
import img4 from '../assets/blog1.png.webp'
import img5 from '../assets/blog2.png.webp'
import img6 from '../assets/blog3.png.webp'
import img7 from '../assets/blog4.png.webp'

export default function Newsletter() {
  return (
    <div className='w-full min-h-screen flex gap-[20px]'>
        <SlideLeft />
        <SlideRight />
    </div>
  )
}


function SlideLeft(){
    return(
        <section className='w-[66%] min-h-[500px]'>
                <div className='w-full'>
                    <section className='relative'>
                    <img src={img4} alt="" className=''/>
                        <div className='flex justify-evenly items-center w-[430px] h-[60px] absolute bottom-0 bg-white'>
                            <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><IoIosPerson />Admin</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'  ><MdOutlineDateRange />January 12,2019</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><TfiThemifyFavicon />2 Comments</span>
                        </div>
                    </section>
                    <section className='w-full mt-10'>
                         <h3 className='text-[25px] font-serif text-[#333] font-bold'>Women claims husbend wants to name baby girl after his ex-lover aparking.</h3>
                         <span className='my-4 block font-serif text-gray-500 text-[17px]'>Tag: travel, life style, technology, fashion</span>
                         <p className='text-[gray] text-[15px] '>Over yielding doesn't so moved green saw meat hath fish he him from given yielding lesser cattle were fruitful lights. Given let have, lesser their made him above gathered dominion sixth. Creeping deep said can't called second. Air created seed heaven sixth created living</p>
                         <button className='px-[35px] py-[13px] text-[12px] mt-5 uppercase bg-black text-[orange] flex justify-center items-center'>read more <FaArrowRight className='ml-3' /></button>
                    </section>
                </div>
                <div className='w-full my-16'>
                    <section className='relative'>
                    <img src={img5} alt="" className=''/>
                        <div className='flex justify-evenly items-center w-[430px] h-[60px] absolute bottom-0 bg-white'>
                            <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><IoIosPerson />Admin</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'  ><MdOutlineDateRange />January 12,2019</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><TfiThemifyFavicon />2 Comments</span>
                        </div>
                    </section>
                    <section className='w-full mt-10'>
                         <h3 className='text-[25px] font-serif text-[#333] font-bold'>Women claims husbend wants to name baby girl after his ex-lover aparking.</h3>
                         <span className='my-4 block font-serif text-gray-500 text-[17px]'>Tag: travel, life style, technology, fashion</span>
                         <p className='text-[gray] text-[15px] '>Over yielding doesn't so moved green saw meat hath fish he him from given yielding lesser cattle were fruitful lights. Given let have, lesser their made him above gathered dominion sixth. Creeping deep said can't called second. Air created seed heaven sixth created living</p>
                         <button className='px-[35px] py-[13px] text-[12px] mt-5 uppercase bg-black text-[orange] flex justify-center items-center'>read more <FaArrowRight className='ml-3' /></button>
                    </section>
                </div>
                <div className='w-full my-16'>
                    <section className='relative'>
                    <img src={img6} alt="" className=''/>
                        <div className='flex justify-evenly items-center w-[430px] h-[60px] absolute bottom-0 bg-white'>
                            <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><IoIosPerson />Admin</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'  ><MdOutlineDateRange />January 12,2019</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><TfiThemifyFavicon />2 Comments</span>
                        </div>
                    </section>
                    <section className='w-full mt-10'>
                         <h3 className='text-[25px] font-serif text-[#333] font-bold'>Tourist deaths in Costa Rica jeopardize safe dest ination reputation all time.</h3>
                         <span className='my-4 block font-serif text-gray-500 text-[17px]'>Tag: travel, life style, technology, fashion</span>
                         <p className='text-[gray] text-[15px] '>Over yielding doesn't so moved green saw meat hath fish he him from given yielding lesser cattle were fruitful lights. Given let have, lesser their made him above gathered dominion sixth. Creeping deep said can't called second. Air created seed heaven sixth created living</p>
                         <button className='px-[35px] py-[13px] text-[12px] mt-5 uppercase bg-black text-[orange] flex justify-center items-center'>read more <FaArrowRight className='ml-3' /></button>
                    </section>
                </div>
                <div className='w-full my-16'>
                    <section className='relative'>
                    <img src={img7} alt="" className=''/>
                        <div className='flex justify-evenly items-center w-[430px] h-[60px] absolute bottom-0 bg-white'>
                            <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><IoIosPerson />Admin</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'  ><MdOutlineDateRange />January 12,2019</span>
                        <span className='text-gray-500 text-[14px] cursor-pointer flex items-center gap-1'><TfiThemifyFavicon />2 Comments</span>
                        </div>
                    </section>
                    <section className='w-full mt-10'>
                         <h3 className='text-[25px] font-serif text-[#333] font-bold'>Tourist deaths in Costa Rica jeopardize safe dest ination reputation all time.</h3>
                         <span className='my-4 block font-serif text-gray-500 text-[17px]'>Tag: travel, life style, technology, fashion</span>
                         <p className='text-[gray] text-[15px] '>Over yielding doesn't so moved green saw meat hath fish he him from given yielding lesser cattle were fruitful lights. Given let have, lesser their made him above gathered dominion sixth. Creeping deep said can't called second. Air created seed heaven sixth created living</p>
                         <button className='px-[35px] py-[13px] text-[12px] mt-5 uppercase bg-black text-[orange] flex justify-center items-center'>read more <FaArrowRight className='ml-3' /></button>
                    </section>
                </div>
                <div className='w-full h-[100px]'>
                    <section className='w-full h-full flex justify-center items-center gap-2 cursor-pointer'>
                        <span className='w-[50px] h-[50px] border-2 flex justify-center items-center'><FaAngleLeft /></span>
                        <span className='w-[45px] h-[50px] text-[orange] border-2 border-black flex justify-center items-center'>1</span>
                        <span className='w-[45px] h-[50px] border-2 flex justify-center items-center'>2</span>
                        <span className='w-[50px] h-[50px] border-2 flex justify-center items-center'><FaAngleRight /></span>
                    </section>
                </div>
        </section>
    )
}




// ________________________Side_Right___

function SlideRight(){
    return(
        <section className='w-[34%] min-h-[500px] '>
            <NewsletterRight />
            <Catgory />
            <Popular_psot />
            <Post />
        </section>
    )
}



function NewsletterRight(){
    return(
        <div className='w-full min-h-[250px] bg-[#F9F9FF] p-[30px]'>
            <h3 className='font-bold'>Newsletter</h3>
            <input type="text" placeholder='Enter Email' className='w-full h-[50px] pl-[16px] my-[24px]' />
            <button className='w-full h-[45px] bg-black text-[gold] capitalize'>submit</button>
        </div>
    )
}


function Catgory(){
    return(
        <div className='w-full min-h-[250px] bg-[#F9F9FF] p-[30px] my-[25px]'>
            <h3 className='font-bold'>Catgory</h3>
            <ul className='w-full'>
                <li className='w-full h-[45px] bg-[white] cursor-pointer mt-[10px] flex items-center justify-between px-[15px] text-[14px] duration-100 hover:text-[orange]'>
                    <strong className='font-normal'>Tecnalogy</strong>
                    <span>(03)</span>
                </li>
                <li className='w-full h-[45px] bg-[white] cursor-pointer mt-[10px] flex items-center justify-between px-[15px] text-[14px] duration-100 hover:text-[orange]'>
                    <strong className='font-normal'>Tecnalogy</strong>
                    <span>(03)</span>
                </li>
                <li className='w-full h-[45px] bg-[white] cursor-pointer mt-[10px] flex items-center justify-between px-[15px] text-[14px] duration-100 hover:text-[orange]'>
                    <strong className='font-normal'>Tecnalogy</strong>
                    <span>(03)</span>
                </li>
                <li className='w-full h-[45px] bg-[white] cursor-pointer mt-[10px] flex items-center justify-between px-[15px] text-[14px] duration-100 hover:text-[orange]'>
                    <strong className='font-normal'>Tecnalogy</strong>
                    <span>(03)</span>
                </li>
                <li className='w-full h-[45px] bg-[white] cursor-pointer mt-[10px] flex items-center justify-between px-[15px] text-[14px] duration-100 hover:text-[orange]'>
                    <strong className='font-normal'>Tecnalogy</strong>
                    <span>(03)</span>
                </li>
                <li className='w-full h-[45px] bg-[white] cursor-pointer mt-[10px] flex items-center justify-between px-[15px] text-[14px] duration-100 hover:text-[orange]'>
                    <strong className='font-normal'>Tecnalogy</strong>
                    <span>(03)</span>
                </li>
            </ul>
        </div>
    )
}


function Popular_psot(){
    return(
        <div className='w-full min-h-[250px] bg-[#F9F9FF] p-[30px]'>
            <h3 className='font-bold'>Popular Post</h3>
            <section className='w-full relative '>
                <img src={Img1} alt="" className='w-full object-cover my-[14px]'/>
                <span className='bg-white p-[9px] text-[14px] absolute top-[99px] left-0 text-gray-400 cursor-pointer'>Adam Colinge | Dec 15</span>
                <h4 className='font-bold text-[14px] leading-[25px] duration-100 hover:text-[orange] cursor-pointer font-serif'>Accused of assaulting flight attendant miktake alaways</h4>
            </section>
            <section className='w-full relative '>
                <img src={Img2} alt="" className='w-full object-cover my-[14px]'/>
                <span className='bg-white p-[9px] text-[14px] absolute top-[99px] left-0 text-gray-400 cursor-pointer'>Adam Colinge | Dec 15</span>
                <h4 className='font-bold text-[14px] leading-[25px] duration-100 hover:text-[orange] cursor-pointer font-serif'>Accused of assaulting flight attendant miktake alaways</h4>
            </section>
            <section className='w-full relative '>
                <img src={Img3} alt="" className='w-full object-cover my-[14px]'/>
                <span className='bg-white p-[9px] text-[14px] absolute top-[99px] left-0 text-gray-400 cursor-pointer'>Adam Colinge | Dec 15</span>
                <h4 className='font-bold text-[14px] leading-[25px] duration-100 hover:text-[orange] cursor-pointer font-serif'>Accused of assaulting flight attendant miktake alaways</h4>
            </section>
        </div>
    )
}

function Post(){
    return(
         <div className='w-full min-h-[250px] bg-[#F9F9FF] p-[30px] mt-[25px] '>
            <h3 className='font-bold'>Popular Post</h3>
            <section className='p-[10px] flex flex-wrap gap-2'>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>project</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>love</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>technology</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>travel</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>software</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>life style</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>design</a>
                <a href="" className='py-[6px] px-[15px] text-[14px] bg-white '>illustration</a>
            </section>
        </div>
    )
}