import * as React from "react";
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import { Container, Heading, Grid, Text, GridItem,Flex,Center,Square,Button,Circle} from "@chakra-ui/react";
import { FaPlay,FaPause } from 'react-icons/fa';

const Song: React.FC = ({}) => {
    const [playingJ, setPlayingJ] = React.useState<Boolean>(false);
    const [playingH, setPlayingH] = React.useState<Boolean>(false);
    const [playingR, setPlayingR] = React.useState<Boolean>(false);
    const [play, {stop,isPlaying }] = useSound("/sounds/sound.mp3", {
        sprite : {
            jeremy : [0,60900],
            honne : [61000,100000],
            line : [107000,153000]
        }
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
                <Grid
                    h="min-content"
                    w="full"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(10, 1fr)"
                    gap={4}
                    mb="4"
                >
                    <GridItem rowSpan={3} colSpan={{base:10, md:5}} w="full">
                        <Fade duration={500} distance="30px" delay={320} fraction={0.4} bottom>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"md", lg:"sm"}} fontWeight="bold">SONG 🎵</Text>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"4xl"}}>
                               Dipung's favorite song collection
                            </Heading>
                        </Fade>
                        <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                            <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}}>
                            Sometimes, you're suggest some song thats i think a good song. Mostly song that are you suggest that's it reminder me of you when i play it. So this is song that you suggest for me.
                            </Text>
                        </Fade>
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={{base:10, md:5}} w="full" textAlign={{base:"center", md:"left"}} bg="green">
                        <Fade duration={500} distance="30px" delay={200} fraction={0.4} bottom>
                            <Flex 
                                color="white"
                                justifyContent="space-between"
                            >
                                <Center w="100px" bg="green.500" >
                                    <Circle bg="teal" cursor="pointer" w="10" h="10" onMouseDown={() => playSound("jeremy")}>
                                        { playingJ ?  <FaPause/> : <FaPlay/> }
                                    </Circle>
                                </Center>
                                <Center w="100px" bg="green.500" >
                                    <Circle bg="teal" cursor="pointer" w="10" h="10" onMouseDown={() => playSound("honne")}>
                                        { playingH ?  <FaPause/> : <FaPlay/> }
                                    </Circle>
                                </Center>
                                <Center w="100px" bg="green.500" >
                                    <Circle bg="teal" cursor="pointer" w="10" h="10" onMouseDown={() => playSound("rick")}>
                                        { playingR ?  <FaPause/> : <FaPlay/> }
                                    </Circle>
                                </Center>
                            </Flex>
                        </Fade>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Song;