// MenuSection.tsx
import { Box, Button } from "@chakra-ui/react";

interface MenuSectionProps {
  items: string[];
  index: number;
  withBorder?: boolean;
  onClose: () => void;
  isLast?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items, index, withBorder = false, onClose, isLast = false }) => (
  <Box
    key={index}
    display="flex"
    flexDirection="column"
    gap="24px"
    alignItems="start"
    py={withBorder ? "48px" : 0}
    mt="48px"
    mb={isLast ? "48px" : 0}
    borderTop={withBorder ? "1px solid #E0E0E0" : "none"}
    borderBottom={withBorder ? "1px solid #E0E0E0" : "none"}
  >
    {items.map((item, i) => (
      <Button
        key={i}
        variant="link"
        onClick={onClose}
        color="black"
        fontSize="18px"
        textAlign="left"
        fontWeight="light"
        border="none"

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
      >
        {item}
      </Button>
    ))}
  </Box>
);
