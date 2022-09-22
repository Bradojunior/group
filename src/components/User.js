import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Flex,
  Heading,
  Text,
  VStack,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import FirstSidebar from "./FirstSidebar/FirstSidebar";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
// import { Usernameset, Username } from "../context/DetailContext";

const PASSWORD_REGEX = /.{8,}/;

const User = () => {
  // const usernameset = Usernameset();
  // const username = Username();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const user = await axios.post(
        "https://arcane-bayou-79576.herokuapp.com/api/users/register/user",
        { ...values }
      );

      setLoading(false);
      console.log(loading);
      toast({
        title: "Account Created",
        description:
          " Your Account Have Been Created SuccessFully Thanks For Registering",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
        navigate("/AdminPage");
      formik.resetForm();
      // usernameset(formik.values.username);

      const email = localStorage.getItem("email");
      if (email != null && email) {
        if (email !== user.data.email) {
          localStorage.setItem("email", user.data.email);
          localStorage.setItem("firstname", user.data.firstname);
          localStorage.setItem("password", user.data.password);
          localStorage.setItem("password2", user.data.password2);
          localStorage.setItem("surname", user.data.surname);
          localStorage.setItem("username", user.data.username);
        }
      } else {
        localStorage.setItem("email", user.data.email);
        localStorage.setItem("firstname", user.data.firstname);
        localStorage.setItem("password", user.data.password);
        localStorage.setItem("password2", user.data.password2);
        localStorage.setItem("surname", user.data.surname);
        localStorage.setItem("username", user.data.username);
      }
    } catch (err) {
      console.log(err);
      toast({
        title: "Sorry Acccount Can Not Be Created",
        description: "User With This Email Already Exist",
        status: "error",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      setError(err.response.data.message);
    }
  };

  const style = { marginLeft: "-1.8rem" };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .min(3, "please enter your  firstname")
        .required("Firstname is required"),
      surname: yup
        .string()
        .min(3, "please enter your surname")
        .required("Surname is required"),
      username: yup
        .string()
        .min(3, "please enter your username")
        .required("Username is required"),
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
      password2: yup
        .string()
        .required("please confirm your password")
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: yup
            .string()
            .oneOf([yup.ref("password")], "password does not match"),
        }),
    }),
    onSubmit,
  });

  return (
    <Flex>
      <FirstSidebar />
      <Box
        h="100vh"
        w="60%"
        bg="#042A37"
        justifyContent="center"
        textAlign="center"
        pt="1rem"
        color="white"
      >
        <Heading>What are you registering as?</Heading>
        <Button width="20rem" mt="1rem">
          <Button
            width="15rem"
            bg="blue"
            _hover={{ background: "blue", color: "white" }}
          >
            User
          </Button>
        </Button>
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <div>
            <Input
              name="firstname"
              text="text"
              my="1rem"
              width="35rem"
              type="text"
              Id="text"
              placeholder="firstname"
              _placeholder={{ color: "white" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
              className={
                formik.errors.firstname && formik.touched.firstname
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <p className="red">{formik.errors.firstname}</p>
            ) : null}
          </div>

          <div>
            <Input
              name="surname"
              my="1rem"
              width="35rem"
              type="text"
              id="text"
              placeholder="surname"
              _placeholder={{ color: "white" }}
              onChange={formik.handleChange}
              value={formik.values.surname}
              onBlur={formik.handleBlur}
              className={
                formik.errors.surname && formik.touched.surname
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.surname && formik.errors.surname ? (
              <p className="red">{formik.errors.surname}</p>
            ) : null}
          </div>

          <div>
            <Input
              name="username"
              my="1rem"
              width="35rem"
              type="text"
              id="text"
              placeholder="username"
              _placeholder={{ color: "white" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={
                formik.errors.username && formik.touched.username
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="red">{formik.errors.username}</p>
            ) : null}
          </div>

          <div>
            <Input
              name="email"
              type="email"
              my="1rem"
              width="35rem"
              id="email"
              placeholder="email"
              _placeholder={{ color: "white" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="red">{formik.errors.email}</p>
            ) : null}
          </div>

          <Box>
            <InputGroup>
              <Input
                name="password"
                type="password"
                my="1rem"
                width="35rem"
                id="text"
                placeholder="password"
                type={show ? "text" : "password"}
                _placeholder={{ color: "white" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  formik.errors.password && formik.touched.password
                    ? "input-error"
                    : ""
                }
              />
              <InputRightElement
                width="4.5rem"
                bg="teal"
                color="black"
                mt="1rem"
              >
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.password && formik.errors.password ? (
              <p className="red">{formik.errors.password}</p>
            ) : null}
          </Box>

          <Box>
            <InputGroup>
              <Input
                name="password2"
                my="1rem"
                width="35rem"
                type="password"
                id="text"
                type={show ? "text" : "password"}
                placeholder="confirm password"
                _placeholder={{ color: "white" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.touched.password2 && formik.values.password2}
                className={
                  formik.errors.password2 && formik.touched.password2
                    ? "input-error"
                    : ""
                }
              />
              <InputRightElement
                width="4.5rem"
                bg="teal"
                color="black"
                mt="1rem"
              >
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.password2 && formik.errors.password2 ? (
              <p className="red">{formik.errors.password2}</p>
            ) : null}
          </Box>

          <Flex columnGap="3rem" mt="2rem">
            <Link to="/Signin">
              <Button
                width="8rem"
                bg="blue"
                _hover={{ background: "blue", color: "white" }}
              >
                Back
              </Button>
            </Link>
            {!loading ? (
              <Button
                type="Submit"
                width="8rem"
                disabled={!formik.isValid}
                bg="blue"
                _hover={{ background: "blue", color: "white" }}
              >
                Submit
              </Button>
            ) : (
              <Button
                type="Submit"
                width="8rem"
                bg="blue"
                _hover={{ background: "blue", color: "white" }}
                value={loading}
              >
                  <Flex alignItems='center' columnGap='1rem' justifyContent='center'>
                <span>
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="md"
                  />
                </span>
                Submiting
                </Flex>
              </Button>
            )}
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default User;
