import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react"
import axios from "axios";
import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const Publish = () => {
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef()
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [duration, setTeDuration] = useState("");
  const [tester, setTTesters] = useState("");
  const [code, setTCode] = useState("");
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://evening-dusk-96253.herokuapp.com/api/quiz/set/${id}`,
          {
            headers: {
              Authorization: token,
              "Content-type": "Application/json",
            },
          }
        );
        setTitle(res.data.data.title);
        setQuestion(res.data.data.questions);
        setTeDuration(res.data.data.duration);
        setTTesters(res.data.data.testers);
        setTCode(res.data.data.quizCode);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <OrgSidebar />
      <OrgNav />

      <Box
        ml="20rem"
        bg="white"
        w="71%"
        h="83vh"
        boxShadow="2xl"
        mt="2rem"
        rounded="xl"
      >
        <Heading fontSize="2rem" ml="19rem" >
          Summary of test created
        </Heading>
        <FormControl mt="1rem" ml="4rem">
          <FormLabel htmlFor="email">Tittle</FormLabel>
          <Input
            w="50rem"
            value={title}
            type="text"
            placeholder="Title of your quiz"
          />
        </FormControl>
        <FormControl mt="1rem" ml="4rem">
          <FormLabel htmlFor="email">Questions</FormLabel>
          <Input
            type="text"
            value={question}
            w="50rem"
            placeholder="60 Questions"
          />
        </FormControl>
        <FormControl mt="1rem" ml="4rem">
          <FormLabel>Duration</FormLabel>
          <Input
            w="50rem"
            type="text"
            value={duration}
            placeholder="Quiz Last for 45min"
          />
        </FormControl>
        <FormControl mt="1rem" ml="4rem">
          <FormLabel htmlFor="email">Added Testers</FormLabel>
          <Input
            id="email"
            type="email"
            value={tester}
            w="50rem"
            placeholder="Email of added testers"
          />
        </FormControl>
        <FormControl mt="1rem" ml="4rem">
          <FormLabel >Quiz Code</FormLabel>
          <Input
          type='text'
            w="50rem"
            value={code}
            placeholder="Code of the test"
          />
        </FormControl>
        <Flex columnGap="10rem" justifyContent="center" mt='1rem' >
          <Link to="/OrgQuestions">
            <Button w="6rem" colorScheme="blue">
              Back
            </Button>
          </Link>
          <Link to="#">
            <Button w="6rem" colorScheme="blue" onClick={onOpen}>
              Publish
            </Button>
            <AlertDialog
              motionPreset="slideInBottom"
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader>Publish Quiz?</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  Are you sure you want to publish this  test?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    No
                  </Button>
                  <Link to="/CreateQuiz">
                    <Button colorScheme="red" ml={3}>
                      Yes
                    </Button>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Link>
        </Flex>
      </Box>
    </>
  );
};
export default Publish;

//const [data, setData] = useState("");

//useEffect(() => {
//const fetchData = async () => {
//const res = await axios.get("url");
//console.log(res);
//setData(res);
// }
// fetchData();
// }, [])
