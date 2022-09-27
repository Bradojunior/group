import { useMediaQuery } from "@chakra-ui/react";
import { Box, Button, Text, Stack, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const QuizComplete = () => {
  const message = localStorage.getItem("message");
  const style = { color: "blue" };
  return (
    <Stack
      mx="auto"
      h="100vh"
      w="100vw"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        mx="auto"
        h={{ base: "50vh", md: "80vh" }}
        w="80vw"
        boxShadow="xl"
        mt={{ base: "1rem", md: "4rem" }}
        direction='column'
        alignItems='center'
        justifyContent='center'
        
      >
        <Heading fontSize={["1rem", "1rem", "2rem", "2.5rem"]}>
          Test Completed
        </Heading>
        <Heading
          fontSize={["1rem", "1rem", "2rem", "2rem"]}
          my={{ base: "1rem", md: "2rem" }}
          textAlign="center"
        >
          You Have Successfully Completed the Test
        </Heading>
        <Heading
        maxW='sm'
          fontSize={["1rem", "1rem", "2rem", "2.5rem"]}
          my={{ base: "1rem", md: "2rem" }}
          textAlign='center'
        >
          {message}
        </Heading>

        <Link to="/">
          <Button
           
            mt={{base:"3rem" , md:"6rem"}}
            w={{base:"5rem", md:"10rem"}}
            color="white"
            bg="#444ADD"
            my={{base:"3rem", md:"0"}}
            _hover={{ background: "#444ADD", color: "white" }}
          >
            Done
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
};

export default QuizComplete;
