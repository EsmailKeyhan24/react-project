import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full min-h-screen bg-orange-200 flex gap-[20px]'>
        <SlideLeft />
        <SlideRight />
    </div>
  )
}


function SlideLeft(){
    return(
        <section className='w-[65%] bg-[gray] min-h-[500px]'></section>
    )
}




// ________________________Side_Right___

function SlideRight(){
    return(
        <section className='w-[35%] min-h-[500px] '>
            <NewsletterRight />
            <Catgory />
            <Popular_psot />
        </section>
    )
}



function NewsletterRight(){
    return(
        <div className='w-full min-h-[250px] bg-[#F9F9FF] p-[30px] mb-[30px]'>
            <h3 className='font-bold'>Newsletter</h3>
            <input type="text" placeholder='Enter Email' className='w-full h-[50px] pl-[16px] my-[24px]' />
            <button className='w-full h-[45px] bg-black text-[gold] capitalize'>submit</button>
        </div>
    )
}


function Catgory(){
    return(
        <div className='w-full min-h-[250px] bg-[#F9F9FF] p-[30px]'>
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
        <h2>Popular Post</h2>
    )
}