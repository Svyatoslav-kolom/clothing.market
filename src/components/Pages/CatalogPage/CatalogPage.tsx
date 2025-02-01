import { Box, Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Filters } from "../../Molecules/Filters";
import { Product } from "../../../types/Product";
import { products } from "../../../data/productsData";
import { Catalog } from "../../Organisms/Catalog";

export const CatalogPage: FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleFiltersChange = (filters: any) => {
    const { priceRange, ...restFilters } = filters;

    const filtered = products.filter((product) => {

      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return Object.keys(restFilters).every((key) => {
        const filterValues = restFilters[key];
        if (!filterValues.length) return true;

        if (key === "size") {
          return filterValues.some((size: string) => product.sizes.includes(size));
        }

        return filterValues.includes(product[key as keyof Product] as string);
      });
    });

    setFilteredProducts(filtered);
  };

  return (
    <Box mx="24px">
      <Box pb="40px">
        <Filters onFiltersChange={handleFiltersChange} />
      </Box>

      <Flex flexWrap="wrap" gap="24px" justifyContent="center">
        {filteredProducts.length > 0 ? (
          <Catalog products={filteredProducts} />
        ) : (
          <Box w="100%" textAlign="center" py="40px">
            No products match your filters.
          </Box>
        )}
      </Flex>
    </Box>
  );
};
