import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

interface DropdownProps {
  placeholder: string
  options: string[]
  value?: string[] // Если требуется управление из родительского компонента
  onChange?: (value: string[]) => void // Коллбэк для обработки изменений
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
    if (onChange) onChange(newValue)
  }

  return (
    <Menu closeOnSelect={false} matchWidth>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        boxSizing="border-box"
        textAlign="left"
        width="100%"
        borderRadius="0"
        border="1px solid #E0E0E0"
        bg="transparent"
        fontWeight="medium"
        color="#4F4F4F"
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
        _hover={{
          boxShadow: "none",
          border: "1px solid #E0E0E0",
        }}
        _active={{
          boxShadow: "none",
        }}
      >
        {value.length > 0 ? value.join(", ") : placeholder}
      </MenuButton>
      <MenuList
        borderRadius="0"
        p={0}
        boxSizing="border-box"
        minWidth="unset"
        border="none"
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        {options.map((option) => (
          <MenuItem
            fontWeight="medium"
            maxWidth="100%"
            color="#4F4F4F"
            key={option}
            onClick={() => handleSelect(option)}
            borderRadius="0"
            border="0.5px solid #E0E0E0"
            boxSizing="border-box"
            _focus={{
              boxShadow: "none",
              outline: "none",
            }}
            _hover={{
              bg: "#F0F0F0",
              border: "1px solid #E0E0E0",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>

  )
}
