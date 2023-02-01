import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@fontsource/montserrat";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
