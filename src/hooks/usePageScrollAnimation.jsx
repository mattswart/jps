import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function usePageScrollAnimation() {
  useEffect(() => {
    // Select all the elements we'll need for the animations
    const header = document.querySelector('header');
    const targetEl = document.querySelector('.viewer');
    const endEl = document.querySelector('.card-0');

    // A quick check to make sure all elements are on the page before running GSAP
    if (!header || !targetEl || !endEl) {
        return;
    }

    // Initialize matchMedia for creating responsive animations
    const mm = gsap.matchMedia();

// --- DESKTOP ANIMATION (for screens 768px and wider) ---
// mm.add("(min-width: 768px)", () => {
//     const st = ScrollTrigger.create({
//         trigger: targetEl,
//         start: () => `top ${header.offsetHeight}px`,
//         end: () => `+=${endEl.offsetHeight - targetEl.offsetHeight}`,
//         pin: true,
//         pinSpacing: false,
//         invalidateOnRefresh: true, // Crucial for recalculating on resize
//         markers: true,
//     });
// });
    // --- MOBILE ANIMATION (for screens smaller than 768px) ---
    mm.add("(max-width: 767px)", () => {
        const st = ScrollTrigger.create({
            trigger: targetEl,
            start: () => `top ${header.offsetHeight}px`,
            // The calculation is the same, but it will run with mobile-specific element heights
            end: () => `+=${endEl.getBoundingClientRect().bottom - targetEl.getBoundingClientRect().bottom}`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
            toggleClass: {
                className: 'pinned',
                targets: targetEl
            }
        });
    });

    // The cleanup function to revert all matchMedia instances on component unmount
    return () => {
        mm.revert();
    };
}, []);
}