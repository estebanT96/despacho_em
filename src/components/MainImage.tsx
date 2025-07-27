import { Image, Box, Button, Flex, Text } from "@chakra-ui/react";
import office from "../assets/EM_Imagenes/office.jpg";
const MainImage = () => {
  return (
    <div>
      <Box
        width="100%"
        height="900px"
        position="relative"
        borderRadius="20px"
        overflow="hidden"
      >
        <Image
          src={office}
          width="100%"
          height="100%"
          opacity="45%"
          transition="opacity 300ms"
          _hover={{ opacity: "50%" }}
        ></Image>
        <Flex
          position="absolute"
          direction="column"
          gap="6"
          width="50%"
          ml="20"
          bottom="250px"
        >
          <Text
            fontSize="6xl"
            fontWeight="600"
            color="white"
            textShadow="2px 2px 6px rgba(0, 0, 0, 0.5)"
          >
            Contabilidad Profesional & Confiable
          </Text>
          <Text
            fontSize="xl"
            width="74%"
            fontWeight="500"
            color="white"
            textShadow="2px 2px 6px rgba(0, 0, 0, 0.5)"
          >
            Ofrecemos servicios contables para tu empresa,acompañándote a ti y
            al crecimiento de tu negocio. Nuestro objetivo es traducir los
            números en decisiones empresariales informadas que impulsen el
            crecimiento de tu negocio.
          </Text>
          <Button
            width="30%"
            
            fontWeight="600"
            fontSize="lg"
            bg="#174dffff"
            size="xl"
            transition="all 200ms ease"
            _hover={{ bg: "#5d82ffff", boxShadow: "2xl" }}
          >
            Solicitar una consulta
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default MainImage;
