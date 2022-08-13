import OrgSidebar from "../OrgSidebar/OrgSidebar";
import OrgNav from "../OrgNav/OrgNav";
import { AiOutlineDownload } from "react-icons/ai";
import { PieChart } from "react-minimal-pie-chart";
import { MdDownloading } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters, AiOutlineMessage } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
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
  const token = localStorage.getItem("token");
  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const res = await axios.get(
          "https://evening-dusk-96253.herokuapp.com/api/quiz",
          {
            headers: {
              Authaurization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    handleSubmit();
  }, []);

  const color = {
    color: "blue",
    marginLeft: "1rem",
    backgroundColor: "#F0F5FF",
    borderRadius: "50%",
  };
  const colors = {
    color: "yellow",
    marginLeft: "1.8rem",
    backgroundColor: "#FFBD82",
    borderRadius: "50%",
  };
  const colorss = {
    color: "#FF86AC",
    marginLeft: "2.4rem",
    backgroundColor: "#FFBD82",
    borderRadius: "50%",
  };
  const colorsss = {
    color: "blue",
    marginLeft: "2.4rem",
    backgroundColor: "#F0F5FF",
    borderRadius: "50%",
  };
  const good = { color: "#4FD0FF", marginTop: ".3rem" };
  const goods = { color: "#FFBD82", marginTop: ".3rem" };
  const goodss = { color: "#FF86AC", marginTop: ".3rem" };
  return (
    <>
      <OrgSidebar />
      <OrgNav />
      <Stack ml="16.5rem" bg="whitesmoke" h="91vh" w="80.5%">
        <Heading fontSize="1.5rem">Dashboard</Heading>
        <Box w="99%" h="9rem" bg="#ffff" boxShadoow="md" ml="2rem">
          <Heading ml="2rem" fontSize="1.2rem">
            Quick Overview
          </Heading>
          <Flex ml="8rem">
            <Box justifyContent="center" alignItems="center" mt="1rem">
              <AiOutlineDownload style={color} size={35} />
              <Heading fontSize="1.5rem" ml=".8rem">
                127
              </Heading>
              <Text>Submitted</Text>
            </Box>
            <Image mt="1rem" h="5rem" ml="4rem" src="images/Line.png" alt="" />
            <Box
              justifyContent="center"
              alignItems="center"
              mt="1rem"
              ml="6rem"
            >
              <MdDownloading style={colors} size={35} />
              <Heading fontSize="1.5rem" ml="2rem">
                58
              </Heading>
              <Text>Yet To Submit</Text>
            </Box>
            <Image mt="1rem" h="5rem" ml="4rem" src="images/Line.png" alt="" />
            <Box
              justifyContent="center"
              alignItems="center"
              mt="1rem"
              ml="6rem"
            >
              <AiOutlineLoading3Quarters style={colorss} size={35} />
              <Heading fontSize="1.5rem" ml="2.5rem">
                42
              </Heading>
              <Text>Pending Request</Text>
            </Box>
            <Image mt="1rem" h="5rem" ml="4rem" src="images/Line.png" alt="" />
            <Box
              justifyContent="center"
              alignItems="center"
              mt="1rem"
              ml="6rem"
            >
              <AiOutlineMessage style={colorsss} size={35} />
              <Heading fontSize="1.5rem" ml="2.5rem">
                13
              </Heading>
              <Text>Students Reports</Text>
            </Box>
          </Flex>
          <Flex mt="2rem" ml="1rem">
            <Box h="24rem" w="50%" bg="#ffff" boxShadoow="xl">
              <Flex columnGap="2rem">
                <Heading fontSize="1.3rem" ml="1rem">
                  Submitted Quiz
                </Heading>
                <Input
                  w="20rem"
                  h="2rem"
                  type="text"
                  placeholder="search for students"
                />
              </Flex>
              <TableContainer>
                <Table variant="simple">
                  <TableCaption>List Of Students Quizes</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Time</Th>
                      <Th>Results/100</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>James Bryan</Td>
                      <Td>10:45 (AM)</Td>
                      <Td color="#4FD0FF" bg="#E0F6FE" rounded="xl">
                        90
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Brandon</Td>
                      <Td>11:00 (AM)</Td>
                      <Td bg="#f7d59e" color="yellow" rounded="xl">
                        60
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Krispam</Td>
                      <Td>10:00 (AM)</Td>
                      <Td bg="#FEF3E9" color="#FF86AC" rounded="xl">
                        10
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Chioma</Td>
                      <Td>7:30 (AM)</Td>
                      <Td bg="#f7d59e" color="yellow" rounded="xl">
                        70
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Nasuk</Td>
                      <Td>9:20 (AM)</Td>
                      <Td color="#4FD0FF" bg="#E0F6FE" rounded="xl">
                        98
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box h="24rem" w="50%" bg="#ffff" boxShadoow="xl" ml="1rem">
              <Heading fontSize="1.2rem"> Students Performance </Heading>
              <Box h="15rem" w="13rem" mt="1rem" ml="8rem">
                <PieChart
                  data={[
                    { title: "Average", value: 10, color: "#FFBD82" },
                    { title: "Poor", value: 3, color: "#FF86AC" },
                    { title: "Excellent", value: 15, color: "#4FD0FF" },
                  ]}
                />
                <Image w="20rem" src="images/Line 10.png" alt="" />
              </Box>
              <Box>
                <Flex ml="5rem">
                  <BsCircleFill style={good} />
                  <Text ml="2rem">Excellent Performance</Text>
                  <Heading ml="3rem" fontSize="1.2rem">
                    70%
                  </Heading>
                </Flex>
                <Flex ml="5rem">
                  <BsCircleFill style={goods} />
                  <Text ml="2rem">Average Performance</Text>
                  <Heading ml="3.5rem" fontSize="1.2rem">
                    20%
                  </Heading>
                </Flex>
                <Flex ml="5rem">
                  <BsCircleFill style={goodss} />
                  <Text ml="2rem">Poor Performance</Text>
                  <Heading ml="5rem" fontSize="1.2rem">
                    10%
                  </Heading>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};
export default OrgPage;
