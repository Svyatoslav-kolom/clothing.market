import { Box, Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { products } from "../../../data/productsData";
import { CardCatalog } from "../../Molecules/CardCatalog";

const getRandomProducts = (items: typeof products, count: number) => {
  return [...items]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export const AlsoLike: FC = () => {
  const randomProducts = getRandomProducts(products, 4);

  return (
    <Box>
      <Heading fontSize="32px" fontWeight="bold" mb="20px">
        You might also like
      </Heading>

      <HStack spacing="24px">
        {randomProducts.map(({ id, title, images, price }) => (
          <CardCatalog key={id} id={id} title={title} image={images[0]} price={price} />
        ))}
      </HStack>
    </Box>
  );
};
