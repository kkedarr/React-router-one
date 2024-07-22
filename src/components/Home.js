import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';

function Home() {
    return (
        <Box p={5}>
            <Heading>Welcome to Crypto WatchBX</Heading>
            <Text>Get the latest crypto updates of your favourite Crypto coins, Airdrops, and NFTs</Text>
            <Box p={5}>
                <Flex mb={5}>
                    <Button as={Link} to="/" mr={2}>
                        Home
                    </Button>
                    <Button as={Link} to="/about" mr={2}>
                        About
                    </Button>
                    <Button as={Link} to="/cryptos" mr={2}>
                        Crypto
                    </Button>
                    <Button as={Link} to="/contact" mr={2}>
                        Contact
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default Home;
