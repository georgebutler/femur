import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three'

export default function World() {
    const [active, setActive] = useState(false);

    const { scene } = useGLTF('/assets/sponza/Sponza.gltf')
    const { scale } = useSpring({ scale: active ? 1.5 : 1, config: config.wobbly })

    useFrame(() => {
        // scene.rotation.y += 0.01;
    });

    return (
        <>
            <OrbitControls />
            <Environment preset="city" />
            <animated.group scale={scale} onClick={() => setActive(!active)}>
                <primitive object={scene}></primitive>
            </animated.group>
        </>
    );
}