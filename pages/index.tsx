import type { NextPage } from "next";

import {
  AboutSection,
  ContactSection,
  Layouts,
  ProjectSection,
  Title,
} from "../components";

import React, { LegacyRef, useEffect } from "react";

import { useAppContext } from "../context/AppContext";
import CustomModal from "../components/core/Modal/CustomModal";

const Home: NextPage = () => {
  const { selectedItem, setSelectedItem } = useAppContext();

  return (
    <>
      <Title title="Rayandika" />

      <CustomModal
        selectedItem={selectedItem}
        onClose={() => setSelectedItem("")}
      />

      <Layouts>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Layouts>
    </>
  );
};

export default Home;
