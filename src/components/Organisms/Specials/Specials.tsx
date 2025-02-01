import { HStack } from "@chakra-ui/react";
import { SpecialComponent } from "../../Molecules/SpecialComponent";


export const Specials = () => (
  <HStack w="100%">
    <SpecialComponent 
      title="Black Friday" 
      button="Don’t Miss Out" 
      img={"src/assets/Special/black-friday.png"}
    />

    <SpecialComponent 
      title="Black Friday" 
      button="Don’t Miss Out" 
      img={"src/assets/Special/pre-holiday.png"}
    />

  </HStack>
);
