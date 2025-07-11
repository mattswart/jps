import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { _socials, _pagesFooter, _pagesHeader, _meta } from "@/components/_data"

export default function Layout({ children }) {
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
