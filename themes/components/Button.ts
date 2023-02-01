import { type ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  variants: {
    outlined: {
      background: "transparent",
      bg: "transparent",
      border: "1px solid",
      borderColor: "white",
      rounded: "md",
      _hover: {
        bg: "white",
        color: "black",
      },
    },
  },
};

export default Button;
