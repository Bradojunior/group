import { BsFillArrowRightSquareFill } from "react-icons/bs";
import First from "../First/First";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Spinner,
  Input,
  Button,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
  const [isNotMediumSreen] = useMediaQuery("(min-width:850px)");

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://evening-dusk-96253.herokuapp.com/api/quiz/verify",
        { quizCode: code, email }
      );
      navigate("/Description2");
      console.log(res);
      localStorage.setItem("quizCode", res.data.data.quizCode);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("duration", res.data.data.duration);
      localStorage.setItem("instruction", res.data.data.instruction);
      localStorage.setItem("title", res.data.data.title);
    } catch (err) {
      console.log(err);
      setError(true);
      setMessage(err.response.data.message);
    }
    setLoading(false);
  };
  return (
    <>
      <First />
      <Stack
        bg="rgb(46, 46, 78)"
        h="auto"
        w="100%"
        pt={isNotSmallerScreen ? "5rem" : null}
        overflowX="hidden"
        alignContent="center"
        justifyContent="center"
      >
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          justifyContent={isNotSmallerScreen ? "center" : null}
          alignItems="center"
        >
          <Image
            h="30rem"
            w="40rem"
            w={[380, 400, 600]}
            alignSelf="center"
            src="images/people.png"
          />
          <Image
            ml={isNotSmallerScreen ? "3rem" : "1rem"}
            h="25rem"
            mt="3rem"
            w="35rem"
            alignSelf="center"
            justifyContent="center"
            src="images/circle.png"
            w={[380, 400, 600]}
          />
        </Flex>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          columnGap="10rem"
        >
          <Box
            color="white"
            ml={isNotSmallerScreen ? "4rem" : "null"}
            mb={isNotSmallerScreen ? "null" : "2rem"}
          >
            <Heading
              textAlign={isNotSmallerScreen ? null : "center"}
              fontSize={{ base: "4rem", md: "40px", lg: "5rem" }}
            >
              Quizzy
            </Heading>
            <Heading
              as="h3"
              fontSize={{ base: "1.7rem", md: "40px", lg: "2rem" }}
              textAlign={isNotSmallerScreen ? null : "center"}
            >
              Unlocking Knowledge at the <br></br>speed of thought
            </Heading>
            <Text
              flexWrap={isNotSmallerScreen ? null : "wrap"}
              textAlign={isNotSmallerScreen ? 'center' : "center"}
              fontSize={{ base: "1.2rem", md: "40px", lg: "1.3rem" }}
            >
              Quizzy app is an Necessitatibus magnam qui totam natus. Eum porro
              hic temporibus ut laudantium, sunt recusandae nam incidunt rem
              aperiam, tempora, repellat commodi inventore quia!
            </Text>
          </Box>
          <Box 
          mb={isNotSmallerScreen ? "null" : "2rem"}
          mr={isNotSmallerScreen ? "5rem" : null}
          >
            <Heading
              as="h6"
              color="white"
              textAlign={isNotSmallerScreen ? null : "center"}
              mb={isNotSmallerScreen ? "1rem" : null}
              ml={isNotSmallerScreen ? '4rem' : null}
              fontSize={{ base: "2rem", md: "40px", lg: "30px" }}
            >
              Input Your Details Here
            </Heading>
            <Input
              ml={isNotSmallerScreen ? null : "2.8rem"}
              mt={isNotSmallerScreen ? null : "1rem"}
              w={[380, 400, 600]}
              type="text"
              color="white"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              placeholder="Input Your Email Address"
              w="30rem"
              w={[300, 600, 500]}
            />
            {error && <p className="potes">{message}</p>}
            <Box my="2rem">
              <Input
                ml={isNotSmallerScreen ? null : "2.8rem"}
                
                type="text"
                color="white"
                name="quizCode"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                placeholder="Quiz Code"
                w="30rem"
                w={[300, 600, 500]}
              />
            </Box>
            <Box ml={isNotSmallerScreen ? "11rem" : "10rem"}>
              {!loading ? (
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  bg="blue"
                  color="white"
                  _hover={{ color: "white", background: "blue" }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  bg="blue"
                  color="white"
                  _hover={{ color: "white", background: "blue" }}
                >
                  <Spinner size="md" />
                </Button>
              )}
            </Box>
          </Box>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};
export default Home;
