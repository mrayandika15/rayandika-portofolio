import { Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <SimpleGrid
      w="full"
      h="250px"
      borderTop="1px solid gray"
      px="50"
      py="5"
      columns={3}
    >
      <Flex direction="column" w="350px" gap="2">
        <Heading fontSize="lg" lineHeight="5">
          Contact <br /> Information
        </Heading>

        <Text>
          Feel Free to reach out to me any time . i prefer to talk over the
          email , because it can be easy dealing with the time zone
        </Text>

        <Flex align="center" gap="5px">
          <MdOutlineEmail />
          mrayandika.work@gmail.com
        </Flex>
      </Flex>

      <Flex direction="column" w="350px" gap="2">
        <Heading fontSize="lg" lineHeight="5">
          Follow me
          <br /> On
        </Heading>

        <Link>LinkedIn</Link>
        <Link>Instagram</Link>
        <Link>Github</Link>
      </Flex>
      <Flex direction="column" w="350px" gap="3">
        <Flex direction="column" gap="1">
          <Heading fontSize="xl" fontWeight="extrabold" lineHeight="5">
            Rayandika
          </Heading>
          <Text fontSize="xs">Web Front End Developer</Text>
        </Flex>
        <Text>© 2021 Muhammad Rayandika</Text>
        <Text>Made with Love in Bandung, Indonesia</Text>
      </Flex>
    </SimpleGrid>
  );
};

export default Footer;
