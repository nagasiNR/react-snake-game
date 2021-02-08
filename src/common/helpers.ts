import { ISnake } from '../Snake';
import { IFood } from '../Food';

export const getDefaultSnake = (): ISnake => {
    const head = { x: 4, y: 0 };

    return {
        head,
        segments: [
            { x: 0, y: 0 },
            head
        ]
    }
}

export const generateFood = (): IFood => ({
    x: getRandomInteger(3, 96),
    y: getRandomInteger(3, 96),
});

const getRandomInteger = (from: number, to: number) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4;
};
