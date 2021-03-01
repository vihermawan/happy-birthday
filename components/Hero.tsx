import * as React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Box, Heading, Grid, Text, GridItem,forwardRef } from "@chakra-ui/react";

const Hero: React.FC = ({}) => {
    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7", md:"20", lg:"40"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}}>
                <Fade duration={500} distance="30px" fraction={0.4} bottom>
                    <Box mt={{base:"44", md:"28", lg:"0"}}>
                        <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xl", md:"3xl", sm:"xl", lg:"7xl"}}>
                            Today is your day, so be happy and grateful. Happy Birthday for you Dipung !
                        </Heading>
                    </Box>
                </Fade>
                <Fade duration={500} distance="30px" delay={100} fraction={0.4} bottom>
                    <Box>
                        <Grid
                            h="full"
                            width="full"
                            templateRows="repeat(1, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            marginTop={{ base :"0.5", md:"7", lg:"1.5"}}
                            gap={{base :1, md:4}}
                        >
                            <GridItem colSpan={{base :5, md:1, lg:2}} width="full" height="full">
                                <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{base :"justify"}} fontSize={{ base :"xs", md:"md", lg:"sm"}}>
                                    As your friend, and also someone who loves you no matter what your condition I will be there if you need help even though we are together as friends or as a couple but what I want to say is that I am really proud of you Pung.
                                </Text>
                            </GridItem>
                            <GridItem colSpan={{base :5, md:4, lg:2}} width="full">
                                <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{base :"justify"}} fontSize={{ base :"xs", md:"md", lg:"sm"}}>
                                    So, on this day of your birthday, there have been many of your trips to this point and I am proud of those things, you have managed to go through a lot and grow well.
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </>
    );
}

export default Hero;