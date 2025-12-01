import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Img1 from '../assets/blog-slide3.png'
import Img2 from '../assets/blog-slide2.png'
import Img3 from '../assets/blog-slide1.png'


export default function Slider() {
  // --- Autoplay Plugin ---
  const Autoplay = (slider) => {
    let timeout
    let mouseOver = false

    const clearNextTimeout = () => {
      clearTimeout(timeout)
    }

    const nextTimeout = () => {
      clearTimeout(timeout)
      if (mouseOver || !slider) return
      timeout = setTimeout(() => {
        slider.next()
      }, 2000) // هر ۲ ثانیه اسلاید عوض می‌شود
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })

    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  }
   const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  },[Autoplay])
  return (
    <div className='w-full my-[40px] keen-slider'  ref={sliderRef}>
      <section className="keen-slider__slide number-slide1">
        <img src={Img1} className='w-full object-cover h-[260px]' alt="" />
        <figcaption className='w-full text-center'>
          <a href="" className='flex w-[140px] h-[35px] bg-black text-[gold] mx-auto my-[20px] justify-center items-center'>Fashion</a>
          <h4 className='font-semibold'>
            <a href="">new Yourk fashion week's continued the evolution</a>
          </h4>
          <span className='text-[14px] text-[gray]'>2 days ago</span>
        </figcaption>

      </section>
      <section className="keen-slider__slide number-slide1">
        <img src={Img2} className='w-full object-cover h-[260px]' alt="" />
        <figcaption className='w-full text-center'>
          <a href="" className='flex w-[140px] h-[35px] bg-black text-[gold] mx-auto my-[20px] justify-center items-center'>Fashion</a>
          <h4 className='font-semibold'>
            <a href="">new Yourk fashion week's continued the evolution</a>
          </h4>
          <span className='text-[14px] text-[gray]'>2 days ago</span>
        </figcaption>

      </section>


      <section className="keen-slider__slide number-slide1">
        <img src={Img3} className='w-full object-cover h-[260px]' alt="" />
        <figcaption className='w-full text-center'>
          <a href="" className='flex w-[140px] h-[35px] bg-black text-[gold] mx-auto my-[20px] justify-center items-center'>Fashion</a>
          <h4 className='font-semibold'>
            <a href="">new Yourk fashion week's continued the evolution</a>
          </h4>
          <span className='text-[14px] text-[gray]'>2 days ago</span>
        </figcaption>

      </section>
    </div>
  )
}
