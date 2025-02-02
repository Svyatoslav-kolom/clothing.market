import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

type Props = {
  min?: number;
  max?: number;
  step?: number;
  initialRange?: [number, number]; 
  onChange?: (value: [number, number]) => void;
};

export const PriceRangeSelector: React.FC<Props> = ({
  min = 0,
  max = 5000,
  step = 1,
  initialRange = [min, max],
  onChange,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>(initialRange);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Menu matchWidth>
      <MenuButton
        border="1px solid #E0E0E0"
        bg="transparent"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        boxSizing="border-box"
        textAlign="left"
        width="100%"
        borderRadius="0"
        fontWeight="medium"
        color="#4F4F4F"
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
        _hover={{
          boxShadow: "none",
          border: "1px solid #E0E0E0"
        }}
        _active={{
          boxShadow: "none",
        }}
      >
        Price range
      </MenuButton>
      <MenuList
        w="212px"
        minWidth="unset"
        maxWidth="100%"
      >
        <VStack spacing={0} px={2} py={2}>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={initialRange}
            min={min}
            max={max}
            step={step}
            onChange={(val) => handlePriceChange(val as [number, number])}
          >
            <RangeSliderTrack bg="#4F4F4F" boxSize="1px">
              <RangeSliderFilledTrack bg="#4F4F4F" />
            </RangeSliderTrack>

            <RangeSliderThumb index={0} bg="#4F4F4F" boxSize={2} />

            <RangeSliderThumb index={1} bg="#4F4F4F" boxSize={2} />
          </RangeSlider>

          <Box
            display="flex"
            justifyContent="space-between"
            w="100%"
            fontSize="14px"
            color={"#4F4F4F"}
          >
            <Text>{priceRange[0]}</Text>
            <Text>{priceRange[1]}</Text>
          </Box>
        </VStack>
      </MenuList>
    </Menu>
  );
};
