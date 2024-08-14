import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const Boxes = () => {
  return (
    <div>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Our Contribution.
      </h2>

      <HStack
        paddingTop={"80px"}
        justifyContent={"center"}
        paddingBottom={"40px"}
      >
        <Box boxSize={"400px"} bgColor={"#49b242"} rounded={"25px"}>
          {" "}
          Hello
        </Box>
        <Box
          boxSize={"400px"}
          paddingLeft={"20px"}
          bgColor={"black"}
          rounded={"25px"}
          fontFamily={"sans-serif"}
        >
          {" "}
          Hello
        </Box>
        <Box
          boxSize={"400px"}
          paddingLeft="20px"
          bgColor={"#49b242"}
          rounded={"25px"}
        >
          {" "}
          Hello
        </Box>
      </HStack>
    </div>
  );
};

export default Boxes;
