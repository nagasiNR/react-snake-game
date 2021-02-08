import { useState, useEffect } from 'react';

export const useTicker = (initialTickDuration: number) => {
    const [tickDuration, setTickDuration] = useState<number>(initialTickDuration);
    const [ticks, setTicks] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTicks(ticks => ticks + 1);
        }, tickDuration);

        return () => {
            clearInterval(interval)
        };
    }, [tickDuration]);

    function updateTicker(tickDuration: number) {
        setTickDuration(tickDuration)
    }

    return {
        tickDuration,
        ticks,
        updateTicker
    }
}