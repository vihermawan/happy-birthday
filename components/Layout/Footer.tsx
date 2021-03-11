import React from "react";
import { Box, Center, Text } from '@chakra-ui/react';

const Footer: React.FC = ({children}) => {
    return (
        <>
            <Box pt="4" pb="4">
                <Center>
                   <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium"> This gift made with ❤️ </Text>
                </Center>
            </Box>

        </>
    );
};

export default Footer;