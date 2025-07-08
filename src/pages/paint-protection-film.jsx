import { _ppf } from "@/components/_data"
import Hero from "@/components/Hero"

export default function PaintProtectionFilm () {

    return(
        <main className="bg-black">
            <Hero heading={_ppf.heroHeading} body={_ppf.heroBody} image={_ppf.heroImage} />
        </main>
    )
}
