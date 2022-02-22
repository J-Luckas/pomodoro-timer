import React from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { useContext } from 'react';
import { ButtonsControl, ContainerButtons } from './styles';

export function ButPomo() {

    const { isPaused, setIsPaused, handleStartTimer, handleResetTimer, totalMin } = useContext(TimerContext);

    return (
        <ContainerButtons>
            <ButtonsControl
                className="btn btn-primary"
                disabled={ totalMin === 0 }
                onClick={() => {
                    if (isPaused) {
                        handleStartTimer();
                    } else {
                        setIsPaused(true);
                    }
                }}
                activeColor= {
                    isPaused ? 'green' : 'yellow'
                }
            >
                {isPaused ? 'Start' : 'Pause'}
            </ButtonsControl>                
            <ButtonsControl disabled={false} activeColor = 'red' className="btn btn-danger" onClick={() => { handleResetTimer(); }}>Reset</ButtonsControl>
        </ContainerButtons>
        
        
    )
}