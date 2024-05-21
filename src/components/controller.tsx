import React, { useEffect } from "react";
import controllerStore from '../store/controller';

export default function Controller() {
    const setForward = controllerStore(state => state.setForward);
    const setBack = controllerStore(state => state.setBack);
    const setLeft = controllerStore(state => state.setLeft);
    const setRight = controllerStore(state => state.setRight);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'w':
                    setForward(true);
                    break;
                case 'a':
                    setLeft(true);
                    break;
                case 's':
                    setBack(true);
                    break;
                case 'd':
                    setRight(true);
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'w':
                    setForward(false);
                    break;
                case 'a':
                    setLeft(false);
                    break;
                case 's':
                    setBack(false);
                    break;
                case 'd':
                    setRight(false);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [setForward, setBack, setLeft, setRight]);

    return (
        <>
            <div>Controller</div>
        </>
    );
}
