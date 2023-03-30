import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type IContentLayout = {
  children: React.ReactNode;
  props?: any;
  height?: string;
};

const ContentLayout: React.FC<IContentLayout> = ({
  children,
  props,
  height = "100vh",
}) => {
  return (
    <Flex
      w="full"
      className="section"
      h={height}
      direction="column"
      pt="100px"
      pl={["15px", "50px"]}
      pr={["15px", "85px"]}
      as={motion.div}
      initial={{ y: 250, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default ContentLayout;
