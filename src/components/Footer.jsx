import Image from "next/image"
import Link from "next/link"
import Socials from "@/components/Socials";
import Nav from "@/components/Nav"
import BusinessInfo from "@/components/BusinessInfo";

export default function Footer({ socials, pages, meta }) {
    return (
        <footer>
            <div className="layout">
                <Nav pages={ pages } />
                <BusinessInfo phoneNumber={meta.phoneNumber} name={ meta.businessName } hours={ meta.hours } />
                <div className="logo-socials">
                    <Link href="/" className="logo-icon">
                        <Image 
                        src="/logo-icon.svg"
                        width={100}
                        height={100}
                        alt="Business logo"
                        />
                    </Link>
                    <Socials socials={socials} hasLabel={false} hasUsername={false} />
                </div>
            </div>
        </footer>
    )
}