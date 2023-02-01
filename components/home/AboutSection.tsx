import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";

import ContentLayout from "../layouts/ContentLayout";

const AboutSection: React.FC = () => {
  return (
    <ContentLayout props={{ justify: "center", gap: "3" }}>
      <Flex align="center" position="relative" justify="space-between">
        <Flex direction="column" gap="15px">
          <Flex direction="column">
            <Text>Muhammad Rayandika</Text>
            <Heading fontWeight="extrabold" fontSize="60px">
              Frontend <br /> Web Developer
            </Heading>
          </Flex>
          <Box w="80px" h="3px" bg="white"></Box>
          <Text w="650px" textAlign="justify">
            Hello, I’m Muhammad Rayandika Putra Arestya Antaatmaja. I’m a
            Frontend Website Developer and Programmer with 4 years of
            experiences. Please kindly contact me if you’re interested with my
            works.
          </Text>
          <Flex>
            <Button variant="outlined">View More</Button>
          </Flex>
        </Flex>

        <Box
          w="750px"
          position="absolute"
          right="0"
          flexGrow="0"
          flexShrink="0"
        >
          <Image src="/assets/images/profile.jpeg" w="auto" h="740px" />
        </Box>
      </Flex>
    </ContentLayout>
  );
};

export default AboutSection;
