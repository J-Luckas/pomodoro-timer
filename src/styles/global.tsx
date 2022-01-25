import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #fafafa;
    }

    .App{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input[type="button"]{
        background-color: #cfba23;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        margin: 10px;
    }
`;
