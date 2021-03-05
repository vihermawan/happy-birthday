import React, {useState,useEffect} from "react";
import { Box, Heading, Flex, Text, useColorMode, IconButton, Button, useDisclosure,Divider,Spacer,Kbd } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from "@chakra-ui/react"
import { Link as LinkScroll } from "react-scroll";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MenuItems: React.FC = ({ children }) => (
  <Button mt={{ base: 5, md: 0 }} mr={6} display="block" size="xs" backgroundColor="transparent">
    {children}
  </Button>
);

const Header: React.FC = props => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollActive, setScrollActive] = useState<Boolean>(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);
    return (
        <>
            <Flex
                as="header"
                align="center"
                position="fixed"
                zIndex="9999"
                padding="1.5rem"
                width="full"
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black" : "white"}
                {...props}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base :"10", md:"xl", sm:"xl", lg:"xl"}}>
                        <Link href="/">Dipunkkk</Link>
                    </Heading>
                </Flex>
                <Spacer />
                <Box
                    display={{ base: "none", md:"flex" }}
                    mt={{ base: 4, md: 0 }}
                >
                    <MenuItems>
                        <LinkScroll
                            activeClass="active"
                            to="prolouge"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Prolouge
                        </LinkScroll>
                    </MenuItems>
                    <MenuItems>Achievement</MenuItems>
                    <MenuItems>Experience</MenuItems>
                    <MenuItems>Songs</MenuItems>
                </Box>
                <Spacer />
                <Box
                    display={{ base: "none", md:"flex" }}
                    mt={{ base: 4, md: 0 }}
                    alignContent="center"
                >
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon/>} onClick={toggleColorMode} aria-label="button"/>
                </Box>
                <Box display={{ base: "block", md: "none",lg: "none" }}>
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon/>} onClick={toggleColorMode} aria-label="button"/>
                    <Button size="xs" bg="transparent" onClick={onOpen}>👋</Button>
                </Box>
            </Flex>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                size="xs"
                motionPreset="slideInBottom"
            >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex
                        align="center"
                        width="full"
                        wrap="wrap"
                        heigth
                        bg={colorMode === "light" ? "white" : "gray.800"}
                        color={colorMode === "light" ? "black" : "white"}
                    >
                         <LinkScroll
                            activeClass="active"
                            to="prolouge"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                            <Text color="black" fontSize="xs" paddingX="1" fontWeight="bold"> Prolouge</Text> 
                            <Spacer />
                            <Kbd marginRight="1">D</Kbd>
                        </Box>
                        </LinkScroll>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                            <Text color="black" fontSize="xs" paddingX="1" fontWeight="bold"> Achievement</Text> 
                            <Spacer />
                            <Kbd marginRight="1">P</Kbd>
                        </Box>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                            <Text color="black" fontSize="xs" paddingX="1" fontWeight="bold"> Experience</Text> 
                            <Spacer />
                            <Kbd marginRight="1">N</Kbd>
                        </Box>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                            <Text color="black" fontSize="xs" paddingX="1" fontWeight="bold"> Songs</Text> 
                            <Spacer />
                            <Kbd marginRight="1">G</Kbd>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
};

export default Header;
