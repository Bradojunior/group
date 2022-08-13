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
      navigate("/Description2")
      console.log(res);
      localStorage.setItem("quizCode", res.data.data.quizCode)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("duration", res.data.data.duration)
      localStorage.setItem("instruction", res.data.data.instruction)
      localStorage.setItem("title", res.data.data.title)
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
        pt="5rem"
        overflowX="hidden"
        alignContent="center"
        justifyContent="center"
      >
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          columnGap="3rem"
        >
          <Image
            h="30rem"
            w="40rem"
            w={[300, 400, 600]}
            alignSelf="center"
            src="images/people.png"
          />
          <Image
            ml={isNotSmallerScreen ? "null" : "3rem"}
            h="25rem"
            mt="3rem"
            w="35rem"
            src="images/circle.png"
            w={[300, 400, 600]}
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
            <Heading fontSize="3rem">Quizzy</Heading>
            <Heading
              as="h3"
              fontSize={{ base: "22px", md: "40px", lg: "35px" }}
            >
              Unlocking Knowledge at the <br></br>speed of thought
            </Heading>
            <Text>
              {" "}
              Quizzy app is an Necessitatibus magnam qui totam natus. Eum porro{" "}
              <br></br>hic temporibus ut laudantium, sunt recusandae nam{" "}
              <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br>{" "}
              inventore quia!
            </Text>
          </Box>
          <Box mb={isNotSmallerScreen ? "null" : "2rem"}>
            <Heading
              as="h6"
              color="white"
              fontSize="2rem"
              fontSize={{ base: "`20px", md: "40px", lg: "30px" }}
            >
              Sign in above or type profile details here
            </Heading>
            <Input
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
              {error && <p className='potes'>{message}</p>}
            <Box my="2rem">
              <Input
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
            <Box ml="11rem">
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
                  <Flex justifyContent="center" columnGap="1rem">
                    <Spinner size="md" />
                    Please Wait...
                  </Flex>
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
