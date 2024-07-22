import React from "react"
import {
    Box,
    Input,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
} from '@chakra-ui/react'


function ContactForm() {
    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
            <Text>Enter here to get the latest updates from us through your mail</Text>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Button colorScheme='teal' size='xs'>
                Subscribe
            </Button>
        </Box>
    )
}

export default ContactForm;