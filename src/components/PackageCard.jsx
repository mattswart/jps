export default function PackageCard({ packages }){
    return(
        <div 
            className="
                package-cards 
                flex 
                flex-col
                border-white
                border-[12px]
                rounded-[1px] 
                gap-3 
                p-3 
                m-auto  
                w-fit
                md:flex-row 
            "
        >
            { packages.map((tier, index) => (
                <div 
                    key={index} 
                    className="
                        package-card 
                        bg-white
                        rounded-[1px] 
                        p-3 
                        w-auto 
                        items-start
                        md:basis-1/2 
                    "
                >
                    <h3 className="text-2xl uppercase font-black italic">{tier.name}</h3>
                    <ol className="pricing">
                        { tier.prices.map(( price, index ) => (
                            <li key={index}><strong>{price.type}</strong> from <strong>{price.amount}</strong></li>
                        ))}
                    </ol>
                    <ol className="features">
                        { tier.features.map(( feature, index ) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    )
}