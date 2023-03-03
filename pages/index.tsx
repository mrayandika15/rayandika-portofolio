import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  AboutSection,
  ContactSection,
  Layouts,
  ProjectSection,
  Title,
} from "../components";

import React, { LegacyRef, useEffect } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Title title="Rayandika" />
      <Layouts>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Layouts>
    </>
  );
};

export default Home;
