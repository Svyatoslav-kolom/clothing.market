import { Heading, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Colors } from "../../Atoms/Colors";
import { Dropdown } from "../../Atoms/Dropdown";
import { Btn } from "../../Atoms/Btn";

interface Props {
  title: string,
  price: number,
  colors: string[],
  description: string,
  size: string[],
}

export const ProductDescription: FC<Props> = ({
  title,
  price,
  colors,
  description,
  size
}) => (
  <VStack w="330px">
    <Heading>
      {title}
    </Heading>
    <Text>
      {price}
    </Text>
    <Colors colors={colors} />
    <Text>
      {description}
    </Text>
    <Dropdown placeholder={"Please select"} options={size} />
    <Btn content={"Add to bag"} transparent={false}/>
  </VStack>
);
