import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Socials from "@/components/Socials";
import LogoFill from "@/components/svg/LogoFill";
import LogoText from "@/components/svg/LogoText";
import LogoLines from "./svg/LogoLines";

export default function Header({ socials, pages, _meta }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleClick = () => setIsVisible(!isVisible);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`
            section 
            no-y-padding 
            z-50 

            top-[60px] 
            left-0 
            right-0 
            m-auto 
            border-black 
            md:pt-0 
            
            top-0
            transition-all
            duration-300
            ${ isVisible ? "show m-[6%] backdrop-blur border-[12px] rounded-[10px] h-max py-[18px] top-[0px]" : "border-[0px] rounded-[0px] p-[0px]" } 
            ${isSticky ? 'fixed' : 'absolute'}
            md:flex 
            md:flex-col 
            md:gap-[12px]
            md:py-0
            md:bg-transparent
            md:relative
      `}>
            <div className={`logos 
          items-center 
          flex 
          gap-[10px] 
          justify-center 
          w-full 
        ${ isVisible ? "pb-[30px]" : ""}    
          transition-all
          duration-300
          ${isVisible ? "pb-[30px]" : ""}
          ${isSticky ? 'md:py-2' : 'md:py-4'}
          md:w-auto 
        `}>
                <Link href="/" className="logo-icon flex">
                    < LogoFill className="h-auto w-[30vw] max-w-[120px] hover:fill-black transition-all duration-200 ease-in-out" fill="white" />
                </Link>
                <Link href="/" className="logo-text flex">
                    <LogoText className="h-auto w-[30vw] max-w-[120px] hover:fill-black transition-all duration-200 ease-in-out" fill="white" />
                </Link>
            </div>
            <button className="menu-toggle absolute top-0 right-[12px] z-50 md:hidden" title="Open main menu" onClick={handleClick} >| | |</button>

            {!!pages?.length && (
                <nav className={` 
            ${!isVisible ? 'hidden' : ''} 
            transition-all duration-200 ease-in-out  
            h-full 
            text-white
            flex 
            flex-col
            items-center  
            md:relative 
            md:flex 
            md:bg-white 
            md:text-black 
            md:justify-between 
            md:px-[6px] 
            md:h-[30px]

          `}>
                    <ol className="
              font-black 
              italic 
              uppercase 
              flex
              grow 
              flex-col 
              w-max 
              md:w-full
              md:items-center 
              md:flex-row
              md:justify-between 
            ">
                        {pages.map((page, index) => (
                            <li key={index} className={` ${!!page.subPages?.length && "has-subpages group"} w-max`}>
                                {!!page.url?.length && (
                                    <Link href={page.url}>{page.name}</Link>
                                ) || (
                                    <a>{page.name}</a>
                                )}
                                {!!page.subPages?.length && (
                                    <ol className="
                            ml-[8px] 
                            md:flex 
                            md:overflow-hidden 
                            md:h-0 
                            md:items-center 
                            md:group-hover:h-[30px] 
                            md:transition-all 
                            md:duration-200 
                            md:absolute 
                            md:bg-white 
                            md:w-full 
                            md:px-[6px]  
                            md:gap-[6px] 
                            md:left-0 
                            md:right-0 
                            md:m-auto 
                            md:justify-between 
                          ">
                                        {page.subPages.map((subPage, index) => (
                                            <li key={index} className="">
                                                <Link href={subPage.url}>{subPage.name}</Link>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            )}
            <Socials socials={socials} hasLabel={false} hasUsername={false} />
        </header>
    )
}