export const _page_ineteriorDetailing = {
    packages: [
        {
            name: "Premium",
            prices: [
                { type: "Car",      price: "$200" },
                { type: "Midsize",  price: "$225" },
                { type: "SUV & Van",price: "$235" }
            ],
            features: [
                "Deep vacuuming of trunk, carpets, and mats",
                "Interior shampooing & stain removal",
                "Full cleaning of interior panels",
                "Leather treatment",
                "Air vent cleansing",
                "Interior and exterior window steaming and shining"
            ]
        },
        {
            name: "VIP",
            prices: [
                { type: "Car",      amount: "$265" },
                { type: "Midsize",  amount: "$300" },
                { type: "SUV & Van",amount: "$310" }
            ],
            features: [
                "Includes all details of PREMIUM Package",
                "Leather cleaning and reconditioning",
                "Air vent cleansing and odor removal",
                "Steam disinfection",
                "Door jambs degreasing and cleaning",
                "Leather quartz coating",
                "Plastic Sealant"
            ]
        }

    ]
}


export const _meta = {
    businessName: "JP'S Fine Auto Detailing",
    phoneNumber: "204-222-2222",
    logo: "",
    logoAlt: "",
    logoAltText: "",
    hours: [
        { day: "Monday",    isOpen: false,  timeOpen: "00:00",  timeClose: "00:00" },
        { day: "Tuesday",   isOpen: true,   timeOpen: "00:00",  timeClose: "00:00" },
        { day: "Wednesday", isOpen: true,   timeOpen: "00:00",  timeClose: "00:00" },
        { day: "Thursday",  isOpen: true,   timeOpen: "00:00",  timeClose: "00:00" },
        { day: "Friday",    isOpen: true,   timeOpen: "00:00",  timeClose: "00:00" },
        { day: "Saturday",  isOpen: true,   timeOpen: "00:00",  timeClose: "00:00" },
        { day: "Sunday",    isOpen: true,   timeOpen: "00:00",  timeClose: "00:00" }
    ]
};

export const _socials = [
    { 
        name: "Instagram", 
        username: "", 
        url: "https://instagram.com/", 
        icon: "/icon-instagram.svg", 
        iconAltText: "Visit our Instagram page." 
    },
    { 
        name: "Facebook", 
        username: "", 
        url: "https://facebook.com", 
        icon: "/icon-facebook.svg", 
        iconAltText: "Visit our Facebook page." 
    },
    { 
        name: "Google Business", 
        username: "", 
        url: "https://google.com", 
        icon: "/icon-google-business.svg", 
        iconAltText: "Visit our Google Business profile." 
    },
];

export const _pages = [
    { name: "Home", url: "/" },
    { name: "Ceramic Coating", url: "/ceramic-coating" },
    { name: "PPF", url: "/paint-protection-film" },
    { name: "Detailing", url: "", subPages: [
        { name: "Complete", url: "/complete-detailing" },
        { name: "Interior", url: "/interior-detailing" },
        { name: "Exterior", url: "/exterior-detailing" },
        { name: "Paint Correction", url: "/paint-correction" }
    ]},
    { name: "About Us", url: "/about-us" },
    { name: "Contact", url: "/contact" },

];