import React from 'react';
import {
    Box,
    ChakraProvider,
    VStack,
    Text,
    Image,
    HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import cover_home from '../assets/cover.jpg';
import Letter from '../assets/letter.png';

const Home: React.FC = () => {
    return (
        <ChakraProvider>
            <Box
                p={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                background="gray.50"
                backgroundImage={
                    "url('https://img.freepik.com/premium-vector/ripped-beige-paper-background-vector_53876-164900.jpg')"
                }
                backgroundSize={'cover'}
                backgroundPosition={'center'}
                id="home"
            >
                <VStack spacing={6} opacity="90%">
                    <Box
                        width="200px"
                        height="300px"
                        background="white"
                        borderRadius="lg"
                        boxShadow="md"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        p={5}
                    >
                        <VStack spacing={4}>
                            <Image
                                src={cover_home}
                                alt="Logo"
                                height="200px"
                                borderRadius={5}
                            />
                            <HStack>
                                <Text as="b" fontSize="2xl" color="#D4B587">
                                    #เกมขี้จุ๊
                                </Text>
                                <Image
                                    src={Letter}
                                    alt="Logo"
                                    height="40px"
                                    borderRadius={5}
                                />
                            </HStack>
                        </VStack>
                    </Box>
                    <Link to="/question">
                        <Box
                            width="200px"
                            height="100px"
                            background="white"
                            borderRadius="lg"
                            boxShadow="md"
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Text fontSize="2xl"> PLAY </Text>
                        </Box>
                    </Link>
                </VStack>
            </Box>
        </ChakraProvider>
    );
};

export default Home;
