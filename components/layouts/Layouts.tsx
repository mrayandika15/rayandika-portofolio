import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import SideNav from "../core/Sidenav";
import { Socmed } from "../core/Socmed";

type ILayouts = {
  children: React.ReactNode;
};

import ReactPageScroller from "react-page-scroller";

const Layouts: React.FC<ILayouts> = ({ children }) => {
  const [pageActive, setPageActive] = React.useState<number>(0);

  return (
    <Flex direction="column">
      <Navbar />
      <Socmed />
      <SideNav pageActive={pageActive} />

      <Flex direction="column" w="full" h="full">
        <ReactPageScroller
          onBeforePageScroll={(number) => setPageActive(number)}
          animationTimer={850}
          renderAllPagesOnFirstRender={true}
        >
          {children}
          {/* <Footer /> */}
        </ReactPageScroller>
      </Flex>
    </Flex>
  );
};

export default Layouts;
