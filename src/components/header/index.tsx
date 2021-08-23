import { Flex, Img } from '@chakra-ui/react'

export default function HeaderApp () {
   return (
      <Flex
         width="100%"
         justifyContent="center"
         height="70px"
         bgColor="gray"
      >
         <Flex
            maxW="1250px"
            justifyContent="space-between"
            alignItems="center"
         >
            <Img
               src="/img/icone Ayrton.png"
            />
            <Img
               src="/img/menu_hamburguer.png"
               color="white"
               width="50px"
               height="50px"
            />
         </Flex>
      </Flex>
   )
}