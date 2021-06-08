import { Segment } from './snake';
interface ControlProps {
    segments: Segment[];
    size: number;
    wasd: boolean;
}
declare class Сontrol {
    private segments;
    private length;
    private head;
    private wasd;
    private size;
    private key;
    sleep: boolean;
    constructor(options: ControlProps);
    move(): void;
    teleport(): void;
}
export { Сontrol };
