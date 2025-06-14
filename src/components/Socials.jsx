import Image from "next/image";

export default function Socials({ socials, hasLabel, hasUsername }) {
    return(
        <div className="socials">
            {!!socials?.length && (
                socials.map(( social, index ) => (
                    <div key={ index }>
                        <a href={ social.url } target="_blank">
                            { social.icon && ( <Image src={social.icon} alt={social.iconAltText} width={15} height={15} /> )}
                            { hasLabel && ( <span className="label">{ social.name }</span> )}
                            { hasUsername && ( <span className="username">{ social.username }</span> )}
                        </a>
                    </div>
                ))
            )}
        </div>
    )
}