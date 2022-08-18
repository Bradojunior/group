import {
    Stack,
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
  } from "@chakra-ui/react";
  import { useMediaQuery } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  const Description = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
      const title = localStorage.getItem('title');
      const duration = localStorage.getItem('duration');
      const instruction = localStorage.getItem('instruction');
    return (
      <Stack h="100vh" w="100vw" overflow="hidden">
        <Box 
        h="80vh" 
        w="80vw" 
        boxShadow="xl" 
        ml={isNotSmallerScreen ? "8rem" : '2.5rem'}
        mt="4rem">
          <Heading textAlign="center" mt="3rem">
            Information About The Test
          </Heading>
          <FormControl my="1rem" ml={isNotSmallerScreen ? "13rem" : '1rem'}>
            <FormLabel>Quiz Title</FormLabel>
            <Input w={[280, 400, 600]}  type="text"  value={title}  />
          </FormControl>
          <FormControl my="1rem" my="1rem" ml={isNotSmallerScreen ? "13rem" : '1rem'}>
            <FormLabel>Quiz Intruction</FormLabel>
            <Textarea w={[280, 400, 600]} placeholder="Intructions of your quiz"  value={instruction} />
          </FormControl>
          <FormControl my="1rem" my="1rem" ml={isNotSmallerScreen ? "13rem" : '1rem'}>
            <FormLabel>Duration</FormLabel>
            <Input w={[280, 400, 600]} placeholder="Duration"  value={duration}/>
          </FormControl>
          <Flex justifyContent="center" columnGap="5rem" color="white" mt="2rem">
            <Link to="/">
              <Button bg="blue" _hover={{ color: "white", background: "blue" }}>
                Back
              </Button>
            </Link>
            <Link to="/Recorder2">
              <Button bg="blue" _hover={{ color: "white", background: "blue" }}>
                Start Quiz
              </Button>
            </Link>
          </Flex>
        </Box>
      </Stack>
    );
  };
  
  export default Description;
  