import Heading from "@/components/Heading"
import Hero from "@/components/Hero"
import PackageCard from "@/components/PackageCard"
import FaqItem from "@/components/FaqItem"
import { _ineteriorDetailing } from "@/components/_data"

export default function InteriorDetailing () {

    return (
            <main className="bg-black">
                <Hero heading={_ineteriorDetailing.heroHeading} body={_ineteriorDetailing.heroBody} image={_ineteriorDetailing.heroImage} />
                {/* PACKAGES */}
                <div className="section w-fit flex flex-col  items-end m-auto">
                    <h2 className="uppercase text-white font-extrabold text-4xl pb-4 text-right">Packages</h2>
                    <p className="disclaimer text-white font-extralight pb-4 text-right">*Extraneous factors such as pet hair, salt stains and odors may effect pricing.</p>
                    <PackageCard packages={_ineteriorDetailing.packages} />
                </div>
                {/* FAQ */}
                <div className="section text-white flex flex-col md:flex-row md:gap-6">
                    <h2 className="uppercase text-3xl font-black pb-4 md:basis-1/4">Frequently asked questions</h2>
                    <div className="faq-items flex flex-col gap-2 md:basis-3/4">
                        {_ineteriorDetailing.faqs.map((faq, index) => <FaqItem key={index} question={faq.q} answer={faq.a} />)}
                    </div>
                </div>
                {/* CONTENT SECTION */}
                <div className="section flex flex-col sm:flex-row sm:gap-10">
                    <div className="order-last bg-white width-fill h-[100px] sm:basis-1/3 sm:h-auto sm:order-first md:basis-2/5"> </div>        
                    <div className="sm:basis-2/3 md:basis-3/5">
                        <h2 className="text-white font-black uppercase text-3xl pb-4 text-center sm:text-right">A Heading of Sorts</h2>
                        <p className="text-white font-extralight pb-2 sm:pb-0 sm:text-right">From a medical standpoint, fingers are considered excessive when they interfere with normal use of the hand or are associated with other health complications. However, there are documented cases of individuals with fully formed, functional extra fingers who experience no issues and can even use their hands in ways that others cannot, such as performing complex musical tasks with more dexterity.</p>
                    </div>
                </div>
            </main>
    )
}