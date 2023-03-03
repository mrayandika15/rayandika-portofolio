import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type IHeader = {
  children: React.ReactNode;
};

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <Flex direction="column" gap="10px">
      <Heading>{children}</Heading>
      <Box w="80px" bg="white" h="3px" />
    </Flex>
  );
};

export default Header;
