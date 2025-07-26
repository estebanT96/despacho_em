import { Avatar, Card, Flex } from "@chakra-ui/react";

const ServiceCards = () => {
  return (
    <Flex
      gap="40"
      direction="row"
      wrap="wrap"
      width="100%"
      justify="center"
      mb="150px"
    >
      <Card.Root width="350px" height="260px" key="">
        <Card.Body gap="2" height="100%">
          <Flex direction="column" align="center" justify="space-between">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Más Tiempo" />
            </Avatar.Root>
            <Card.Title my="3">Más Tiempo</Card.Title>
            <Card.Description fontSize="md" lineHeight="2" textAlign="center">
              Cuentas con un equipo especializado en contabilidad, impuestos y
              nómina que te apoya en todo momento.
            </Card.Description>
          </Flex>
        </Card.Body>
      </Card.Root>
      <Card.Root width="350px" height="260px" key="">
        <Card.Body gap="2" height="100%">
          <Flex direction="column" align="center" justify="space-between">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Más Ganancias" />
            </Avatar.Root>
            <Card.Title my="3">Más Ganancias</Card.Title>
            <Card.Description fontSize="md" lineHeight="2" textAlign="center">
              Servicios contables con tarifa fija, diseñados para ajustarse al
              presupuesto de tu pequeña empresa.
            </Card.Description>
          </Flex>
        </Card.Body>
      </Card.Root>
      <Card.Root width="350px" height="260px" key="">
        <Card.Body gap="2" height="100%">
          <Flex direction="column" align="center" justify="space-between">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Menos Preocupaciones" />
            </Avatar.Root>
            <Card.Title my="3">Menos Preocupaciones</Card.Title>
            <Card.Description fontSize="md" lineHeight="2" textAlign="center">
              Te ayudamos a mantener tus finanzas en orden, cumplir con las
              obligaciones fiscales y reducir el riesgo de auditorías.
            </Card.Description>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default ServiceCards;
