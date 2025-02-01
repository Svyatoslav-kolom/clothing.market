import { VStack, Image, HStack,Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const CardCatalog: FC<Props> = ({ id, title, image, price }) => (
  <VStack
    as="a"
    href={`/#/catalog/${id}`}
    cursor="pointer"
    border="none"
    maxW="330px"
    color="black"
    _hover={{
      textDecoration: "none",
      color: "black"
    }}
    _focus={{
      outline: "none"
    }}>
    <Image
      src={image}
      alt={title}
      h="414px"
      w="100%"
    />

    <HStack justify={"space-between"} w="100%" fontSize="18px">
      <Text>{title}</Text>
      <Text fontWeight="bold" >${price}</Text>
    </HStack>
  </VStack>
);
