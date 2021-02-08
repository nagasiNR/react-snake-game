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
    }, [direction]);

    function keyDownHandler(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp': {
                if (direction !== Direction.Bottom) {
                    setDirection(Direction.Top);
                }

                break;
            }
            case 'ArrowLeft': {
                if (direction !== Direction.Right) {
                    setDirection(Direction.Left);
                }
                break;
            }
            case 'ArrowRight': {
                if (direction !== Direction.Left) {
                    setDirection(Direction.Right);
                }
                break;
            }
            case 'ArrowDown': {
                if (direction !== Direction.Top) {
                    setDirection(Direction.Bottom);
                }
                break;
            }
        }
    }

    return {
        direction,
        setDirection,
    };
}