import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Dropdown } from "../Dropdown";
import Hanger from "../../../assets/icons/Hanger";

interface Props {
  size: string[];
}

export const Sizes: FC<Props> = ({ size }) => (
  <Box w="100%">
    <HStack justifyContent="space-between" mb="8px">
      <Text fontSize="18px">Size:</Text>

      <HStack>
        <Icon as={Hanger} boxSize={4} mr={1}/>
        <Text fontSize="14" color="#373737">Find your Fit Assistant size</Text>
      </HStack>
    </HStack>
    <Dropdown placeholder="Please select" options={size} />
  </Box>
);
