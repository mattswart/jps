import { useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from "@/components/Heading"
import Hero from "@/components/Hero"
import PackageCard from "@/components/PackageCard"
import FaqItem from "@/components/FaqItem"
import { _ineteriorDetailing } from "@/components/_data"

gsap.registerPlugin(ScrollTrigger);

export default function InteriorDetailing() {
    useLayoutEffect(() => {
        // Select all the elements we'll need for the animations
        const header = document.querySelector('header');
        const targetEl = document.querySelector('.viewer');
        const endEl = document.querySelector('.card-0');

        // A quick check to make sure all elements are on the page before running GSAP
        if (!header || !targetEl || !endEl) {
            return;
        }

        // Initialize matchMedia for creating responsive animations
        const mm = gsap.matchMedia();

        // --- DESKTOP ANIMATION (for screens 768px and wider) ---
        // mm.add("(min-width: 768px)", () => {
        //     const st = ScrollTrigger.create({
        //         trigger: targetEl,
        //         start: () => `top ${header.offsetHeight}px`,
        //         end: () => `+=${endEl.offsetHeight - targetEl.offsetHeight}`,
        //         pin: true,
        //         pinSpacing: false,
        //         invalidateOnRefresh: true, // Crucial for recalculating on resize
        //         markers: true,
        //     });
        // });

        // --- MOBILE ANIMATION (for screens smaller than 768px) ---
        mm.add("(max-width: 767px)", () => {
            const st = ScrollTrigger.create({
                trigger: targetEl,
                start: () => `top ${header.offsetHeight}px`,
                // The calculation is the same, but it will run with mobile-specific element heights
                end: () => `${endEl.offsetHeight}px`,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
                markers:true,
            });
        });

        // The cleanup function to revert all matchMedia instances on component unmount
        return () => {
            mm.revert();
        };
    }, []);

    return (
        <main className="bg-black">
            <Hero heading={_ineteriorDetailing.heroHeading} body={_ineteriorDetailing.heroBody} image={_ineteriorDetailing.heroImage} />
            {/* PACKAGES */}
            <div className="section packages-section w-fit flex flex-col items-end m-auto">
                <h2 className="uppercase text-white font-extrabold text-4xl pb-2 text-right">Packages</h2>
                <p className="disclaimer text-white font-extralight pb-4 text-right">*Extraneous factors such as pet hair, salt stains and odors may effect pricing.</p>
                <div id="viewer" className="viewer w-full min-h-[300px] bg-orange-500 mb-4">asd </div>
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