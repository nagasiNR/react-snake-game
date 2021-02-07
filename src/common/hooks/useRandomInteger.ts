export const useRandomInteger = (from: number, to: number): [() => number] => {
    const min = Math.ceil(from);
    const max = Math.floor(to);

    const getRandomInteger = () => {
        return Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    };

    return [getRandomInteger];
}
