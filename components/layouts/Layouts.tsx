import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import SideNav from "../core/SideNav";
import { Socmed } from "../core/Socmed";

type ILayouts = {
  children: React.ReactNode;
};

const Layouts: React.FC<ILayouts> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Socmed />
      <SideNav />
      <Flex pl="50px" pr="85px">
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layouts;
