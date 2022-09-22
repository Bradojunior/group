import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FcGoogle } from "react-icons/fc";
import {
  Flex,
  Box,
  Heading,
  ButtonGroup,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  Spacer,
  Text,
  FormControl,
  form,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PASSWORD_REGEX = /.{8,}/;
const style = { marginLeft: "-1.8rem" };

const Home = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post(
        "https://evening-dusk-96253.herokuapp.com/api/users/login/org",
        { ...values }
      );
      toast({
        title: "Thanks",
        description: "You Have Successfully Logged In",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      console.log(user);
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("orgname", user.data.data);
      navigate("/OrgPage");
      formik.resetForm();
    } catch (err) {
      console.log(err);
      setError(true);
      setErrormessage(err.response.data.isVerified);
      toast({
        title: "Login Failed",
        description: "Invalid Password or Email",
        status: "error",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid Email")
        .required("please enter your email address"),
      password: yup
        .string()
        .matches(
          PASSWORD_REGEX,
          "password must contain atleast min 8 characters"
        )
        .required("password is required"),
      remember: yup.boolean().oneOf([true]),
    }),
    onSubmit,
  });

  const Submit = async (values, actions) => {
    setLoading(true);
    try {
      const user = await axios.post(
        "https://arcane-bayou-79576.herokuapp.com/api/users/login/user",
        { ...values }
      );

      
      toast({
        title: "Thanks",
        description: "You Have Successfully Logged In",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      navigate("/adminPage");
      formik.resetForm();
      // usernameset(formik.values.username);
    } catch (err) {
      toast({
        title: "Login Failed",
        description: "Invalid Password or Email",
        status: "error",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  const formik1 = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid Email")
        .required("please enter your email address"),
      password: yup
        .string()
        .matches(
          PASSWORD_REGEX,
          "password must contain atleast min 8 characters"
        )
        .required("password is required"),
      remember: yup
        .boolean()
        .oneOf([true], "Please Agree To All Terms & Conditions")
        .required("Required"),
    }),
    Submit,
  });

  const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");

  const [active, setActive] = useState(true);

  return (
    <Flex  direction={{md:'column', lg:"row"}} width="100%" h="100vh">
      <Box
     
        width={{base:"100%", lg:"50%"}}
        backgroundSize="cover"
        bg="#042A37"
        overflowY={{lg:"hidden"}}
        overflow="hidden"
        overflowX="hidden"
      >
        <Flex
          color="white"
          width="full"
          align="center"
          height="100vh"
          overflowY="hidden"
          overflow="hidden"
          overflowX="hidden"
          bg="#042A37"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading mb="1rem" fontSize={["1rem","1rem","2rem"]}>
            What Are You Registering As?
          </Heading>
          <Button
            bg="transparent"
           
            border="1px solid teal"
            w={{base:"15rem", md:"20rem"}}
            _hover={{ background: "transparent" }}
          >
            <Flex bg="transparent" columnGap='3rem'>
              <Button
                onClick={() => setActive(true)}
                _hover={{ background: "teal", color: "white" }}
                // mx={{base:".5rem", md:"2rem"}}
                bg={active ? "teal" : "transparent"}
                hover="text-black"
              
              >
                Organization
              </Button>

              <Button
                onClick={() => setActive(false)}
                _hover={{ background: "teal", color: "white" }}
                // mx={{base:".5rem", md:"5rem"}}
                bg={!active ? "teal" : "transparent"}
              >
                User
              </Button>
            </Flex>
          </Button>
          {active ? (
            <Box>
              {error && <p className="potes">{errorMessage}</p>}
              <Box bg="#042A37" color="white" textAlign="center" mt="3rem">
                <Text fontSize={["20px", "20px", "30px"]}>
                  Login as an Organization
                </Text>
              </Box>
              <VStack as="form" onSubmit={formik.handleSubmit} color="white">
                <FormControl color="white" p="3" w={{base:'full', md:"500px"}}>
                  <FormLabel
                    fontSize={{ base: "15px", md: "24px", lg: "23px" }}
                  >
                    Email Address
                  </FormLabel>
                  <Input
                  
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={
                      formik.errors.email && formik.touched.email
                        ? "input-error"
                        : ""
                    }
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="blue">{formik.errors.email}</p>
                  ) : null}
                </FormControl>
                <FormControl color="white" p="3" w={{base:'full', md:"500px"}} >
                  <FormLabel
                    fontSize={{ base: "20px", md: "24px", lg: "23px" }}
                  >
                    Password
                  </FormLabel>

                  <Box>
                    <InputGroup>
                      <Input
                        
                        name="password"
                        type={show ? "text" : "password"}
                        placeholder="Enter your Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={
                          formik.errors.password && formik.touched.password
                            ? "input-error"
                            : ""
                        }
                      />
                      <InputRightElement width="4.5rem" bg="teal" color="black">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {formik.touched.password && formik.errors.password ? (
                      <p className="blue">{formik.errors.password}</p>
                    ) : null}
                  </Box>
                </FormControl>
                <Flex
                direction={{base:"column", md:"row"}}
                  isInline
                  justifyContent="space-between"
                  color="white"
                  py="1rem"
                  columnGap={{base:"2rem", md:"11rem"}}
                  rowGap='1rem'
                  
                >
                  <Box>
                    <Checkbox
                      type="checkbox"
                      name="remember"
                      fontSize={{ base: "10px", md: "40px", lg: "35px" }}
                      onBlur={formik.handleBlur}
                      value={formik.values.remember}
                      onChange={formik.handleChange}
                    >
                      Remember Me
                    </Checkbox>
                    {formik.touched.remember && formik.errors.remember ? (
                      <p className="blue">{formik.errors.remember}</p>
                    ) : null}
                  </Box>
                  <Box>
                    <Text
                      colorScheme="teal"
                      fontSize={{ base: "13px", md: "15px" }}
                    >
                      Forgot your password?
                    </Text>
                  </Box>
                </Flex>
                {!loading ? (
                  <Button
                    disabled={!formik.isValid}
                    type="submit"
                    mt="2rem"
                    width="full"
                    colorScheme="teal"
                    mt="3rem"
                    w={{base:"full", md:"500px"}}
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    disabled={!formik.isValid}
                    type="submit"
                    mt="2rem"
                    width="full"
                    colorScheme="teal"
                    mt="3rem"
                    w={[400, 600, 500]}
                  >
                    <Flex
                      alignItems="center"
                      columnGap="1rem"
                      justifyContent="center"
                    >
                      <span>
                        <Spinner
                          thickness="2px"
                          speed="0.65s"
                          emptyColor="gray.200"
                          color="blue.500"
                          size="md"
                        />
                      </span>
                      Logging In
                    </Flex>
                  </Button>
                )}
                <ButtonGroup gap="2" pt="1rem" pl={{base:"2rem", md:"12rem"}}>
                  <Heading
                    as="h6"
                    color="white"
                    fontSize={["17px", "15px", "25px"]}
                  >
                    Have an account?
                  </Heading>
                  <Link to="/Organization">
                    <Button size={{base:"sm", md:'lg'}} colorScheme="teal">Sign Up</Button>
                  </Link>
                </ButtonGroup>
              </VStack>
            </Box>
          ) : (
            <Box>
            {error && <p className="potes">{errorMessage}</p>}
            <Box bg="#042A37" color="white" textAlign="center" mt="3rem">
              <Text fontSize={["20px", "20px", "30px"]}>
                Login as a User
              </Text>
            </Box>
            <VStack as="form" Submit={formik.handleSubmit} color="white">
              <FormControl color="white" p="3" w={{base:'full', md:"500px"}}>
                <FormLabel
                  fontSize={{ base: "15px", md: "24px", lg: "23px" }}
                >
                  Email Address
                </FormLabel>
                <Input
                
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik1.handleChange}
                  onBlur={formik1.handleBlur}
                  value={formik1.values.email}
                  className={
                    formik1.errors.email && formik1.touched.email
                      ? "input-error"
                      : ""
                  }
                />
                {formik1.touched.email && formik1.errors.email ? (
                  <p className="blue">{formik1.errors.email}</p>
                ) : null}
              </FormControl>
              <FormControl color="white" p="3" w={{base:'full', md:"500px"}} >
                <FormLabel
                  fontSize={{ base: "20px", md: "24px", lg: "23px" }}
                >
                  Password
                </FormLabel>

                <Box>
                  <InputGroup>
                    <Input
                      
                      name="password"
                      type={show ? "text" : "password"}
                      placeholder="Enter your Password"
                      onChange={formik1.handleChange}
                      onBlur={formik1.handleBlur}
                      value={formik1.values.password}
                      className={
                        formik1.errors.password && formik1.touched.password
                          ? "input-error"
                          : ""
                      }
                    />
                    <InputRightElement width="4.5rem" bg="teal" color="black">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {formik1.touched.password && formik1.errors.password ? (
                    <p className="blue">{formik1.errors.password}</p>
                  ) : null}
                </Box>
              </FormControl>
              <Flex
              direction={{base:"column", md:"row"}}
                isInline
                justifyContent="space-between"
                color="white"
                py="1rem"
                columnGap={{base:"2rem", md:"11rem"}}
                rowGap='1rem'
                
              >
                <Box>
                  <Checkbox
                    type="checkbox"
                    name="remember"
                    fontSize={{ base: "10px", md: "40px", lg: "35px" }}
                    onBlur={formik1.handleBlur}
                    value={formik1.values.remember}
                    onChange={formik1.handleChange}
                  >
                    Remember Me
                  </Checkbox>
                  {formik1.touched.remember && formik1.errors.remember ? (
                    <p className="blue">{formik1.errors.remember}</p>
                  ) : null}
                </Box>
                <Box>
                  <Text
                    colorScheme="teal"
                    fontSize={{ base: "13px", md: "15px" }}
                  >
                    Forgot your password?
                  </Text>
                </Box>
              </Flex>
              {!loading ? (
                <Button
                  disabled={!formik1.isValid}
                  type="submit"
                  mt="2rem"
                  width="full"
                  colorScheme="teal"
                  mt="3rem"
                  w={{base:"full", md:"500px"}}
                >
                  Login
                </Button>
              ) : (
                <Button
                  disabled={!formik1.isValid}
                  type="submit"
                  mt="2rem"
                  width="full"
                  colorScheme="teal"
                  mt="3rem"
                  w={[400, 600, 500]}
                >
                  <Flex
                    alignItems="center"
                    columnGap="1rem"
                    justifyContent="center"
                  >
                    <span>
                      <Spinner
                        thickness="2px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="md"
                      />
                    </span>
                    Logging In
                  </Flex>
                </Button>
              )}
              <ButtonGroup gap="2" pt="1rem" pl={{base:"2rem", md:"12rem"}}>
                <Heading
                  as="h6"
                  color="white"
                  fontSize={["17px", "15px", "25px"]}
                >
                  Have an account?
                </Heading>
                <Link to="/Organization">
                  <Button size={{base:"sm", md:'lg'}} colorScheme="teal">Sign Up</Button>
                </Link>
              </ButtonGroup>
            </VStack>
          </Box>
          )}
        </Flex>
      </Box>

      <Box
        bg="rgb(10, 10, 49)"
        height="100vh"
        width="50%"
        color="white"
        display={{base:"none", lg:"block"}}
        
      >
        <img src="images/people.png" height="350rem" display='hidden' width="550rem" alt="" />
        <Heading m="3">Quizzy</Heading>
        <Heading m="3">Landing Page Ui Design</Heading>
        <Text m="3" as="p" maxW='lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tempore suscipit doloribus magnam aliquid expedita numquam officia
          impedit sint asperiores ad, facilis recusandae, quisquam
          similique  perferendis ratione sed architecto. Excepturi,
          tempora.
        </Text>
      </Box>
    </Flex>
  );
};

export default Home;
