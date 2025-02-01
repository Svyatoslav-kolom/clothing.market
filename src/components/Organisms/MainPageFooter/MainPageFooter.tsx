import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import './style.css';
import { Btn } from '../../Atoms/Btn';

export const MainPageFooter = () => (
  <Box className="main-page-footer" color="white" w="100%">
    <VStack gap="8px" mb="40px" mt="auto">
      <Heading as="h1" fontSize="32px">
        Tiny Trends
      </Heading>

      <Text fontSize="18px">
        Dress your little ones like stars
      </Text>

      <Box mt="16px">
        <Btn content="Discover Deals" transparent={true} />
      </Box>
    </VStack>
  </Box>
);
