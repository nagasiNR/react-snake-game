export interface ISnakeSegment {
    x: number;
    y: number;
}

export interface ISnake {
    segments: ISnakeSegment[];
}

export interface ISnakeProps {
    snake: ISnake;
}