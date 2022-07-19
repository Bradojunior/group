import { Link } from "react-router-dom";
import FirstSidebar from "../FirstSidebar/FirstSidebar";
import {
  Box,
  Button,
  Input,
  Flex,
  Heading,
  VStack,
  Spinner,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import React from "react";

const PASSWORD_REGEX = /.{8,}/;
const style = { marginLeft: "-1.8rem" };

const Organization = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, actions) => {
    setLoading(true);
    try {
      const user = await axios.post(
        "https://arcane-bayou-79576.herokuapp.com/api/users/register/org",
        { ...values }
      );
      localStorage.setItem("orgname", user.data.orgname)
      setLoading(false)
      toast({
        title: "Account Created",
        description:
          "Your Account Have Been Created SuccessFully Thanks For Registering",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      localStorage.setItem("token", user.data.token);
      navigate("/OrgPage");
      formik.resetForm();
    } catch (err) {
      console.log(err);
      toast({
        title: "Sorry Acccount Can Not Be Created",
        description: "Organisation With This Email Already Exist",
        status: "success",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      //    setError(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      orgname: "",
      email: "",
      address: "",
      password: "",
      password2: "",
    },
    validationSchema: yup.object({
      orgname: yup
        .string()
        .min(3, "please enter your orgname")
        .required("Orgname is required"),
      email: yup
        .string()
        .email("Invalid Email")
        .required("please enter your email "),
      address: yup
        .string()
        .min(3, "Invalid address")
        .required("please enter your address"),
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
        pt="3rem"
        color="white"
      >
        <Heading>What are you registering as?</Heading>
        <Button width="20rem" mt="2rem">
          <Button
            width="15rem"
            bg="blue"
            _hover={{ background: "blue", color: "white" }}
          >
            Organization
          </Button>
        </Button>
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <div>
            <Input
              my="1rem"
              width="35rem"
              type="text"
              Id="text"
              name="orgname"
              placeholder="Organization Name"
              _placeholder={{ color: "white" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.orgname}
              className={
                formik.errors.orgname && formik.touched.orgname
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.orgname && formik.errors.orgname ? (
              <p className="red">{formik.errors.orgname}</p>
            ) : null}
          </div>
          <div>
            {" "}
            <Input
              my="1rem"
              width="35rem"
              type="text"
              id="text"
              name="email"
              placeholder="Email"
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
          <div>
            {" "}
            <Input
              my="1rem"
              width="35rem"
              type="text"
              id="text"
              placeholder="Address"
              _placeholder={{ color: "white" }}
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className={
                formik.errors.address && formik.touched.address
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.address && formik.errors.address ? (
              <p className="red">{formik.errors.address}</p>
            ) : null}
          </div>

          <Box>
            <InputGroup alignItems="center" size="md">
              <Input
                my="1rem"
                width="35rem"
                type="password"
                id="text"
                placeholder="password"
                type={show ? "text" : "password"}
                _placeholder={{ color: "white" }}
                name="password"
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
            <InputGroup alignItems="center" size="md">
              <Input
                my="1rem"
                width="35rem"
                type="password"
                id="text"
                name="password2"
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                _placeholder={{ color: "white" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password2}
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

          <Flex justifyContent="center" columnGap="5rem" mt="2rem">
            <Link to="/OrgLogin">
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
                type="submit"
                disabled={!formik.isValid}
                width="8rem"
                bg="blue"
                _hover={{ background: "blue", color: "white" }}
              >
                Submit
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!formik.isValid}
                width="8rem"
                bg="blue"
                _hover={{ background: "blue", color: "white" }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  columnGap="1rem"
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

export default Organization;
