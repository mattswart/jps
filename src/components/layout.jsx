import { useEffect } from 'react'; // Import useEffect instead
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { _socials, _pagesFooter, _pagesHeader, _meta } from "@/components/_data"

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }) {
  // Switch to useEffect
  useEffect(() => {
    // Target the <header> element for pinning
    const header = document.querySelector('header');

    // Create the ScrollTrigger to pin the header
    const st = ScrollTrigger.create({
      trigger: header,
      start: "top top", // When the top of the header hits the top of the viewport
      end: "max",       // Pin indefinitely as you scroll down
      pin: true,
      pinSpacing: false, // Prevents a layout jump when pinning
      toggleClass: {
        className: 'pinned',
        targets: header
      }
    });

    // Kill the ScrollTrigger when the component unmounts to prevent memory leaks
    return () => {
      st.kill();
    };
  }, []); // The empty dependency array means this effect runs once on mount

  return (
    <>
      <Header socials={_socials} pages={_pagesHeader} meta={_meta} />
      <main className="content-container">
        {children}
      </main>
      <Footer socials={_socials} pages={_pagesFooter} meta={_meta}/>
    </>
  )
}