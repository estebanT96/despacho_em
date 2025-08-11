import { Box, Button, Card, Link, VStack, Text, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const ContactForm = () => (
  <>
    <Box bg="rgba(239, 239, 239, 1)">
      <Flex direction="column" align="center">
        <Text fontSize="sm" textAlign="center">
          Puedes contactarnos por Whatsapp, Facebook e Instagram.
        </Text>
        <VStack align="center" pt="6">
          <Link
            href="https://wa.me/526621381402?text=Hola%2C%20me%20interesa%20una%20consulta"
            target="blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button _hover={{ bg: "rgba(0, 165, 82, 1)" }}>
              Enviar mensaje por WhatsApp{" "}
              <FontAwesomeIcon icon={faWhatsapp} size="xl" color="white" />
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/direct/t/17845173188310285/"
            target="blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button _hover={{ bg: "salmon" }}>
              Enviar mensaje por Instagram
              <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
            </Button>
          </Link>
          <Link
            href="https://www.facebook.com/messages/t/1107030629451190"
            target="blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button _hover={{ bg: "blue" }}>
              Enviar mensaje por Facebook
              <FontAwesomeIcon icon={faFacebook} size="xl" color="white" />
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Box>
  </>
);

export default ContactForm;
