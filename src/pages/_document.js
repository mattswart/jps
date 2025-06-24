import { Html, Head, Main, NextScript } from "next/document";
import { _socials, _pages, _meta } from "@/components/_data" 

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
