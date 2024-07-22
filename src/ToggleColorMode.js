import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';

function ToggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box p={5} textAlign="center">
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
        </Box>
    );
}

export default ToggleColorMode;
