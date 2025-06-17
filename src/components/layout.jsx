import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { _socials, _pages, _meta } from "@/components/_data" 

export default function Layout({ children }) {
  return (
    <>
        <Header socials={_socials} pages={_pages} meta={_meta} />
        {children}
        <Footer socials={_socials} pages={_pages} meta={_meta}/>
    </>
  )
}