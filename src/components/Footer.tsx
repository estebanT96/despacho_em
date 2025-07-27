import ContactForm from "./ContactForm";
import {
  Box,
  Flex,
  Link,
  Grid,
  GridItem,
  Text,
  HStack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bg="rgba(239, 239, 239, 1)" justify="center">
      <Flex maxWidth="1600px" width="100%" justify="space-between">
        <Box width="70%" pt="23px">
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem>
              <Text textAlign="center" textStyle="lg" fontWeight="600">
                Esquer Montaño
              </Text>
              <Text textAlign="center">Direccion</Text>
            </GridItem>
            <GridItem>
              <Text textAlign="center" textStyle="lg" fontWeight="600">
                Redes
              </Text>
              <Text textAlign="center">Instagram</Text>
              <Text textAlign="center">Facebook</Text>
            </GridItem>
            <GridItem>
              <Text textAlign="center" textStyle="lg" fontWeight="600">
                Acerca de nosotros
              </Text>
            </GridItem>
          </Grid>
        </Box>
        <ContactForm></ContactForm>
      </Flex>
    </Flex>
  );
};

export default Footer;
