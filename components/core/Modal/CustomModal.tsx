import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IconContext } from "react-icons";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type IModal = {
  selectedItem: any;
  onClose: () => any;
};

const CustomModal: React.FC<IModal> = ({ selectedItem, onClose }) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  const hasImages = selectedItem?.image?.length > 0 ? true : false;

  const images = selectedItem.image;

  const handleNext = React.useCallback(() => {
    if (hasImages)
      setImageIndex((prevState: any) => {
        if (prevState < images.length - 1) {
          return prevState + 1;
        }

        return 0;
      });
  }, [imageIndex, hasImages]);

  const handlePrev = React.useCallback(() => {
    if (hasImages)
      setImageIndex((prevState) => {
        if (prevState > 0) {
          return prevState - 1;
        }
        return images.length - 1;
      });
  }, [imageIndex, hasImages]);

  if (selectedItem)
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        zIndex="popover"
        bg="blackAlpha.600"
        w="100vw"
        h="100vh"
        inset="0"
        p={["25px", "0px"]}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        onClick={() => onClose()}
      >
        <Box
          w={["full", "76vw"]}
          h={["full", "80vh"]}
          bg="black"
          rounded="2xl"
          overflow="hidden"
          layoutId={`layout-${selectedItem.id}`}
          as={motion.div}
          position="relative"
          onClick={(e) => e.stopPropagation()}
        >
          {isDesktop ? null : (
            <Box
              w="full"
              position="absolute"
              top="0"
              h="50px"
              display="flex"
              justifyContent="end"
              alignItems="center"
              px="10px"
            >
              <CloseButton onClick={() => onClose()} />
            </Box>
          )}

          <Image
            w="full"
            as={motion.img}
            backgroundSize="contain"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            key={imageIndex}
            h="full"
            src={images[imageIndex]}
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
              <BsChevronCompactLeft onClick={handlePrev} />
              <BsChevronCompactRight onClick={handleNext} />
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
            <Text fontSize="sm" w={["full", "600px"]}>
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
