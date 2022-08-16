import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Spinner,
  Tfoot,
  Input,
  Tr,
  Th,
  Avatar,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Flex, Box, Heading, Image, Text, Stack } from "@chakra-ui/react";

const OrgPage = () => {
  const [mark, setMark] = useState("");
  const [input, setInput] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const res = await axios.get(
          "https://evening-dusk-96253.herokuapp.com/api/quiz",
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        setMark(res.data.data);

        console.log(mark);
      } catch (error) {
        console.log(error);
      }
    };
    handleSubmit();
  }, []);
console.log(mark)
  return (
    <>
      <OrgSidebar />
      <OrgNav />
      <Stack ml="25rem" overflowY="hidden" h="91vh">
        <Flex columnGap="2rem">
          <Heading fontSize="1.3rem" ml="3rem">
            Search Emails
          </Heading>
          <Input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            w="22rem"
            h="2rem"
            type="text"
            placeholder="search for testers...."
          />
        </Flex>
        <TableContainer
          mt="3rem"
          overflowY="scroll"
          maxHeight="32rem"
          overflowX="hidden"
          w="50rem"
        >
          <Table variant="simple" size="lg">
            <Thead bg="blue">
              <Tr w="5rem">
                <Th color="white">Title</Th>
                <Th color="white">Quiz Code</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mark.length > 0 ? (
                mark
                  .filter((i) => {
                    if (input == "") {
                      return i;
                    } else if (
                      i.title.toLowerCase().includes(input.toLowerCase())
                    ) {
                      return i;
                    }
                  })
                  .map((i) => {
                    return (
                      <Tr bg="ButtonShadow">
                        <Link to={`/Results/${i.quizCode}`}>
                          <Td pl="2rem">{i.title}</Td>
                          <Td pl="34rem">{i.quizCode}</Td>
                        </Link>
                      </Tr>
                    );
                  })
              ) : (
                <Spinner
                  ml="23rem"
                  mt="10rem"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};
export default OrgPage;
