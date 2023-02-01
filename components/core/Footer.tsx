import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Flex w="full" h="250px" borderTop="1px solid gray">
      <Flex direction="column">
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
    </Flex>
  );
};

export default Footer;
