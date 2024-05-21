import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import React from 'react';
import World from './components/world';
import UserInterface from './components/ui';

export default function App() {
    return (
        <>
            <Canvas gl={{ antialias: true }}>
                <Physics>
                    <World></World>
                </Physics>
                <UserInterface></UserInterface>
            </Canvas>
        </>
    );
}