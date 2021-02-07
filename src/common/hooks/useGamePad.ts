import { useState, useEffect } from 'react';

export enum Direction {
    Top = 1,
    Left,
    Right,
    Bottom,
};

export const useGamePad = (initialDirection: Direction) => {
    const [direction, setDirection] = useState<Direction>(initialDirection);

    useEffect(() => {
        document.onkeydown = keyDownHandler;
    }, []);

    function keyDownHandler(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp': {
                setDirection(Direction.Top);
                break;
            }
            case 'ArrowLeft': {
                setDirection(Direction.Left);
                break;
            }
            case 'ArrowRight': {
                setDirection(Direction.Right);
                break;
            }
            case 'ArrowDown': {
                setDirection(Direction.Bottom);
                break;
            }
        }
    }

    return [direction];
}