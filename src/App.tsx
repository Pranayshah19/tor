import "./App.css";
import { Box, Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { AppleCardsCarouselDemo } from "./components/ui/Cardcarousel";

import { SpotlightPreview } from "./components/spotlighttext/Spotlightcomponent";
import { TracingBeamDemo } from "./components/tracing beam/tracingbeamcomponent";
import { GlobeDemo } from "./components/globe/globeElement";
import { SignupFormDemo } from "./components/form/FormElement";
import { VortexDemoSecond } from "./components/vortexbackgrund/vortexComponent";
import Boxes from "./components/Boxes";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav" " main"`,
      }}
    >
      {" "}
      <GridItem area="nav" justifyContent={"left"}>
        <Box h={"50px"}></Box>
        <VortexDemoSecond></VortexDemoSecond>
      </GridItem>
      <GridItem area="main">
        <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
        <Boxes></Boxes>

        <GlobeDemo></GlobeDemo>
        <Box h={"50px"}></Box>
        <SignupFormDemo></SignupFormDemo>
      </GridItem>
    </Grid>
  );
}

export default App;
