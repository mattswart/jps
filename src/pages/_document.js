import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { _socials, _pages, _meta } from "@/components/_data" 

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header socials={_socials} pages={_pages} meta={_meta} />
        <Main />
        <NextScript />
        <Footer socials={_socials} pages={_pages} meta={_meta[0]}/>
      </body>
    </Html>
  );
}
