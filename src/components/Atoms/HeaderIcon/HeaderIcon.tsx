import { FC } from "react";
import { IconButton, IconProps } from "@chakra-ui/react";

interface HeaderIconProps extends IconProps {
  IconComponent: React.FC; // Компонент іконки
  onClick?: () => void;    // Обробник кліку
}

export const HeaderIcon: FC<HeaderIconProps> = ({ IconComponent, onClick, ...rest }) => (
  <IconButton
    icon={<IconComponent />}  // Передаємо іконку
    fontSize="24px"
    border="none"
    color="black"
    aria-label="header icon"
    onClick={onClick}
    variant="ghost"  // Мінімалістичний стиль кнопки
    // @ts-ignore
    type="button"  // Вказуємо тип "button", щоб уникнути конфлікту типів
    {...rest} // Передаємо інші пропси

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
