import { createContext, ReactNode, useEffect } from "react";
import { useState } from "react";

interface TimerContextData {
    totalMin: number;
    listMins: Time[];
    isPaused: boolean;
    setListMins: (listMins: Time[]) => void;
    setIsPaused: (isPaused: boolean) => void;
    handleSetTotalMin: (totalMin: number) => void;
    handleStartTimer: () => void;
    handleResetTimer: () => void;
    handleRemoveTimer: (index: number) => void;
}
interface TimerContextProps {
    children: ReactNode;
}

interface Time {
    id: number;
    minutes: number;
    seconds: number;
}

export const TimerContext = createContext({} as TimerContextData);

export function TimerProvider({ children }: TimerContextProps) {
    const [totalMin, setTotalMin] = useState<number>(0);
    const [listMins, setListMins] = useState<Time[]>([]);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [interv, setInterv] = useState<NodeJS.Timer>();
    const [delay, setDelay] = useState<number>(1000);

    const handleSetListMins = (listMins: Time[]) => {
        setListMins(listMins);
    };

    const handleSetCurrentMin = ( copyTimer: Time ) => {

        if (copyTimer.seconds === 0) {
            copyTimer.seconds = 59;
            copyTimer.minutes--;
        } else {
            copyTimer.seconds--;
        }
        const copyListTimer = [...listMins];
        copyListTimer[0] = copyTimer;
        if( copyListTimer[1] && copyTimer === copyListTimer[1] ) copyListTimer.splice(1, 1);
        handleSetListMins(copyListTimer);
    };

    const handleTimerReducer = () => {
        const newListMins = listMins;
        if (newListMins[0].minutes <= 0 && newListMins[0].seconds <= 0){
            newListMins.shift();      
        } 
        if ( newListMins.length === 0 ) {
            handleResetTimer();
            return;
        }
        handleSetCurrentMin(newListMins[0]);
    };

    useEffect(() => {
        if (isPaused) {
            clearInterval((interv as unknown) as number);
        }
    }, [interv, isPaused]);

    const handleStartTimer = () => {
        setIsPaused(false);
        const inter: NodeJS.Timer = setInterval(handleTimerReducer, delay);
        setInterv(inter);
    };

    const handleResetTimer = () => {
        setListMins([]);
        setTotalMin(0);
        setIsPaused(true);
        
        clearInterval((interv as unknown) as number);
    };

    const handleRemoveTimer = (id: number) => {
        const copyTimes: Time[] = listMins.filter((timer: Time) => timer.id !== id);
        setListMins(copyTimes);
    };

    function handleSetTotalMin(tot: number) {
        setTotalMin(tot);
        const listTimer = [] as Time[];
        let rest = 0;
        let leftOver = tot;

        while (leftOver > 0) {
        let verificaMin = listTimer.at(-1)?.minutes === 25;
        if (verificaMin && rest === 4) {
            rest = 0;
            listTimer.push({
            id: Math.random(),
            minutes: leftOver > 15 ? 15 : leftOver,
            seconds: 0
            });
            leftOver = leftOver - (leftOver > 15 ? 15 : leftOver);
        } else if (verificaMin) {
            rest++;
            listTimer.push({
            id: Math.random(),
            minutes: leftOver > 5 ? 5 : leftOver,
            seconds: 0
            });
            leftOver = leftOver - (leftOver > 5 ? 5 : leftOver);
        } else if (!verificaMin || listTimer.at(-1) === undefined) {
            listTimer.push({
            id: Math.random(),
            minutes: leftOver > 25 ? 25 : leftOver,
            seconds: 0
            });
            leftOver = leftOver - (leftOver > 25 ? 25 : leftOver);
        }
        }
        setListMins(listTimer);
    }

    return (
        <TimerContext.Provider
        value={{
            totalMin,
            listMins,
            isPaused,
            handleSetTotalMin,
            setListMins,
            setIsPaused,
            handleStartTimer,
            handleResetTimer,
            handleRemoveTimer,
        }}
        >
        {children}
        </TimerContext.Provider>
    );
}
