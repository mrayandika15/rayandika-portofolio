import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { chakra, shouldForwardProp } from "@chakra-ui/react";

import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import ITypeCard from "./TypeCard";

const DefaultCard: React.FC<ITypeCard> = ({ bgImage, desc, title }) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <AnimatePresence>
      <ChakraBox
        h="450px"
        w="250px"
        rounded="xl"
        cursor="pointer"
        bgImage={bgImage}
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        backgroundSize="cover"
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
          <Heading fontSize="3xl">{title}</Heading>
          <Text fontSize="sm">{desc}</Text>
        </Flex>
      </ChakraBox>
    </AnimatePresence>
  );
};

export default DefaultCard;
