import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import CustomCard from "../../core/CustomCard";
import CustomModal from "../../core/Modal/CustomModal";
import DummyData from "./DummyData";
import { ProjectState } from "./Project.type";

const ListProject: React.FC = () => {
  const { setSelectedItem } = useAppContext();

  return (
    <Flex gap="10px">
      {DummyData?.map((item: any, index) => {
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
