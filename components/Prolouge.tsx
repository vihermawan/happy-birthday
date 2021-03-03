import * as React from "react";
import Fade from 'react-reveal/Fade';
import style from '../styles/Hero.module.css';
import { Container, Box, Heading, Grid, Text, GridItem,Link } from "@chakra-ui/react";

const About: React.FC = ({}) => {
    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}} id="prolouge">
            <Grid
                h="min-content"
                w="full"
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(8, 1fr)"
                gap={4}
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
                            </Fade>
                        </Text>
                </GridItem>
                <GridItem rowSpan={3} colSpan={{base:8, md:2}} bg="papayawhip" w="full" h="full">p</GridItem>
                <GridItem rowSpan={3} colSpan={{base:8, md:3}} bg="tomato" w="full" h="full">p</GridItem>
                <GridItem rowSpan={3} colSpan={{base:8, md:3}} bg="tomato" w="full" h="full">p</GridItem>
            </Grid>
            </Container>
        </>
    );
}

export default About;