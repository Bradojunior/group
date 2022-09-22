import First from "../First/First";

import Footer from "../Footer/Footer";
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <First />
      <Stack
        h="auto"
        w="100%"
        color="white"
        textAlign="center"
        bg="rgb(67, 67, 104)"
        pt="6rem"
        justifyContent="center"
      >
        <Heading fontSize={["1rem", "1.5rem", "2rem"]}>
          Quizzy comes with amazing
        </Heading>
        <Heading fontSize={["1rem", "1.5rem", "2rem"]}>features like</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          textAlign="center"
          px="2rem"
          justifyContent="center"
          gap={{base:"1rem", md: "2rem", lg: "10rem" }}
          pt="1rem"
        >
          <GridItem boxShadow="2xl" p="6" rounded="md">
            {/* <Image ml="6.5rem" src="images/Vector1.png" alt="" /> */}
            <Text maxW="md">Taking exams with your devices easily</Text>
          </GridItem>

          <GridItem boxShadow="2xl" p="6" rounded="md">
            {/* <Image ml="6.5rem" src="images/Vector2.png" alt="" /> */}
            <Text maxW="md">
              Plenty of Tests to help you prepare for your exams
            </Text>
          </GridItem>

          <GridItem boxShadow="2xl" p="6" rounded="md">
            {/* <Image ml="6.5rem" src="images/Vector3.png" alt="" /> */}
            <Text maxW="md">
              Detailed statistics showing your progress across your tests
            </Text>
          </GridItem>
        </Grid>
        <Heading textAlign="center" pt='3rem' fontSize={["1rem", "1.5rem", "2rem"]}>
          What our clients say
        </Heading>
       
        <Grid
        px="2rem"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{base:"1rem" ,md: "2rem", lg: "10rem" }}
          textAlign="center"
          pt="2rem"
          justifyContent="center"
          columnGap="5rem"
          pb="2rem"
        >
          <GridItem>
            <Text
              boxShadow="2xl"
              p="6"
              rounded="md"
              bg="rgb(67, 67, 104)"
              maxW="md"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              dicta saepe? Labore recusandae nostrum reiciendis, quas dolorem
              repudiandae delectus. Libero similique, dolore doloribus voluptas
              vel facere quasi repellat numquam. Adipisci!
            </Text>
          </GridItem>
          <GridItem>
            <Text
              boxShadow="2xl"
              p="6"
              rounded="md"
              maxW="md"
              bg="rgb(67, 67, 104)"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              dicta saepe? Labore recusandae nostrum reiciendis, quas dolorem
              repudiandae delectus. Libero similique, dolore doloribus voluptas
              vel facere quasi repellat numquam. Adipisci!
            </Text>
          </GridItem>
          <GridItem>
            <Text
              boxShadow="2xl"
              p="6"
              maxW="md"
              rounded="md"
              bg="rgb(67, 67, 104)"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              dicta saepe? Labore recusandae nostrum reiciendis, quas dolorem
              repudiandae delectus. Libero similique, dolore doloribus voluptas
              vel facere quasi repellat numquam. Adipisci!
            </Text>
          </GridItem>
        </Grid>
      </Stack>
      <Footer />
    </>
  );
};

export default About;
