import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  content: string;
  transparent: boolean;
  onClick?: () => void;
}

export const Btn: FC<Props> = ({ content, transparent, onClick }) => {
  const styles = {
    w: 212,
    h: 50,
    bg: transparent ? "transparent" : "white",
    color: transparent ? "white" : "black",
    border: transparent ? "1px solid white" : "none",
    fontWeight: "normal",
    fontSize: "lg",
    borderRadius: "none",
    _hover: transparent
      ? { borderColor: "#F0F0F0" }
      : { bg: "#F0F0F0" },
    _active: transparent
      ? { borderColor: "#E0E0E0" }
      : { bg: "#E0E0E0" },
    _disabled: transparent
      ? { borderColor: "#CCCCCC", color: "#666666", cursor: "not-allowed" }
      : { bg: "#CCCCCC", color: "#666666", cursor: "not-allowed" },
    _focus: {
      boxShadow: "none",
      outline: "none",
    },
  };

  return (
    <Button {...styles} onClick={onClick}>
      {content}
    </Button>
  );
};
