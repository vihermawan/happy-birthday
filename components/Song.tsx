import * as React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Box, Heading, Grid, Text, GridItem,Image,forwardRef,Flex,Button} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = motion.custom(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
        )
        return <Box ref={ref} {...chakraProps} />
    }),
)

const Song: React.FC = ({}) => {
    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}} id="prolouge">
                <Flex
                    height="min-content"
                    width={{base:"full",md:"xl"}}
                    wrap="wrap"
                    mb="4"
                >
                    <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"md", lg:"sm"}} fontWeight="bold">ACHIEVEMENT 🏆</Text>
                        <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"4xl"}}>
                            Look back at what you have earned as your achievement
                        </Heading>
                    </Fade>
                </Flex>
                <Grid
                    h="full"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(8, 1fr)"
                    gap={4}
                    mb="4"
                >
                    <GridItem rowSpan={3} colSpan={{base:8, md:3}} w="full" textAlign={{base:"center", md:"left"}} h="full">
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                            <Image
                                src="/images/pantai.jpg"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                cursor="pointer"
                            />
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colStart={{base:1,md:4}} colEnd={{base:9,md:8}} h="full" w="full">
                        <Grid
                            h="full"
                            w="full"
                            templateRows="repeat(9, 1fr)"
                            templateColumns="repeat(6, 1fr)"
                            gap={4}
                            mb="4"
                        >
                            <GridItem rowSpan={{base:9, md:3}} colSpan={6} w="full" h="full">
                                <Box w="full" h="full" pt="4" pl="4" pr="4">
                                    <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                                        <Heading letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"lg"}} textAlign="left">Contact Again 🌱</Heading>
                                        <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} textAlign="left">
                                            Several years ago we lost contact and had no contact with each other, and then last year it started 
                                            with twitter mentioning that we finally managed to communicate with each other until now. 
                                            Hopefully the friendship will also continue and remain good friends.
                                        </Text>
                                        <Button colorScheme="facebook" size="xs" variant="outline">
                                            see a memory
                                        </Button>
                                    </Fade>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={{base:9, md:3}} colSpan={6} w="full" h="full">
                                <Box w="full" h="full" pt="4" pl="4" pr="4">
                                    <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                                        <Heading letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"lg"}} textAlign="left">Contact Again 🌱</Heading>
                                        <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} textAlign="left">
                                            Several years ago we lost contact and had no contact with each other, and then last year it started 
                                            with twitter mentioning that we finally managed to communicate with each other until now. 
                                            Hopefully the friendship will also continue and remain good friends.
                                        </Text>
                                        <Button colorScheme="facebook" size="xs" variant="outline">
                                            see a memory
                                        </Button>
                                    </Fade>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={{base:9, md:3}} colSpan={6} w="full" h="full">
                                <Box w="full" h="full" pt="4" pl="4" pr="4">
                                    <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                                        <Heading letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"lg"}} textAlign="left">Contact Again 🌱</Heading>
                                        <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} textAlign="left">
                                            Several years ago we lost contact and had no contact with each other, and then last year it started 
                                            with twitter mentioning that we finally managed to communicate with each other until now. 
                                            Hopefully the friendship will also continue and remain good friends.
                                        </Text>
                                        <Button colorScheme="facebook" size="xs" variant="outline">
                                            see a memory
                                        </Button>
                                    </Fade>
                                </Box>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Song;