import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ButtonPage = ({ text, link }: any) => {
  return (
    <Flex
      cursor="pointer"
      justify={"center"}
      fontSize={"20px"}
      align={"center"}
      bg={"#507ea3"}
      h={'200px'}
      w={'300px'}
      borderRadius={"10px"}
      transition={"all ease 0.2s"}
      boxShadow={'9px 3px 20px -3px rgba(51, 53, 53, 0.75)'}
      textAlign={'center'}
      _hover={{ 
        bg: "#02578f",
        boxShadow: '6px 4px 11px 0px rgba(0,0,0,0.75)',
       
      
      }}
      p={5}
      color={"white"}
    >
      <Link
        to={
          link
        }
        style={{
          height: "150px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        target="_blank"
      >
        {text}
      </Link>
    </Flex>
  );
};
