import Image from "next/image"

export default function BusinessPhoneNumber({ phoneNumber, hasIcon }){
    return (
        !!phoneNumber?.length && (
            <div className="phone">
                <a href={ "tel:" + phoneNumber.replace(/\D/g,'') }>
                    { hasIcon && 
                        <Image 
                            src="/icon-phone.svg" 
                            width={18} 
                            height={18}  
                            alt="Phone icon" 
                            style={{ verticalAlign:"middle", paddingRight: "5px" }}
                        /> 
                    }
                    { phoneNumber }
                </a>
            </div>
        )
    )
}