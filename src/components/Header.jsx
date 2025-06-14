import Socials from "@/components/Socials";
import Nav from "@/components/Nav"

export default function Header ({ socials, pages, _meta }){
    return (
      <header>
        <div className="logos">
          <div className="logo-icon">
            
          </div>
          <div className="logo-text">
            
          </div>
        </div>
        <Nav pages={ pages } />
        <Socials socials={socials} hasLabel={true} hasUsername={false} />
      </header>  
    )
}