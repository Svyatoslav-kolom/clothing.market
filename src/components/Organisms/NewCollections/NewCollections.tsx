import { Box, Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { CardCollection } from "../../Molecules/CardCollection";
import { collectionsData } from "../../../data/collectionsData";

export const NewCollections: FC = () => (
  <Box w="100%">
    <Heading as="h2" fontSize="32px" textTransform="uppercase" mb="40px" textAlign="center">
      NEW COLLECTIONS ARE HERE
    </Heading>

    <HStack spacing="26px">
      {collectionsData.map((collection, index) => (
        <CardCollection
          key={index}
          backgroundImg={collection.image.src}
          alt={collection.image.alt}
          text={collection.text}
          path={collection.path} 
        />
      ))}
    </HStack>
  </Box>
);
