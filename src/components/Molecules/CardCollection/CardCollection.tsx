import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  backgroundImg: string;
  alt: string;
  text: string;
  path: string;
}

export const CardCollection: FC<Props> = ({ backgroundImg, alt, text, path }) => (
  <Box
    as="a"
    href={path}
    cursor="pointer"
    maxW="330px"
    textAlign="center"
    color="black"
    _hover={{
      textDecoration: "none",
      color: "black",
    }}
    _focus={{
      outline: "none",
    }}
  >
    <Image
      src={backgroundImg}
      alt={alt}
      h="414px"
      w="100%"
    />
    <Text fontSize="24px" mt="8px" textAlign="left">
      {text}
    </Text>
  </Box>
);
