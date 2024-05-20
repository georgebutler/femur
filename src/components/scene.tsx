import { OrbitControls, useGLTF } from '@react-three/drei';
import React from 'react';

export default function Scene() {
    const { scene } = useGLTF('/assets/sponza/Sponza.gltf')

    return (
    <>
        <OrbitControls />
        <ambientLight />
        <primitive object={scene}></primitive>
    </>
    );
}