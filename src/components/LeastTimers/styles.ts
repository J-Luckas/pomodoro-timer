import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

export const ContainerLeastTimers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    width: 100%;
`;

export const ListTimers = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 20px;
    list-style: none;
    justify-content: center;

    width: 100%;
`;

const renderCards = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
    margin-top: 5rem;
  }

  to {
    opacity: 1;
    transform: translateY(0);
    margin-top: 1.5rem;
  }
`;

export const NextTimerCard = styled.li`
    margin: 1.5rem 0;

    background-color: ${darken(0.3, 'rgba(124, 243, 201, 0.5)')};
    color: var(--shape);

    animation: ${renderCards} .6s linear;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 300px;
    height: 100px;    
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 2rem;
    }
`;

export const ButtonTrash = styled.button`
    position: absolute;
    top: 0;
    margin: 5px;
    right: 0;

    background-color: transparent;
    border: none;

    color: var(--red);
`;

export const PharRemaining = styled.p`
    font-size: 1.2rem;
    margin: 0;

    position: absolute;
    top: 0;
    right: 0;
`;
    