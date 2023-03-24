import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ICustomCard } from "./CustomCard.type";

const CustomCard: React.FC<ICustomCard> = ({ selectedItem, onOpen }) => {
  return (
    <AnimatePresence>
      <Box
        h="450px"
        w="250px"
        rounded="xl"
        cursor="pointer"
        bgImage={selectedItem.image}
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        backgroundSize="cover"
        layoutId={`layout-${selectedItem.id}`}
        as={motion.div}
        onClick={onOpen}
      >
        <Box
          position="absolute"
          w="full"
          h="full"
          bg="black"
          zIndex="base"
          opacity="40%"
        ></Box>
        <Flex
          position="absolute"
          zIndex="docked"
          w="full"
          h="full"
          justify="end"
          direction="column"
          p="10px"
          gap="3px"
        >
          <Heading fontSize="3xl">{selectedItem.name}</Heading>
          <Text fontSize="sm">{selectedItem.desc}</Text>
        </Flex>
      </Box>
    </AnimatePresence>
  );
};

export default CustomCard;
