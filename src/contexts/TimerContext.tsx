import { createContext, ReactNode } from "react";
import { useState } from 'react';

interface TimerContextData {
    totalMin: number;
    listMins: Time[];
    isPaused: boolean;
    setListMins: (listMins: Time[]) => void;
    setIsPaused: (isPaused: boolean) => void;
    handleSetTotalMin: (totalMin: number) => void;
}
interface TimerContextProps{
    children: ReactNode;
}

interface Time{
    minutes: number;
    seconds: number;
}

export const TimerContext = createContext({} as TimerContextData);

export function TimerProvider({children}:TimerContextProps){
    const [ totalMin, setTotalMin ] = useState<number>(0);
    const [ listMins, setListMins ] = useState<Time[]>([]);
    const [ isPaused, setIsPaused ] = useState<boolean>(false);
    
    function handleTimerReducer(){
        if(!isPaused){
            const newListMins = [...listMins];
            const firstMin = newListMins[0];
            const newMin = {
                minutes: firstMin.minutes,
                seconds: firstMin.seconds - 1
            };
            if(newMin.seconds < 0){
                newMin.minutes--;
                newMin.seconds = 59;
            }
            newListMins[0] = newMin;
            setListMins(newListMins);
        }
    }

    function handleSetTotalMin(tot: number){
        setTotalMin(tot);
        
        let listTimer = [] as Time[];
        let rest = 0;
        let leftOver = tot;        
        while ( leftOver > 0  ){
            let verificaMin = listTimer.at(-1)?.minutes === 25;
            if(verificaMin && rest >= 4){
                rest = 0;           
                listTimer.push({ minutes: ( leftOver > 15 ) ? 15 : leftOver, seconds: 0});
                leftOver = leftOver - ( leftOver > 15 ? 15 : leftOver);
            }else if( verificaMin ){
                rest++;           
                listTimer.push({ minutes: ( leftOver > 5 ) ? 5 : leftOver, seconds: 0});
                leftOver = leftOver - ( leftOver > 5 ? 5 : leftOver);
            }else if( !verificaMin || listTimer.at(-1) === undefined ){            
                listTimer.push({minutes: ( leftOver > 25 ) ? 25 : leftOver, seconds: 0});
                leftOver = leftOver - ( leftOver > 25 ? 25 : leftOver);
            }
        }        
        setListMins(listTimer);
    }

    return (
        <TimerContext.Provider value={{
            totalMin,
            listMins,
            isPaused,            
            handleSetTotalMin,
            setListMins,
            setIsPaused
        }}> 
            {children} 
        </TimerContext.Provider>
    );
}