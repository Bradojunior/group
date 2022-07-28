import {
  Stack,
  Flex,
  Box,
  Text,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Spinner,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Description = () => {
  return (
    <Stack h="100vh" w="100vw" overflow="hidden">
      <Box h="80vh" w="80vw" boxShadow="xl" ml="8rem" mt="4rem">
        <Heading textAlign="center" mt="3rem">
          Information About The Test
        </Heading>
        <FormControl my="1rem" ml="13rem">
          <FormLabel>Quiz Title</FormLabel>
          <Input type="text" w="40rem" />
        </FormControl>
        <FormControl my="1rem" ml="13rem">
          <FormLabel>Quiz Intruction</FormLabel>
          <Textarea placeholder="Intructions of your quiz" w="40rem" />
        </FormControl>
        <FormControl my="1rem" ml="13rem">
          <FormLabel>Duration</FormLabel>
          <Input placeholder="Duration" w="40rem" />
        </FormControl>
        <Flex justifyContent="center" columnGap="5rem" color="white" mt="2rem">
          <Link to="/">
            <Button bg="blue" _hover={{ color: "white", background: "blue" }}>
              Back
            </Button>
          </Link>
          <Link to="/Recorder">
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
