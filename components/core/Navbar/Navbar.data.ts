import { VscGithub } from "react-icons/vsc";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export type ICustomDrawerData = {
  name: string;
  link: number;
};

export type ISocialMediaIcon = {
  name: string;
  icon: any;
  link: "";
};

export const CustomDrawerData: ICustomDrawerData[] = [
  {
    name: "About",
    link: 0,
  },

  {
    name: "Projects",
    link: 1,
  },
  {
    name: "Contact",
    link: 2,
  },
];

export const SocialMediaIcon: ISocialMediaIcon[] = [
  {
    name: "Github",
    icon: VscGithub,
    link: "",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    link: "",
  },
  {
    name: "Whatsapp",
    icon: BsWhatsapp,
    link: "",
  },
];
