import * as React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Box, Heading, Grid, Text, GridItem,forwardRef,Flex,Img} from "@chakra-ui/react";
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
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"4",md:"10"}} id="gallery">
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
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"4xl"}} textAlign="center">
                                Your moment when captured in one take
                            </Heading>
                            <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} textAlign="center">
                                Looking back around you, all of the time when you passed all of it and stay until today it was an amazing
                            </Text>
                        </Box>
                    </Fade>
                </Flex>
                <Grid
                    h="full"
                    templateRows="repeat(6, 1fr)"
                    templateColumns="repeat(12, 1fr)"
                    gap={{base:2,md:4}}
                >
                    <GridItem rowSpan={6} colSpan={8} bg="red.300">
                        <Img
                            srcSet="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={4} bg="red.300">
                         <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={4} bg="red.300">
                        <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                     </GridItem>
                </Grid>
                <Grid
                    marginTop={{base:2,md:4}}
                    h="full"
                    templateRows="repeat(6, 1fr)"
                    templateColumns="repeat(12, 1fr)"
                    w="full"
                    gap={{base:2,md:4}}
                >
                    <GridItem rowSpan={3} colSpan={4}>
                         <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                    </GridItem>
                    <GridItem rowSpan={6} colSpan={8}>
                        <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={4}>
                        <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                     </GridItem>
                </Grid>
                <Grid
                    marginTop={{base:2,md:4}}
                    h="full"
                    templateRows="repeat(6, 1fr)"
                    templateColumns="repeat(12, 1fr)"
                    w="full"
                    gap={{base:2,md:4}}
                >
                    <GridItem rowSpan={6} colSpan={6}>
                         <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                    </GridItem>
                    <GridItem rowSpan={6} colSpan={6}>
                        <Img
                            src="/images/foto1.webp"
                            alt=""
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="md"
                            cursor="pointer"
                            width="full"
                            height="full"
                        />
                     </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Gallery;