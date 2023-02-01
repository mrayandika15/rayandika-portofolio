import { extendTheme } from "@chakra-ui/react";

import config from "./config";
import styles from "./styles";
import fonts from "./foundations/fonts";

export const theme = extendTheme({ config, styles, fonts });
