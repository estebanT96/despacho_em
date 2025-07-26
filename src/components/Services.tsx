import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

const Services = () => (
  <>
    <Box width="100%" margin="0 auto" mb="150px">
      <Text textStyle="4xl" fontWeight="600" mb="10">
        Nuestros Servicios
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="9">
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{
              color: "rgba(255, 133, 39, 1)",
              cursor: "default",
            }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Asesoría:
            <Text> Contable - Fiscal</Text>
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Cálculo de impuestos de personas físicas y morales
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Cálculo de impuesto anual PF y PM
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Cálculo de cuotas de obrero - patronal
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Atención a requerimiento SAT, IMSS, INFONAVIT
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Altas y bajas ante el IMSS
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Asistencia en facturación electrónica
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Manejo de obra SIROG
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Declaraciones ICSOE
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Declaraciones SISUB
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            REPSE
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textStyle="2xl"
            fontWeight="500"
            _hover={{ color: "rgba(255, 133, 39, 1)", cursor: "default" }}
            transition="all ease 300ms"
            mb="3"
            color="#a0a0a2ff"
            textAlign="center"
          >
            Trámite devolución de saldos de IVA e ISR
          </Text>
        </GridItem>
      </Grid>
    </Box>
  </>
);

export default Services;
