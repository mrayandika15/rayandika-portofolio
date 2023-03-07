import { Flex, Tooltip } from "@chakra-ui/react";
import React from "react";

import { VscGithub } from "react-icons/vsc";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

type ICustomTooltip = {
  children: React.ReactNode;
  label: string;
};

export const Socmed: React.FC = () => {
  const CustomTooltip = ({ children, label }: ICustomTooltip) => {
    return (
      <Tooltip
        label={label}
        placement="right"
        hasArrow
        bg="white"
        fontSize="sm"
        fontWeight="bold"
      >
        <span>{children}</span>
      </Tooltip>
    );
  };

  return (
    <Flex
      h="full"
      w="50px"
      position="fixed"
      direction="column"
      justify="end"
      align="center"
      py="50px"
      gap="35px"
      zIndex="sticky"
    >
      <IconContext.Provider
        value={{ style: { cursor: "pointer", fontSize: "19px" } }}
      >
        <CustomTooltip label="Github">
          <VscGithub />
        </CustomTooltip>

        <CustomTooltip label="Instagram">
          <BsInstagram />
        </CustomTooltip>

        <CustomTooltip label="Whatsapp">
          <BsWhatsapp />
        </CustomTooltip>
      </IconContext.Provider>
    </Flex>
  );
};
