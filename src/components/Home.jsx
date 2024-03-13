import React from "react";
import {Box, Image,Text} from "@chakra-ui/react"
import btcSrc from "../../src/btcSrc.jpg"
import {motion} from "framer-motion"

export default function Home(){
    return(
        <>
        <Box 
          bgColor={"white"}
          w={"full"} 
          h={["50vh", "85vh"]}>
        <motion.div
        style={{height: "85vh"}}
        animate={{
          translateY:"20px"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        >
        <Image 
          w={"full"}
          h={"full"} 
          objectFit={"cover"} 
          src={btcSrc}/>
        </motion.div>
        </Box>
        </>
    )
}