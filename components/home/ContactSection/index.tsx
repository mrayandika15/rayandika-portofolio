import { Button, Flex, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import CustomInput from "../../core/CustomInput";
import Header from "../../core/Header";
import ContentLayout from "../../layouts/ContentLayout";

const ContactSection: React.FC = () => {
  return (
    <ContentLayout>
      <Flex w="full" h="full" direction="column" gap="15px">
        <Header>Contact</Header>
        <Text fontSize={["xs", "lg"]}>
          Interested ? Drop me a line if you want to work together on something
          exciting. Big or smal
        </Text>

        <Flex direction="column" gap={["10px", "25px"]} w={["full", "550px"]}>
          <CustomInput label="Name" placeholder="What's your name ?" />
          <CustomInput
            label="Email"
            placeholder="What's your email address ?"
          />
          <CustomInput
            label="Message"
            placeholder="What's your message ?"
            type="textarea"
          />
          <Button variant="outlined" w="150px">
            Send Email
          </Button>
        </Flex>
      </Flex>
    </ContentLayout>
  );
};

export default ContactSection;
