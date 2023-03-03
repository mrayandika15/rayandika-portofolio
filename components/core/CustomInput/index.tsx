import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";

type ICustomInput = {
  label: string;
  placeholder: string;
  type?: string;
};

const CustomInput: React.FC<ICustomInput> = ({
  label,
  placeholder,
  type = "base",
}) => {
  return (
    <Flex direction="column" gap="5px">
      <Text>{label}</Text>
      {type === "base" ? (
        <Input
          size="lg"
          border="1px solid white"
          h="60px"
          variant="outline"
          _hover={{ outline: "none" }}
          _focusVisible={{ outline: "none" }}
          placeholder={placeholder}
          _placeholder={{ color: "white" }}
        ></Input>
      ) : null}
      {type === "textarea" ? (
        <Textarea
          size="lg"
          border="1px solid white"
          variant="outline"
          _hover={{ outline: "none" }}
          _focusVisible={{ outline: "none" }}
          placeholder={placeholder}
          _placeholder={{ color: "white" }}
          h="100px"
        ></Textarea>
      ) : null}
    </Flex>
  );
};

export default CustomInput;
