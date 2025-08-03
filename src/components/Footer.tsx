import ContactForm from "./ContactForm";
import { Box, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Flex bg="rgba(239, 239, 239, 1)" height="280px" justify="space-around">
      <Grid templateColumns="repeat(3, 1fr)" width="90%">
        <GridItem margin="0 auto">
          <Text textAlign="center" textStyle="lg" fontWeight="600" my="12px">
            Ubicación
          </Text>
          <Flex
            justify="center"
            align="center"
            border="1px solid #ced0d2ff" // optional subtle border
            boxShadow="lg"
            borderRadius="xl"
            overflow="hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.4089055809063!2d-110.96726958750224!3d29.09360707531361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce875e1eaa11f1%3A0xaafcf5dda3137a6!2sDESPACHO%20CONTABLE%20ESQUER%20MONTA%C3%91O!5e0!3m2!1sen!2smx!4v1754181103750!5m2!1sen!2smx"
              width="100%"
              height="200"
              loading="lazy"
            ></iframe>
          </Flex>
        </GridItem>
        <GridItem>
          <Text textAlign="center" textStyle="lg" fontWeight="600" my="12px">
            Comunícate con nosotros
          </Text>
          <ContactForm></ContactForm>
        </GridItem>
        <GridItem>
          <Flex direction="column" align="center" justify="center">
            <Text textAlign="center" textStyle="lg" fontWeight="600" my="12px">
              Nuestras Redes
            </Text>
            <Box>
              <Link>
                Instagram <FontAwesomeIcon icon={faInstagram} size="xl" />
              </Link>
              <Link>
                Facebook <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
              </Link>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Footer;
