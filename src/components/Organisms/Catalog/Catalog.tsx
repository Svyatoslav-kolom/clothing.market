import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Product } from "../../../types/Product";
import { CardCatalog } from "../../Molecules/CardCatalog";

interface Props {
  products: Product[];
}

export const Catalog: FC<Props> = ({ products }) => (
  products.map((product) => (
    <Box
      key={product.id}
      w="calc(25% - 24px)"
      mb="24px"
    >
      <CardCatalog
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
      />
    </Box>
  ))
);
