import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";
import { useAppContext } from "../../../context/AppContext";
import IcMouseWheel from "../../icons/IcMouseWheel";

import ContentLayout from "../../layouts/ContentLayout";

const AboutSection: React.FC = () => {
  const { setPageActive } = useAppContext();

  return (
    <ContentLayout props={{ justify: "center", gap: "3", id: "about" }}>
      <Flex
        align="center"
        position="relative"
        justify={["start", "space-between"]}
        w="full"
        h="full"
        direction={["column", "row"]}
        justifyContent={["end", "start"]}
        py={["25px", "0px"]}
      >
        <Flex
          direction="column"
          gap="15px"
          w={["full", "50%"]}
          order={["2", "1"]}
        >
          <Flex direction="column">
            <Text>Muhammad Rayandika</Text>
            <Heading fontWeight="extrabold" fontSize={["25px", "60px"]}>
              Frontend <br /> Web Developer
            </Heading>
          </Flex>
          <Box w="80px" h="3px" bg="white"></Box>
          <Text w="full" textAlign="justify" fontSize={["xs", "lg"]}>
            Hello, I’m Muhammad Rayandika Putra Arestya Antaatmaja. I’m a
            Frontend Website Developer and Programmer with 4 years of
            experiences. Please kindly contact me if you’re interested with my
            works.
          </Text>
          <Flex justifyContent="space-between">
            <Button variant="outlined" onClick={() => setPageActive(1)}>
              View More
            </Button>
          </Flex>
        </Flex>

        <Image
          mr="8%"
          maxW="full"
          mb="15%"
          src="/assets/images/profile.jpeg"
          left="0"
          right="0"
          m="auto"
          top="-95px"
          w={["auto", "40%"]}
          h={["70%", "auto"]}
          zIndex="hide"
          order={["1", "2"]}
          position={["absolute", "relative"]}
          alt="profile-image"
        />

        <Box
          position={["relative", "absolute"]}
          order={["3", "3"]}
          display="flex"
          bottom={["0", " 45px"]}
          justifyContent="center"
          w="full"
        >
          <IcMouseWheel />
        </Box>
      </Flex>
    </ContentLayout>
  );
};

export default AboutSection;
