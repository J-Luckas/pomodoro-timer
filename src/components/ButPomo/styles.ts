import { transparentize } from "polished";
import styled from "styled-components";

interface ButtonsControlProps {
    activeColor: 'yellow' | 'green' | 'red';
    disabled: boolean;
}

const colors = {
    red: '#E52E4D',
    green: '#33CC95',
    yellow: '#FFCD00',
}

export const ContainerButtons = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
`;

export const ButtonsControl = styled.button<ButtonsControlProps>`
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.4s, border-color 0.4s;

    background: ${props => props.disabled ? '#E5E5E5' : transparentize(0.7, colors[props.activeColor])};
    border-color: ${ (props) => !props.disabled && transparentize(0.7, colors[props.activeColor])};
    &:hover {
        border-color: ${ (props) => !props.disabled && `var(--${props.activeColor})`};
        background: ${(props) => !props.disabled && transparentize(0.2, colors[props.activeColor]) };
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;