import * as React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Box, Heading, Grid, Text, GridItem,Image,forwardRef,Flex} from "@chakra-ui/react";
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
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}} id="song">
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(10, 1fr)"
                    gap={4}
                    mb="4"
                >
                    <GridItem rowSpan={3} colSpan={{base:8, md:5}} w="full" textAlign={{base:"center", md:"left"}} bg="green">
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                           
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{base:8, md:5}} w="full" position={{base:"relative"}}>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"md", lg:"sm"}} fontWeight="bold">SONG 🎵</Text>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"4xl"}}>
                               Dipung's favorite song collection
                            </Heading>
                    </GridItem>
                </Grid>
               
            </Container>
        </>
    );
}

export default Song;