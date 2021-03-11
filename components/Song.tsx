import * as React from "react";
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import { Container, Heading, Grid, Text, GridItem,Flex,Center,Box,Button,Circle} from "@chakra-ui/react";
import { FaPlay,FaPause } from 'react-icons/fa';

const Song: React.FC = ({}) => {
    const [playingJ, setPlayingJ] = React.useState<Boolean>(false);
    const [playingH, setPlayingH] = React.useState<Boolean>(false);
    const [playingR, setPlayingR] = React.useState<Boolean>(false);
    const [play, {stop }] = useSound("/sounds/fix.mp3", {
        sprite : {
            jeremy : [1,4000],
            honne : [5000,4000],
            line : [10000,4000]
        },
    });

    const playSound = (songs: string) => {
        if(songs === "jeremy"){
            playingJ? stop() : play({id : 'jeremy'});
            setPlayingJ(!playingJ)
            setPlayingH(false);
            setPlayingR(false);
            if(!playingJ){
                stop();
                play({id : 'jeremy'});
            }
        }else if(songs === "honne"){
            playingH? stop() : play({id : 'honne'});
            setPlayingH(!playingH)
            setPlayingJ(false);
            setPlayingR(false);
            if(!playingH){
                stop();
                play({id : 'honne'});
            }
        }else{
            playingR? stop() : play({id : 'line'});
            setPlayingR(!playingR)
            setPlayingJ(false);
            setPlayingH(false);
            if(!playingR){
                stop();
                play({id : 'line'});
            }
        }
    }
    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}} id="song">
                <Flex
                    height="full"
                    width="full"
                    justifyContent="center"
                    wrap="wrap"
                    mb="4"
                >
                    <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                        <Box>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"md", lg:"sm"}} fontWeight="bold" textAlign="center">SONG 🎵</Text>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"4xl"}} textAlign="center">
                                Dipung's favorite song collection
                            </Heading>
                            <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} textAlign="center">
                            Sometimes, you're suggest some song thats i think a good song. Mostly song that are you suggest that's it reminder me of you when i play it. So this is song that you suggest for me.
                            </Text>
                        </Box>
                    </Fade>
                </Flex>
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(9, 1fr)"
                    gap={4}
                    mb="4"
                >
                    <GridItem rowSpan={3} colSpan={{base:9, md:3}} w="full" h="full">
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                            <Center w="full" h={{base:"200px", md:"400px"}} bgImage="url(https://i.scdn.co/image/ab67616d0000b273dccb079c492cf99e02e3255b)" bgSize="cover" bgRepeat="no-repeat" borderRadius="md">
                                <Circle bg="teal" cursor="pointer" w="14" h="14" onClick={() => playSound("jeremy")} color="white">
                                    { playingJ ?  <FaPause/> : <FaPlay/> }
                                </Circle>
                            </Center>
                            <Center mt="2">
                                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"lg"}} fontWeight="bold">This is how you fall in love</Text>
                            </Center>
                            <Center>
                                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Jeremy Zucker</Text>
                            </Center>
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{base:9, md:3}} w="full">
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                            <Center w="full" h={{base:"200px", md:"400px"}} bgImage="url(https://1.bp.blogspot.com/-5iNDIk4Pfec/XwXTMCNwdMI/AAAAAAAABfw/aoF6mDY4TzErr6iv1AFOKZclEJXRSoP0ACK4BGAsYHg/s1600/no-song-without-you-lirik-terjemahan.jpg)" bgSize="cover" bgRepeat="no-repeat" borderRadius="md">
                                <Circle bg="teal" cursor="pointer" w="14" h="14" onClick={() => playSound("honne")} color="white">
                                    { playingH ?  <FaPause/> : <FaPlay/> }
                                </Circle>
                            </Center>
                            <Center mt="2">
                                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"lg"}} fontWeight="bold">No Song Without U</Text>
                            </Center>
                            <Center>
                                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Honne</Text>
                            </Center>
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{base:9, md:3}} w="full">
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                            <Center w="full" h={{base:"200px", md:"400px"}} bgImage="url(https://images.genius.com/c300ae3706368f3b8e1b9376ef1bcc36.595x595x1.jpg)" bgSize="cover" bgRepeat="no-repeat" borderRadius="md" borderColor="black 1px solid">
                                <Circle bg="teal" cursor="pointer" w="14" h="14" onClick={() => playSound("line")} color="white">
                                    { playingR ?  <FaPause/> : <FaPlay/> }
                                </Circle>
                            </Center>
                            <Center mt="2">
                                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"lg"}} fontWeight="bold">A line Without Hook</Text>
                            </Center>
                            <Center>
                                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Ricky Montgomery</Text>
                            </Center>
                        </Fade>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Song;