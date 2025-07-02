import  { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Socials from "@/components/Socials";
import LogoFill from "@/components/svg/LogoFill";
import LogoText from "@/components/svg/LogoText";
import LogoLines from "./svg/LogoLines";

export default function Header ({ socials, pages, _meta }){
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(!isVisible);
    return (
      <header className={ isVisible ? "show section" : "section" }>  
        <div className="layout">
          <div className="logos">
            <Link href="/" className="logo-icon">
              < LogoFill fill="white" />
            </Link>
            <Link href="/" className="logo-text">
              <LogoText fill="white"/>
            </Link>
          </div>
          <button className="menu-toggle" title="Open main menu" onClick={handleClick} >| | |</button>
        
          <Nav pages={ pages } showHome={ false } />
          <Socials socials={socials} hasLabel={false} hasUsername={false} />
        </div>
      </header>  
    )
}