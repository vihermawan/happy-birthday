import React from "react";
import { Box, Heading, Flex, Text, useColorMode, IconButton, Button, useDisclosure,Divider,Spacer} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from "@chakra-ui/react"
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
                    <MenuItems><Link href="/blog">About</Link></MenuItems>
                    <MenuItems><Link href="/work">Achievement</Link></MenuItems>
                    <MenuItems><Link href="/experience">Experience</Link></MenuItems>
                    <MenuItems><Link href="/collections">Songs</Link></MenuItems>
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
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} isFullWidth={true} >
                            <Text color="black"><Link href="/blog">🙌 Blog</Link></Text>
                        </Button>
                        <Divider />
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} w="full">
                            <Text color="black"><Link href="/work">🤝 Work</Link></Text>
                        </Button>
                        <Divider />
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} w="full">
                            <Text color="black"><Link href="/experience">🎓 Experince</Link></Text>
                        </Button>
                        <Divider />
                        <Button colorScheme="transparent" variant="solid" size="xs" color={colorMode === "light" ? "black" : "white"} w="full">
                            <Text color="black"><Link href="/collections">✌️ Collections</Link></Text>
                        </Button>
                    </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
};

export default Header;
