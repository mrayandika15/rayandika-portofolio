import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="100px"
      px="50px"
      align="center"
      bg="black"
      position="fixed"
    >
      <Flex direction="column">
        <Heading fontSize="2xl" fontWeight="extrabold">
          Rayandika
        </Heading>
        <Text fontSize="xs">Web Front End Developer</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
