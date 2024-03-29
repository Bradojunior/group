import {Link} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import PieNav from "./PieNav/PieNav";
import {Box, Button,Text, Flex, Stack,Image, Heading , Radio} from "@chakra-ui/react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  Legend, ResponsiveContainer } from 'recharts';
import  {PieChart}  from 'react-minimal-pie-chart';
import {Username} from "../context/DetailContext"




const data = [
    {
      name: '1st quiz',
      Test: 50,
    },
    {
      name: '2nd quiz',
      Test: 13,
    },
    {
      name: '3rd quiz',
      Test: 98,
    },
    {
      name: '4th quiz',
      Test: 39,
    },
    {
      name: '5th quiz',
      Test: 97,
    },
    {
      name: '6th quiz',
      Test: 38,
    },
    {
      name: '7th quiz',
      Test: 80,
    },
    {
        name: '8th quiz',
        Test: 43,
      },
      {
        name: '9th quiz',
        Test: 50,
      },
      {
        name: '10th quiz',
        Test: 60,
      },
      {
      name: '11th quiz',
      Test: 90,
    },
    {
        name: '12th quiz',
        Test: 70,
      },
      {
        name: '13th quiz',
        Test: 70,
      },
      {
        name: '14th quiz',
        Test: 43,
      },
      {
        name: '15th quiz',
        Test: 43,
      },
      {
        name: '16th quiz',
        Test: 90,
      },
      {
        name: '17th quiz',
        Test: 88,
      },
  ];

const AdminPage = () => {
  const name = localStorage.getItem("username")


    return ( 
        <>
        <Sidebar/>
        <PieNav/>
        <Stack ml='19rem' mt='1rem' >
            <Flex columnGap='2rem' direction='column' h='5rem'>
                <Flex direction='row' columnGap='2rem'>
                <Box boxShadow='2xl' rounded='xl'>
                    <Flex columnGap='4rem'>
                        <Box ml='2rem'>
                            <Heading mb='2rem' my='1rem' m>Hello, {name}</Heading>
                            <Heading mb='.5rem' fontSize='1.5rem'>Welcome to your dashboard</Heading>
                            <Text>View your score and accuracy here</Text>
                            <Text  mt='2rem'>Click here to take quiz</Text>
                            <Link to="/TakeQuiz"><Button mb='1rem'  width='8rem' bg='blue' color='white' _hover={{background:"blue", color:"white"}}>Take Quiz</Button></Link>  
                        </Box>
                        <Box pt='2rem'>
                            <Image src="images/sin.png"/>
                        </Box>
                    </Flex>
                </Box>
                <Box boxShadow='2xl' rounded='xl'>
                    <Box mx='2rem' mt='.5rem'>
                        <Flex columnGap='15rem'>
                            <Text>Accuracy</Text>
                            <Box>
                                <Flex direction='column'>
                                    <Radio size='md' colorScheme='#3962F3'  >
                                        Passed
                                    </Radio>
                                    <Radio size='md'  colorScheme='red'  >
                                        Failed
                                    </Radio>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <Box h='13rem' w='12rem' ml='7rem' >
                        <PieChart
                        data={[
                            { title: 'Failed', value: 5, color: '#FF4906' },
                            { title: 'Passed', value: 15, color: '#3962F3' },
                        ]}
                        />
                    </Box>
                </Box>
                </Flex>
                <Box mt='2rem' boxShadow='xl' w='63rem' rounded='xl'>
                    <Heading ml='2rem' fontSize='1.2rem'>Progress</Heading>
                    <Text ml='2rem'>Keep track of your last quizzes and see your progress</Text>
                <ResponsiveContainer width="100%" aspect={5}>
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{stroke:"#3962F3"}}/>
                    <YAxis tick={{stroke:"#3962F3"}}/>
                    <Legend />
                    <Bar dataKey="Test" fill="#3962F3" />
                    </BarChart>
                </ResponsiveContainer>
                </Box>
            </Flex>
        </Stack>
       
        </>
     );
}
export default AdminPage;