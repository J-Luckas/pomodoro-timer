import { createContext, ReactNode, useEffect } from "react";
import { useState } from 'react';

interface TimerContextData {
    totalMin: number;
    listMins: Time[];
    isPaused: boolean;
    currentMin: Time;
    setListMins: (listMins: Time[]) => void;
    setIsPaused: (isPaused: boolean) => void;
    setCurrentMin: (currentMin: Time) => void;
    handleSetTotalMin: (totalMin: number) => void;
    handleStartTimer: () => void;
    handleResetTimer: () => void;
    handleRemoveTimer: (index: number) => void;
}
interface TimerContextProps{
    children: ReactNode;
}

interface Time{
    id: number;
    minutes: number;
    seconds: number;
}

export const TimerContext = createContext({} as TimerContextData);

export function TimerProvider({children}:TimerContextProps){
    const [ currentMin, setCurrentMin ] = useState({} as Time);
    const [ totalMin, setTotalMin ] = useState<number>(0);
    const [ listMins, setListMins ] = useState<Time[]>([]);
    const [ isPaused, setIsPaused ] = useState<boolean>(true);
    const [ interv,   setInterv   ] = useState<NodeJS.Timer>();

    const handleTimerReducer = () => {
        
        const newCurrentMin = {...currentMin};
        if(newCurrentMin.seconds > 0 || newCurrentMin.minutes > 0){            
            if(newCurrentMin.seconds === 0){
                newCurrentMin.seconds = 59;
                newCurrentMin.minutes--;
            }else{
                newCurrentMin.seconds--;
            }
            setCurrentMin(newCurrentMin);
            
        }else{

            const newListMins = [...listMins];
            const currentMinAtt = newListMins[0];
            setCurrentMin( currentMinAtt );
            newListMins.shift();
            clearInterval(interv as unknown as number);
        }        
    }

    useEffect(() => {
        if(isPaused){
            clearInterval(interv as unknown as number);
        }
    }, [interv, isPaused]);

    const handleStartTimer = () => {        
        // handleTimerReducer();
        setIsPaused(false);
        const inter: NodeJS.Timer = setInterval(handleTimerReducer, 1000);        
        setInterv(inter);
    }

    const handleResetTimer = () => {
        setListMins([]);
        setCurrentMin({} as Time);
        setTotalMin(0);
        setIsPaused(true);
        clearInterval(interv as unknown as number);
    }

    const handleRemoveTimer = (id: number) => {
        const copyTimes: Time[] = listMins.filter((timer: Time) => timer.id !== id);
        setCurrentMin(copyTimes[0]);
        setListMins(copyTimes);
    }

    function handleSetTotalMin(tot: number){        
        setTotalMin(tot);
        const listTimer = [] as Time[];
        let rest = 0;
        let leftOver = tot;
        
        while ( leftOver > 0  ){
            let verificaMin = listTimer.at(-1)?.minutes === 25;
            if(verificaMin && rest === 4){
                rest = 0;                           
                listTimer.push({ id: Math.random(), minutes: ( leftOver > 15 ) ? 15 : leftOver, seconds: 0});
                leftOver = leftOver - ( leftOver > 15 ? 15 : leftOver);
            }else if( verificaMin ){
                rest++;           
                listTimer.push({ id: Math.random(), minutes: ( leftOver > 5 ) ? 5 : leftOver, seconds: 0});
                leftOver = leftOver - ( leftOver > 5 ? 5 : leftOver);
            }else if( !verificaMin || listTimer.at(-1) === undefined ){            
                listTimer.push({ id: Math.random(), minutes: ( leftOver > 25 ) ? 25 : leftOver, seconds: 0});
                leftOver = leftOver - ( leftOver > 25 ? 25 : leftOver);
            }
        }    
        const newCurrentMin = listTimer[0];
        const newListMins = listTimer.slice(1);
        setCurrentMin( newCurrentMin );
        setListMins( newListMins );
    }

    return (
        <TimerContext.Provider value={{
            totalMin,
            listMins,
            isPaused,            
            handleSetTotalMin,
            setListMins,
            setIsPaused,
            handleStartTimer,
            handleResetTimer,
            handleRemoveTimer,
            currentMin,
            setCurrentMin
        }}> 
            {children} 
        </TimerContext.Provider>
    );
}