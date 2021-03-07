import * as React from "react";
import Fade from 'react-reveal/Fade';
import style from '../styles/Prolouge.module.css';
import { Container, Box, Heading, Grid, Text, GridItem,Image,forwardRef  } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = motion.custom(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
        )
        return <Box ref={ref} {...chakraProps} />
    }),
)

const Prologue: React.FC = ({}) => {
    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}} id="prolouge">
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(8, 1fr)"
                    gap={4}
                    mb="4"
                >
                    <GridItem rowSpan={3} colSpan={{base:8, md:3}} w="full" textAlign={{base:"center", md:"left"}}>
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"md", lg:"sm"}} fontWeight="bold">PROLOUGE 👋</Text>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"6xl"}} className={style.transition} bgClip="text">
                                    Diana Maghfiroh 
                            </Heading>
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{base:8, md:5}} w="full" position={{base:"relative"}}>
                        <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} position={{base:"relative", md:"absolute"}} bottom={{base:"none", md:"3"}} right="0" w={{base:"full", md:"container.sm"}}  textAlign={{base :"center", md:"left"}}>
                            <Fade duration={500} distance="30px" delay={300} fraction={0.4} bottom>
                                I tought we first met back then, in Primagama 8 years ago if I'm not mistaken. 
                                From there you don't know who you are, and just getting to know and close 
                                to starting high school and I lost contact within 3 years maybe, 
                                and starting to close again after my final project was finished hahaa. 
                                I think 3 pictures in here, are reminds me of you.
                            </Fade>
                        </Text>
                    </GridItem>
                </Grid>
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(6, 1fr)"
                    templateColumns="repeat(9, 1fr)"
                    gap={4}
                >
                    <GridItem 
                        rowSpan={6} 
                        colSpan={{base:9, md:3}}  
                        w="full" 
                        h="full" 
                    >
                        <Fade duration={500} distance="30px" delay={320} fraction={0.4} bottom>
                            <MotionBox
                                boxSize="100%"
                                drag="x"
                                whileHover={{ y:"-10px" }}
                            >
                                <Image
                                    src="/images/foto1.jpg"
                                    alt=""
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    cursor="pointer"
                                />
                            </MotionBox>
                        </Fade>
                    </GridItem>
                    <GridItem 
                        rowSpan={6} 
                        colSpan={{base:9, md:3}}  
                        w="full" 
                        h="full" 
                    >
                        <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                            <MotionBox
                                boxSize="100%"
                                drag="x"
                                whileHover={{ y:"-10px" }}
                            >
                                <Image
                                    src="/images/foto2.jpg"
                                    alt=""
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    cursor="pointer"
                                />
                            </MotionBox>
                        </Fade>
                    </GridItem>
                    <GridItem 
                        rowSpan={6} 
                        colSpan={{base:9, md:3}}  
                        w="full" 
                        h="full" 
                    >
                        <Fade duration={500} distance="30px" delay={360} fraction={0.4} bottom>
                            <MotionBox
                                boxSize="100%"
                                whileHover={{ y:"-10px" }}
                            >
                                <Image
                                    src="/images/foto3.jpg"
                                    alt=""
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    cursor="pointer"
                                />
                            </MotionBox>
                        </Fade>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Prologue;