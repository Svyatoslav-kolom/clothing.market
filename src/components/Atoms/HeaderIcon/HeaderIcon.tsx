import { FC } from "react";
import { IconButton, IconProps } from "@chakra-ui/react";

interface HeaderIconProps extends IconProps {
  IconComponent: React.FC;
  onClick?: () => void;
}

export const HeaderIcon: FC<HeaderIconProps> = ({ IconComponent, onClick, ...rest }) => (
  <IconButton
    icon={<IconComponent />}
    fontSize="24px"
    border="none"
    color="black"
    aria-label="header icon"
    onClick={onClick}
    variant="ghost"
    // @ts-ignore
    type="button"
    {...rest}

    _focus={{
      boxShadow: "none",
      outline: "none",
      border: "none"
    }}
    _hover={{
      boxShadow: "none",
      border: "none",
    }}
    _active={{
      boxShadow: "none",
      border: "none"
    }}

  />
);
