import { useState, useEffect } from 'react';

import { Playground } from './Playground';
import { Snake, ISnake, ISnakeSegment } from './Snake';
import { Food, IFood } from './Food';
import { GameResults } from './GameResults';
import {
    useGamePad,
    useTicker,
    Direction,
} from './common/hooks';
import {
    getDefaultSnake,
    generateFood
} from './common/helpers';
import './App.scss';

export const App = () => {
    const { direction, setDirection } = useGamePad(Direction.Right);
    const { ticks, tickDuration, updateTicker } = useTicker(200);
    const [score, setScore] = useState(0);

    const [snake, setSnake] = useState<ISnake>(
        getDefaultSnake()
    );

    const [food, setFood] = useState<IFood>(
        generateFood()
    );

    useEffect(() => {
        moveSnake();
    }, [ticks])

    useEffect(() => {
        if (isBorderHit()) {
            return gameOver();
        }

        if (isSelfHit()) {
            return gameOver();
        }

        if (canEatFood()) {
            eatFood();
            increaseSpeed();
        }
    }, [snake])

    function moveSnake() {
        let segments = [...snake.segments];
        let head: ISnakeSegment | null = null;

        switch (direction) {
            case Direction.Top: {
                head = {
                    x: snake.head.x,
                    y: snake.head.y - 4
                };
                break;
            }
            case Direction.Left: {
                head = {
                    x: snake.head.x - 4,
                    y: snake.head.y
                };
                break;
            }
            case Direction.Right: {
                head = {
                    x: snake.head.x + 4,
                    y: snake.head.y
                };
                break;
            }
            case Direction.Bottom: {
                head = {
                    x: snake.head.x,
                    y: snake.head.y + 4
                };
                break;
            }
        }

        if (head !== null) {
            // change head direction
            segments.push(head);
            // cut tail
            segments.shift();

            setSnake({
                head,
                segments,
            });
        }
    }

    function eatFood() {
        growSnake();
        generateOneMoreFood();
        increaseScore();
    }

    function growSnake() {
        const tail = snake.segments[0];

        setSnake({
            ...snake,
            segments: [{ ...tail }, ...snake.segments]
        })
    }

    function generateOneMoreFood() {
        setFood(
            generateFood()
        )
    }

    function increaseSpeed() {
        if (tickDuration > 20) {
            updateTicker(tickDuration - 10);
        }
    }

    function increaseScore() {
        setScore(score + 1);
    }

    function canEatFood() {
        const { head } = snake;

        return head.x === food.x && head.y === food.y;
    }

    function isBorderHit() {
        const { head } = snake;

        if (head.x >= 100 || head.x < 0 || head.y >= 100 || head.y < 0) {
            return true;
        } else {
            return false;
        }
    }

    function isSelfHit() {
        const { head, segments } = snake;

        return segments.some(segment => {
            if (segment !== head) {
                return segment.x === head.x && segment.y === head.y
            } else {
                return false;
            }
        });
    }

    function gameOver() {
        alert(`GAME OVER! Your score ${score}`);
        resetGame();
    }

    function resetGame() {
        setDirection(Direction.Right);
        updateTicker(200);
        setScore(0);
        generateOneMoreFood();
        setSnake(getDefaultSnake());
    }

    return (
        <div className="game-wrapper">
            <GameResults score={score} />
            <Playground>
                <Snake snake={snake} />
                <Food food={food} />
            </Playground>
        </div>
    );
}
