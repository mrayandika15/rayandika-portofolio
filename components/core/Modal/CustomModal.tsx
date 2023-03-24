import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IconContext } from "react-icons";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type IModal = {
  selectedItem: any;
  onClose: () => any;
};

const CustomModal: React.FC<IModal> = ({ selectedItem, onClose }) => {
  if (selectedItem)
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        zIndex="popover"
        bg="blackAlpha.400"
        w="100vw"
        h="100vh"
        inset="0"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        onClick={() => onClose()}
      >
        <Box
          w="76vw"
          h="80vh"
          bg="black"
          rounded="2xl"
          layoutId={`layout-${selectedItem.id}`}
          as={motion.div}
          position="relative"
        >
          <Image
            w="full"
            h="full"
            src={selectedItem.image}
            backgroundSize="cover"
          />

          <Box
            w="full"
            h="150px"
            position="absolute"
            top="100px"
            bottom="0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="25px"
          >
            <IconContext.Provider
              value={{ style: { fontSize: "40px", cursor: "pointer" } }}
            >
              <BsChevronCompactLeft />
              <BsChevronCompactRight />
            </IconContext.Provider>
          </Box>

          <Box
            position="absolute"
            w="full"
            h="40%"
            bottom="0"
            bg="blackAlpha.800"
            display="flex"
            flexDirection="column"
            gap="15px"
            p="25px"
          >
            <Heading>{selectedItem.name}</Heading>
            <Text fontSize="sm" w="600px">
              {selectedItem.desc}
            </Text>
            <Button variant="outlined" w="150px">
              View Page
            </Button>
          </Box>
        </Box>
      </Flex>
    );

  return null;
};

export default CustomModal;
