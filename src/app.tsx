import { Canvas } from '@react-three/fiber';
import React from 'react';
import Scene from './components/scene';
import UserInterface from './components/userinterface';
import Controller from './components/controller';

export default function App() {
    return (
    <>
        <Canvas id="canvas">
            <Scene></Scene>
        </Canvas>
        <Controller></Controller>
        <div id="ui">
            <UserInterface></UserInterface>
        </div>
    </>
    );
}