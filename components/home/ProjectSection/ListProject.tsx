import { Flex } from "@chakra-ui/react";
import React from "react";
import CustomCard from "../../core/CustomCard";
import DummyData from "./DummyData";

const ListProject: React.FC = () => {
  return (
    <Flex gap="10px">
      {/* {DummyData?.map((item: any, index) => {
        return (
          <CustomCard
            bgImage={item.image}
            desc={item.desc}
            title={item.name}
            key={index}
          ></CustomCard>
        );
      })} */}

      <CustomCard
        bgImage={DummyData[0].image}
        desc={DummyData[0].desc}
        title={DummyData[0].name}
        isActive={true}
      />
    </Flex>
  );
};

export default ListProject;
