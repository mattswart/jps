export default function PackageCard({ packages, setAnimation }){
    return(
        <div
            className="
                package-cards
                flex
                flex-col
                border-white
                border-[12px]
                rounded-[1px]
                gap-[12px]
                p-[12px]
                m-auto
                w-fit
                md:flex-row
            "
        >
            { packages.map((tier, index) => (
                <div
                    key={index}
                    className={`
                        package-card
                        card-${index}
                        bg-white
                        rounded-[1px]
                        p-[12px]
                        w-auto
                        items-start
                        md:basis-1/2
                        cursor-pointer
                    `}
                    // 2. Set the animation on hover. It will now persist.
                    onMouseEnter={() => setAnimation(`card-${index}`)}
                >
                    <h3 className="pb-[12px] text-2xl uppercase font-black italic">
                        <span>{tier.name}</span>
                        {(() => { 
                            const arr = [];
                            for(let i = 0; i < ( index + 1); i++){
                                arr.push(
                                    <span className="line"> </span>
                                )
                            }
                            return arr;
                        })()}
                    </h3>
                    <ol className="pricing pb-[6px]">
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