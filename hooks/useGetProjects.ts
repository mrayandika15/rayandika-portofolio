import React from "react";
import axios from "axios";
import { IProjects } from "../pages/api/projects/projects.type";

type IGetProjects = {
  isLoading: boolean;
  data: IProjects[] | [];
};

const useGetProjects = () => {
  const [value, setValue] = React.useState<IGetProjects>({
    isLoading: false,
    data: [],
  });

  React.useEffect(() => {
    setValue((prevState) => ({ ...prevState, isLoading: true }));
    (async () => {
      const response = await axios.get("/api/projects");

      setValue({
        isLoading: false,
        data: response?.data,
      });
    })();
  }, []);

  return value;
};

export default useGetProjects;
