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
                <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                    <Grid
                        h="full"
                        maxH="450px"
                        templateRows="repeat(6, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        gap={{base:2,md:4}}
                    >
                        <GridItem rowSpan={6} colSpan={8}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/71032715_682062335622104_6651562682681349436_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kyr11wqywCUAX_oYHdK&oh=42690d63dd38fb032561ccad70b53732&oe=60735612 640w,https://z-p4-instagram.fcgk7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/71032715_682062335622104_6651562682681349436_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kyr11wqywCUAX_oYHdK&oh=89ec9c9266d77ec9ce7a1f4464c94eee&oe=6073EE92 750w,https://z-p4-instagram.fcgk7-2.fna.fbcdn.net/v/t51.2885-15/e35/71032715_682062335622104_6651562682681349436_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=kyr11wqywCUAX_oYHdK&oh=5592041f09f53086d139514d5a527c1e&oe=60725FF5 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/24177465_860636044111827_7069011394594603008_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7MY3LiVhQnYAX9XRCRQ&oh=c262509235a3ac876d783d326f61f1fe&oe=6074F33B 640w,https://z-p4-instagram.fcgk7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/24177465_860636044111827_7069011394594603008_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7MY3LiVhQnYAX9XRCRQ&oh=69ab4ca6be43f7c66ef51a5a95434fc8&oe=60740BBB 750w,https://z-p4-instagram.fcgk7-2.fna.fbcdn.net/v/t51.2885-15/e35/24177465_860636044111827_7069011394594603008_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7MY3LiVhQnYAX9XRCRQ&oh=f97b1cacf71aa54f206e9d6fd994db54&oe=6074D3E0 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/41701409_321479458617341_718343543514210555_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zEq8vGqElUAAX-SwnEu&oh=24baa5a108f7c4fd162756d996a05a21&oe=60727E85 640w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/41701409_321479458617341_718343543514210555_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zEq8vGqElUAAX-SwnEu&oh=a5a7f2ea0d042b75c8e700662d84d4a0&oe=6072117C 750w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e35/41701409_321479458617341_718343543514210555_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zEq8vGqElUAAX-SwnEu&oh=a53cf7d296d556e07144a32d88cdcf1f&oe=60717D78 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                    </Grid>
                </Fade>
                <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                    <Grid
                        marginTop={{base:2,md:4}}
                        h="full"
                        maxH="700px"
                        templateRows="repeat(6, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        w="full"
                        gap={{base:2,md:4}}
                    >
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/21042421_1981201005458243_3697855954390351872_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RTZNs2Ri1R4AX9pJnik&oh=c3386b7ccf463d3ef3bba212debd1cfe&oe=60723D8F 640w,https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/21042421_1981201005458243_3697855954390351872_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RTZNs2Ri1R4AX9pJnik&oh=6c04f93b82139ef12811153fb10baef9&oe=60719DCB 750w,https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/e35/21042421_1981201005458243_3697855954390351872_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RTZNs2Ri1R4AX9pJnik&oh=9531534b407e9e3505d7eb6c48cd4a11&oe=60734BB5 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={6} colSpan={8}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/66019606_138623457349417_3837288188345271561_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=j3nwykPIS6sAX_AJC5V&oh=2eea89c163bb25d809355bb6cb616939&oe=6073B87D 640w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/66019606_138623457349417_3837288188345271561_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=j3nwykPIS6sAX_AJC5V&oh=726ff3572b0d1d4305ffd93eb8ce00e9&oe=607540FD 750w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e35/66019606_138623457349417_3837288188345271561_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=j3nwykPIS6sAX_AJC5V&oh=2ca755fb893b2795968a36cce1d94cf5&oe=6072900B 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/47693853_595115487600492_7294978646363124811_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5PtUpl88H-cAX9cgDRS&oh=2c8c431fa38106b07decb221686207ea&oe=60733F7C 640w,https://z-p4-instagram.fcgk7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/47693853_595115487600492_7294978646363124811_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5PtUpl88H-cAX9cgDRS&oh=13ed1e5c6fa3a6d36b4302c4c67401bc&oe=6071987C 750w,https://z-p4-instagram.fcgk7-1.fna.fbcdn.net/v/t51.2885-15/e35/47693853_595115487600492_7294978646363124811_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5PtUpl88H-cAX9cgDRS&oh=20124ff01dbe3fd1d35cf461e92079cf&oe=6072220E 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                    </Grid>
                </Fade>
                <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                    <Grid
                        marginTop={{base:2,md:4}}
                        h="full"
                        templateRows="repeat(6, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        w="full"
                        gap={{base:2,md:4}}
                    >
                        <GridItem rowSpan={6} colSpan={6}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/16583160_264245820679658_5670904234422304768_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DABqnTXSw_sAX9ce-Y4&oh=728eadda0b8ec2167c5c7c7db3cc6b7b&oe=6074776B 640w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/16583160_264245820679658_5670904234422304768_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DABqnTXSw_sAX9ce-Y4&oh=c9864efde5e624982c51911fc80c1fd3&oe=607378EB 750w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e35/16583160_264245820679658_5670904234422304768_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DABqnTXSw_sAX9ce-Y4&oh=0bae277a1e42f4497a75ab49df263233&oe=6071C910 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={6} colSpan={6}>
                            <Image
                                srcSet="https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116284038_643650579842738_5291416433215444773_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=rD5wNGliRLQAX_15-vg&oh=8f7ca4bafd7ddfe61a44da843c5d7f85&oe=6073D47E 640w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e35/116284038_643650579842738_5291416433215444773_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=rD5wNGliRLQAX_15-vg&oh=1c06cc01997ba68bea79f6b8b64518f0&oe=60726748 750w,https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e35/116284038_643650579842738_5291416433215444773_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=rD5wNGliRLQAX_15-vg&oh=1c06cc01997ba68bea79f6b8b64518f0&oe=60726748 1080w"
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                    </Grid>
                </Fade>
            </Container>
        </>
    );
}

export default Gallery;