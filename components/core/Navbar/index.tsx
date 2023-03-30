import {
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import CustomDrawer from "./CustomDrawer";
import { INavbar } from "./Navbar.type";

import { MdOutlineArrowBack } from "react-icons/md";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar: React.FC<INavbar> = ({ fullPageScroll }) => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");
  const router = useRouter();

  return (
    <Flex
      w="100%"
      h="100px"
      px={["15px", "50px"]}
      align="center"
      bg="black"
      position="fixed"
      zIndex="overlay"
      justify="space-between"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {fullPageScroll ? (
        <Flex direction="column">
          <Heading fontSize={["lg", "2xl"]} fontWeight="extrabold">
            Rayandika
          </Heading>
          <Text fontSize={["xx-small", "xs"]}>Web Front End Developer</Text>
        </Flex>
      ) : (
        <Button
          bg="transparent"
          _hover={{
            bg: "whiteAlpha.300",
          }}
          onClick={() => router.push("/")}
          p="0"
          pr="15px"
        >
          <MdOutlineArrowBack style={{ fontSize: "25px" }} />
          <Text fontWeight="600">Back</Text>
        </Button>
      )}

      {isDesktop ? null : <CustomDrawer fullPageScroll={fullPageScroll} />}
    </Flex>
  );
};

export default Navbar;
