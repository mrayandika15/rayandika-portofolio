import { Flex } from "@chakra-ui/react";
import React from "react";

type IContentLayout = {
  children: React.ReactNode;
  props: any;
};

const ContentLayout: React.FC<IContentLayout> = ({ children, props }) => {
  return (
    <Flex w="full" h="100vh" direction="column" {...props}>
      {children}
    </Flex>
  );
};

export default ContentLayout;
