

export default function Heading({ text, uppercase }){
    return(
        <div className="heading section-spacing">
            <h1 className={ uppercase ? "uppercase" : "" }><span> </span>{ text }</h1>
        </div>
    )
}