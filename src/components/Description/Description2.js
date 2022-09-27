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
  import {Detailscon } from '../../context/DetailContext'
  import { useSelector } from "react-redux";
  const Description = () => {

// const {postDetails} = useSelector((store) => store.testDetail)
// console.log(postDetails)

    const testDetails = Detailscon()
    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
      const title = localStorage.getItem('title');
      const duration = localStorage.getItem('duration');
      const instruction = localStorage.getItem('instruction');
    return (
      <Stack mx="auto" h="100vh" w="100vw" overflow="hidden" alignItems='center' justifyContent='center' >
        <Box 
        mx="auto"
        h={{base:"auto", md:"80vh"}} 
        w="80vw" 
        boxShadow="xl" 
        mt={{base:"1rem", md:"4rem"}}
        textAlign="center"
        >
          <Heading fontSize={["1rem", "1rem", "2rem", "2.5rem"]} textAlign="center" mt={[["0", "2rem","3rem"]]}>
            Information About The Test
          </Heading>
          <Box as="form"  px={[".5rem", "2rem", "4rem", "16rem"]} >
          <FormControl my="1rem" >
            <FormLabel>Quiz Title</FormLabel>
            <Input w={{base:"full", lg:"35rem"}}  type="text"   value={testDetails.title}  />
          </FormControl>
          <FormControl my="1rem" >
            <FormLabel>Quiz Intruction</FormLabel>
            <Textarea  w={{base:"full", lg:"35rem"}}  placeholder="Intructions of your quiz"  value={testDetails.instruction} />
          </FormControl>
          <FormControl my="1rem" >
            <FormLabel>Duration</FormLabel>
            <Input  w={{base:"full", lg:"35rem"}}  placeholder="Duration"  value={testDetails.duration}/>
          </FormControl>
          </Box>
          <Flex direction={["column", "row"]} mx={["2rem", "0"]} justifyContent="center" pb='2rem' rowGap='1rem' columnGap="5rem" color="white" mt={{base:".5rem", md:"2rem"}}>
            <Link to="/">
              <Button w={["full", "7rem"]} bg="blue" _hover={{ color: "white", background: "blue" }}>
                Back
              </Button>
            </Link>
            <Link to="/Recorder2">
              <Button w={["full", "7rem"]}  bg="blue" _hover={{ color: "white", background: "blue" }}>
                Start Quiz
              </Button>
            </Link>
          </Flex>
        
        </Box>
      </Stack>
    );
  };
  
  export default Description;
  