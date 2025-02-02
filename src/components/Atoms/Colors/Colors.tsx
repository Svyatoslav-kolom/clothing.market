import { Box, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  colors: string[];
}

export const Colors: FC<Props> = ({ colors }) => (
  <HStack gap="16px">
    <Text fontWeight="bold">
      Color
    </Text>
    {colors.map((color) => (
      <Box
        boxSize="24px"
        bg={color}
        border="0.5px solid black"
      />
    ))}
  </HStack>
);
