import Image from "next/image"
import Link from "next/link"
import Socials from "@/components/Socials";
import Nav from "@/components/Nav"
import BusinessInfo from "@/components/BusinessInfo";

export default function Footer({ socials, pages, meta }) {
    return (
        <footer className="section bg-black text-white flex flex-col items-center gap-4 sm:gap-2 sm:flex-row sm:justify-between sm:items-stretch">
            {/* NAVIGATION */}
            <ol className="text-center sm:text-left sm:flex sm:flex-col sm:self-stretch sm:justify-between ">
                {pages.map(( page, index) => ( 
                    <li key={ index } className={` ${!!page.subPages?.length && "has-subpages"} font-extrabold uppercase`}>
                        { !!page.url?.length && (
                            <Link href={ page.url }>{ page.name }</Link>
                        ) || (
                            <a>{page.name}</a>
                        )}
                        { !!page.subPages?.length && (
                            <ol>
                                { page.subPages.map(( subPage, index) => (
                                    <li key={ index } className="leading-[1.3] font-bold sm:ml-1.5 text-[#AFAFAF]">
                                        <Link href={ subPage.url }>{ subPage.name }</Link>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </li>
                ))}
            </ol>
            {/* BUSINESS INFO AND HOURS */}
            <div className="business-info text-center flex flex-col gap-1 items-center ">
                <div className="uppercase text-xl">
                    <span className="font-black italic mr-1">JP&apos;s </span>
                    <span className="font-medium">Fine Auto </span>
                    <span className="font-extrabold">Detailing</span>
                </div>
                <a className="font-medium text-lg" href={ "tel:" + meta.phoneNumber.replace(/\D/g,'') }>{meta.phoneNumber}</a>
                <p className="font-extralight">1428 Speers Rd Unit 12 <br />Oakville, Ontario <br />L6L 5M1</p>
                {!!meta.hours?.length && (
                    <ol className="hours leading-[1.23]">
                        { meta.hours.map(( day, index ) => (
                            day.isOpen ? (
                                <li key={index}><span className="font-semibold">{ day.day } </span><span className="font-light">{ day.timeOpen } - { day.timeClose }</span></li>
                            ) : (
                                <li key={index} className="closed"><span className="font-semibold">{ day.day } </span><span className="font-light text-[#AFAFAF]">Closed</span></li>
                            )
                        ))}
                    </ol>
                )}
            </div>
            {/* LOGO & SOCIAL */}
            <div className="flex flex-col  sm:items-end sm:justify-center sm:gap-8">
                <Link href="/" className="logo-icon">
                    <Image 
                    src="/logo-icon.svg"
                    width={100}
                    height={100}
                    alt="Business logo"
                    className="w-full sm:max-w-[140px] md:max-w-[200px]"
                    />
                </Link>
                <Socials socials={socials} hasLabel={false} hasUsername={false} className="sm:self-center" />
            </div>

        </footer>
    )
}