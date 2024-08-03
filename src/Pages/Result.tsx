import React from 'react';
import { useState, useEffect } from 'react';
import {
    Box,
    ChakraProvider,
    VStack,
    Text,
    HStack,
    Button
} from '@chakra-ui/react';
import { confessdata } from './confess_data';
import { motion } from 'framer-motion';
import Song from '../sounds/smile_scrubb.mp3';

const MotionBox = motion(Box);

const Result: React.FC = () => {
    useEffect(() => {
        const audio = new Audio(Song);
        audio.loop = true;
    
        // Play audio when component mounts
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
    
        // Clean up the audio on component unmount
        return () => {
          audio.pause();
          audio.currentTime = 0;
        };
      }, []);

    const [confessIndex, setConfessIndex] = useState(0);

    const nextConfess = () => {
        setConfessIndex((prevIndex) => prevIndex + 1);
        console.log(confessIndex);
    };

    const Yes_No = (state: number) => {
        if (state === confessdata.length - 1)
            return (
                <HStack>
                    <Button> Yes </Button>
                    <Button> Yes </Button>
                </HStack>
            );
    };
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
                    "url('https://media1.giphy.com/media/ozf26DV8FqaCpkYt6n/giphy.gif?cid=790b7611iziafa32gt4f67s8vwkk4f7rph6cvabcnwhr3da5&ep=v1_gifs_search&rid=giphy.gif&ct=g')"
                }
                backgroundPosition={'center'}
                id="home"
            >
                <VStack spacing={6}>
                    {/* <iframe
                        style={{ borderRadius: '10px' }}
                        width="0"
                        height="0"
                        src="https://www.youtube.com/embed/B6CLl7vur8I?si=Sd4UFScVoUXD0ctt&autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe> */}
                    <MotionBox
                        width="300px"
                        height="150px"
                        background="white"
                        borderRadius="lg"
                        boxShadow="md"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        p={5}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 2 }}
                        key={confessIndex}
                        onClick={nextConfess}
                    >
                        {confessIndex <= confessdata.length - 1 && (
                            <VStack spacing={4}>
                                <Text as="b" fontSize="2xl" color="#D4B587">
                                    {confessdata[confessIndex].sentence}
                                </Text>
                                {Yes_No(confessIndex)}
                            </VStack>
                        )}
                    </MotionBox>
                </VStack>
            </Box>
        </ChakraProvider>
    );
};

export default Result;
