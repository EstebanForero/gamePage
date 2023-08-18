import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='40px' margin='10px'></Image>
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar