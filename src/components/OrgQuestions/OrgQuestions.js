import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { Flex, Box, Heading, Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const OrgQuestions = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  // const [options, setOptions] = useState([]);
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [answer, setAnswer] = useState("");
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
 
  const handleOptions = (arr) => {
  arr.push(one);
  arr.push(two);
  arr.push(three);
  arr.push(four);
  }
  
  
  const handleSubmit = async () => {
  const arr = [];
  handleOptions(arr);
  console.log(arr);
    setLoading(true);
    try {
      const createQuest = await axios.patch(
        `https://evening-dusk-96253.herokuapp.com/api/quiz/question/${id}`,
        { question, options: arr, answer },
        { headers: {
          Authorization: token,
          "Content-Type": "application/json"
        } }
      );
      toast({
        title: "Thanks",
        description: "Saved Succesfully",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(createQuest)
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed",
        description: "Something Went Wrong",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
     setLoading(false);
     setQuestion('');
     setOne('');
     setTwo('');
     setThree('');
     setFour('');
     setAnswer('');

  };
 
  return (
    <>
      <OrgSidebar />
      <OrgNav />

      <Box
        
        ml="20rem"
        bg="white"
        w="70%"
        rounded="xl"
        h="85vh"
        pt="1rem"
        mt="1rem"
        boxShadow="2xl"
      >
        <Heading fontSize="2rem" ml="18rem">
          Create Questions Here
        </Heading>
        <FormControl mt=".5rem" ml="2rem">
          <FormLabel htmlFor="email">Question</FormLabel>
          <Input
            id="email"
            type="text"
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value);
            }}
            w="49.5rem"
            ml="2rem"
            name="question"
            placeholder="Type your question here"
          />
        </FormControl>
        <Flex mt=".5rem" ml="2rem">
          <Heading>A</Heading>
          <Input
            id="text"
            type="text"
            value={one}
            onChange={(e) => {
              setOne(e.target.value);
            }}
            w="50rem"
            name="A"
          />
        </Flex>
        <Flex mt=".5rem" ml="2rem">
          <Heading>B</Heading>
          <Input
            id="text"
            w="50rem"
            value={two}
            onChange={(e) => {
              setTwo(e.target.value);
            }}
            type="text"
            name="B"
          />
        </Flex>
        <Flex mt=".5rem" ml="2rem">
          <Heading>C</Heading>
          <Input
            w="50rem"
            id="text"
            type="text"
            value={three}
            onChange={(e) => {
              setThree(e.target.value);
            }}
            name="C"
          />
        </Flex>
        <Flex mt=".5rem" ml="2rem">
          <Heading>D</Heading>
          <Input
            id="text"
            w="50rem"
            type="text"
            value={four}
            onChange={(e) => {
              setFour(e.target.value);
            }}
            name="D"
          />
        </Flex>

        <Heading fontSize="1rem" mt=".5rem" ml="2rem">
          Answer
        </Heading>
        <Input
          id="text"
          mt=".5rem"
          ml="4rem"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          w="49.6rem"
          type="text"
          name="Answer"
        />
        {!loading ? (
          <Button color="blue" pl="auto" type="submit"  onClick={handleSubmit} ml="4rem" mt="1rem">
            Add More Questions+
          </Button>
        ) : (
          <Button color="blue" pl="auto" type="submit" ml="4rem" mt="1rem">
            <Flex columnGap="1rem" alignItems="center">
              <Spinner size="md" />
              Adding....
            </Flex>
          </Button>
        )}
        <Flex columnGap="7rem" justifyContent="center" mt="2rem">
          <Link to="/CreateQuiz">
            <Button w="6rem" colorScheme="blue">
              Back
            </Button>
          </Link>
          <Link to="/Publish">
            <Button w="6rem" colorScheme="blue">
              Next
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};
export default OrgQuestions;
