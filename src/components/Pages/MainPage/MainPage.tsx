import { VStack } from "@chakra-ui/react";
import { MainPageHead } from "../../Organisms/MainPageHead";
import { NewCollections } from "../../Organisms/NewCollections";
import { Specials } from "../../Organisms/Specials";
import { MainPageFooter } from "../../Organisms/MainPageFooter";

export const MainPage = () => (
  <VStack gap="100px">
    <MainPageHead />

    <VStack mx="24px" gap="100px">
      <NewCollections />
      <Specials />
    </VStack>

    <MainPageFooter />
  </VStack>
);
