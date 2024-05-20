import { Canvas } from '@react-three/fiber';
import React from 'react';
import Scene from './components/scene';

export default function App() {
    return (
    <>
        <Canvas>
            <Scene></Scene>
        </Canvas>
    </>
    );
}