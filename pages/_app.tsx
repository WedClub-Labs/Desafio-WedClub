import AppBar from "../components/AppBar";
import { SSRProvider } from "@react-aria/ssr";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>WebClub - A Maior rede de redes da rede</title>
        <meta
          name="description"
          content="Rede de redes onde você acha mais usuarios pra sua rede"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SSRProvider>
            <AppBar />
            <div className="pt-16">
              <Component {...pageProps} />
            </div>
            <Footer />
          </SSRProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
