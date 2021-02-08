import { IFood } from './interfaces';

export const generateFood = (): IFood => ({
    x: getRandomInteger(1, 98),
    y: getRandomInteger(1, 98),
});

const getRandomInteger = (from: number, to: number) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
};
