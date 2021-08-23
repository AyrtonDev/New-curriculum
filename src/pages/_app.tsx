import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "@/styles/theme"
import HeaderApp from "@/components/header";

export default function MyApp({Component, pageProps}) {
   return (
      <ChakraProvider theme={Theme}>
         <HeaderApp/>
         <Component {...pageProps}/>
      </ChakraProvider>
   )
}