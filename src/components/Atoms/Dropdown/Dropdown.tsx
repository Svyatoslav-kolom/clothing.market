import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

interface DropdownProps {
  placeholder: string
  options: string[]
  value?: string[]
  onChange?: (value: string[]) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options,
  value: controlledValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState<string[]>([])
  const value = controlledValue ?? internalValue

  const handleSelect = (selectedValue: string) => {
    const newValue = value.includes(selectedValue)
      ? value.filter((v) => v !== selectedValue)
      : [...value, selectedValue]

    setInternalValue(newValue)
    onChange?.(newValue)
  }

  const renderDisplayValue = () => {
    if (value.length === 0) return placeholder
    if (value.length > 3) return `${value.length} selected`
    return value.join(", ")
  }

  return (
    <Menu closeOnSelect={false} matchWidth>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        textAlign="left"
        width="100%"
        borderRadius="0"
        border="1px solid #E0E0E0"
        bg="transparent"
        fontWeight="medium"
        color="#4F4F4F"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        _focus={{ boxShadow: "none" }}
        _hover={{ border: "1px solid #E0E0E0" }}
        _active={{ boxShadow: "none" }}
      >
        {renderDisplayValue()}
      </MenuButton>

      <MenuList borderRadius="0" p={0} minWidth="unset" border="none">
        {options.map((option) => (
          <MenuItem
            key={option}
            fontWeight="medium"
            color="#4F4F4F"
            onClick={() => handleSelect(option)}
            borderRadius="0"
            border="0.5px solid #E0E0E0"
            _focus={{ boxShadow: "none" }}
            _hover={{ bg: "#F0F0F0", border: "1px solid #E0E0E0" }}
          >
            {value.includes(option) ? `✓ ${option}` : option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
