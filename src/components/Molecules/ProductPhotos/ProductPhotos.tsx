import { HStack, Image, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  mainImage: string;
  images: string[];
}

export const ProductPhotos: FC<Props> = ({ mainImage, images }) => (
  <HStack h="561px" gap="24px">
    <VStack w="94px" gap="11px">
      {images.map((image) => (
        <Image
          src={image}
          alt=''
          h="118px"
          w="100%"
        />
      ))}
    </VStack>
    
    <Image
      src={mainImage}
      alt=''
      h="561px"
      w="100%"
    />
  </HStack>
);
