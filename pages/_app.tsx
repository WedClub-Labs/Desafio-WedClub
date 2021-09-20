import { SSRProvider } from "@react-aria/ssr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
