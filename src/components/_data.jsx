export const _meta = [
    {
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
    }
];

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
        { name: "Complete Detailing", url: "/complete-detailing" },
        { name: "Interior Detailing", url: "/interior-detailing" },
        { name: "Exterior Detailing", url: "/exterior-detailing" },
        { name: "Paint Correction", url: "/paint-correction" }
    ]},
    { name: "About Us", url: "/about-us" },
    { name: "Contact", url: "/contact" },

];