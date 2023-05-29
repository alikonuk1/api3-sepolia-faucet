import React, { useState } from 'react';
import { ethers } from 'ethers'
import {
  VStack,
  Select,
  Input,
  Button,
} from '@chakra-ui/react';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { ABI, CONTRACT_ADDRESS } from '../data/abi';

const GetAPI3 = () => {
    const [receiver, setReceiver] = useState('');

    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'mint',
        args: [receiver, ethers.utils.parseEther('100000')],
        overrides: {
            gasLimit: 300000,
        },
    })

    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

  return (
    <VStack spacing={4} w="100%">
    <Input
      placeholder="Address to receive API3 tokens"
      variant="outline"
      size="md"
      value={receiver}
      onChange={(e) => setReceiver(e.target.value)}
    />
    <Button
      bgColor="black"
      borderColor="gray.500"
      borderWidth="1px"
      color="white"
      size="md"
      disabled={!write || isLoading} 
      onClick={() => {write?.()}}>{isLoading ? 'Sending...' : 'Get Sepolia API3'}
    </Button>
    </VStack>
  );
};

export default GetAPI3;