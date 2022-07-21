import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import TimeField from "react-simple-timefield";
const CreateQuiz = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [time, setTime] = useState("00:01:00.000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);


  const [errMessage, setErrMessage] = useState(null)


  const [instruction, setInstruction] = useState("");
  const onTimeChange = (event, value) => {
    const newTime = value.replace(/-/g, ":");
    const timeSeconds = newTime.padEnd(8, time.substr(5, 3));
    setTime(timeSeconds);
  };
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://evening-dusk-96253.herokuapp.com/api/quiz',
        { title: name, instruction, testers: email, duration: time },
        {headers: {
          Authorization: token,
          'Content-Type': 'application/json'
        } }
      );
      toast({
        title: "Thanks",
        description: "Submitted Succesfully",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      
      console.log(response);
     localStorage.setItem("id", response.data.data._id)
     navigate("/OrgQuestions");
     
    } catch (err) {
      console.log(err);
      console.log(err.response.data.instruction, err.response.data.title)
      setErrMessage(err.response.data.title)
      setMessage(err.response.data.instruction)
      setError(true)
       toast({
      title: "Failed",
      description: "Something Went Wrong Please Try Again",
      status: "error",
      duration: 5000,
      position: "top",
      isClosable: true,
    });
    }
   
    setLoading(false);
  };
  return (
    <>
      <OrgSidebar />
      <OrgNav />
      <Box
        rounded="xl"
        ml="20rem"
        bg="white"
        w="70%"
        h="85vh"
        mt="1rem"
        boxShadow="2xl"
      >
        <Heading fontSize="2rem" ml="20rem" pt="1rem">
          Basic Informations
        </Heading>

        <FormControl mt="1rem" ml="4rem">
          <FormLabel htmlFor="email">Quiz Name</FormLabel>
          <Input
            id="email"
            w="50rem"
            type="text"
            name="title"
            value={name}
            placeholder="E.g Sample Quiz"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          {error && <p className='port'>{errMessage}</p>}
          
        </FormControl>
        <FormLabel mt="1rem" htmlFor="email" ml="4rem">
          Instructions
        </FormLabel>
        <Textarea
          ml="4rem"
          w="50rem"
          name="instruction"
          value={instruction}
          placeholder="Quiz Instructions"
          onChange={(event) => {
            setInstruction(event.target.value);
          }}
        />
        {error && <p className='pot'>{message}</p>}
        <FormControl mt="1rem" ml="4rem">
          <FormLabel htmlFor="email">Add Testers</FormLabel>
          <Input
            id="email"
            w="50rem"
            type="text"
            name="testers"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Testers Email should be separated by comma e.g @gmail.com, @gmail.com"
          />
        </FormControl>
        <Box ml="4rem">
          <Heading fontSize="1.5rem" mt="1rem">
            Duration
          </Heading>

          <TimeField
            showSeconds
            value={time}
            name="duration"
            onChange={onTimeChange}
            style={{
              border: "1px solid #666",
              fontSize: 30,
              width: 130,
              padding: "1px 1px",
              color: "#333",
              borderRadius: 3,
            }}
          />
        </Box>
        <Flex  mt="2rem" ml="22rem">
          {!loading ? (
            <Button
              w="8rem"
              colorScheme="blue"
              mt="1rem"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </Button>
          ) : (
            <Button
              w="8rem"
              colorScheme="blue"
              mt="1rem"
              type="submit"
              onClick={handleSubmit}
            >
              <Flex alignItems="center" columnGap="1rem">
                <Spinner size="md" />
                Submiting
              </Flex>
            </Button>
          )}

        </Flex>
      </Box>
    </>
  );
};
export default CreateQuiz;
