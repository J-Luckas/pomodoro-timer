import styled from 'styled-components';
interface TextDisplayProps {
    color?: string;
}

export const ContainerDisplay = styled.div`
    display: flex;
`;

export const TextDisplay = styled.h2<TextDisplayProps>`
    font-size: 3.5rem;
    font-weight: bolder;

    color: ${props => props.color ? props.color : '#000'};
`;