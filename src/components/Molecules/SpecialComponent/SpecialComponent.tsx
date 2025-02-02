import { Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Btn } from "../../Atoms/Btn";

interface Props {
  img: string;
  title: string;
  button: string;
}

export const SpecialComponent: FC<Props> = ({ img, title, button }) => (
  <VStack
    backgroundImage={`url(${img})`}
    h="684px"
    boxSizing="border-box"
    w="100%"
    justifyContent="space-between"
    pt="48px"
    pb="40px"
  >
    <Heading color="white" fontSize="32px">
      {title}
    </Heading>

    <Btn
      content={button}
      transparent={true}
      width={212} color='white'
      href="/catalog"
    />
  </VStack>
);
