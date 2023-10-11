import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      bgImage="url('https://th.bing.com/th/id/OIP.d5W891cK9CSRyIAbTFVM3gHaEh?pid=ImgDet&rs=1')" 
      b bgSize="cover"
      py={"100"}
      px={"100"}
      css={{
        height: '160vh',
        width: '160vh'
      }}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        justifyContent="center"
        alignItems="center"
        flexDirection="column" 
        textAlign="center" 
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
      >
        <Heading color="white" size="lg" mb={6} mt={8}>
          DOMINA EL TERRENEO
        </Heading>
        <Flex>
          <Button colorScheme="blackAlpha" mr={2}>
            VER VIDEO
          </Button>
          <Button colorScheme="blackAlpha">VER DETALLES</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
