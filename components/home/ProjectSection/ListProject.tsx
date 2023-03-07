import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../../../context/AppContext";
import CustomCard from "../../core/CustomCard";
import DummyData from "./DummyData";

const ListProject: React.FC = () => {
  const { setSelectedItem, selectedItem } = useAppContext();

  return (
    <Flex gap="10px">
      {DummyData?.map((item: any, index) => {
        return (
          <CustomCard
            key={index}
            selectedItem={item}
            onClick={() => setSelectedItem(item)}
          ></CustomCard>
        );
      })}
    </Flex>
  );
};

export default ListProject;
