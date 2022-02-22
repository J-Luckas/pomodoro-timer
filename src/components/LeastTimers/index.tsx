import { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { FiTrash } from 'react-icons/fi'
import { ContainerLeastTimers, ListTimers, NextTimerCard, ButtonTrash, PharRemaining } from './styles';
export function LeastTimers(){

    const { listMins, handleRemoveTimer, isPaused, totalMin } = useContext(TimerContext);

    const validatePause = ( id: number ) => {

        return isPaused 
                ? 
                    <ButtonTrash type="button" data-testid="remove-task-button" onClick={() => handleRemoveTimer(id)}>
                        <FiTrash size={16}/>
                    </ButtonTrash>  
                :
                    '';
    }

    return totalMin !== 0 ? (
        <ContainerLeastTimers>
            <PharRemaining>
                { listMins.length > 0 ? `${listMins.length - 1} restantes` : 'Sem cronômetros' }
            </PharRemaining>
            <div>
                <h3>Least Timers</h3>
               
            </div>

            <ListTimers>
                {listMins
                    .slice(1, 7)
                    .map((time, index) => (
                        <NextTimerCard key={index}>
                            <h3>{time.minutes}:{time.seconds} </h3>
                            {validatePause(time.id)}
                        </NextTimerCard>
                        
                    ))}
            </ListTimers>
        </ContainerLeastTimers>
    ) : (
        <div>            
        </div>
    );
}