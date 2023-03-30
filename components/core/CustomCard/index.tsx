import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ICustomCard } from "./CustomCard.type";

type ISizeProperty = {
  height: string[];
  width: string[];
};

const CustomCard: React.FC<ICustomCard> = ({
  selectedItem,
  onOpen,
  size = "base",
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  let sizeProperty: ISizeProperty = {
    height: [""],
    width: [""],
  };

  if (size === "base") {
    sizeProperty = {
      height: ["30%", "450px"],
      width: ["full", "250px"],
    };
  }

  if (size === "large") {
    sizeProperty = {
      height: ["250px", "450px"],
      width: ["full", "400px"],
    };
  }

  return (
    <Box
      h={sizeProperty.height}
      w={sizeProperty.width}
      flexGrow="0"
      flexShrink="0"
      zIndex="base"
      rounded="xl"
      cursor="pointer"
      bgImage={selectedItem.image[0]}
      position="relative"
      backgroundSize="contain"
      layoutId={`layout-${selectedItem.id}`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
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

        {isDesktop ? (
          <Text fontSize="sm" noOfLines={2}>
            {selectedItem.desc}
          </Text>
        ) : null}
      </Flex>
    </Box>
  );
};

export default CustomCard;
