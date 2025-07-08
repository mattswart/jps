

export default function Heading({ text }){
    return(
        <div className="heading section-spacing">
            <h1 className="uppercase text-4xl">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                { text }
            </h1>
        </div>
    )
}