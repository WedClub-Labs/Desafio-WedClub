import { SSRProvider, Provider, defaultTheme } from "@adobe/react-spectrum";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme} locale="pt-br">
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
