import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --background: #b4b8c797;
        --red: #E52E4D;
        --green: #33CC95;
        --yellow: #eba417;

        --text-title: #314381;
        --text-body: #bcbec9;

        --green-input-text: #7cf3c9;

        --shape: #FFFFFF;
    }  

    html {
        @media (max-width: 1080px ) {
            font-size: 93.75%; // 15px
        
        }

        @media (max-width: 720px ) {
            font-size: 87.5%; // 14px
        }
    }

    /* REM - 1rem = font-size */

    body {
        font-family: Helvetica, Arial, sans-serif;        
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }


    button {
        cursor: pointer;
    }
    
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
