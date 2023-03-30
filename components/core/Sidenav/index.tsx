import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context/AppContext";

type IVerticalText = {
  children: React.ReactNode;
  onClick: any;
  isActive?: boolean;
};

const SideNav: React.FC = () => {
  const { pageActive, setPageActive } = useAppContext();

  const VerticalText = ({
    children,
    onClick,
    isActive = false,
  }: IVerticalText) => {
    return (
      <Text
        transform="rotate(90deg)"
        fontWeight={isActive ? "bold" : "normal"}
        cursor="pointer"
      >
        <a onClick={onClick}>{children}</a>
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
      zIndex="sticky"
      display={["none", "flex"]}
    >
      <VerticalText
        isActive={pageActive === 0}
        onClick={() => setPageActive(0)}
      >
        About
      </VerticalText>
      <VerticalText
        isActive={pageActive === 1}
        onClick={() => setPageActive(1)}
      >
        Projects
      </VerticalText>
      <VerticalText
        isActive={pageActive === 2}
        onClick={() => setPageActive(2)}
      >
        Contact
      </VerticalText>
    </Flex>
  );
};

export default SideNav;
