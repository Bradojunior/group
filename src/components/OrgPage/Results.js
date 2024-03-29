import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";
import { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Button,
  Spinner,
  Input,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Flex, Box, Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Results = () => {
  const style = { marginLeft: "-4rem", marginTop: "4px" };
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState("");
  const { quizId } = useParams("");

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const res = await axios.get(
          `https://evening-dusk-96253.herokuapp.com/api/quiz/results/${quizId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "Application/json",
            },
          }
        );

        setData(res.data.data);
        setInfo(res.data.message);
        console.log(info);
      } catch (error) {
        console.log(error.response);
      }
    };
    handleSubmit();
  }, [quizId]);

  return (
    <Stack overflow="hidden">
      <OrgSidebar />
      <OrgNav />
      <Box pl="25rem" overflowY="hidden" w="80rem">
        <Flex columnGap="2rem" mb="1rem" ml="5rem">
          <Heading fontSize="1.3rem" ml="1rem">
            Search Emails
          </Heading>
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            w="22rem"
            h="2rem"
            type="text"
            placeholder="search for testers...."
          />
          <FcSearch size={25} style={style} />
        </Flex>

        <TableContainer
          overflowY="scroll"
          maxHeight="26rem"
          w="50rem"
          overflowX="hidden"
        >
          <Table variant="simple" size="lg">
            <Thead bg="blue">
              <Tr bg="blue">
                <Th color="white">Emails</Th>
                <Th color="white">Marks</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {data.length > 0 ? (
                  data
                    .filter((val) => {
                      if (search == "") {
                        return val;
                      } else if (
                        val.email.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((val) => {
                      return (
                        <Tr bg="ButtonShadow">
                          <Td>{val.email}</Td>
                          <Td pl="28rem">{val.mark}</Td>
                        </Tr>
                      );
                    })
                ) : (
                  <Spinner
                    ml="22.5rem"
                    mt="10rem"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                )}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Link to="/OrgPage">
          <Button mt="2rem" ml="22rem" colorScheme="blue" color="white">
            <BiArrowBack size={30} />
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};
export default Results;
