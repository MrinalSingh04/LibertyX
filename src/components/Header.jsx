import React from "react";
import {Button, HStack,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <>
        <HStack p={"4"} bgColor={"whitesmoke"}>
          <Text fontStyle={"italic"} fontWeight={"bold"} fontSize={"2xl"} color={"blackAlpha.900"}>LibertyX</Text>
          <Button bgColor={"whitesmoke"} color={"blackAlpha.900"} ml={"auto"} variant={"unstyled"}>
            <Link to="/">
              Home
            </Link>
          </Button>
          <Button bgColor={"whitesmoke"} variant={"unstyled"} >
            <Link to="/exchanges">
              Exchanges
            </Link>
          </Button>
          <Button variant={"unstyled"} bgColor={"whitesmoke"}>
            <Link to="/coins">
              Coins
            </Link>
          </Button>
        </HStack>
        </>
    )
}