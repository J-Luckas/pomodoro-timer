import React from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { useContext } from 'react';

export function ButPomo() {

    const { isPaused, setIsPaused, handleStartTimer, handleResetTimer } = useContext(TimerContext);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    if (isPaused) {
                        handleStartTimer();
                    } else {
                        setIsPaused(true);
                    }
                }}
            >
                {isPaused ? 'Start' : 'Pause'}
            </button>    
            {!isPaused ? <button className="btn btn-danger" onClick={() => { handleResetTimer(); }}>Reset</button> : null} 
        </>
        
        
    )
}