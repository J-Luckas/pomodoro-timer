import React from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { useContext } from 'react';

export function ButPomo() {

    const { isPaused, setIsPaused, handleStartTimer, handleResetTimer, totalMin } = useContext(TimerContext);

    return (
        <>
            <button
                className="btn btn-primary"
                disabled={ totalMin === 0 }
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
            {/* {!isPaused ? <button className="btn btn-danger" onClick={() => { handleResetTimer(); }}>Reset</button> : null}  */}
            <button className="btn btn-danger" onClick={() => { handleResetTimer(); }}>Reset</button>
        </>
        
        
    )
}