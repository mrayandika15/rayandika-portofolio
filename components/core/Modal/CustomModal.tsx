import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type IModal = {
  selectedItem: any;
};

const CustomModal: React.FC<IModal> = ({ selectedItem }) => {
  if (selectedItem)
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        zIndex="overlay"
        bg="blackAlpha.400"
        w="100vw"
        h="100vh"
        inset="0"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <Box
          w="76vw"
          h="80vh"
          bg="black"
          rounded="2xl"
          layoutId={`layout-${selectedItem.id}`}
          as={motion.div}
        ></Box>
      </Flex>
    );

  return null;
};

export default CustomModal;
