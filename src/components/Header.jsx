import  { useState } from "react";
import Socials from "@/components/Socials";
import Nav from "@/components/Nav"
import Image from "next/image"
import Link from "next/link"

export default function Header ({ socials, pages, _meta }){
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(!isVisible);
    return (
      <header className={ isVisible ? "show section" : "section" }>  
        <div className="layout">
          <div className="logos">
            <Link href="/" className="logo-icon">
              <Image 
                src="/logo-icon.svg"
                width={100}
                height={100}
                alt="Business logo"
              />
            </Link>
            <Link href="/" className="logo-text">
              <Image 
                src="/logo-text.svg"
                width={100}
                height={100}
                alt="JP'S Fine Auto Detailing"
              />
            </Link>
          </div>
          <button className="menu-toggle" title="Open main menu" onClick={handleClick} >| | |</button>
        
          <Nav pages={ pages } showHome={ false } />
          <Socials socials={socials} hasLabel={false} hasUsername={false} />
        </div>
      </header>  
    )
}