import { Button, Card, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../core/Header";
import ContentLayout from "../../layouts/ContentLayout";
import ListProject from "./ListProject";

const ProjectSection: React.FC = () => {
  const router = useRouter();

  return (
    <ContentLayout>
      <Flex
        direction="column"
        w="full"
        h="full"
        gap={["15px", "25px"]}
        pb={["15px", "60px"]}
      >
        <Header>Projects</Header>

        <ListProject />
        <Flex w="full" justify="start">
          <Button variant="outlined" onClick={() => router.push("/projects")}>
            View More
          </Button>
        </Flex>
      </Flex>
    </ContentLayout>
  );
};

export default ProjectSection;
