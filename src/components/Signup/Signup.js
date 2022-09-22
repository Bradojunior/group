import { AiFillInfoCircle } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

import { Flex, Box, Heading, Button, Text } from "@chakra-ui/react";

const style1 = {
  color: "white",
  fontSize: "1.5em",
  marginLeft: "1rem",
};

const Sidebar = () => {
  return (
    <>
      
      <Box
        h="100vh"
        w="100vw"
        bg="#042A37"
        justifyContent="center"
        color="white"
        textAlign="center"
        pt="1rem"
      >
        <Heading mb="1rem">What Are You Registering As?</Heading>
        <Button
          bg="#042A37"
          border="1px solid blue"
          w="30rem"
          _hover={{ background: "transparent" }}
        >
          <Flex bg="transparent">
            <Link to="/OrgLogin">
              <Button
                _hover={{ background: "blue", color: "white" }}
                mx="2rem"
                bg="transparent"
                hover="text-black"
              >
                Organization
              </Button>
            </Link>
            <Link to="/Signin">
              <Button
                _hover={{ background: "blue", color: "white" }}
                mx="5rem"
                bg="transparent"
              >
                User
              </Button>
            </Link>
          </Flex>
        </Button>
      </Box>
    </>
  );
};

export default Sidebar;
