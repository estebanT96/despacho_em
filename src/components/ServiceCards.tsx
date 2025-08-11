import { Avatar, Card, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
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
      <Card.Root width="380px" height="260px">
        <Card.Body gap="2" height="100%">
          <Flex direction="column" align="center" justify="space-between">
            <FontAwesomeIcon icon={faClock} size="2xl" />
            <Card.Title my="3" fontSize="xl">
              Más Tiempo
            </Card.Title>
            <Card.Description fontSize="lg" lineHeight="2" textAlign="center">
              Cuentas con un equipo especializado en contabilidad, impuestos y
              nómina que te apoya en todo momento.
            </Card.Description>
          </Flex>
        </Card.Body>
      </Card.Root>
      <Card.Root width="380px" height="260px">
        <Card.Body gap="2" height="100%">
          <Flex direction="column" align="center" justify="space-between">
            <FontAwesomeIcon icon={faHandHoldingDollar} size="2xl" />
            <Card.Title my="3" fontSize="xl">
              Más Ganancias
            </Card.Title>
            <Card.Description fontSize="lg" lineHeight="2" textAlign="center">
              Servicios contables con tarifa fija, diseñados para ajustarse al
              presupuesto de tu empresa.
            </Card.Description>
          </Flex>
        </Card.Body>
      </Card.Root>
      <Card.Root width="380px" height="260px">
        <Card.Body gap="2" height="100%">
          <Flex direction="column" align="center" justify="space-between">
            <FontAwesomeIcon icon={faFaceSmileBeam} size="2xl" />
            <Card.Title my="3" fontSize="xl">
              Menos Preocupaciones
            </Card.Title>
            <Card.Description fontSize="lg" lineHeight="2" textAlign="center">
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
