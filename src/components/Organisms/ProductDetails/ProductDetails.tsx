import { Box, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { ProductPhotos } from "../../Molecules/ProductPhotos";
import { ProductDescription } from "../../Molecules/ProductDescription";
import { DetailsPage } from "../../../types/DetailsPage";

interface Props {
  productDetails: DetailsPage;
}

export const ProductDetails: FC<Props> = ({ productDetails }) => {
  const { images, title, price, availableColors, description, sizes } = productDetails;

  return (
    <HStack alignItems="start" justifyContent="center" gap="24px">
      <Box w="566px" m>
        <ProductPhotos images={images} />
      </Box>

      <Box w="330px">
        <ProductDescription
          title={title}
          price={price}
          colors={availableColors}
          description={description}
          size={sizes}
        />
      </Box>
    </HStack>
  );
};
