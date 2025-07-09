import Head from "next/head";
import "@/styles/globals.scss";
import { Poppins } from "next/font/google";
import Layout from "@/components/layout";

// --- START ROBUST SAFARI WEBGL FIX ---
if (typeof window !== 'undefined') {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const highp = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT);
      if (highp && highp.precision === 0) {
        // If high float precision is 0, it's a strong indicator of the Safari bug.
        // We'll patch the prototype to prevent the crash.
        const getShaderPrecisionFormat = WebGLRenderingContext.prototype.getShaderPrecisionFormat;
        WebGLRenderingContext.prototype.getShaderPrecisionFormat = function (shaderType, precisionType) {
          const originalFormat = getShaderPrecisionFormat.call(this, shaderType, precisionType);
          if (originalFormat.precision === 0) {
            return {
              rangeMin: 1,
              rangeMax: 1,
              precision: 16, // Provide a reasonable default precision
            };
          }
          return originalFormat;
        };
      }
    }
  } catch (e) {
    // WebGL might not be supported at all. In that case, we can't do anything.
    console.error("Could not apply WebGL patch:", e);
  }
}
// --- END ROBUST SAFARI WEBGL FIX ---

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}