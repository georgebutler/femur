import React, { useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three'

export default function Scene() {
    const [active, setActive] = useState(false);

    const { scene } = useGLTF('/assets/sponza/Sponza.gltf')
    const { scale } = useSpring({ scale: active ? 1.5 : 1, config: config.wobbly })

    return (
        <>
            <OrbitControls />
            <ambientLight />
            <animated.group scale={scale} onClick={() => setActive(!active)}>
                <primitive object={scene}></primitive>
            </animated.group>
        </>
    );
}