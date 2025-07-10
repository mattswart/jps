import { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, Bounds } from '@react-three/drei';
import Image from "next/image";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import FaqItem from "@/components/FaqItem";
import ModelViewer from "@/components/ModelViewer";
import { _ineteriorDetailing } from "@/components/_data";
import { usePageScrollAnimation } from "@/hooks/usePageScrollAnimation";
import Loader from "@/components/Loader";
import WebGLChecker from "@/components/WebGLChecker"; // <-- Import the new component

export default function InteriorDetailing() {
    const [animation, setAnimation] = useState('card-0');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    usePageScrollAnimation();
    
    const handleFaqClick = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <main className="bg-black">
            <Hero heading={_ineteriorDetailing.heroHeading} body={_ineteriorDetailing.heroBody} image={_ineteriorDetailing.heroImage} />
            {/* PACKAGES */}
            <div className="section packages-section w-full flex flex-col items-end m-auto">
                <h2 className="uppercase text-white font-extrabold text-4xl pb-2 text-right">Packages</h2>
                <p className="disclaimer text-white font-extralight pb-4 text-right">*Extraneous factors such as pet hair, salt stains and odors may effect pricing.</p>
                <div id="viewer" className="viewer w-full aspect-video max-h-[200px] md:max-h-[300px] bg-orange-500 mb-4">
                    <WebGLChecker 
                        fallback={
                            <Image 
                                src="/porsche_fallback.png"
                                alt="Interior detailing preview" 
                                width="100"
                                height="100"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        }
                    >
                        <Suspense fallback={<Loader />}>
                            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                                <directionalLight position={[-10, -10, -5]} intensity={1} />
                                <Bounds fit clip observe margin={0.8}>
                                    <ModelViewer modelPath="/porsche_911_turbo_s.glb" animation={animation} />
                                </Bounds>
                                <Environment preset="studio" />
                            </Canvas>
                        </Suspense>
                    </WebGLChecker>
                </div>
                <PackageCard packages={_ineteriorDetailing.packages} setAnimation={setAnimation}/>
            </div>
            {/* FAQ */}
            <div className="section text-white flex flex-col md:flex-row md:gap-6">
                <h2 className="uppercase text-3xl font-black pb-4 md:basis-1/4">Frequently asked questions</h2>
                <div className="faq-items flex flex-col gap-2 md:basis-3/4">
                    {_ineteriorDetailing.faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={index === openFaqIndex}
                            onClick={() => handleFaqClick(index)}
                        />
                    ))}
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