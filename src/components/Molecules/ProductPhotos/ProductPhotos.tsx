import { HStack, Image, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";

interface Props {
  images: string[];
}

export const ProductPhotos: FC<Props> = ({ images }) => {
  const [mainPhoto, setMainPhoto] = useState(images[0]);

  return (
    <HStack h="561px" gap="24px" alignItems="start">
      <VStack w="94px" gap="11px">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            h="118px"
            w="100%"
            cursor="pointer"
            onClick={() => setMainPhoto(image)}
          />
        ))}
      </VStack>

      <Image
        src={mainPhoto}
        alt="Selected product image"
        h="561px"
        w="100%"
      />
    </HStack>
  );
};
