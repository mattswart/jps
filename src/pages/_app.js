import "@/styles/globals.scss";
import Layout from "@/components/layout"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ( (page) => <Layout>{page}</Layout> )
  return getLayout( <Component {...pageProps} /> )
}
