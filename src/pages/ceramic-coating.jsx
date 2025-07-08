import { _ceramicCoating } from "@/components/_data"
import Hero from "@/components/Hero"

export default function CeramicCoating () {

    return(
        <main className="bg-black">
            <Hero heading={_ceramicCoating.heroHeading} body={_ceramicCoating.heroBody} image={_ceramicCoating.heroImage} />
        </main>
    )
}
