import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

import { ContentLayout, Layouts, Title } from "../components";
import CustomCard from "../components/core/CustomCard";
import Header from "../components/core/Header";
import CustomModal from "../components/core/Modal/CustomModal";
import { useAppContext } from "../context/AppContext";
import useGetProjects from "../hooks/useGetProjects";

const Projects: React.FC = () => {
  const { setSelectedItem, selectedItem } = useAppContext();

  const { data } = useGetProjects();

  return (
    <>
      <Title title="Projects - Rayandika" />

      <CustomModal
        onClose={() => setSelectedItem("")}
        selectedItem={selectedItem}
      />

      <Layouts hasSideNav={false} fullPageScroll={false}>
        <ContentLayout height="full" props={{ mb: "50px" }}>
          <Header>Projects</Header>

          <Flex flexWrap="wrap" gap="15px" w="full">
            {data.map((item: any, index) => {
              return (
                <CustomCard
                  key={`card-large${index}`}
                  size="large"
                  selectedItem={item}
                  onOpen={() => setSelectedItem(item)}
                />
              );
            })}
          </Flex>
        </ContentLayout>
      </Layouts>
    </>
  );
};

export default Projects;
