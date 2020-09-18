import React from 'react';
import {Button} from '@chakra-ui/core';

export function LandingPage(props) {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord'; //redirect to express auth route, will store cookie on port 3000 page
    return (
        <Button
        onClick={login} 
        variantColor="orange">
        Login
        </Button>
    )
}