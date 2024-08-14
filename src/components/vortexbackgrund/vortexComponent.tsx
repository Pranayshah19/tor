import { Box, Flex, HStack } from "@chakra-ui/react";
import App from "../../App";
import { SignupFormDemo } from "../form/FormElement";
import { GlobeDemo } from "../globe/globeElement";
import { AppleCardsCarouselDemo } from "../ui/Cardcarousel";
import { Vortex } from "../vortexbackgrund/vortex";
import Navbar from "../Navbar";
import { SpotlightPreview } from "../spotlighttext/Spotlightcomponent";

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <Flex justify={"center"}>
          <Navbar></Navbar>
        </Flex>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          from racetracks <br /> to runways.
        </h1>

        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Save the world and look good while doing it
        </p>
      </Vortex>
    </div>
  );
}
