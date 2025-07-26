import { HStack, Text, Image, Box, Flex, Button } from "@chakra-ui/react";
import logo from "../assets/EM_Imagenes/em-logo.svg";
const NavBar = () => {
  return (
    <Box pt="10px" px="10px">
      <HStack>
        <Flex align="center" justify="space-between" width="100%">
          <Flex width="40%" justify="space-between" align="center">
            <Image src={logo} boxSize={{ base: "", lg: "132px" }}></Image>
            <Flex direction="column" align="center" position="relative">
              <Text
                fontWeight="500"
                color="#3d2713"
                fontFamily="Domine"
                fontSize="5xl"
              >
                ESQUER MONTAÑO
              </Text>
              <Text position="absolute" bottom="-2" fontSize="lg">
                CONTADOR PÚBLICO
              </Text>
            </Flex>
          </Flex>

          <Box display={{ base: "none", lg: "block" }} pr="50px">
            <Flex gap="10" fontWeight="500">
              <Button variant="ghost">
                <Text textStyle="lg">Nosotros</Text>
              </Button>
              <Button variant="ghost">
                {" "}
                <Text textStyle="lg">Contacto</Text>
              </Button>
              <Button colorPalette="blue">
                {" "}
                <Text textStyle="lg">Servicios</Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};

export default NavBar;
