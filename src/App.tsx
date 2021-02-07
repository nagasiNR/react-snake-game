import { useState, useEffect } from 'react';

import { Playground } from './Playground';
import { Snake, ISnake, ISnakeSegment } from './Snake';
import { Food } from './Food';
import { 
    useRandomInteger, 
    useGamePad, 
    Direction,
    useTicker
} from './common/hooks';
import './App.scss';

export const App = () => {
    const [direction] = useGamePad(Direction.Right);
    const { ticks } = useTicker(200);
    const [integerGenerator] = useRandomInteger(1, 98);

    const [snakeState, setSnakeState] = useState<ISnake>({
        head: { x: 2, y: 0 },
        segments:[
            { x: 0, y: 0 },
            { x: 2, y: 0 }
        ]
    });

    const [foodState] = useState<{x: number, y: number}>({
        x: integerGenerator(),
        y: integerGenerator(),
    });

    const moveSnake = () => {
        let segments = [...snakeState.segments];
        let head: ISnakeSegment;

        switch(direction) {
            case Direction.Top: {
                head = { 
                    x: snakeState.head.x,
                    y: snakeState.head.y - 2
                };
                break;
            }
            case Direction.Left: {
                head = { 
                    x: snakeState.head.x - 2,
                    y: snakeState.head.y
                };
                break;
            }
            case Direction.Right: {
                head = { 
                    x: snakeState.head.x + 2,
                    y: snakeState.head.y
                };
                break;
            }
            case Direction.Bottom: {
                head = { 
                    x: snakeState.head.x,
                    y: snakeState.head.y + 2
                };
                break;
            }
        }

        // change head direction
        segments.push(head);
        // cut tail
        segments.shift();

        setSnakeState({
            head,
            segments,
        });
    }

    useEffect(() => {
        console.log('ticks changed');
        moveSnake();
    }, [ticks])
    
    return (
        <Playground>
            <Snake snake={snakeState} />
            <Food position={foodState} />
        </Playground>
    );
}
