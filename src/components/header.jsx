import { FaSquareFacebook  , FaTwitter , FaInstagram  } from "react-icons/fa6";


export default function Header(){
    return(
        <header className="w-full h-[90px] bg-[gray] border flex justify-between px-[20px] items-center">
            <Logo />
            <Menu />
            <Icons />
        </header>
    )
}


function Logo(){
    return(
        <figure>
            <a href=""><img src="./logo.png.webp" alt="" /></a>
        </figure>
    )
}


function Menu(){
    return(
        <ul className="min-w-[200px] flex">
            <li><a className="px-[20px] font-bold" href="">Home</a></li>
            <li><a className="px-[20px] font-bold" href="">Archive</a></li>
            <li><a className="px-[20px] font-bold" href="">Catagory</a></li>
            <li><a className="px-[20px] font-bold" href="">Pages</a></li>
            <li><a className="px-[20px] font-bold" href="">Contact</a></li>
        </ul>
    )
}



function Icons(){
    return(
        <div className="flex gap-x-[10px]">
            <a href=""><FaSquareFacebook /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
        </div>
    )
}
