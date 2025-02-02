import { Box, HStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Dropdown } from "../../Atoms/Dropdown";
import { PriceRangeSelector } from "../../Atoms/PriceRange";
import { filterConfig } from "../../../data/filterConfig";

interface Props {
  onFiltersChange: (filters: FiltersState) => void;
}

interface FiltersState {
  [key: string]: string[] | [number, number];
}

const parseFiltersFromSearchParams = (searchParams: URLSearchParams): FiltersState => {
  const parsedFilters: FiltersState = {
    fromWhom: [],
    colour: [],
    category: [],
    size: [],
    style: [],
    priceRange: [100, 10000],
  };

  searchParams.forEach((value, key) => {
    if (key === "priceRange") {
      const [min, max] = value.split(",").map(Number);
      parsedFilters[key] = [min, max];
    } else if (filterConfig.some(filter => filter.key === key)) {
      parsedFilters[key] = value.split(",");
    }
  });

  return parsedFilters;
};

export const Filters: FC<Props> = ({ onFiltersChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilters = parseFiltersFromSearchParams(searchParams);
  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  const handleDropdownChange = (key: string, selectedValues: string[]) => {
    const updatedFilters = { ...filters, [key]: selectedValues };
    setFilters(updatedFilters);
    updateSearchParams(updatedFilters);
  };

  const handlePriceRangeChange = (value: [number, number]) => {
    const updatedFilters = { ...filters, priceRange: value };
    setFilters(updatedFilters);
    updateSearchParams(updatedFilters);
  };

  const updateSearchParams = (updatedFilters: FiltersState) => {
    const params = new URLSearchParams();

    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      }
    });

    setSearchParams(params);
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
          initialRange={filters.priceRange as [number, number]}
          onChange={handlePriceRangeChange}
        />
      </Box>
    </HStack>
  );
};
