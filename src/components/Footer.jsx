import React from "react";
import {Avatar, Box, Stack, VStack,Text} from "@chakra-ui/react"
import profilePic from '../../src/pic.jpg'

export default function Footer(){
    return(
        <>
    <Box 
        bgColor={"whitesmoke"} 
        color={"whiteAlpha.700"} 
        minH={"48"} 
        px={"16"} 
        py={["16", "8"]}>

    <Stack 
        direction={["column","row"]}
        h={"full"}
        alignItems={"center"}
    >
    <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontWeight={"bold"} color={"black"}>About Us</Text>
        <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]} fontStyle={"Italic"} color={"black"}>We are the best crypto trading app in India, we provide our guidance at a very reasonable price.</Text>
    </VStack>
    <Avatar src={profilePic} boxSize={"28"} mt={["4", "0"]} />
        <Text fontWeight={"semibold"} color={"black"}>Mrinal Singh</Text>
    </Stack>

    <VStack mt={"20px"}>
        <Text fontSize={"sm"} fontWeight={"semibold"} color={"black"}>&copy; Mrinal Singh</Text>
    </VStack>
    </Box>
        </>
    )
}