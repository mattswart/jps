import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link"
import Socials from "@/components/Socials";
import LogoFill from "@/components/svg/LogoFill";
import LogoText from "@/components/svg/LogoText";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ socials, pages, _meta }) {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  
  const handleClick = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (!headerRef.current) return;
    
    const st = ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top",
      endTrigger: 'html',
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      toggleClass: {
        className: 'pinned',
        targets: headerRef.current
      }
    });

    return () => st.kill();
  }, []);

  // // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isVisible) {
      // Method 1: Simple overflow hidden (try this first)
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevents touch scrolling on mobile
      
    } else {
      // Restore scrolling
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isVisible]);

  return (
    <header 
      ref={headerRef}
      className={`
        z-50 
        absolute 
        top-[30px] 
        left-0 
        right-0 
        m-auto 
        w-full  
        ${ isVisible ? "show" : "" }
    `}>
    <div className="header-background "></div>
    <div className="
      wrapper 
      relative 
      section 
      md:flex 
      md:flex-col 
      md:gap-[12px] 
    ">
      <div className={`logos
        items-center
        flex
        gap-[10px]
        justify-center
        w-full
        md:w-auto
      `}>
        <Link href="/" className="logo-icon flex">
          < LogoFill className="h-auto w-[30vw] max-w-[120px] hover:fill-black transition-all duration-200 ease-in-out" fill="white" />
        </Link>
        <Link href="/" className="logo-text flex">
          <LogoText className="h-auto w-[30vw] max-w-[120px] hover:fill-black transition-all duration-200 ease-in-out" fill="white"/>
        </Link>
      </div>
      <button 
        className={`
          absolute 
          top-[0px] 
          right-[0px] 
          z-50 
          w-[30px] 
          h-[30px] 
          flex 
          flex-col 
          justify-center 
          items-center 
          gap-[8px] 
          md:hidden 
          ${isVisible ? 'active' : ''}
        `}
        title={isVisible ? "Close menu" : "Open menu"} 
        onClick={handleClick}
      >
        <span className="block w-[30px] h-[2px] bg-white origin-center"></span>
        <span className="block w-[30px] h-[2px] bg-white origin-center"></span>
        <span className="block w-[30px] h-[2px] bg-white origin-center"></span>
      </button>

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
              { pages.map(( page, index) => (
                <li key={ index } className={` ${!!page.subPages?.length && "has-subpages group"} w-max`}>
                    { !!page.url?.length &&(
                      <Link href={ page.url }>{ page.name }</Link>
                    ) || (
                      <a>{page.name}</a>
                    )}
                    { !!page.subPages?.length && (
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
                            { page.subPages.map(( subPage, index) => (
                              <li key={ index } className="">
                                    <Link href={ subPage.url }>{ subPage.name }</Link>
                                </li>
                            ))}
                        </ol>
                    )}
                </li>
              ))}
          </ol>
        </nav>
      )}
      <Socials className="hidden" socials={socials} hasLabel={false} hasUsername={false} />
      </div>
    </header>
  )
}