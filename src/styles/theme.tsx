import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
   colors: {
      green: {
         '900' : '#00FF80'
      },
      black: {
         '900' : '#080A10'
      }
   },
   fonts: {
      heading: 'Arial',
      body: 'Arial'
   },
   styles: {
      global: {
         body: {
            bg: `black.900`,
            color: 'white'
         }
      }
   }
})