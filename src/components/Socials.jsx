import Image from "next/image";

export default function Socials({ className, socials, hasLabel, hasUsername }) {
    return(
        <div className={`socials ${className} flex flex-row gap-[12px]`}>
            {!!socials?.length && socials.map(( social, index ) => (
                <a key={ index } href={ social.url } target="_blank" className="flex">
                    { social.icon && ( 
                        <Image 
                            src={social.icon} 
                            alt={social.iconAltText} 
                            width={18} 
                            height={18} 
                            className="w-[22px] h-auto"
                        /> 
                    )}
                    { hasLabel && ( <span className="label m-left-[3px]">{ social.name }</span> )}
                    { hasUsername && ( <span className="username">{ social.username }</span> )}
                </a>
            ))}
        </div>
    )
}