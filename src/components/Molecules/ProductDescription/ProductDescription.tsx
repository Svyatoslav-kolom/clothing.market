import { Heading, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Colors } from "../../Atoms/Colors";
import { Btn } from "../../Atoms/Btn";
import { Sizes } from "../../Atoms/Sizes";

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
  <VStack w="330px" alignItems="start" gap="24px">
    <VStack gap="16px" alignItems="start" w="100%">
      <Heading fontSize="32px">
        {title}
      </Heading>
      <Text fontWeight="bold">
        ${price}
      </Text>
    </VStack>

    <VStack gap="16px" alignItems="start" w="100%">
      <Colors colors={colors} />
      <Text>
        {description}
      </Text>
    </VStack>

    <VStack gap="16px" alignItems="start" w="100%">
      <Sizes size={size} />
      <Btn 
        content={"Add to bag"} 
        transparent={false} 
        color="black" 
        width="100%"
        href="/catalog"
      />
    </VStack>

  </VStack>
);
