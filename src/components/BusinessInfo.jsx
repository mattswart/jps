import BusinessPhoneNumber from "@/components/BusinessPhoneNumber";
import BusinessHours from "@/components/BusinessHours"
import BusinessName from "@/components/BusinessName"

export default function BusinessInfo ({ hours, name, phoneNumber }){
    return(
        <div className="business-info">
            <BusinessName name={name} />
            <BusinessPhoneNumber phoneNumber={ phoneNumber } hasIcon={true} />
            <BusinessHours hours={hours} />

        </div>
    )
}