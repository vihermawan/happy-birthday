import * as React from 'react';
import Fade from 'react-reveal/Fade';
import style from '../styles/Hero.module.css';
import useSound from 'use-sound';
import Image from "next/image";
import { GiPartyPopper } from 'react-icons/gi';
import { 
    Container, 
    Box, 
    Heading, 
    Grid, 
    Text, 
    GridItem,
    Link,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, 
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage
} from "@chakra-ui/react";
import { Formik,Form,Field } from 'formik';

const Hero: React.FC = ({}) => {
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const [play, { stop, isPlaying }] = useSound("/sounds/pop.mp3");
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [isGift, setGift] =  React.useState<boolean>(false);
    const [wish,setWish] = React.useState<String>("");
  
    const openModal = () => {
        play();
        setOpen(true);
    }

    const validateName =(value: string)=> {
        let error: string
        if (!value) {
          error = "Please write your wish :)"
        }
        return error
    }

    return (
        <>
            <Container maxW="7xl" paddingTop={{ base :"7", md:"20", lg:"40"}} paddingLeft={{ base :"7", md:"20", lg:"15"}} paddingRight={{ base :"7", md:"20", lg:"15"}} paddingBottom={{ base :"20"}}>
                <Fade duration={500} distance="30px" fraction={0.4} bottom>
                    <Box mt={{base:"44", md:"28", lg:"0"}}>
                        <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"2xl", md:"3xl", sm:"xl", lg:"7xl"}}>
                            Today is your day, so be happy and grateful 🎉<br/> <Text className={style.transition} bgClip="text" href="">Happy Birthday Dipung !</Text> 
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
                            <GridItem colSpan={5} width="full">
                                <Button colorScheme="facebook" leftIcon={ <GiPartyPopper/>} onClick={() =>openModal()} size="sm">
                                    Make a Wish
                                </Button>
                            </GridItem>
                        </Grid>
                    </Box>
                </Fade>
            </Container>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={()=>setOpen(false)}
                size="sm"
                isCentered
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Let's write your whish 🎁</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Formik
                            initialValues={{ wish: "" }}
                            onSubmit={(values, actions) => {
                                setWish(values.wish)
                                play();
                                setOpen(false);
                                setGift(true);
                            }}
                        >
                        {(props) => (
                             <Form>
                             <Field name="wish" validate={validateName}>
                               {({ field, form }) => (
                                 <FormControl isInvalid={form.errors.wish && form.touched.wish}>
                                   <FormLabel htmlFor="wish">Your Whish</FormLabel>
                                   <Input {...field} id="wish" placeholder="write here..." />
                                   <FormErrorMessage>{form.errors.wish}</FormErrorMessage>
                                 </FormControl>
                               )}
                             </Field>
                             <Button
                               mt={4}
                               colorScheme="teal"
                               isLoading={props.isSubmitting}
                               size="sm"
                               type="submit"
                             >
                               Make
                             </Button>
                           </Form>
                         )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isGift}
                onClose={()=>setGift(false)}
                size="md"
                isCentered
                motionPreset="scale"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Your Wish 🥳</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Box>
                        <Grid
                            h="full"
                            width="full"
                            templateRows="repeat(1, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={{base :1, md:4}}
                        >
                            <GridItem colSpan={{base :5, md:1, lg:2}} width="full" height="full">
                                <Box display={{base:'none',sm:'none',md:'block',lg:'block'}}>
                                    <Image
                                        src="/images/dipung.svg"
                                        alt=""
                                        quality={100}
                                        width={550}
                                        height={550}
                                        layout="responsive"
                                    />
                                </Box>
                                <Box display={{base:'block',sm:'block',md:'none',lg:'none'}}>
                                    <Image
                                        src="/images/dipung.svg"
                                        alt=""
                                        quality={100}
                                        width={200}
                                        height={100}
                                        layout="responsive"
                                    />
                                </Box>
                            </GridItem>
                            <GridItem colSpan={{base :5, md:4, lg:3}} width="full">
                                <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{base :"center", md:"justify", lg:"justify"}} fontSize={{ base :"small", md:"md", lg:"md"}}>
                                    {wish}
                                </Text>
                                <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{base :"center", md:"justify", lg:"justify"}} fontSize="small">
                                    <Text as="i">hope your hope and wishes can be granted by God</Text>  🤲
                                </Text>
                            </GridItem>
                        </Grid>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Hero;