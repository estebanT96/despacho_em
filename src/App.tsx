import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainImage from "./components/MainImage";
import ServiceCards from "./components/ServiceCards";
import CommonIssues from "./components/CommonIssues";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
function App() {
  return (
    <Grid
      maxWidth="1600px"
      width="100%"
      margin="0 auto"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" width="100%">
        <Box height="88vh">
          <Box bg="black" borderRadius="20px">
            <MainImage></MainImage>
          </Box>
        </Box>
        <ServiceCards></ServiceCards>
        <CommonIssues></CommonIssues>
        <Services></Services>
        <ContactForm></ContactForm>
      </GridItem>
    </Grid>
  );
}
export default App;
