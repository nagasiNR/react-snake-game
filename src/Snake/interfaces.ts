export interface ISnakeSegment {
    x: number;
    y: number;
}

export interface ISnake {
    head: ISnakeSegment;
    segments: ISnakeSegment[];
}

export interface ISnakeProps {
    snake: ISnake;
}