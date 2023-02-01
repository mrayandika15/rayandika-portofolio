import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";
import { Socmed } from "../core/Socmed";

type ILayouts = {
  children: React.ReactNode;
};

const Layouts: React.FC<ILayouts> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Socmed />
      <Flex pt="120px" pl="50px">
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layouts;
