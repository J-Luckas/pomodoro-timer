import styled from 'styled-components';

export const TextFieldContainer = styled.input`
    width: 100%;
    text-align: center;

    height: 3rem;
    
    border-radius: 0.5rem;
    border: 1px solid var(--text-title);

    box-shadow: 0px 0px 5px 0px var(--text-title);

    background: var(--shape);
    padding: 0 1rem;
    font-size: 1.4rem;
    color: var(--text-title);
    outline: none;
    transition: background-color 0.4s, border-color 0.4s;
`;