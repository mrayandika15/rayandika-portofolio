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
      h="100vh"
      direction="column"
      pt="100px"
      pl="50px"
      pr="85px"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default ContentLayout;
