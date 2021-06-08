import { Plot } from './plot';
interface SnakeOptions {
    target: HTMLElement | Element;
    size: number;
    scale: number;
    color: string;
    wasd: boolean;
    speed?: number;
}
interface Segment {
    x: number;
    y: number;
    z: number;
}
declare class Snake extends Plot {
    private color;
    private segments;
    private control;
    constructor(options: SnakeOptions);
    private render;
    private draw;
}
export { Snake, SnakeOptions, Segment };
