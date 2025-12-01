import BannerHead from '../assets/hero-banner.png.webp'
export default function BannerHeader(){
    return(
        <section className="h-[90vh] w-full relative">
            <img src={BannerHead} className='w-full h-full object-cover' alt="" />
            <div className='absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] text-white w-full text-center'>
                <span className='font-bold text-[20px]'>Tours & Travels</span>
                <h2 className='text-[50px] font-bold'>Amazing Places on earth</h2>
                <span>December 12, 2018</span>
            </div>
        </section>
    )
}