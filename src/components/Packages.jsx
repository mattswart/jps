import { _page_ineteriorDetailing } from "@/components/_data"

export default function Packages ({}){
    return (
        <div className="packages">
            <div className="layout">
                <h2 className="uppercase">Packages</h2>
                <p className="disclaimer">*Extraneous factors such as pet hair, salt stains and odors may effect pricing.</p>
                <div className="wrapper">
                    <div className="tiers">
                        { _page_ineteriorDetailing.packages.map((tier, index) => (
                            <div key={index} className={`tier`}>
                                <h3 className="uppercase">{tier.name}</h3>
                                <ol className="pricing">
                                    { tier.prices.map(( price, key ) => (
                                        <li key={index}><strong>{price.type}</strong> from <strong>{price.amount}</strong></li>
                                    ))}
                                </ol>
                                <ol className="features">
                                    { tier.features.map(( feature, key ) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ol>
                            </div>

                        ))}
                        {/* <div className="tier-1">
                            <h3>Premium</h3>
                            <ol className="pricing">
                                <li><strong>Car</strong> from <strong>$200</strong></li>
                                <li><strong>Midsize</strong> from <strong>$225</strong></li>
                                <li><strong>SUV & Van</strong> from <strong>$235</strong></li>
                            </ol>
                            <ol className="features">
                                <li>Deep vacuuming of trunk, carpets, and mats</li>
                                <li>Interior shampooing & stain removal</li>
                            </ol>
                        </div>
                        <div className="tier-2">

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}