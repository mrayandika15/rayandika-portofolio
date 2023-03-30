import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import SideNav from "../core/Sidenav";
import { Socmed } from "../core/Socmed";

type ILayouts = {
  children: React.ReactNode;
  hasSideNav?: boolean;
  fullPageScroll?: boolean;
};

import ReactPageScroller from "react-page-scroller";
import { useAppContext } from "../../context/AppContext";

const Layouts: React.FC<ILayouts> = ({
  children,
  hasSideNav = true,
  fullPageScroll = true,
}) => {
  const { pageActive, setPageActive } = useAppContext();

  return (
    <Flex direction="column" w="full" h="full">
      <Navbar fullPageScroll={fullPageScroll} />
      <Socmed />
      {hasSideNav ? <SideNav /> : null}

      <Flex w="full" h="full" justifyContent="center">
        {fullPageScroll ? (
          <ReactPageScroller
            onBeforePageScroll={(number) => setPageActive(number)}
            animationTimer={850}
            renderAllPagesOnFirstRender={true}
            containerWidth="1640px"
            customPageNumber={pageActive}
          >
            {children}
          </ReactPageScroller>
        ) : (
          children
        )}
      </Flex>
    </Flex>
  );
};

export default Layouts;
