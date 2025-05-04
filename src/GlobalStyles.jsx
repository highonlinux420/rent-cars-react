import {createGlobalStyle} from "styled-components";
import WorkSans from "./fonts/WorkSans.ttf";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Work Sans';
        src: url(${WorkSans}) format('ttf');
    }

    * {
        font-family: 'Work Sans', sans-serif;
    }

    html, body, * {
        box-sizing: border-box;
    }

    html {
        --primary-color: #5937e0;
        --secondary-color: #FF9E0C;
        --gray-60: rgba(0, 0, 0, 0.6);
        --semi-bold: 600;
        --bold: 800;
    }

    @media (prefers-color-scheme: dark) {
        body {
            --color-background: #1f2023;
            --color-foreground: #efefef;
        }
    }

    body {
        width: clamp(59.375rem, 63.7vw + 19.6rem, 96rem);
        margin: 0 auto;
        --color-background: #fafafa;
        --color-foreground: #1f2023;
        @media (max-width: 1000px) {
            width: 95%;
        }
        @media (prefers-color-scheme: dark) {
            --color-background: #1f2023;
            --color-foreground: #efefef;
        }
    }
`;

export default GlobalStyles;
