import { extendTheme } from "@chakra-ui/react";

import config from "./config";
import styles from "./styles";
import fonts from "./foundations/fonts";
import Button from "./components/button";

export const theme = extendTheme({
  config,
  styles,
  fonts,
  components: {
    Button,
  },
});
