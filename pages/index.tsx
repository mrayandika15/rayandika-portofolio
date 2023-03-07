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
import DummyData from "../components/home/ProjectSection/DummyData";
import CustomCard from "../components/core/CustomCard";

import { useAppContext } from "../context/AppContext";
import CustomModal from "../components/core/Modal/CustomModal";

const Home: NextPage = () => {
  const { selectedItem } = useAppContext();

  return (
    <>
      <Title title="Rayandika" />

      <CustomModal selectedItem={selectedItem} />

      <Layouts>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Layouts>
    </>
  );
};

export default Home;
