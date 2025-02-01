import { Text } from "@chakra-ui/react";
import { FC } from "react";

type Type = "title" | "text";

interface Props {
  type: Type;
  content: string;
}

export const FooterComponent: FC<Props> = ({ type, content }) => {
  const styles = type === "title" 
    ? { fontWeight: "bold", fontSize: "14px" }
    : { fontWeight: "normal", fontSize: "12px" };

  return <Text {...styles}>{content}</Text>;
};
