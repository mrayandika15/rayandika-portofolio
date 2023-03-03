import { Flex } from "@chakra-ui/react";
import React from "react";

type IContentLayout = {
  children: React.ReactNode;
  props?: any;
};

const ContentLayout: React.FC<IContentLayout> = ({ children, props }) => {
  return (
    <Flex
      w="full"
      className="section"
      position="relative"
      h="100vh"
      direction="column"
      scrollSnapAlign="start"
      pt="100px"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default ContentLayout;
