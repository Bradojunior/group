import { useMediaQuery } from "@chakra-ui/react";
import { Box, Button, Text, Stack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const QuizComplete = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
  const message = localStorage.getItem("message");
  const style = { color: "blue" };
  return (
    <>
      <Stack
        ml={isNotSmallerScreen ? "11rem" : "1.7rem"}
        boxShadow="2xl"
        rounded="xl"
        w={isNotSmallerScreen ? "155vh" : "40vh"}
        mt="3rem"
        h={isNotSmallerScreen ? "85vh" : "88vh"}
        overflow='hidden'
      >
        <Box textAlign="center" mt="5rem">
          <Heading fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}>Test Completed</Heading>
          <Heading fontSize={{ base: "2rem", md: "3.5rem", lg: "1.2rem" }} my={isNotSmallerScreen ? "3rem" : "2rem"} textAlign='center' >
            You Have Successfully Completed the Test
          </Heading>
          <Heading>{message}</Heading>

          <Link to="/">
            <Button
              h="4rem"
              mt="6rem"
              w="10rem"
              color="white"
              bg="#444ADD"
              _hover={{ background: "#444ADD", color: "white" }}
            >
              Done
            </Button>
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default QuizComplete;
