import { Box, HStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Dropdown } from "../../Atoms/Dropdown";
import { PriceRangeSelector } from "../../Atoms/PriceRange";
import { filterConfig } from "../../../data/filterConfig";

interface Props {
  onFiltersChange: (filters: FiltersState) => void;
}

interface FiltersState {
  [key: string]: string[] | [number, number];
}

export const Filters: FC<Props> = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState<FiltersState>({
    fromWhom: [],
    colour: [],
    category: [],
    size: [],
    style: [],
    priceRange: [100, 10000],
  });

  const handleDropdownChange = (key: string, selectedValues: string[]) => {
    const updatedFilters = { ...filters, [key]: selectedValues };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handlePriceRangeChange = (value: [number, number]) => {
    const updatedFilters = { ...filters, priceRange: value };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  return (
    <HStack w="100%" alignItems="center" gap="24px" p="24px">
      {filterConfig.map((filter) => (
        <Box key={filter.key} flex="1" minWidth="150px">
          <Dropdown
            placeholder={filter.placeholder}
            options={filter.options}
            onChange={(values) => handleDropdownChange(filter.key, values)}
          />
        </Box>
      ))}

      <Box flex="1" minWidth="150px">
        <PriceRangeSelector
          min={100}
          max={10000}
          step={100}
          initialRange={[1000, 5000]}
          onChange={handlePriceRangeChange}
        />
      </Box>
    </HStack>
  );
};
