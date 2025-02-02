import { Box, Heading, VStack, Text, HStack } from '@chakra-ui/react';
import './style.css';
import { Btn } from '../../Atoms/Btn';

export const MainPageHead = () => (
  <Box className="main-page-head" color="white" >
    <VStack gap="8px" mb="40px" mt="auto">
      <Heading as="h1" fontSize="32px">
        Your Perfect Style
      </Heading>
      <Text fontSize="18px">
        Discover our latest collections and styles
      </Text>
      <HStack mt="16px">
        <Btn
          content="For Him"
          transparent={false}
          width={212}
          color='white'
          href="/catalog"
        />
        <Btn
          content="For Her"
          transparent={false}
          width={212}
          color='white'
          href="/catalog"
        />
      </HStack>
    </VStack>
  </Box>
);
