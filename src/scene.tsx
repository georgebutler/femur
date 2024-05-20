import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React from 'react';

export default function Scene() {
    return (
    <>
        <OrbitControls />
        <PerspectiveCamera fov={75} position={[0, 0, 0]} />
        <ambientLight />
        <Box position={[0, 0, 0]} />
    </>
    );
}