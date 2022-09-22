import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Spinner
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";


const SendMail = () => {
const dispatch = useDispatch()


    const toast = useToast();
  const [code, setCode] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');



  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://evening-dusk-96253.herokuapp.com/api/quiz/mail",
        { quizCode: code, time },
        {headers: {
            Authorization: token,
            "Content-type": "Application/json"
          } }
      );
      toast({
        title: "Success",
        description: "Mail Sent Succesfully",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      toast({
        title: "Not Sent",
        description: "Something Went Wrong",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
    setCode('');
    setTime('');
    setLoading(false);
  };
  return (
    <>
      <OrgSidebar />
      <OrgNav />
      <Box
        ml="25rem"
        bg="white"
        w="60%"
        h="55vh"
        boxShadow="2xl"
        mt="8rem"
        rounded="xl"
      >
        <Heading textAlign="center" pt="2rem">
          Send Mail To Testers
        </Heading>

        <FormControl mt="1rem" ml="8rem">
          <FormLabel>Quiz Code</FormLabel>
          <Input
            value={code}
            
            onChange={(e) => {
              setCode(e.target.value);
            }}
            name="quizCode"
            w="35rem"
            type="text"
            placeholder="Quiz Code"
          />
        </FormControl>
        <FormControl mt="1rem" ml="8rem">
          <FormLabel>Time</FormLabel>
          <Input
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            name="time"
            w="35rem"
            type="text"
            placeholder="Time and Date of the quiz"
          />
        </FormControl>
        {!loading 
        ? (<Button w="6rem" colorScheme="blue" ml="23rem" mt="3rem" onClick={handleSubmit} type="submit">
        Send
      </Button>)
      :
      (<Button w="8rem" colorScheme="blue" ml="23rem" mt="3rem" type="submit">
        <Flex  justifyContent="center" columnGap='1rem'>
        <Spinner size="md" />
        Sending..
      </Flex>
    </Button>)
        }
      </Box>
    </>
  );
};

export default SendMail;
