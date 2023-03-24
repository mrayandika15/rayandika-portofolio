export type ProjectState = {
  name: string;
  image: string;
  desc: string;
  id: number;
};

export type ProjectType = {
  selectedItem?: ProjectState | string;
  setSelectedItem?: any;
  children?: React.ReactNode;
};
