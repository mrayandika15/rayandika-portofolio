export type ITypeCard = {
  name: string;
  image: string;
  desc: string;
  id: number;
};

export type ICustomCard = {
  selectedItem: ITypeCard;
  onOpen: () => any;
};
