import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type IVerticalText = {
  children: React.ReactNode;
};

const SideNav: React.FC = () => {
  const VerticalText = ({ children }: IVerticalText) => {
    return <Text transform="rotate(90deg)">{children}</Text>;
  };

  return (
    <Flex
      h="full"
      w="85px"
      position="fixed"
      right="0"
      direction="column"
      justify="center"
      gap="120px"
    >
      <VerticalText>About</VerticalText>
      <VerticalText>Projects</VerticalText>
      <VerticalText>Contact</VerticalText>
    </Flex>
  );
};

export default SideNav;
