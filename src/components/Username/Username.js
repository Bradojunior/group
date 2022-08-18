import Sidebar from "../Sidebar/Sidebar";
import PieNav from "../PieNav/PieNav";
import { IoMdContact } from "react-icons/io";
import {
  Stack,
  Flex,
  Box,
  Text,
  Image,
  Heading,
  form,
  AvatarBadge,
  VStack,
  Avatar,
  InputRightElement,
  InputGroup,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { FcOldTimeCamera } from "react-icons/fc";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const Username = () => {
  const [updateuser, setupdateuser] = useState(true);
  const [username, setusername] = useState(() => {
    if (!localStorage.getItem("username")) {
      localStorage.setItem("username", "Enter your username");
      return localStorage.getItem("username");
    } else {
      return localStorage.getItem("username");
    }
  });
  const [updatefirst, setupdatefirst] = useState(true);
  const [firstname, setFirstname] = useState(() => {
    if (!localStorage.getItem("firstname")) {
      localStorage.setItem("firstname", "Enter your firstname");
      return localStorage.getItem("firstname");
    } else {
      return localStorage.getItem("firstname");
    }
  });

  const [updateemail, setupdateemail] = useState(true);
  const [email, setEmail] = useState(() => {
    if (!localStorage.getItem("email")) {
      localStorage.setItem("email", "Enter your email");
      return localStorage.getItem("email");
    } else {
      return localStorage.getItem("email");
    }
  });

  const [updatepassword, setupdatepassword] = useState(true);
  const [password, setPassword] = useState(() => {
    if (!localStorage.getItem("pass")) {
      localStorage.setItem("pass", "Enter your password");
      return localStorage.getItem("pass");
    } else {
      return localStorage.getItem("pass");
    }
  });

  const [updatepassword2, setupdatepassword2] = useState(true);
  const [password2, setPassword2] = useState(() => {
    if (!localStorage.getItem("password2")) {
      localStorage.setItem("password2", "Enter your password");
      return localStorage.getItem("password2");
    } else {
      return localStorage.getItem("password2");
    }
  });

  const style = { color: "white" };
  const style1 = {
    position: "absolute",
    marginTop: "3.5rem",
    marginLeft: "7rem",
  };
  const PASSWORD_REGEX = /.{8,}/;

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Sidebar />
      <PieNav />
      <Stack ml="25rem">
        <Box ml="15rem">
          <Avatar size="2xl" bg="green.500" src="images/Brado2.jpg">
            <FcOldTimeCamera style={style1} size={30} />
          </Avatar>
          <Text fontSize="1.5rem">Profile Picture</Text>
        </Box>
        <form pt="1rem">
          <Box>
            <InputGroup>
              <Input
                width="35rem"
                focusBorderColor="lime"
                name="accounttype"
                type="text"
                id="text"
                placeholder="Account Type"
              />
              <Button
                h="2.5rem"
                size="sm"
                bg="green.500"
                w="4rem"
                _hover={{ background: "green.500" }}
              >
                <FaRegEdit size={30} style={style} />
              </Button>
            </InputGroup>
          </Box>
          <br />

          <Box>
            <InputGroup>
              <Input
                width="35rem"
                focusBorderColor="lime"
                type="text"
                id="text"
                name="password2"
                value={password2}
                readOnly="true"
                placeholder=" password"
                onChange={(e) => {
                  setPassword2(() => {
                    localStorage.setItem("password2", e.target.value);
                    return localStorage.getItem("password2");
                  });
                }}
                readOnly={updatepassword2 === true ? true : false}
                type="text"
                Id="text"
              />

              <Button
                onClick={() => {
                  setupdatepassword2((password2) => (password2 = !password2));
                }}
                h="2.5rem"
                size="sm"
                _hover={{ backgroung: "green.800" }}
                bg={updatepassword2 === true ? "green.500" : "green.700"}
                w="4rem"
              >
                <FaRegEdit size={30} style={style} />
              </Button>
            </InputGroup>
          </Box>
          <br />
          <Box>
            <InputGroup>
              <Input
                width="35rem"
                focusBorderColor="lime"
                type="text"
                id="text"
                value={firstname}
                name="name"
                onChange={(e) => {
                  setFirstname(() => {
                    localStorage.setItem("firstname", e.target.value);
                    return localStorage.getItem("firstname");
                  });
                }}
                readOnly={updatefirst === true ? true : false}
                type="text"
                Id="text"
                placeholder="name"
              />

              <Button
                onClick={() => {
                  setupdatefirst((firstname) => (firstname = !firstname));
                }}
                h="2.5rem"
                size="sm"
                _hover={{ backgroung: "green.800" }}
                bg={updatefirst === true ? "green.500" : "green.700"}
                w="4rem"
              >
                <FaRegEdit size={30} style={style} />
              </Button>
            </InputGroup>
          </Box>
          <br />

          <InputGroup>
            <Input
              width="35rem"
              focusBorderColor="lime"
              type="text"
              id="text"
              value={email}
              placeholder="email"
              onChange={(e) => {
                setEmail(() => {
                  localStorage.setItem("email", e.target.value);
                  return localStorage.getItem("email");
                });
              }}
              readOnly={updateemail === true ? true : false}
              type="text"
              Id="text"
            />

            <Button
              onClick={() => {
                setupdateemail((email) => (email = !email));
              }}
              h="2.5rem"
              size="sm"
              _hover={{ backgroung: "green.800" }}
              bg={updateemail === true ? "green.500" : "green.700"}
              w="4rem"
            >
              <FaRegEdit size={30} style={style} />
            </Button>
          </InputGroup>

          <br />
          <Box>
            <InputGroup>
              <Input
                border="1px solid black"
                focusBorderColor="lime"
                width="35rem"
                value={username}
                name="username"
                onChange={(e) => {
                  setusername(() => {
                    localStorage.setItem("username", e.target.value);
                    return localStorage.getItem("username");
                  });
                }}
                readOnly={updateuser === true ? true : false}
                type="text"
                Id="text"
                placeholder="Username"
              />
              <Button
                onClick={() => {
                  setupdateuser((user) => (user = !user));
                }}
                h="2.5rem"
                size="sm"
                _hover={{ backgroung: "green.800" }}
                bg={updateuser === true ? "green.500" : "green.700"}
                w="4rem"
              >
                <FaRegEdit size={30} style={style} />
              </Button>
            </InputGroup>
          </Box>
          <br />
          <Button
            ml="15rem"
            width="8rem"
            bg="green.500"
            color="white"
            _hover={{ background: "green.600", color: "white" }}
          >
            Update
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default Username;
