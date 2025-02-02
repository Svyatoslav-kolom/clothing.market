import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  content: string;
  width: number | "100%";
  transparent: boolean;
  color: "white" | "black";
  onClick?: () => void;
  href?: string;
}

export const Btn: FC<Props> = ({ content, width, transparent, color, onClick, href }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      navigate(href);
    }
  };

  const isBlack = color === "black";

  const styles = {
    w: width,
    h: "50px",
    bg: transparent ? "transparent" : color,
    color: transparent ? "white" : isBlack ? "white" : "black",
    border: transparent ? "1px solid white" : "none",
    fontWeight: "normal",
    fontSize: "lg",
    borderRadius: "none",
    _hover: transparent
      ? { borderColor: "#F0F0F0" }
      : { bg: isBlack ? "#1a1a1a" : "#F0F0F0" },
    _active: transparent
      ? { borderColor: "#E0E0E0" }
      : { bg: isBlack ? "#333333" : "#E0E0E0" },
    _disabled: transparent
      ? { borderColor: "#CCCCCC", color: "#666666", cursor: "not-allowed" }
      : { bg: "#CCCCCC", color: "#666666", cursor: "not-allowed" },
    _focus: {
      boxShadow: "none",
      outline: "none",
    },
  };

  return (
    <Button {...styles} onClick={handleClick}>
      {content}
    </Button>
  );
};
