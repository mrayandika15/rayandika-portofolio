import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

type IVerticalText = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
};

type ISidenav = {
  pageActive?: number;
};

const SideNav: React.FC<ISidenav> = ({ pageActive }) => {
  const VerticalText = ({
    children,
    href,
    isActive = false,
  }: IVerticalText) => {
    return (
      <Text transform="rotate(90deg)" fontWeight={isActive ? "bold" : "normal"}>
        <a href={href}>{children}</a>
      </Text>
    );
  };

  return (
    <Flex
      h="full"
      w="85px"
      position="fixed"
      right="0"
      direction="column"
      justify="center"
      gap="120px"
      zIndex="overlay"
    >
      <VerticalText isActive={pageActive === 0} href="#about">
        About
      </VerticalText>
      <VerticalText isActive={pageActive === 1} href="#project">
        Projects
      </VerticalText>
      <VerticalText isActive={pageActive === 2} href="#contact">
        Contact
      </VerticalText>
    </Flex>
  );
};

export default SideNav;
