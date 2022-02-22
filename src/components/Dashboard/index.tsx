import { Display } from "../Display";
import { FormTimer } from "../FormTimer";
import { LeastTimers } from "../LeastTimers";
import { Container } from "./styles";

export function Dashboard(){
    return (
        <Container>
            <Display />
            
            <FormTimer />            
            
            < LeastTimers />
        </Container>
    );
}