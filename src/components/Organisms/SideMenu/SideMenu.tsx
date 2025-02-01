import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { HeaderIcon } from "../../Atoms/HeaderIcon";
import CloseIcon from "../../../assets/icons/CloseIcon";
import { MenuSection } from "../../Molecules/MenuSection";
import { menuSections } from "../../../data/menuSectionsData";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent p={0} pr="24px" pl="48px" w="472px !important">
        <DrawerHeader display="flex" justifyContent="space-between" pt="24px" pb={0} px={0}>
          Menu
          <HeaderIcon IconComponent={CloseIcon} onClick={onClose} />
        </DrawerHeader>
        <DrawerBody p={0}>
          {menuSections.map((section, index) => (
            <MenuSection
              key={index}
              items={section}
              index={index}
              withBorder={index === 1}
              onClose={onClose}
              isLast={index === menuSections.length - 1}
            />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
