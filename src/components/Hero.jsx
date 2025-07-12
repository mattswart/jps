import { _ineteriorDetailing } from "@/components/_data"


export default function Hero({image, heading, body}){
    return(
        <div className="hero relative flex flex-col min-h-[500px] overflow-hidden">
            {/* BACKGROUND IMAGE CONTAINER (Hack so background-size cover always maintains a resonable aspect ratio) */}
            <div className="image-container bg-white absolute h-[120%] w-[120%] top-[-10%] left-[-10%] bottom-0 right-0">
                {/* BACKGROUND IMAGE */}
                <div className="image w-full h-full" style={{background: `linear-gradient(180deg,rgba(0, 0, 0, 0) 2%, rgb(0, 0, 0) 85%), url('${image}')`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
            </div>
            {/* CONTENT */}
            <div className="pt-[280px] md:pt-[350px]">
                <h1 className=" hero font-black italic uppercase text-4xl flex relative bg-white mix-blend-screen justify-center leading-none py-[10px]">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="text-right w-min sm:w-full sm:text-center">{heading}</span>
                </h1>
                <p className="section text-white relative font-light">{body}</p>
            </div>
        </div>
    )
}