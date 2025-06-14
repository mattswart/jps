import Image from "next/image";

export default function Socials({ socials }) {
    return(
        <div className="socials">
            {!!socials?.length && (
                socials.map((social, index) => (
                    <div key={index}>
                        <a href={social.url} target="_blank">
                            {social.icon && (
                                <Image src={social.icon} alt={social.iconAltText} width={15} height={15} />
                            )}
                        </a>
                    </div>
                ))
            )}
        </div>
    )
}