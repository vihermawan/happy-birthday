import * as React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Box, Heading, Grid, Text, GridItem,Image,forwardRef,Flex,Button} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
        )
        return <Box ref={ref} {...chakraProps} />
    }),
)

const Gallery: React.FC = ({}) => {
    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}} id="prolouge">
                <Flex
                    height="full"
                    width="full"
                    justifyContent="center"
                    wrap="wrap"
                    mb="4"
                >
                    <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                        <Box>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"md", lg:"sm"}} fontWeight="bold" textAlign="center">GALLERY 📸</Text>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"4xl"}}>
                                Your moment when captured in one take
                            </Heading>
                            <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} textAlign="center">
                                Looking back around you, all of the time when you passed all of it and stay until today it was an amazing
                            </Text>
                        </Box>
                    </Fade>
                </Flex>
                
            </Container>
        </>
    );
}

export default Gallery;