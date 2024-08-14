import { Box, Flex, Image, Text } from "@chakra-ui/react";

import newlogo from "../assets/newlogo.webp";
import ojas from "../assets/ojas logo all white.webp";
import slash from "../assets/noun-slash-3675964 (1).svg";
const Navbar = () => {
  return (
    <>
      <Image src={newlogo} w={"30%"} h={"auto"} objectFit={"contain"} />;
      <Image src={ojas} w={"18%"} h={"auto"} objectFit={"contain"}></Image>
    </>
  );
};

export default Navbar;
