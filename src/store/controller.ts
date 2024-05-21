import create, { SetState } from 'zustand';

interface ControllerState {
    forward: boolean;
    back: boolean;
    left: boolean;
    right: boolean;
    setForward: (value: boolean) => void;
    setBack: (value: boolean) => void;
    setLeft: (value: boolean) => void;
    setRight: (value: boolean) => void;
}

const controllerStore = create<ControllerState>((set: SetState<ControllerState>) => ({
    forward: false,
    back: false,
    left: false,
    right: false,
    setForward: (value: boolean) => set({ forward: value }),
    setBack: (value: boolean) => set({ back: value }),
    setLeft: (value: boolean) => set({ left: value }),
    setRight: (value: boolean) => set({ right: value }),
}));

export default controllerStore;
