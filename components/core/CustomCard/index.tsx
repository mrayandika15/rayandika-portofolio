import React from "react";

import { AnimatePresence } from "framer-motion";
import ITypeCard from "./TypeCard";
import ActiveCard from "./ActiveCard";
import DefaultCard from "./DefaultCard";

const CustomCard: React.FC<ITypeCard> = ({
  bgImage,
  desc,
  title,
  isActive = false,
}) => {
  return (
    <AnimatePresence>
      {isActive ? (
        <ActiveCard />
      ) : (
        <DefaultCard bgImage={bgImage} desc={desc} title={title} />
      )}
    </AnimatePresence>
  );
};

export default CustomCard;
