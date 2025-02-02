import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../../Organisms/ProductDetails";
import { products } from "../../../data/productsData";
import { AlsoLike } from "../../Organisms/AlsoLike";

export const ProductDetailsPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const product = products.find(p => p.id === Number(itemId));

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box>
      <ProductDetails productDetails={product} />

      <Box marginX="24px" mt="100px">
        <AlsoLike />
      </Box>
    </Box>
  );
};
