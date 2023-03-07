import { Button, Card, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../../core/Header";
import ContentLayout from "../../layouts/ContentLayout";
import ListProject from "./ListProject";

const ProjectSection: React.FC = () => {
  return (
    <>
      <ContentLayout props={{ id: "project" }}>
        <Flex h="100vh" direction="column" gap="25px">
          <Header>Projects</Header>

          <ListProject />
          <Flex w="full" justify="center">
            <Button variant="outlined">View More</Button>
          </Flex>
        </Flex>
      </ContentLayout>
    </>
  );
};

export default ProjectSection;
