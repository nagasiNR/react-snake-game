import { useState } from 'react';

import './App.scss';
import { Playground } from './Playground';
import { Snake, ISnake } from './Snake';
import { Food } from './Food';
import { useRandomInteger } from './common/hooks';

export const App = () => {
    const [integerGenerator] = useRandomInteger(1, 98);

    const [snakeState] = useState<ISnake>({
        segments:[
            { x: 0, y: 0 },
            { x: 2, y: 0 }
        ]
    });

    const [foodState] = useState<{x: number, y: number}>({
        x: integerGenerator(),
        y: integerGenerator(),
    });

    return (
        <Playground>
            <Snake snake={snakeState} />
            <Food position={foodState} />
        </Playground>
    );
}
