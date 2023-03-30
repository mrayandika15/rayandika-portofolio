import { Flex, Tooltip } from "@chakra-ui/react";
import React from "react";

import { VscGithub } from "react-icons/vsc";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

type ICustomTooltip = {
  children: React.ReactNode;
  label: string;
  link: string;
};

export const Socmed: React.FC = () => {
  const CustomTooltip = ({ children, label, link }: ICustomTooltip) => {
    return (
      <Tooltip
        label={label}
        placement="right"
        hasArrow
        bg="white"
        fontSize="sm"
        fontWeight="bold"
        color="black"
      >
        <span onClick={() => window.open(link, "_blank")}>{children}</span>
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
      display={["none", "flex"]}
    >
      <IconContext.Provider
        value={{ style: { cursor: "pointer", fontSize: "19px" } }}
      >
        <CustomTooltip label="Github" link="https://github.com/mrayandika15">
          <VscGithub />
        </CustomTooltip>

        <CustomTooltip
          label="Instagram"
          link="https://www.instagram.com/mrayandikaa/"
        >
          <BsInstagram />
        </CustomTooltip>

        <CustomTooltip
          label="Whatsapp"
          link="https://api.whatsapp.com/send?phone=6285156413628"
        >
          <BsWhatsapp />
        </CustomTooltip>
      </IconContext.Provider>
    </Flex>
  );
};
