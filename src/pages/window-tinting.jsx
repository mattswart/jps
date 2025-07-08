import { _windowTinting } from "@/components/_data"
import Hero from "@/components/Hero"

export default function WindowTinting () {

    return(
        <main className="bg-black">
            <Hero heading={_windowTinting.heroHeading} body={_windowTinting.heroBody} image={_windowTinting.heroImage} />
        </main>
    )
}
