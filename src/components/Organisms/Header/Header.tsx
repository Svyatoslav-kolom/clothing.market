import { Box, Heading } from "@chakra-ui/react";
import { HeaderButtons } from "../../Molecules/HeaderButtons";
import BurgerMenu from "../../../assets/icons/BurgerMenu";
import { HeaderIcon } from "../../Atoms/HeaderIcon";

type HeaderProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  return (
    <Box
      w="100%"
      p="24px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="h1" fontSize="24px" fontWeight="bold" textAlign="center">
        ClothingPortal
      </Heading>

      <Box flexDirection="row" display="flex" alignItems="center" gap="40px">
        <HeaderButtons />
        <HeaderIcon
          IconComponent={BurgerMenu}
          onClick={onOpen}
          aria-label="Open menu"
        />
      </Box>
    </Box>
  );
};
