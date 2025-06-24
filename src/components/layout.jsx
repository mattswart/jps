import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { _socials, _pages, _meta } from "@/components/_data" 
import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });

export default function Layout({ children }) {
  return (
    <>
        <Header socials={_socials} pages={_pages} meta={_meta} />
            {children}
        <Footer socials={_socials} pages={_pages} meta={_meta}/>
    </>
  )
}