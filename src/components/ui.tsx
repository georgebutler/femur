import React from 'react';
import { Fullscreen, Text } from '@react-three/uikit'

export default function UserInterface() {
    return (
        <>
            <Fullscreen flexDirection="column">
                <Text fontWeight="bold" color="red">Hello World!</Text>
            </Fullscreen>
        </>
    );
}