import { useState, useEffect } from 'react';

export const useTicker = (tickInterval = 100) => {
    const [ticks, setTicks] = useState<number>(0);
    // let currentInterval: number;


    useEffect(() => {
        const interval = setInterval(() => {
            setTicks(ticks => ticks + 1);
        }, tickInterval);
        return () => clearInterval(interval);
    }, [tickInterval]);

    // useEffect(() => {
    //     function setTickerInterval(interval: number) {
    //         currentInterval = window.setInterval(() => {
    //             setTicks(ticks + 1);
    //         }, interval);
    //     }

    //     setTickerInterval(tickInterval);
    // }, [tickInterval]);

    // function setTickerInterval(tickInterval: number) {
    //     currentInterval = window.setInterval(() => {
    //         setTicks(ticks + 1);
    //     }, tickInterval);
    // }

    // function updateTickerInterval(tickInterval: number) {
    //     clearInterval(currentInterval);
    //     setTickerInterval(tickInterval);
    // }

    return {
        ticks,
        // updateTickerInterval
    }
}