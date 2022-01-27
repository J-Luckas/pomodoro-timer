import React from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { useContext } from 'react';

export function ButPomo() {

    const { isPaused, setIsPaused } = useContext(TimerContext);

    const handleClick = () => {
        setIsPaused(!isPaused);
    }

    return (
        <input 
            type="button" 
            value="Enviar" 
            onClick={() => handleClick()}
        />
    )
}