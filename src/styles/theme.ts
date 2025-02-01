import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', serif`, // Для заголовков
    body: `'Playfair Display', serif`,   // Для основного текста
  },
});

export default theme;
