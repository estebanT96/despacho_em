import { HStack, Link, Text, Image, Box, Flex } from "@chakra-ui/react";
import logo from "../assets/EM_Imagenes/E (1).svg";
const NavBar = () => {
  return (
    <Box pt="10px" px="10px">
      <HStack>
        <Flex align="center" justify="space-between" width="100%">
          <Image src={logo} boxSize={{ base: "80px", lg: "126px" }}></Image>
          <Box display={{ base: "none", lg: "block" }} pr="100px">
            <Flex gap="10">
              <Link>
                <Text textStyle="lg">Nosotros</Text>
              </Link>
              <Link>
                {" "}
                <Text textStyle="lg">Contacto</Text>
              </Link>
              <Link>
                {" "}
                <Text textStyle="lg">Servicios</Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};

export default NavBar;
