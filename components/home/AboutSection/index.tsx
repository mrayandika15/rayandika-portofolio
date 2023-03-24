import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";
import IcMouseWheel from "../../icons/IcMouseWheel";

import ContentLayout from "../../layouts/ContentLayout";

const AboutSection: React.FC = () => {
  return (
    <ContentLayout props={{ justify: "center", gap: "3", id: "about" }}>
      <Flex
        align="center"
        position="relative"
        justify="space-between"
        w="full"
        h="full"
      >
        <Flex direction="column" gap="15px" w="50%">
          <Flex direction="column">
            <Text>Muhammad Rayandika</Text>
            <Heading fontWeight="extrabold" fontSize="60px">
              Frontend <br /> Web Developer
            </Heading>
          </Flex>
          <Box w="80px" h="3px" bg="white"></Box>
          <Text w="full" textAlign="justify">
            Hello, I’m Muhammad Rayandika Putra Arestya Antaatmaja. I’m a
            Frontend Website Developer and Programmer with 4 years of
            experiences. Please kindly contact me if you’re interested with my
            works.
          </Text>
          <Flex>
            <Button variant="outlined">View More</Button>
          </Flex>
        </Flex>

        <Image
          mr="8%"
          maxW="full"
          mb="15%"
          src="/assets/images/profile.jpeg"
          w="40%"
          h="auto"
        />

        <Box
          position="absolute"
          display="flex"
          bottom="45px"
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
