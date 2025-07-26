import { Flex, Box, Text, Image, HStack } from "@chakra-ui/react";
import cakegraph from "../assets/EM_Imagenes/cakegraph.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const CommonIssues = () => {
  return (
    <>
      <Flex width="100%" align="center" justify="center" >
        <Box width="45%" pr="">
          <Image src={cakegraph} borderRadius="20px"></Image>
        </Box>
        <Box width="45%" pl="20">
          <Flex direction="column">
            <Text textStyle="4xl" fontWeight="600">
              Toma control de tus finanzas
            </Text>
            <Text
              textStyle="xl"
              color="#52525B"
              width="70%"
              lineHeight="2"
              mb="10"
            >
              Sin una guía financiera clara, es fácil perder oportunidades,
              enfrentar problemas fiscales y sentirse abrumado por la
              complejidad contable.
            </Text>
            <HStack gap="5">
              <FontAwesomeIcon icon={faXmark} size="xl" color="salmon" />
              <Text textStyle="2xl" fontWeight="600">
                Más Complejidad
              </Text>
            </HStack>

            <Text
              textStyle="xl"
              color="#52525B"
              width="70%"
              lineHeight="2"
              mb="7"
            >
              A medida que tu negocio crece, también lo hacen las
              responsabilidades financieras. Lo que funcionaba antes, ya no es
              suficiente.
            </Text>
            <HStack gap="5">
              <FontAwesomeIcon icon={faXmark} size="xl" color="salmon" />
              <Text textStyle="2xl" fontWeight="600">
                Incertidumbre Fiscal
              </Text>
            </HStack>
            <Text
              textStyle="xl"
              color="#52525B"
              width="70%"
              lineHeight="2"
              mb="7"
            >
              No saber con certeza cómo cumplir con tus obligaciones tributarias
              puede generar gastos inesperados y estrés innecesario.
            </Text>
            <HStack gap="5">
              <FontAwesomeIcon icon={faXmark} size="xl" color="salmon" />
              <Text textStyle="2xl" fontWeight="600">
                Delegar sin Dirección
              </Text>
            </HStack>
            <Text
              textStyle="xl"
              color="#52525B"
              width="70%"
              lineHeight="2"
              mb="7"
            >
              Eres experto en tu negocio, pero sin una base financiera sólida,
              es difícil tomar decisiones con seguridad.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default CommonIssues;
