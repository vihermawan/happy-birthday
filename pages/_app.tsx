import React from "react";
import { AppProps } from 'next/app';
import {ChakraProvider,extendTheme} from "@chakra-ui/react";
import '../styles/globals.css';

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
