import { BsFillArrowRightSquareFill } from "react-icons/bs";
import First from "../First/First";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { fetchDetails } from "../../features/testDetails/testDetailSlice";
// import {SetDetail} from '../../context/DetailContext'
import { Detailscon, SetDetailscon } from "../../context/DetailContext";

const Home = () => {
  // const { isLoading, errorMessage } = useSelector((state) => state.testDetail);
  // console.log(errorMessage);
  let userDetails = Detailscon();
  let SetDetailscons = SetDetailscon();

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
      SetDetailscons((details) => {
        return {
          code: res.data.data.quizCode,
          email: res.data.data.email,
          duration: res.data.data.duration,
          instruction: res.data.data.instruction,
          title: res.data.data.title,
        };
      });
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
        pt={["2rem", "2rem", "3rem", "5rem"]}
        overflowX="hidden"
        alignContent="center"
        justifyContent="center"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "null" }}
          alignItems="center"
        >
          <Image
            h={["15rem", "30rem", "27rem", "30rem"]}
            w={["20rem", "40rem", "30rem", "40rem"]}
            src="images/people.png"
          />
          <Image
            h={["13rem", "30rem", "27rem", "30rem"]}
            w={["50rem", "40rem", "30rem", "40rem"]}
            mt={{md:"3rem"}}
            ml={["1.5rem", "0"]}
            src="images/circle.png"
          />
        </Flex>
        <Flex
          direction={["column", "coolumn", "row"]}
          // mx={{base:"auto"}}
          justifyContent="center"
          py={{ md: "3rem" }}
          columnGap={{ md: "2rem", lg: "8rem" }}
        >
          <Box
            color="white"
            ml={{ md: "2rem" }}
            textAlign={{ base: "center", md: "center", lg: "left" }}
            px={{ base: "1rem", md: "0" }}
          >
            <Heading
              fontSize={["2rem", "5rem", "4rem", "5rem"]}
              textAlign={{ md: "left" }}
            >
              Quizzy
            </Heading>

            <Heading
              as="h3"
              maxW={["sm", "lg", "sm"]}
              textAlign={{ base: "left" }}
              fontSize={["1rem", "2rem", "1.6rem", "2rem"]}
            >
              Unlocking Knowledge at the speed of thought
            </Heading>
            <Text maxW={["lg", "lg", "sm"]} textAlign={{base:"left", md:"left"}}>
              Quizzy app is an Necessitatibus magnam qui totam natus. Eum porro
              hic temporibus ut laudantium, sunt recusandae nam incidunt rem
              aperiam, tempora, repellat commodi inventore quia!
            </Text>
          </Box>
          <Box
            justifyContent={{ base: "center" }}
            py={{ base: "3rem", md: "0" }}
            px={["1rem", "7rem", "0"]}
          >
            <Heading
              as="h6"
              color="white"
              mb="1rem"
              textAlign={{ base: "center", md: "left" }}
              fontSize={["1rem", "2rem", "1.6rem", "2.5rem"]}
            >
              Input Your Details Here
            </Heading>
            <Input
              justifyContent={{ base: "center" }}
              alignItems={{ base: "center" }}
              mx={{ base: "auto", md: "0" }}
              type="text"
              color="white"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              placeholder="Input Your Email Address"
              w={{ base: "full", md: "20rem", lg: "30rem" }}
            />
            {message && <p className="potes">{message}</p>}

            <Box my={["1rem", "1rem", "1.5rem", "2rem"]}>
              <Input
                type="text"
                color="white"
                name="quizCode"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                placeholder="Quiz Code"
                w={{ base: "full", md: "20rem", lg: "30rem" }}
              />
            </Box>
            <Box ml={["null", "0", "7rem", "11rem"]} px={{ base: "auto" }}>
              {loading ? (
                <Button
                  w={{ base: "full", md: "5rem" }}
                  type="submit"
                  onClick={handleSubmit}
                  // onClick={() => dispatch(fetchDetails({ code, email }))}
                  bg="blue"
                  color="white"
                  _hover={{ color: "white", background: "blue" }}
                >
                  <Flex columnGap="1rem">
                    <Spinner size="md" />
                    <Text>Wait..</Text>
                  </Flex>
                </Button>
              ) : (
                <Button
                  w={{ base: "full", md: "5rem" }}
                  type="submit"
                  onClick={handleSubmit}
                  // onClick={() =>
                  //   dispatch(fetchDetails({ code, email })).then(() => {
                  //     navigate("/Description2");
                  //   })
                  // }
                  bg="blue"
                  color="white"
                  _hover={{ color: "white", background: "blue" }}
                >
                  Submit
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
