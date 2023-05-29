import React from 'react';
import {
  VStack,
  Heading,
  Divider,
} from '@chakra-ui/react';
import GetAPI3 from './GetAPI3';

const Hero = () => {
  return (
    <VStack
      spacing={6}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      maxWidth="800px"
      w="100%"
    >
      <Heading>API3 Sepolia Faucet</Heading>
      <GetAPI3/>
      <Divider />
    </VStack>
  );
};

export default Hero;

