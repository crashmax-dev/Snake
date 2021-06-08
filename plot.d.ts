import { SnakeOptions } from './snake';
declare class Plot {
    protected target: HTMLElement | Element;
    protected size: number;
    protected scale: number;
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    constructor(options: SnakeOptions);
    plot(): void;
    drawText(text: string): void;
}
export { Plot };
