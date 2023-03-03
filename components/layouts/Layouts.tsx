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

      <Flex
        pl="50px"
        pr="85px"
        direction="column"
        overflowY="scroll"
        scrollSnapType="y mandatory"
        scrollBehavior="auto"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex>
          <ReactPageScroller
            onBeforePageScroll={(number) => setPageActive(number)}
            animationTimer={850}
          >
            {children}
          </ReactPageScroller>
        </Flex>
      </Flex>
      {/* <Footer /> */}
    </Flex>
  );
};

export default Layouts;
