import Image from "next/image";

export default function GalleryGrid({images}){
    if (!images) return null;

    return(
        <div className="gallery-grid mt-[300px]">
            {images.map((image, index) => (
                <div style={{backgroundImage:"url(" +image.url + ")"}}>
                    <Image 
                        src={image.url} 
                        alt={image.altText} 
                        width="50" 
                        height="50"
                    />
                    <div>
                        <span><strong>{image.carMake}</strong> {image.carModel}</span>
                        <span>{image.service}</span>
                    </div>        
                </div>
            ))}
        </div>
    )
}