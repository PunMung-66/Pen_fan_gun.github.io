import {
    Box,
    ChakraProvider,
    VStack,
    HStack,
    Text,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { qaDataset } from './question_data';
import { QA } from './types';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Letter from '../assets/letter.png';
import { motion } from 'framer-motion';

const Question: FC = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectanswer, setSelectAnswer] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const nextQuestion = () => {
        setQuestionIndex(questionIndex + 1);
    };

    const prevQuestion = () => {
        setQuestionIndex(questionIndex - 1);
    };

    const modal_content = (qa: QA, selectanswer: number) => {
        let description;
        let image;

        if (selectanswer === 1) {
            description = qa.description;
            image = qa.image;
        }
        if (selectanswer === 2) {
            description = qa.description2;
            image = qa.image2;
        }
        return (
            <>
                <Image objectFit={'cover'} src={image} borderRadius="10px" />
                <Text>{description}</Text>
            </>
        );
    };

    const get_image_import = (image: string) => {
        return new URL(`../assets/${image}`, import.meta.url).href;
    }

    const box_qw = '300px';
    const box_qh = 'auto';
    const box_aw = '150px';
    const box_ah = '100px';
    const text_q = 'l';
    const text_a = 'l';
    const test_question_one = (qa: QA) => {
        return (
            <>
                <Box
                    width={box_qw}
                    height={box_qh}
                    background="white"
                    borderRadius="lg"
                    boxShadow="md"
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    p={5}
                >
                    <VStack spacing={7}>
                        <Image
                            objectFit={'cover'}
                            height={'200px'}
                            width={'200px'}
                            src={ get_image_import(qa.image_q)}
                            borderRadius="20px"
                            alt="Dan Abramov"
                        />
                        <Text fontSize={text_q}>{qa.question}</Text>
                    </VStack>
                </Box>
                <HStack>
                    <Box
                        width={box_aw}
                        height={box_ah}
                        background="white"
                        borderRadius="lg"
                        boxShadow="md"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        onClick={() => {
                            console.log('clicked 1');
                            setSelectAnswer(1);
                            onOpen();
                        }}
                    >
                        <Text fontSize={text_a}>{qa.answer}</Text>
                    </Box>
                    <Box
                        width={box_aw}
                        height={box_ah}
                        background="white"
                        borderRadius="lg"
                        boxShadow="md"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        onClick={() => {
                            console.log('clicked 2');
                            setSelectAnswer(2);
                            onOpen();
                        }}
                    >
                        <Text fontSize={text_a} align={'center'}>
                            {qa.answer2}
                        </Text>
                    </Box>
                </HStack>
            </>
        );
    };

    return (
        <ChakraProvider>
            {/* <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={'100%'}
                height="100vh"
                id = 'question'
            > */}
            <VStack
                spacing={6}
                height="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                id="question"
                backgroundImage={
                    "url('https://img.freepik.com/premium-vector/blank-lined-page-sheet-notes-with-ring-holes_102193-547.jpg?size=626&ext=jpg')"
                }
                backgroundSize={'cover'}
                backgroundPosition={'center'}
            >
                {test_question_one(qaDataset[questionIndex])}
                <HStack>
                    {questionIndex && (
                        <Button onClick={prevQuestion}> PREV </Button>
                    )}
                    {questionIndex < qaDataset.length - 1 && (
                        <Button onClick={nextQuestion}> NEXT </Button>
                    )}
                    {questionIndex === qaDataset.length - 1 && (
                         <Link to="/result">
                         <motion.div whileHover={{ scale: 1.2 }}>
                             <Button color="white" bg="pink">
                                 <Image
                                     src={Letter}
                                     alt="Logo"
                                     height="45px"
                                     borderRadius={5}
                                 />
                             </Button>
                         </motion.div>
                     </Link>
                    )}
                </HStack>
            </VStack>
            {/* </Box> */}

            {/* Modal */}
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    margin={5}
                >
                    <ModalHeader>
                        {selectanswer === qaDataset[questionIndex].correct
                            ? 'Correct!'
                            : 'Incorrect!'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={7} mb={3}>
                            {modal_content(
                                qaDataset[questionIndex],
                                selectanswer
                            )}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
};

export default Question;
