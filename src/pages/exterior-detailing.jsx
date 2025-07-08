import { _exteriorDetailing } from "@/components/_data"
import Hero from "@/components/Hero"

export default function ExteriorDetailing () {

    return(
        <main className="bg-black">
            <Hero heading={_exteriorDetailing.heroHeading} body={_exteriorDetailing.heroBody} image={_exteriorDetailing.heroImage} />
        </main>
    )
}
