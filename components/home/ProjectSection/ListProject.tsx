import { Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import useGetProjects from "../../../hooks/useGetProjects";
import CustomCard from "../../core/CustomCard";
import CustomModal from "../../core/Modal/CustomModal";
import DummyData from "./DummyData";
import { ProjectState } from "./Project.type";

const ListProject: React.FC = () => {
  const { setSelectedItem } = useAppContext();

  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  const { data } = useGetProjects();

  const conditionalResponsiveData = isDesktop
    ? data.slice(0, 5)
    : data.slice(0, 3);

  return (
    <Flex
      gap={["10px", "10px"]}
      direction={["column", "row"]}
      w="full"
      h="full"
    >
      {conditionalResponsiveData?.map((item: any, index) => {
        return (
          <CustomCard
            key={index}
            selectedItem={item}
            onOpen={() => setSelectedItem(item)}
          ></CustomCard>
        );
      })}
    </Flex>
  );
};

export default ListProject;
