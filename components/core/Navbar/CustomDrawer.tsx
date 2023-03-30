import {
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppContext } from "../../../context/AppContext";
import { CustomDrawerData, SocialMediaIcon } from "./Navbar.data";
import { INavbar } from "./Navbar.type";

const CustomDrawer: React.FC<INavbar> = ({ fullPageScroll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const { setPageActive } = useAppContext();

  const handleLink = (page: number) => {
    onClose();
    setPageActive(page);
    if (!fullPageScroll) router.push("/");
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={<GiHamburgerMenu />}
        aria-label="custom-drawer-button"
        bg="transparent"
        _hover={{
          bg: "transparent",
        }}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <Flex
            w="full"
            h="full"
            direction="column"
            color="black"
            justifyContent="center"
            fontSize="5xl"
            fontWeight="500"
            p="30px"
            gap="15px"
          >
            <Flex
              justifyContent="space-between"
              w="full"
              alignItems="center"
              fontSize="lg"
              color="gray.700"
              fontWeight="400"
            >
              <Text>Menu</Text>
              <CloseButton onClick={() => onClose()} />
            </Flex>

            {CustomDrawerData.map((item, key) => {
              return (
                <Link key={`link${key}`} onClick={() => handleLink(item.link)}>
                  {item.name}
                </Link>
              );
            })}

            <Flex fontSize="2xl" gap="10px">
              {SocialMediaIcon.map((item) => {
                return <item.icon />;
              })}
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
